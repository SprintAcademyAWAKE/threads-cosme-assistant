# -*- coding: utf-8 -*-
import json
from typing import Dict, Any, Optional

def generate_posts_with_gemini(
    api_key: str,
    product_info: Dict[str, Any],
    style: str,
    account_prompt: str = "",
    custom_prompt: Optional[str] = "",
    genre: str = "cosme_20s"
) -> Dict[str, str]:
    from google import genai
    from google.genai import types

    client = genai.Client(api_key=api_key)

    title = product_info.get("title", "")
    features = product_info.get("features", [])
    affiliate_url = product_info.get("affiliate_url", "")
    features_str = "\n".join([f"- {f}" for f in features]) if features else "- 特になし"

    age_tone_guide = {
        "cosme_20s": "20代向け。垢抜け、トレンド、神コスパ、バズコスメ。親しみやすく熱量のあるトーン。",
        "cosme_30s": "30代向け。毛穴・くすみ改善、オフィスメイク。納得感と実体験を重視した落ち着いたトーン。",
        "cosme_40s": "40代向け。シワ・ハリ不足・乾燥小じわ、大人のツヤ肌。丁寧で説得力のあるトーン。",
        "cosme_kosodate": "子育てママ向け。朝1分時短メイク、石鹸オフ、ノーファンデ美肌。温かい共感トーン。"
    }.get(genre, "コスメ愛用者目線で熱量高くレビュー")

    system_instruction = f"""
あなたはSNSで大人気の美容インフルエンサーです。
コスメの魅力を熱量高く、本当に愛用している一個人としてリアルな本音レビューを作成します。

【ターゲット・世代設定】
{age_tone_guide}

【アカウント設定】
{account_prompt if account_prompt else "コスメ愛用者目線で本音レビューしてください。"}

【追加指示】
{custom_prompt if custom_prompt else "特になし"}

【文字数と構成の厳格なルール】
1. 文字数制限（超重要）：
   - Threads投稿は「URLとハッシュタグを含めて【全体で350〜400文字厳守】（最大430文字）」としてください。Threadsの500文字制限を絶対に超えないこと！
2. 具体的なベネフィットを箇条書きで2〜3行：
   - 「なぜ良いのか」「使うとどうなるか（生活や気分の変化）」を簡潔に書く。
3. 機械的表現の完全排除：
   - 「現在 Amazonで確認」「価格：〇〇」などの事務的表現は一切禁止。
4. ハッシュタグ：
   - #PRを含めて【5〜6個のみ】厳選して末尾に配置。

【出力JSONフォーマット】
{{
  "x_post": "X用の投稿文（130文字前後）",
  "threads_post": "Threads用の投稿文（URL・タグ込みで350〜400文字厳守）"
}}
"""

    prompt = f"""
【商品情報】
商品名: {title}
特徴: {features_str}
アフィリエイトURL: {affiliate_url}
スタイル: {style}
※URLを含めて全体で380文字前後にコンパクトにまとめてください。
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            system_instruction=system_instruction,
            temperature=0.7,
            response_mime_type="application/json"
        )
    )

    try:
        data = json.loads(response.text)
        return {
            "x_post": data.get("x_post", "").strip(),
            "threads_post": data.get("threads_post", "").strip()
        }
    except Exception:
        return generate_fallback_posts(product_info, style, account_prompt, custom_prompt, genre)

def generate_fallback_posts(
    product_info: Dict[str, Any],
    style: str,
    account_prompt: str = "",
    custom_prompt: Optional[str] = "",
    genre: str = "cosme_20s"
) -> Dict[str, str]:
    title = product_info.get("title", "")
    url = product_info.get("affiliate_url", "")

    # Clean short title if very long
    display_title = title.split("【")[0].split(" (")[0].strip() if len(title) > 35 else title

    if genre == "cosme_20s":
        x_post = f"""これ使ってから『垢抜けたね！』って褒められた神コスメ💄✨

『{display_title}』
プチプラなのに仕上がりはデパコス級。
透け感と血色が絶妙でメイクに自信がついたお守りアイテム！

{url}
#PR #垢抜けメイク #プチプラコスメ #韓国コスメ #バズコスメ"""

        threads_post = f"""【20代垢抜け】『垢抜けたね！』って褒められるようになった本気のリピ買いコスメ💄✨

『{display_title}』

学生さんや20代OLさんに全力で推したい！
プチプラなのに仕上がりが本当に上品で、毎朝メイクするたびに気分が上がります。

💡ここが本当に良かった（リアルな実感）：
・肌馴染み抜群で、テクいらずでトレンド顔になれる
・朝塗ってから夜までツヤが続いてメイク直し激減
・友達から『それどこの？』って聞かれる回数UP！

一度使うと手放せなくなる名品です👇

{url}

#PR #垢抜けメイク #プチプラコスメ #韓国コスメ #バズコスメ #ベストコスメ"""

    elif genre == "cosme_30s":
        x_post = f"""夕方のどんよりくすみが消えた…！30代の肌を救ってくれた実力派✨

『{display_title}』
オフィスで鏡を見ても肌が疲れて見えないのが本当に嬉しい。自然な透明感が一日中続く！

{url}
#PR #30代コスメ #毛穴ケア #くすみケア #オフィスメイク"""

        threads_post = f"""【30代リアル愛用】夕方の毛穴落ち・くすみ・疲れ顔から救ってくれた名品コスメ✨

『{display_title}』

お肌の曲がり角を感じ始めた30代にこそ使ってほしい実力派！自然なツヤと透明感を仕込めるので毎日のオフィスメイクに欠かせません。

💡実感している具体的なベネフィット：
・毛穴や乾燥を光で飛ばしてキメが整って見える
・夕方になっても『疲れて見えない清潔感』が続く
・肌への負担感が少なくて毎日安心して使える

大人の肌に寄り添う逸品です👇

{url}

#PR #30代コスメ #毛穴ケア #くすみケア #オフィスメイク #大人の美肌"""

    elif genre == "cosme_40s":
        x_post = f"""お肌にハリとツヤが戻って感動…！40代からの大人の肌を格上げする極上名品🌸

『{display_title}』
乾燥小じわが気にならなくなって毎朝鏡を見るのが楽しみに。厚塗り感ゼロの品格ツヤ肌！

{url}
#PR #40代コスメ #エイジングケア #ツヤ肌 #乾燥小じわ"""

        threads_post = f"""【40代品格美容】『ハリ不足』と『乾燥小じわ』を本気で底上げしてくれた愛用品🌸✨

『{display_title}』

色々試してきた大人世代にこそ実感していただきたい名品。厚塗りで隠すのではなく、お肌そのものが潤いで満たされるようなツヤを与えてくれます。

💡実際に感じたベネフィット：
・パンッと押し返すようなハリ感で表情が若々しく明るく
・夕方になっても目元口元のシワっぽさが目立たない
・『お肌ツヤツヤだね』と同年代の友人から褒められた

大人の肌に自信をくれる名品です👇

{url}

#PR #40代コスメ #エイジングケア #ツヤ肌 #ハリ肌 #大人美容"""

    else:  # cosme_kosodate
        x_post = f"""朝1分で顔が完成する救世主！忙しい子育てママの神時短コスメ👶🍼

『{display_title}』
パパッと塗るだけで手抜き感ゼロのすっぴん美肌。石鹸オフできて子どもがすり寄ってきても安心！

{url}
#PR #時短コスメ #時短メイク #ママコスメ #子育てママ"""

        threads_post = f"""【子育てママ必見】毎朝1分で『ちゃんとキレイなママ』になれた神時短コスメ👶✨

『{display_title}』

朝のバタバタで鏡を見る暇すらないママへ！
手抜きに見えないのに、驚くほどスピーディーに美肌が整うリアル愛用アイテムです。

💡ママに嬉しい具体的なベネフィット：
・サッと塗るだけで寝不足のくすみ肌もパッと明るく
・公園遊びでも安心＆夜は子どもと一緒に石鹸オフ
・子どもに顔をスリスリされても優しい使い心地

忙しいママの毎日が楽になりますよ👇

{url}

#PR #時短コスメ #時短メイク #ママメイク #1分メイク #買ってよかった"""

    return {
        "x_post": x_post.strip(),
        "threads_post": threads_post.strip()
    }
