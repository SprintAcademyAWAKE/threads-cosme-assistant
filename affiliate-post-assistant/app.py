# -*- coding: utf-8 -*-
import os
import json
import re
from pathlib import Path
from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import List, Optional

from amazon_parser import parse_amazon_url
from ai_generator import generate_posts_with_gemini, generate_fallback_posts

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
CONFIG_FILE = DATA_DIR / "config.json"
HISTORY_FILE = DATA_DIR / "history.json"
SCHEDULE_FILE = DATA_DIR / "schedule.json"

DATA_DIR.mkdir(parents=True, exist_ok=True)

DEFAULT_GENRES = [
    {"id": "cosme_20s", "name": "\U0001f484 20\u4ee3\u30b3\u30b9\u30e1\u30fb\u5784\u629c\u3051\uff06\u30c8\u30ec\u30f3\u30c9", "desc": "\u5784\u629c\u3051\u30e1\u30a4\u30af\u3001\u30d7\u30c1\u30d7\u30e9\u3001\u30d0\u30ba\u30b3\u30b9\u30e1\u3001\u97d3\u56fd\u30b3\u30b9\u30e1\u3001\u5b66\u751f\u30fb20\u4ee3OL\u5411\u3051"},
    {"id": "cosme_30s", "name": "\u2728 30\u4ee3\u30b3\u30b9\u30e1\u30fb\u6bdb\u7a74\u304f\u305a\u307f\uff06\u4e0a\u54c1\u30e1\u30a4\u30af", "desc": "\u304a\u808c\u306e\u66f2\u304c\u308a\u89d2\u3001\u304f\u305a\u307f\u30fb\u4e7e\u71e5\u30fb\u6bdb\u7a74\u30b1\u30a2\u3001\u4e0a\u54c1\u30aa\u30d5\u30a3\u30b9\u30e1\u30a4\u30af\u3001\u30c7\u30d1\u30b3\u30b9\u540d\u54c1"},
    {"id": "cosme_40s", "name": "\U0001f338 40\u4ee3\u30b3\u30b9\u30e1\u30fb\u30a8\u30a4\u30b8\u30f3\u30b0\u30b1\u30a2\uff06\u30c4\u30e4\u808c", "desc": "\u30cf\u30ea\u4e0d\u8db3\u3001\u30b7\u30ef\u30fb\u305f\u308b\u307f\u30fb\u4e7e\u71e5\u5c0f\u3058\u308f\u3001\u30ec\u30c1\u30ce\u30fc\u30eb\u3001\u5927\u4eba\u30c4\u30e4\u808c\u30d9\u30fc\u30b9"},
    {"id": "cosme_kosodate", "name": "\U0001f476 \u5b50\u80b2\u3066\u30de\u30de\u30fb1\u5206\u6642\u77ed\u7f8e\u5bb9\uff06\u3059\u3063\u3074\u3093\u7f8e\u808c", "desc": "\u671d1\u5206\u6642\u77ed\u30e1\u30a4\u30af\u3001\u77f3\u9e7f\u30aa\u30d5UV\u3001\u30aa\u30fc\u30eb\u30a4\u30f3\u30ef\u30f3\u3001\u5b50\u4f9b\u306b\u5b89\u5fc3\u306a\u4f4e\u5237\u6fc0\u30b1\u30a2"}
]

DEFAULT_ACCOUNTS = [
    {"id": "acc-20s", "name": "\U0001f484 \u307f\u3086 | 20\u4ee3\u5784\u629c\u3051\u30d7\u30c1\u30d7\u30e9\u30b3\u30b9\u30e1", "internal_name": "cyunekazu+cosme20@gmail.com", "genre": "cosme_20s", "x_handle": "cosme_20s_trend", "threads_handle": "cosme_20s_trend", "tag": "papasprint-22", "prompt": "\u3042\u306a\u305f\u306f\u300c\u307f\u3086\u300d\u3068\u3057\u3066\u6d3b\u52d5\u3059\u308b20\u4ee3\u7f8e\u5bb9\u30aa\u30bf\u30af\u3067\u3059\u3002\u5b66\u751f\u3084\u305720\u4ee3OL\u306b\u5411\u3051\u3066\u3001\u5784\u629c\u3051\u30e1\u30a4\u30af\u3084\u30d0\u30ba\u30b3\u30b9\u30e1\u3001\u795e\u30b3\u30b9\u30d1\u306a\u30d7\u30c1\u30d7\u30e9\uff06\u97d3\u56fd\u30b3\u30b9\u30e1\u3092\u5fb9\u5e95\u30ec\u30d3\u30e5\u30fc\u3057\u307e\u3059\u3002", "default_style": "review"},
    {"id": "acc-30s", "name": "\u2728 \u3042\u3084\u304b | 30\u4ee3\u306e\u6bdb\u7a74\u30fb\u304f\u305a\u307f\u30b1\u30a2", "internal_name": "cyunekazu+cosme30@gmail.com", "genre": "cosme_30s", "x_handle": "cosme_30s_beauty", "threads_handle": "cosme_30s_beauty", "tag": "papasprint-22", "prompt": "\u3042\u306a\u305f\u306f\u300c\u3042\u3084\u304b\u300d\u3068\u3057\u3066\u6d3b\u52d5\u3059\u308b\u50cd\u304f30\u4ee3\u5973\u5b50\u3067\u3059\u3002\u6bdb\u7a74\u30fb\u304f\u305a\u307f\u30fb\u4e7e\u71e5\u30fb\u808c\u306e\u3086\u3089\u304e\u304c\u6c17\u306b\u306a\u308a\u59cb\u3081\u305f\u8aad\u8005\u306b\u5411\u3051\u3066\u3001\u5b9f\u529b\u6d3e\u30b3\u30b9\u30e1\u3084\u6210\u5206\u30b9\u30ad\u30f3\u30b1\u30a2\u3092\u767a\u4fe1\u3057\u307e\u3059\u3002", "default_style": "review"},
    {"id": "acc-40s", "name": "\U0001f338 \u3055\u304f\u3089 | 40\u4ee3\u306e\u30c4\u30e4\u808c\u30a8\u30a4\u30b8\u30f3\u30b0", "internal_name": "cyunekazu+cosme40@gmail.com", "genre": "cosme_40s", "x_handle": "cosme_40s_agingcare", "threads_handle": "cosme_40s_agingcare", "tag": "papasprint-22", "prompt": "\u3042\u306a\u305f\u306f\u300c\u3055\u304f\u3089\u300d\u3068\u3057\u3066\u6d3b\u52d5\u3059\u308b40\u4ee3\u306e\u30a8\u30a4\u30b8\u30f3\u30b0\u30b1\u30a2\u5c02\u9580\u5bb6\u3067\u3059\u3002\u30cf\u30ea\u4e0d\u8db3\u30fb\u76ee\u5143\u53e3\u5143\u306e\u4e7e\u71e5\u5c0f\u3058\u308f\u30fb\u30b7\u30df\u305f\u308b\u307f\u306b\u672c\u6c17\u3067\u5411\u304d\u5408\u3044\u3001\u5c40\u54c1\u3092\u53b3\u9078\u30ec\u30d3\u30e5\u30fc\u3057\u307e\u3059\u3002", "default_style": "review"},
    {"id": "acc-kosodate", "name": "\U0001f476 \u3086\u3044 | \u5b50\u80b2\u3066\u30de\u30de\u306e1\u5206\u6642\u77ed\u30b3\u30b9\u30e1", "internal_name": "cyunekazu+mama@gmail.com", "genre": "cosme_kosodate", "x_handle": "cosme_kosodate_mama", "threads_handle": "cosme_kosodate_mama", "tag": "papasprint-22", "prompt": "\u3042\u306a\u305f\u306f\u300c\u3086\u3044\u300d\u3068\u3057\u3066\u6d3b\u52d5\u3059\u308b\u5b50\u80b2\u3066\u4e2d\u306e\u30de\u30de\u3067\u3059\u3002\u671d1\u5206\u3067\u5b8c\u4e86\u3059\u308b\u30aa\u30fc\u30eb\u30a4\u30f3\u30ef\u30f3\u3084\u77f3\u9e7f\u30aa\u30d5UV\u3001\u5b50\u3069\u3082\u306b\u89e6\u308c\u3066\u3082\u5b89\u5fc3\u306a\u4f4e\u5237\u6fc0\u30b9\u30ad\u30f3\u30b1\u30a2\u3092\u672c\u97f3\u30ec\u30d3\u30e5\u30fc\u3057\u307e\u3059\u3002", "default_style": "review"}
]

DEFAULT_CONFIG = {"gemini_api_key": "", "genres": DEFAULT_GENRES, "accounts": DEFAULT_ACCOUNTS}

def load_json_file(file_path: Path, default_val):
    if not file_path.exists():
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(default_val, f, ensure_ascii=False, indent=2)
        return default_val
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default_val

def save_json_file(file_path: Path, data):
    try:
        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Warning: could not save {file_path}: {e}")

from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Amazon SNS Affiliate Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

class GenreModel(BaseModel):
    id: str
    name: str
    desc: Optional[str] = ""

class AccountModel(BaseModel):
    id: str
    name: str
    internal_name: Optional[str] = ""
    genre: Optional[str] = "cosme_20s"
    x_handle: Optional[str] = ""
    threads_handle: Optional[str] = ""
    tag: str
    prompt: str
    default_style: Optional[str] = "review"

class ConfigModel(BaseModel):
    gemini_api_key: Optional[str] = ""
    genres: Optional[List[GenreModel]] = []
    accounts: List[AccountModel]

class FetchProductRequest(BaseModel):
    url: str
    account_id: str

class GenerateRequest(BaseModel):
    product: dict
    style: str
    custom_prompt: Optional[str] = ""
    account_id: str

class ScheduleItem(BaseModel):
    account_id: str
    product_memo: str
    scheduled_date: str
    memo: Optional[str] = ""

class SchedulePatchRequest(BaseModel):
    done: bool

@app.get("/")
def read_root():
    return FileResponse(str(BASE_DIR / "templates" / "index.html"))

@app.get("/api/config")
def get_config():
    return load_json_file(CONFIG_FILE, DEFAULT_CONFIG)

@app.post("/api/config")
def update_config(cfg: ConfigModel):
    save_json_file(CONFIG_FILE, cfg.dict())
    return {"status": "ok", "message": "Config saved successfully"}

@app.post("/api/fetch-product")
async def fetch_product(req: FetchProductRequest):
    cfg = load_json_file(CONFIG_FILE, DEFAULT_CONFIG)
    account = next((a for a in cfg.get("accounts", []) if a["id"] == req.account_id), None)
    tag = account["tag"] if account else "papasprint-22"
    result = parse_amazon_url(req.url, associate_tag=tag)
    if not result:
        keyword = req.url.strip()
        import urllib.parse
        encoded_kw = urllib.parse.quote(keyword)
        return {
            "asin": "KEYWORD", "title": keyword, "price": "Amazon\u3067\u78ba\u8a8d",
            "image_url": "", "features": [f"\u300c{keyword}\u300d\u306e\u4eba\u6c17\u30b3\u30b9\u30e1", "Amazon\u3067\u304a\u5f97\u306a\u4fa1\u683c\u3068\u53e3\u30b3\u30df\u3092\u30c1\u30a7\u30c3\u30af"],
            "affiliate_url": f"https://www.amazon.co.jp/s?k={encoded_kw}&tag={tag}", "is_keyword": True
        }
    return result

@app.post("/api/generate")
async def generate_post(req: GenerateRequest):
    cfg = load_json_file(CONFIG_FILE, DEFAULT_CONFIG)
    api_key = cfg.get("gemini_api_key", "").strip() or os.environ.get("GEMINI_API_KEY", "").strip()
    account = next((a for a in cfg.get("accounts", []) if a["id"] == req.account_id), None)
    account_prompt = account["prompt"] if account else ""
    account_genre = account.get("genre", "cosme_20s") if account else "cosme_20s"
    account_name = account["name"] if account else "20\u4ee3\u30b3\u30b9\u30e1"
    account_tag = account["tag"] if account else "papasprint-22"

    if api_key:
        try:
            posts = generate_posts_with_gemini(api_key=api_key, product_info=req.product, style=req.style, account_prompt=account_prompt, custom_prompt=req.custom_prompt, genre=account_genre)
        except Exception:
            posts = generate_fallback_posts(product_info=req.product, style=req.style, account_prompt=account_prompt, custom_prompt=req.custom_prompt, genre=account_genre)
    else:
        posts = generate_fallback_posts(product_info=req.product, style=req.style, account_prompt=account_prompt, custom_prompt=req.custom_prompt, genre=account_genre)

    import datetime
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    history_item = {
        "id": f"hist_{int(datetime.datetime.now().timestamp()*1000)}",
        "timestamp": now_str,
        "account_name": account_name,
        "account_id": req.account_id,
        "product_title": req.product.get("title", ""),
        "product_asin": req.product.get("asin", ""),
        "product_price": req.product.get("price", ""),
        "product_image": req.product.get("image_url", ""),
        "affiliate_url": req.product.get("affiliate_url", ""),
        "x_post": posts["x_post"],
        "threads_post": posts["threads_post"],
        "style": req.style,
        "posted": False
    }
    history = load_json_file(HISTORY_FILE, [])
    history.insert(0, history_item)
    save_json_file(HISTORY_FILE, history[:50])
    return posts

@app.get("/api/history")
def get_history():
    return load_json_file(HISTORY_FILE, [])

@app.patch("/api/history/{item_id}/posted")
def toggle_posted(item_id: str, req: SchedulePatchRequest):
    history = load_json_file(HISTORY_FILE, [])
    found = False
    for item in history:
        if item.get("id") == item_id:
            item["posted"] = req.done
            found = True
            break
    if not found:
        raise HTTPException(status_code=404, detail="History item not found")
    save_json_file(HISTORY_FILE, history)
    return {"status": "ok", "id": item_id, "posted": req.done}

@app.get("/api/schedule")
def get_schedule():
    return load_json_file(SCHEDULE_FILE, [])

@app.post("/api/schedule")
async def add_schedule(req: ScheduleItem):
    import datetime
    schedule = load_json_file(SCHEDULE_FILE, [])
    item = {
        "id": f"sch_{int(datetime.datetime.now().timestamp()*1000)}",
        "account_id": req.account_id,
        "product_memo": req.product_memo,
        "scheduled_date": req.scheduled_date,
        "memo": req.memo or "",
        "done": False,
        "created_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    }
    schedule.append(item)
    schedule.sort(key=lambda x: x.get("scheduled_date", ""))
    save_json_file(SCHEDULE_FILE, schedule)
    return item

@app.patch("/api/schedule/{item_id}")
def update_schedule(item_id: str, req: SchedulePatchRequest):
    schedule = load_json_file(SCHEDULE_FILE, [])
    found = False
    for item in schedule:
        if item.get("id") == item_id:
            item["done"] = req.done
            found = True
            break
    if not found:
        raise HTTPException(status_code=404, detail="Schedule item not found")
    save_json_file(SCHEDULE_FILE, schedule)
    return {"status": "ok"}

@app.delete("/api/schedule/{item_id}")
def delete_schedule(item_id: str):
    schedule = load_json_file(SCHEDULE_FILE, [])
    schedule = [s for s in schedule if s.get("id") != item_id]
    save_json_file(SCHEDULE_FILE, schedule)
    return {"status": "ok"}


SALES_DATA_FILE = DATA_DIR / "sales_data.json"

import csv
import io

def parse_amazon_sales_csv(content_bytes: bytes) -> dict:
    """Parse Amazon Associates Earnings/Ordered Items CSV (handles UTF-8, Shift_JIS, CP932)."""
    text = None
    for enc in ["utf-8-sig", "utf-8", "cp932", "shift_jis"]:
        try:
            text = content_bytes.decode(enc)
            break
        except Exception:
            continue
    if not text:
        text = content_bytes.decode("latin1", errors="ignore")

    lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not lines:
        return {"items": [], "summary": {"total_earnings": 0, "total_items": 0, "total_products": 0}}

    # Find the header row (look for keywords like ASIN, アイテム名, 商品名, 紹介料, Earnings)
    header_idx = -1
    for idx, line in enumerate(lines[:15]):
        line_lower = line.lower()
        if any(k in line_lower for k in ["asin", "アイテム名", "商品名", "item name", "紹介料", "earnings", "発送済み", "注文"]):
            header_idx = idx
            break

    if header_idx == -1:
        header_idx = 0

    reader = csv.reader(io.StringIO("\n".join(lines[header_idx:])))
    try:
        headers = next(reader)
    except StopIteration:
        return {"items": [], "summary": {"total_earnings": 0, "total_items": 0, "total_products": 0}}

    # Normalize headers
    headers = [h.strip() for h in headers]
    
    # Map columns
    title_col = -1
    asin_col = -1
    category_col = -1
    qty_col = -1
    earnings_col = -1

    for i, h in enumerate(headers):
        hl = h.lower()
        if title_col == -1 and any(k in hl for k in ["アイテム名", "商品名", "item name", "title"]):
            title_col = i
        elif asin_col == -1 and "asin" in hl:
            asin_col = i
        elif category_col == -1 and any(k in hl for k in ["カテゴリ", "category"]):
            category_col = i
        elif qty_col == -1 and any(k in hl for k in ["発送済み商品数", "注文商品数", "数量", "shipped items", "items", "qty", "注文数"]):
            qty_col = i
        elif earnings_col == -1 and any(k in hl for k in ["紹介料合計", "紹介料", "earnings", "収益", "commission"]):
            earnings_col = i

    items = []
    total_earnings = 0.0
    total_qty = 0

    for row in reader:
        if not row or len(row) <= max(0, title_col, asin_col):
            continue
        title = row[title_col].strip() if title_col != -1 and len(row) > title_col else ""
        asin = row[asin_col].strip() if asin_col != -1 and len(row) > asin_col else ""
        category = row[category_col].strip() if category_col != -1 and len(row) > category_col else "コスメ"

        if not title or title.lower() in ["total", "合計", "小計", "sum"]:
            continue

        # Parse quantity
        qty_str = row[qty_col].strip() if qty_col != -1 and len(row) > qty_col else "1"
        qty_clean = re.sub(r"[^\d]", "", qty_str)
        qty = int(qty_clean) if qty_clean else 1

        # Parse earnings
        earn_str = row[earnings_col].strip() if earnings_col != -1 and len(row) > earnings_col else "0"
        earn_clean = re.sub(r"[^\d\.]", "", earn_str.replace("￥", "").replace(",", ""))
        earnings = float(earn_clean) if earn_clean else 0.0

        total_earnings += earnings
        total_qty += qty

        items.append({
            "title": title,
            "asin": asin,
            "category": category,
            "qty": qty,
            "earnings": earnings
        })

    # Sort by quantity and earnings
    items.sort(key=lambda x: (x["qty"], x["earnings"]), reverse=True)

    summary = {
        "total_earnings": round(total_earnings, 2),
        "total_items": total_qty,
        "total_products": len(items)
    }

    result = {"items": items, "summary": summary}
    save_json_file(SALES_DATA_FILE, result)
    return result

@app.post("/api/upload-sales-csv")
async def upload_sales_csv(request: Request):
    content = await request.body()
    data = parse_amazon_sales_csv(content)
    return data

@app.get("/api/sales-analytics")
def get_sales_analytics():
    return load_json_file(SALES_DATA_FILE, {
        "items": [],
        "summary": {"total_earnings": 0, "total_items": 0, "total_products": 0}
    })
