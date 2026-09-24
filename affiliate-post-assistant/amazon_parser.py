import re
import urllib.parse
from typing import Optional, Dict, Any
import httpx
from bs4 import BeautifulSoup

def extract_asin(url_or_text: str) -> Optional[str]:
    if not url_or_text:
        return None
    asin_direct_match = re.search(r'^[B0-9][A-Z0-9]{9}$', url_or_text.strip(), re.IGNORECASE)
    if asin_direct_match:
        return asin_direct_match.group(0).upper()
    patterns = [
        r'/dp/([B0-9][A-Z0-9]{9})',
        r'/gp/product/([B0-9][A-Z0-9]{9})',
        r'/d/([B0-9][A-Z0-9]{9})',
        r'/gp/aw/d/([B0-9][A-Z0-9]{9})',
        r'/product/([B0-9][A-Z0-9]{9})',
        r'ASIN=([B0-9][A-Z0-9]{9})',
    ]
    for pattern in patterns:
        match = re.search(pattern, url_or_text, re.IGNORECASE)
        if match:
            return match.group(1).upper()
    return None

def build_affiliate_url(asin: str, associate_tag: str) -> str:
    clean_tag = associate_tag.strip() if associate_tag else 'papasprint-22'
    return f'https://www.amazon.co.jp/dp/{asin}?tag={clean_tag}'

def parse_amazon_url(url_or_text: str, associate_tag: str = 'papasprint-22') -> Optional[Dict[str, Any]]:
    clean_text = (url_or_text or '').strip()
    if not clean_text:
        return None
    tag = associate_tag.strip() if associate_tag else 'papasprint-22'
    asin = extract_asin(clean_text)
    if not asin and not clean_text.startswith('http'):
        return None
    target_url = f'https://www.amazon.co.jp/dp/{asin}' if asin else clean_text
    affiliate_url = build_affiliate_url(asin, tag) if asin else (clean_text + (f'&tag={tag}' if '?' in clean_text else f'?tag={tag}'))

    result = {
        'asin': asin or '',
        'title': '',
        'price': '',
        'image_url': '',
        'original_url': clean_text,
        'affiliate_url': affiliate_url,
        'features': [],
        'success': False,
        'error_message': '',
    }

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Accept-Language': 'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7',
        }
        with httpx.Client(headers=headers, follow_redirects=True, timeout=6.0) as client:
            resp = client.get(target_url)
            if resp.status_code == 200:
                soup = BeautifulSoup(resp.text, 'html.parser')
                title_tag = soup.find(id='productTitle')
                if title_tag:
                    result['title'] = title_tag.get_text(strip=True)
                else:
                    og_title = soup.find('meta', property='og:title')
                    if og_title and og_title.get('content'):
                        result['title'] = og_title['content'].strip()

                price_tag = soup.select_one('.a-price .a-offscreen') or soup.find(id='priceblock_ourprice') or soup.find(id='priceblock_dealprice')
                if price_tag:
                    result['price'] = price_tag.get_text(strip=True)
                else:
                    price_whole = soup.select_one('.a-price-whole')
                    if price_whole:
                        result['price'] = '¥' + price_whole.get_text(strip=True)

                img_tag = soup.find(id='landingImage') or soup.select_one('#imgTagWrapperId img')
                if img_tag:
                    result['image_url'] = img_tag.get('src') or img_tag.get('data-old-hires') or ''
                else:
                    og_img = soup.find('meta', property='og:image')
                    if og_img and og_img.get('content'):
                        result['image_url'] = og_img['content'].strip()

                feature_bullets = soup.select('#feature-bullets ul li span.a-list-item')
                features = [fb.get_text(strip=True) for fb in feature_bullets if fb.get_text(strip=True)]
                result['features'] = features[:5]
                result['success'] = True
    except Exception as e:
        result['error_message'] = str(e)

    if not result['title'] and asin:
        result['title'] = f'Amazon注目コスメ商品 (ASIN: {asin})'
        result['success'] = True

    return result if result['success'] or result['title'] else None

fetch_amazon_product_info = parse_amazon_url
