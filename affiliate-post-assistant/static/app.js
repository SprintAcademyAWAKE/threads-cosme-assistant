
// ── 🚀 完全クライアント完結型（Vercel・スマホ・オフライン 100%保証） ───────────

// クライアント側 Amazon URL / ASIN パーサー
function parseAmazonUrlClient(urlOrText, tag = 'papasprint-22') {
    const text = (urlOrText || '').trim();
    if (!text) return null;

    // ASIN抽出正規表現
    const asinDirect = text.match(/^[B0-9][A-Z0-9]{9}$/i);
    let asin = asinDirect ? asinDirect[0].toUpperCase() : null;

    if (!asin) {
        const patterns = [
            /\/dp\/([B0-9][A-Z0-9]{9})/i,
            /\/gp\/product\/([B0-9][A-Z0-9]{9})/i,
            /\/d\/([B0-9][A-Z0-9]{9})/i,
            /\/product\/([B0-9][A-Z0-9]{9})/i,
            /ASIN=([B0-9][A-Z0-9]{9})/i
        ];
        for (const p of patterns) {
            const m = text.match(p);
            if (m) { asin = m[1].toUpperCase(); break; }
        }
    }

    if (asin) {
        return {
            asin: asin,
            title: text.startsWith('http') ? `Amazonコスメ [ASIN: ${asin}]` : text,
            price: 'Amazonで確認',
            image_url: '',
            features: ['口コミ高評価の人気おすすめコスメ', 'Amazonでお得にチェック'],
            affiliate_url: `https://www.amazon.co.jp/dp/${asin}?tag=${tag}`,
            is_keyword: false
        };
    }

    // キーワード検索の場合
    return {
        asin: 'KEYWORD',
        title: text,
        price: 'Amazonで確認',
        image_url: '',
        features: [`「${text}」の人気おすすめコスメ`, '口コミ高評価アイテム'],
        affiliate_url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(text)}&tag=${tag}`,
        is_keyword: true
    };
}

// クライアント側 投稿文生成エンジン（みゆ・あやか・さくら・ゆい特化）
function generatePostsClient(product, style, customPrompt, accountId) {
    const acc = state.accounts.find(a => a.id === accountId) || getCurrentAccount();
    const genreId = acc.genre || 'cosme_20s';
    const title = (product.title || '').trim();
    const url = product.affiliate_url || `https://www.amazon.co.jp/?tag=${acc.tag || 'papasprint-22'}`;
    const displayTitle = title.split('【')[0].split(' (')[0].trim();

    let threadsPost = '';
    let xPost = '';

    if (genreId === 'cosme_20s') {
        xPost = `これ使ってから『垢抜けたね！』って褒められた神コスメ💄✨\n\n『${displayTitle}』\nプチプラなのに仕上がりはデパコス級。\n透け感と血色が絶妙でメイクに自信がついたお守りアイテム！\n\n${url}\n#PR #垢抜けメイク #プチプラコスメ #韓国コスメ #バズコスメ`;
        threadsPost = `【20代垢抜け】『垢抜けたね！』って褒められるようになった本気のリピ買いコスメ💄✨\n\n『${displayTitle}』\n\n学生さんや20代OLさんに全力で推したい！\nプチプラなのに仕上がりが本当に上品で、毎朝メイクするたびに気分が上がります。\n\n💡ここが本当に良かった（リアルな実感）：\n・肌馴染み抜群で、テクいらずでトレンド顔になれる\n・朝塗ってから夜までツヤが続いてメイク直し激減\n・友達から『それどこの？』って聞かれる回数UP！\n\n一度使うと手放せなくなる名品です👇\n\n${url}\n\n#PR #垢抜けメイク #プチプラコスメ #韓国コスメ #バズコスメ #ベストコスメ`;

    } else if (genreId === 'cosme_30s') {
        xPost = `夕方のどんよりくすみが消えた…！30代の肌を救ってくれた実力派✨\n\n『${displayTitle}』\nオフィスで鏡を見ても肌が疲れて見えないのが本当に嬉しい。自然な透明感が一日中続く！\n\n${url}\n#PR #30代コスメ #毛穴ケア #くすみケア #オフィスメイク`;
        threadsPost = `【30代リアル愛用】夕方の毛穴落ち・くすみ・疲れ顔から救ってくれた名品コスメ✨\n\n『${displayTitle}』\n\nお肌の曲がり角を感じ始めた30代にこそ使ってほしい実力派！自然なツヤと透明感を仕込めるので毎日のオフィスメイクに欠かせません。\n\n💡実感している具体的なベネフィット：\n・毛穴や乾燥を光で飛ばしてキメが整って見える\n・夕方になっても『疲れて見えない清潔感』が続く\n・肌への負担感が少なくて毎日安心して使える\n\n大人の肌に寄り添う逸品です👇\n\n${url}\n\n#PR #30代コスメ #毛穴ケア #くすみケア #オフィスメイク #大人の美肌`;

    } else if (genreId === 'cosme_40s') {
        xPost = `お肌にハリとツヤが戻って感動…！40代からの大人の肌を格上げする極上名品🌸\n\n『${displayTitle}』\n乾燥小じわが気にならなくなって毎朝鏡を見るのが楽しみに。厚塗り感ゼロの品格ツヤ肌！\n\n${url}\n#PR #40代コスメ #エイジングケア #ツヤ肌 #乾燥小じわ`;
        threadsPost = `【40代品格美容】『ハリ不足』と『乾燥小じわ』を本気で底上げしてくれた愛用品🌸✨\n\n『${displayTitle}』\n\n色々試してきた大人世代にこそ実感していただきたい名品。厚塗りで隠すのではなく、お肌そのものが潤いで満たされるようなツヤを与えてくれます。\n\n💡実際に感じたベネフィット：\n・パンッと押し返すようなハリ感で表情が若々しく明るく\n・夕方になっても目元口元のシワっぽさが目立たない\n・『お肌ツヤツヤだね』と同年代の友人から褒められた\n\n大人の肌に自信をくれる名品です👇\n\n${url}\n\n#PR #40代コスメ #エイジングケア #ツヤ肌 #ハリ肌 #大人美容`;

    } else { // cosme_kosodate
        xPost = `朝1分で顔が完成する救世主！忙しい子育てママの神時短コスメ👶🍼\n\n『${displayTitle}』\nパパッと塗るだけで手抜き感ゼロのすっぴん美肌。石鹸オフできて子どもがすり寄ってきても安心！\n\n${url}\n#PR #時短コスメ #時短メイク #ママコスメ #子育てママ`;
        threadsPost = `【子育てママ必見】毎朝1分で『ちゃんとキレイなママ』になれた神時短コスメ👶✨\n\n『${displayTitle}』\n\n朝のバタバタで鏡を見る暇すらないママへ！\n手抜きに見えないのに、驚くほどスピーディーに美肌が整うリアル愛用アイテムです。\n\n💡ママに嬉しい具体的なベネフィット：\n・サッと塗るだけで寝不足のくすみ肌もパッと明るく\n・公園遊びでも安心＆夜は子どもと一緒に石鹸オフ\n・子どもに顔をスリスリされても優しい使い心地\n\n忙しいママの毎日が楽になりますよ👇\n\n${url}\n\n#PR #時短コスメ #時短メイク #ママメイク #1分メイク #買ってよかった`;
    }

    return {
        x_post: xPost.trim(),
        threads_post: threadsPost.trim()
    };
}

// ==========================================
// Amazon SNS Affiliate Assistant
// みゆ(20代)・あやか(30代)・さくら(40代)・ゆい(子育て) Threads特化版
// ==========================================

const DEFAULT_GENRES = [
    { id: 'cosme_20s', name: '💄 20代コスメ・垢抜け＆トレンド', desc: '垢抜けメイク、プチプラ、バズコスメ、韓国コスメ、学生・20代OL向け' },
    { id: 'cosme_30s', name: '✨ 30代コスメ・毛穴くすみ＆上品メイク', desc: 'お肌の曲がり角、くすみ・乾燥・毛穴ケア、上品オフィスメイク、デパコス名品' },
    { id: 'cosme_40s', name: '🌸 40代コスメ・エイジングケア＆ツヤ肌', desc: 'ハリ不足、シワ・たるみ・乾燥小じわ、レチノール、大人ツヤ肌ベース' },
    { id: 'cosme_kosodate', name: '👶 子育てママ・1分時短美容＆すっぴん美肌', desc: '朝1分時短メイク、石鹸オフUV、オールインワン、子供に安心な低刺激ケア' }
];

const GENRE_RECOMMENDED_PRODUCTS = {
    cosme_20s: [
        { title: 'ロムアンド ジューシーラスティングティント 06 フィグフィグ', tag_hint: '落ちない＆ぷるぷるツヤ唇が続く韓国ティントの王者！垢抜け必須', asin: 'B0855L4G56' },
        { title: 'キャンメイク クイックラッシュカーラー 透明タイプ', tag_hint: '夜まで上向きカールを鉄壁キープする神プチプラマスカラ下地', asin: 'B001GXBZFM' },
        { title: 'TIRTIR マスクフィットレッドクッション ファンデーション', tag_hint: '圧倒的カバー力と崩れにくさ！20代の陶器肌づくりNo.1', asin: 'B09NNK7T3H' },
        { title: 'アヌア ドクダミ 77% スージングトナー 化粧水', tag_hint: 'SNSで超話題！肌荒れ・赤みを鎮静してちゅるん肌に', asin: 'B0892B1G8R' },
        { title: 'セザンヌ 描くふたえアイライナー 影用ブラウン', tag_hint: '涙袋＆ふたえ強調で一瞬で目が大きく見える神コスパ名品', asin: 'B07FSFB5K2' },
        { title: 'CLIO プロアイパレット 02 ブラウンシュー', tag_hint: '捨て色なし！マットからグリッターまで垢抜け目元がこれ1つ', asin: 'B07V2HWW3D' },
        { title: 'VT COSMETICS リードルショット 100 美容液', tag_hint: 'チクチク美容針で毛穴・キメ改善！翌朝の肌の手触りが劇的変化', asin: 'B0C61M7QFD' },
        { title: 'イニスフリー ノーセバム ミネラルパウダー N', tag_hint: '皮脂テカリを瞬時にサラサラリセットするお守りパウダー', asin: 'B09FPK356C' },
        { title: 'Wonjungyo ウォンジョンヨ ヌードアイラッシュ 01 シアーブラック', tag_hint: '束感まつ毛が自然に作れる！大人気アイドル級マスカラ', asin: 'B0BHQ49P1S' },
        { title: 'キャンメイク むにゅっとハイライター 01 ムーンライトジェム', tag_hint: 'じゅわっと溢れる濡れツヤ感！デパコス級の生レアハイライト', asin: 'B0BMG5H731' },
        { title: '魔女工場 ピュアクレンジングオイル 200ml', tag_hint: '毛穴の黒ずみ・角栓をスルッと溶かす大人気クレンジング', asin: 'B07TXC3432' },
        { title: 'Laka フルーティーグラムティント 108 ソルティー', tag_hint: '果汁のような透け感と光沢ツヤが続く大バズり韓国リップ', asin: 'B09WMR5846' },
        { title: 'ケイト デザイニングアイブロウ3D EX-4', tag_hint: 'ふんわり立体眉＆ノーズシャドウがテクいらずで描ける殿堂入り', asin: 'B06XGBY2G2' },
        { title: 'キャンメイク クリーミータッチライナー 02 ミディアムブラウン', tag_hint: 'とろける描き心地！1.5mm極細芯で夜までにじまない鉄壁アイライナー', asin: 'B07D3V7NGL' },
        { title: 'メディヒール ティーツリー エッセンシャルマスク 10枚', tag_hint: '急な肌荒れやニキビの救世主！高密着鎮静シートマスク', asin: 'B09L7X9M16' },
        { title: 'セザンヌ 超細芯アイブロウ 03 ナチュラルブラウン', tag_hint: '0.9mmの超極細芯で眉毛を1本1本リアルに描き足せる名品', asin: 'B07B4VCH98' },
        { title: 'フジコ ニュアンスラップティント 03 珊瑚ブラウン', tag_hint: '縦じわレスなもっちり唇に！マスクを外しても可愛いが続く', asin: 'B08X6D16D7' },
        { title: 'ロムアンド グラスティングメルティングバーム 06', tag_hint: '体温でとろけて水光ツヤ膜が唇を包み込む神リップバーム', asin: 'B0BNDNML1W' },
        { title: 'ヒロインメイク スピーディーマスカラリムーバー', tag_hint: 'ゴシゴシ擦らず強力ウォータープルーフマスカラが一瞬で落ちる', asin: 'B01M0S9M8L' },
        { title: 'フーミー アイブロウパウダー レディモーヴ', tag_hint: 'おしゃれなニュアンス眉が一瞬で完成する垢抜けパウダー', asin: 'B09NNB21Y9' },
        { title: 'デイジーク シャドウパレット 07 ミルクラテ', tag_hint: 'ふんわりミルクティーベージュ系の上品柔らかアイシャドウ', asin: 'B08NDJ451P' },
        { title: 'TIRTIR マスクフィットトーンアップエッセンス ラベンダー', tag_hint: 'くすみを飛ばして透き通るような白肌にトーンアップする化粧下地', asin: 'B0C7G4L551' },
        { title: 'ペリペラ インクムードドロップティント 02', tag_hint: '水彩画のようにクリアに染まる軽やかな使用感の密着ティント', asin: 'B08T6Q1M98' },
        { title: 'コーセー メイクキープミスト EX 85ml', tag_hint: 'メイクの上からシュッとするだけで真夏でも汗崩れを防ぐ名品', asin: 'B091J3F6Y8' },
        { title: 'スキンアクア トーンアップUVエッセンス ラベンダー 80g', tag_hint: 'プチプラで紫外線カット＆透明感美肌を同時に叶える日焼け止め', asin: 'B084C4VYR5' }
    ],
    cosme_30s: [
        { title: 'ラ ロッシュ ポゼ UVイデア XL プロテクショントーンアップ ローズ', tag_hint: '自然な血色感と透明感！夕方までくすまない大人の王道UV下地', asin: 'B084G2V3S6' },
        { title: 'オルビス エッセンスインヘアミルク 140g', tag_hint: 'ドライヤー前の美髪必需品！パサつき髪がサラサラにまとまる', asin: 'B00E197X3Y' },
        { title: 'VT COSMETICS CICA デイリースージングマスク 30枚', tag_hint: '30代のゆらぎ肌・毛穴引き締めに！毎日使える大容量鎮静マスク', asin: 'B088R95Y7P' },
        { title: 'コスメデコルテ ルース パウダー 20g', tag_hint: '毛穴レスなふんわり極上マシュマロ肌に仕上がる名品パウダー', asin: 'B0CQQYJ55T' },
        { title: '魔女工場 ガラクナイアシン2.0エッセンス 50ml', tag_hint: '毛穴・キメ・トーンアップを同時に叶える30代必須ビタミン美容液', asin: 'B082W17482' },
        { title: 'メラノCC 薬用しみ集中対策プレミアム美容液 20ml', tag_hint: 'Wのビタミン配合で大人の毛穴・シミを集中ケアする高コスパ美容液', asin: 'B08Z44Z6F4' },
        { title: 'オバジC25セラム ネオ 12ml', tag_hint: '極限濃度ビタミンC！毛穴・キメ・ハリ・くすみ・乾燥小じわに全方位アプローチ', asin: 'B08V89GZ8N' },
        { title: 'アテニア スキンクリア クレンズ オイル アロマタイプ 175ml', tag_hint: '肌の糖化くすみまで洗い流す！大人のくすみオフ名品クレンジング', asin: 'B0CLM7P94L' },
        { title: 'ソフィーナiP ベースケア セラム 土台美容液 90g', tag_hint: '高濃度炭酸泡が角層最深部まで浸透！次に使うスキンケアの馴染みが激変', asin: 'B0CLL2X33M' },
        { title: 'キュレル ディープモイスチャースプレー 250g', tag_hint: 'メイクの上からでもセラミド保湿！日中の乾燥・粉ふきを一瞬でレスキュー', asin: 'B085VLC29G' },
        { title: 'KANEBO スクラビング マッド ウォッシュ 洗顔料 130g', tag_hint: 'クレイ洗顔が崩壊して濃密泡に！古い角質と毛穴汚れを吸着してつるん肌', asin: 'B08VJCYG7K' },
        { title: 'KATE リップモンスター 03 陽炎', tag_hint: '大人のオフィスメイクに最適！落ち着いたロゼベージュで一日中色持ち', asin: 'B0936FQH6K' },
        { title: 'エクセル スキニーリッチシャドウ SR03 ロイヤルブラウン', tag_hint: 'しっとりリッチな質感！上品で深みのある美人目元を作る名品アイシャドウ', asin: 'B012VLWB4Y' },
        { title: 'タカミスキンピール 30ml 角質美容水', tag_hint: '洗顔後の1滴で肌代謝リズムを整える！毛穴の目立たないなめらか美肌へ', asin: 'B001GB6TGM' },
        { title: 'マキアージュ ドラマティックスキンセンサーベース NEO ヌーディーベージュ', tag_hint: 'テカリとカサつきをダブルで防ぐ！夕方まで崩れない大人崩れ防止下地', asin: 'B0BS3LKLL2' },
        { title: 'CNP Laboratory プロポリス エネルギー アンプル 15ml', tag_hint: 'プロポリスエキス配合で疲れた大人の肌に元気なハリツヤを補給', asin: 'B01M3355B8' },
        { title: 'ファンケル マイルドクレンジングオイル 120ml', tag_hint: '毛穴の角栓までしっかり落とすのに肌のうるおいは逃さない低刺激名品', asin: 'B09LCNG38L' },
        { title: 'アスタリフト D-UVクリア ホワイトソリューション 30g', tag_hint: '表情の動きに合わせて伸びるUV膜！深紫外線までカットする美白日焼け止め', asin: 'B07PFVHQF9' },
        { title: 'ディオール アディクト リップ マキシマイザー 001 ピンク', tag_hint: 'ヒアルロン酸配合でふっくらボリュームアップ！大人の唇をぷるんとケア', asin: 'B0BR4MV18P' },
        { title: 'ナンバーズイン 5番 白玉グルタチオンC美容液 30ml', tag_hint: 'SNSで話題の白玉美容液！くすみを払い透明感あふれる肌へ', asin: 'B0C7GDFGL8' },
        { title: 'dプログラム モイストケア ローション MB 125ml', tag_hint: '肌荒れを防ぎながら深いうるおいを与える敏感肌用高保湿化粧水', asin: 'B08F914K4P' },
        { title: 'クレ・ド・ポー ボーテ ヴォワールコレクチュールn 40g', tag_hint: '瞬時に肌の凹凸・くすみを補正！一度使うと手放せない最高峰化粧下地', asin: 'B085ZFL51T' },
        { title: 'ルナソル スキンモデリングアイズ 01 ベージュベージュ', tag_hint: '肌そのものの美しさを引き立てる大人のための洗練ベージュパレット', asin: 'B000Z56W7Y' },
        { title: 'カバーマーク トリートメント クレンジング ミルク 200g', tag_hint: '美容液成分89%配合！洗い上がりもっちり潤う大人のミルククレンジング', asin: 'B002K8K9YQ' },
        { title: '資生堂 スポッツカバー ファウンデイション S100', tag_hint: '頑固なシミやくすみを少量で完璧カバーする実力派コンシーラー', asin: 'B000FQN8C4' }
    ],
    cosme_40s: [
        { title: 'エリクシール レチノパワー リンクルクリーム S 15g', tag_hint: '純粋レチノール配合でシワ改善！目元・口元のハリを本気で育てる薬用クリーム', asin: 'B0CDLY9DDT' },
        { title: 'ミルボン ディーセス エルジューダ エマルジョン+ 120g', tag_hint: '年齢とともに細くパサつく大人の髪をしなやかで潤う美髪へ整える', asin: 'B00KTY1M56' },
        { title: 'KATE リップモンスター 05 ダークフィグ', tag_hint: '大人の唇になじむ熟れたイチジク色！自然な血色とツヤが続く名品', asin: 'B0936F1R29' },
        { title: 'キュレル 潤浸保湿フェイスクリーム 40g', tag_hint: 'セラミド補給で乾燥小じわ・敏感肌をしっとりバリアする安心名品', asin: 'B001IZ04M4' },
        { title: 'アスタリフト ジェリー アクアリスタ 先行美容液 40g', tag_hint: '洗顔後すぐの土台ケア！お肌のハリ・弾力がグンと跳ね上がる赤いジェリー', asin: 'B07WCSLLLP' },
        { title: 'ポーラ B.A アイゾーンクリーム N 26g', tag_hint: '目元のハリ・立体感を本気で追求する大人のための最高峰アイクリーム', asin: 'B0BFDVL74L' },
        { title: 'コスメデコルテ リポソーム アドバンスト リペアセラム 50ml', tag_hint: '1滴に1兆個のリポソーム！乱れたキメを整えてふっくら若々しいハリ肌へ', asin: 'B09D81P329' },
        { title: 'KANEBO クリーム イン デイ 40g 朝用クリーム', tag_hint: '日中の乾燥を防ぎ生き生きとしたツヤを与える！メイクノリもアップ', asin: 'B08FRPBC76' },
        { title: 'HAKU メラノフォーカスEV 薬用美白美容液 45g', tag_hint: 'シミの根本原因にアプローチ！大人の透明感を呼び戻す美白の最高峰', asin: 'B0BV9H588J' },
        { title: 'エリクシール シュペリエル つや玉ミスト 80ml', tag_hint: '外出先でもシュッとひと吹きでツヤ復活！メイク崩れも防ぐ美容液ミスト', asin: 'B081BDCMLQ' },
        { title: 'ランコム ジェニフィック アドバンスト N 50ml', tag_hint: '美肌菌に着目！年齢に負けない強さと輝きを肌に与える名品導入美容液', asin: 'B07X995HPL' },
        { title: 'SK-II フェイシャル トリートメント エッセンス 230ml', tag_hint: 'ピテラ90%以上配合！透明感とキメを究極まで引き上げるロングセラー化粧水', asin: 'B00K30K726' },
        { title: 'オバジ ダーマパワーX ステムリフト クリーム 50g', tag_hint: '濃厚な使い心地で顔全体を下からグッと引き上げるようなハリ実感クリーム', asin: 'B07GX94K6L' },
        { title: '資生堂 アルティミューン パワライジング コンセントレート III 50ml', tag_hint: '美肌免疫力を高めてハリ・なめらかさを維持する頼もしいエイジングケア美容液', asin: 'B0983H2LKL' },
        { title: 'コスメデコルテ サンシェルター マルチ プロテクション トーンアップCC', tag_hint: '毛穴・凹凸・色ムラをナチュラルカバーして艶やかな大人のすっぴん美肌へ', asin: 'B0BSF8Q9LM' },
        { title: 'アテニア ドレスリフト ローション 150ml', tag_hint: 'とろみのある美容液級化粧水！大人の肌に吸い付くようなハリと濃密な潤い', asin: 'B0CLMYN7QL' },
        { title: 'エトヴォス ミネラルクラッシィシャドー ロイヤルブラウン', tag_hint: '敏感な目元にも優しい石鹸オフ！上品な大人の陰影を作るミネラルアイシャドウ', asin: 'B0CGDF6P4K' },
        { title: 'エリクシール シュペリエル デザインタイム セラム 40ml', tag_hint: 'ゆるみやすいフェイスラインに！ストレッチするようなハリ美容液', asin: 'B08DJQW48M' },
        { title: 'ロート製薬 ダーマセプトRX AZAセラム 15g', tag_hint: '大人の肌荒れや皮脂トラブル・毛穴詰まりにアゼライン酸高濃度配合クリーム', asin: 'B0BG262GFL' },
        { title: 'アルビオン フローラドリップ 160ml 化粧液', tag_hint: '発酵植物エキスで大人の複合的な肌悩みをマルチに底上げする濃密ローション', asin: 'B07XB2M7NP' },
        { title: 'エスティローダー アドバンス ナイト リペア SMR コンプレックス 50ml', tag_hint: '睡眠中の集中リペア！翌朝の肌にふっくらとしたハリと輝きをもたらす夜用美容液', asin: 'B08FGB5K9P' },
        { title: 'オルビス ユードット フォーミングウォッシュ 120g', tag_hint: 'ねばり気のある濃厚泡で古い角質・くすみをやさしくオフする薬用エイジング洗顔', asin: 'B0CGDDL29R' },
        { title: 'ドモホルンリンクル クリーム20 30g', tag_hint: '大人の肌のコラーゲンを支え、押し返すようなハリを呼び覚ます名品クリーム', asin: 'B09L7X9M99' },
        { title: 'トワニー タイムリフレッシャーV 60ml', tag_hint: '洗顔直後に使う誘導美容液！パックのように密着して角層を柔らかく整える', asin: 'B07X9Q8KLM' },
        { title: 'ディセンシア つつむ フェイスクリーム 30g', tag_hint: '特許バリア膜で花粉や乾燥から大人の敏感肌を守り抜く高保湿クリーム', asin: 'B001FQN890' }
    ],
    cosme_kosodate: [
        { title: 'サボリーノ 目ざまシート 朝用シートマスク 32枚入り', tag_hint: '洗顔＋スキンケア＋保湿下地が60秒で完了！忙しい朝の救世主', asin: 'B06XJ9G9V4' },
        { title: 'ナンバーズイン 3番 ノーファンデ陶器肌トーンアップクリーム 50ml', tag_hint: 'ファンデ不要！これ1本で日焼け止め・毛穴カバー・美肌補正が完了', asin: 'B09LCHL6CS' },
        { title: 'ビオレUV アクアリッチ ウォータリーエッセンス 70g', tag_hint: '公園遊びでも絶対焼かない！スーッと伸びて石鹸で落とせる安心UV', asin: 'B07N1NZPGB' },
        { title: 'アンドハニー ディープモイスト ヘアオイル 100ml', tag_hint: 'お風呂上がりに馴染ませるだけで翌朝の寝癖・広がりを防ぐ時短ヘアケア', asin: 'B07Q85G6CP' },
        { title: 'アロベビー ミルクローション 150ml (赤ちゃんから大人まで)', tag_hint: '子どもと一緒に使える安心の無添加高保湿オーガニックローション', asin: 'B00O9S4Z2Y' },
        { title: 'ドクターシーラボ アクアコラーゲンゲル エンリッチリフトEX 120g', tag_hint: '化粧水・乳液・美容液・クリーム・パックがこれ1つ！時短ハリ肌オールインワン', asin: 'B08F22K67M' },
        { title: 'キャンメイク マーメイドスキンジェルUV 01 透明', tag_hint: '化粧水感覚でスーッと肌に馴染む！石鹸オフできる快適日焼け止めジェル', asin: 'B00X3M5F9A' },
        { title: 'ミノン アミノモイスト チャージミルク 100g', tag_hint: '肌荒れしやすいママの肌を優しく守る！ベタつかない低刺激高保湿乳液', asin: 'B015197OFE' },
        { title: 'チャコット フィニッシングパウダー マット 30g', tag_hint: '汗や皮脂に強く公園遊びでもサラサラ肌を一日中キープするプチプラ名品', asin: 'B091J3F6Y9' },
        { title: 'マナラ ホットクレンジングゲル マッサージプラス 200g', tag_hint: '温感ゲルでメイク落としと毛穴マッサージが同時に完了！ダブル洗顔不要', asin: 'B08T6Q1M99' },
        { title: 'オペラ リップティント N 05 コーラルピンク', tag_hint: '鏡を見ずにサッと塗っても失敗しない！自然な血色が長持ちするママの鉄板リップ', asin: 'B07S1N6L8L' },
        { title: 'ビオレ おうちdeエステ 肌をなめらかにするマッサージ洗顔ジェル 150g', tag_hint: '泡立て不要で朝の洗顔が秒で終わる！毛穴の角栓を落としてつるん肌に', asin: 'B07577G17S' },
        { title: 'セザンヌ クッションファンデーション 00 明るいベージュ系', tag_hint: 'ポンポンするだけで秒速ツヤ美肌！石鹸オフOKな超プチプラ名品クッション', asin: 'B0BNPL588J' },
        { title: 'YOLU ヨル カームナイトリペア ヘアオイル 80ml', tag_hint: '寝ている間の摩擦ダメージを防ぎ、朝のパサつきと寝癖を抑える夜間美容オイル', asin: 'B09F9F883P' },
        { title: 'ナチュリエ ハトムギ保湿ジェル 180g', tag_hint: '大容量で惜しみなく使える！顔にも全身にも子どもと一緒に使える水分ジェル', asin: 'B01C5P9N6C' },
        { title: 'カウブランド 無添加 メイク落としミルク 150ml', tag_hint: '肌へのやさしさを第一に考えた無添加処方！濡れた手でも使える安心クレンジング', asin: 'B001GB6TGM' },
        { title: 'モモプリ 潤いぷるジュレマスク 4枚入り', tag_hint: '乳酸菌と桃セラミド配合！ぷるぷるジュレシートで肌荒れ知らずのもち肌へ', asin: 'B07GBW8KL9' },
        { title: '無印良品 エイジングケア薬用リンクルケアクリームマスク 80g', tag_hint: 'ナイアシンアミド配合でシワ改善！寝る前塗るだけで翌朝もっちり高コスパ名品', asin: 'B08LCN8890' },
        { title: 'アネッサ パーフェクトUV スキンケアミルク NA 60ml', tag_hint: '汗や水に触れるとUVブロック膜が強くなる！レジャーや公園遊びの最強ガード', asin: 'B0CSK63990' },
        { title: 'なめらか本舗 リンクルアイクリーム N 20g', tag_hint: 'ピュアレチノール配合！プチプラなのに目元の乾燥・小じわをふっくらケア', asin: 'B07V2HWW3D' },
        { title: 'ラブライナー リキッドアイライナー R4 ダークブラウン', tag_hint: 'ブレずにスルスル描けるアルミボトル！失敗知らずの時短リキッドライナー', asin: 'B09WMR5846' },
        { title: 'メルヴィータ ビオオイル アルガンオイル 50ml', tag_hint: '洗顔後すぐのブースターオイル！化粧水の浸透を劇的に高める100%オーガニック', asin: 'B002K8K9YQ' },
        { title: 'クナイプ バスソルト グーテナハト ホップ&バレリアンの香り 850g', tag_hint: '育児疲れを癒す極上のバスタイム！お風呂上がりぐっすり眠れる安眠ソルト', asin: 'B001GB6TGM' },
        { title: 'ベビーセバメド モイスチャーローション 200ml', tag_hint: '赤ちゃんのデリケートな素肌と同じ弱酸性pH5.5で優しく保護する乳液', asin: 'B000FQ8890' },
        { title: 'バブ 薬用 メディキュア 森林の香り 6錠入', tag_hint: '忙しいママの肩こり・腰痛・疲労回復に！高濃度炭酸で短時間入浴でも芯までポカポカ', asin: 'B07D3V7NGL' }
    ]
};

// ── 🏷️ ハッシュタグプリセット（ジャンル別） ───────────────────────────────────
const HASHTAG_PRESETS = {
    cosme_20s: [
        '#垢抜けメイク', '#プチプラコスメ', '#韓国コスメ', '#バズコスメ', '#20代メイク',
        '#神コスパ', '#アイメイク', '#リップ', '#ベストコスメ', '#愛用コスメ'
    ],
    cosme_30s: [
        '#30代メイク', '#毛穴ケア', '#くすみケア', '#オフィスメイク', '#ビタミンC',
        '#ナイアシンアミド', '#CICA', '#大人メイク', '#ベストコスメ', '#愛用コスメ'
    ],
    cosme_40s: [
        '#40代メイク', '#エイジングケア', '#ツヤ肌', '#レチノール', '#ハリ肌',
        '#乾燥小じわ', '#大人美容', '#高保湿', '#ベストコスメ', '#愛用コスメ'
    ],
    cosme_kosodate: [
        '#時短メイク', '#ママメイク', '#1分メイク', '#石鹸オフ', '#ノーファンデ',
        '#オールインワン', '#低刺激コスメ', '#子育てママ', '#ベストコスメ', '#買ってよかった'
    ]
};

const DEFAULT_ACCOUNTS = [
    { id: 'acc-20s', name: '💄 みゆ | 20代垢抜けプチプラコスメ', internal_name: 'cyunekazu+cosme20@gmail.com', genre: 'cosme_20s', threads_handle: '', tag: 'papasprint-22', prompt: 'あなたは「みゆ」として活動する20代美容オタクです。学生や20代OLに向けて、垢抜けメイクやバズコスメ、神コスパなプチプラ＆韓国コスメを徹底レビューします。「これ使ってから垢抜けたって言われた！」「プチプラなのにデパコス級」を熱量高めに伝えます。絵文字を散りばめ、親近感のあるトーンで投稿を作成してください。', default_style: 'review' },
    { id: 'acc-30s', name: '✨ あやか | 30代の毛穴・くすみケア', internal_name: 'cyunekazu+cosme30@gmail.com', genre: 'cosme_30s', threads_handle: '', tag: 'papasprint-22', prompt: 'あなたは「あやか」として活動する働く30代女子です。お肌の曲がり角を感じて毛穴・くすみ・乾燥・肌のゆらぎが気になり始めた読者に向けて、実力派コスメや成分スキンケア（ビタミンC、ナイアシンアミド、CICA）、夕方まで崩れないオフィスメイクを発信します。口調は「30代の肌に本当に効いた神コスメ」「夕方のくすみが消えた」など落ち着きと実体験重視。', default_style: 'review' },
    { id: 'acc-40s', name: '🌸 さくら | 40代のツヤ肌エイジング', internal_name: 'cyunekazu+cosme40@gmail.com', genre: 'cosme_40s', threads_handle: '', tag: 'papasprint-22', prompt: 'あなたは「さくら」として活動する40代のエイジングケア専門家です。ハリ不足・目元口元の乾燥小じわ・シミたるみに本気で向き合い、レチノールや高保湿名品、大人の肌を若々しく底上げするツヤ肌ベースメイクを厳選レビューします。口調は丁寧で品があり、説得力と安心感のあるトーン（「お肌にツヤとハリが戻った」「大人の品格を格上げする名品」）。', default_style: 'review' },
    { id: 'acc-kosodate', name: '👶 ゆい | 子育てママの1分時短コスメ', internal_name: 'cyunekazu+mama@gmail.com', genre: 'cosme_kosodate', threads_handle: '', tag: 'papasprint-22', prompt: 'あなたは「ゆい」として活動する子育て中のママです。朝1分で完了するオールインワンや石鹸オフUV、子どもに触れても安心な低刺激スキンケア、公園でも崩れない時短メイク、パパッとまとまる時短ヘアケアを本音レビューします。口調は共感あふれる温かいママ目線（「朝のバタバタでもこれだけで乗り切れる」「ママ友に褒められた」）。', default_style: 'review' }
];

const STORAGE_KEY = 'affiliate_app_config_threads_pure_v1';

let state = {
    apiKey: '',
    genres: DEFAULT_GENRES,
    accounts: DEFAULT_ACCOUNTS,
    currentAccountId: 'acc-20s',
    currentProduct: null,
    history: [],
    schedule: []
};

// ── 初期化 ───────────────────────────────────────────────────────────────────

const ROTATION_STORAGE_KEY = 'affiliate_app_account_rotation_idx';

// 🔄 起動時のアカウント交互切り替え（ローテーション）
function applyAccountRotation() {
    try {
        const lastIdxStr = localStorage.getItem(ROTATION_STORAGE_KEY);
        let nextIdx = 0;
        if (lastIdxStr !== null) {
            const lastIdx = parseInt(lastIdxStr, 10);
            nextIdx = (lastIdx + 1) % state.accounts.length;
        }
        localStorage.setItem(ROTATION_STORAGE_KEY, nextIdx.toString());
        state.currentAccountId = state.accounts[nextIdx].id;
        
        // トーストで当番アカウントを通知
        const acc = state.accounts[nextIdx];
        setTimeout(() => {
            showToast(`🔄 今回の当番は【${acc.name}】です✨`);
        }, 300);
    } catch (e) {
        console.warn('Rotation error:', e);
    }
}

// 🛡️ 商品が現在のアカウントで過去に投稿済みかチェック
function isProductPostedForCurrentAccount(title, asin) {
    if (!state.history || state.history.length === 0) return null;
    const currentAcc = getCurrentAccount();
    
    return state.history.find(h => {
        // 同じアカウントでの投稿かチェック
        const isSameAccount = h.account_id === currentAcc.id || h.account_name === currentAcc.name;
        if (!isSameAccount) return false;

        // ASIN一致またはタイトル部分一致
        if (asin && h.product_asin && asin === h.product_asin) return true;
        if (title && h.product_title) {
            const t1 = title.toLowerCase().replace(/\s+/g, '');
            const t2 = h.product_title.toLowerCase().replace(/\s+/g, '');
            if (t1.includes(t2) || t2.includes(t1)) return true;
        }
        return false;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    loadLocalConfig();
    await fetchServerConfig();
    applyAccountRotation();
    renderAccountTabs();
    renderAccountDropdown();
    updateActiveAccountDisplay();
    renderDailySuggestions();
    setupEventListeners();
    await loadHistory();
    await loadSchedule();
    initAnalytics();
    refreshIcons();
});

function loadLocalConfig() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.accounts && parsed.accounts.length >= 4) {
                state.apiKey = parsed.apiKey || '';
                state.genres = (parsed.genres && parsed.genres.length) ? parsed.genres : DEFAULT_GENRES;
                state.accounts = parsed.accounts;
                state.currentAccountId = parsed.currentAccountId || state.accounts[0].id;
                return;
            }
        }
    } catch (e) { console.warn('LocalStorage error:', e); }
    state.genres = DEFAULT_GENRES;
    state.accounts = DEFAULT_ACCOUNTS;
    state.currentAccountId = DEFAULT_ACCOUNTS[0].id;
    saveLocalConfig();
}

function saveLocalConfig() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            apiKey: state.apiKey,
            genres: state.genres,
            accounts: state.accounts,
            currentAccountId: state.currentAccountId
        }));
    } catch (e) { console.warn('Save LocalStorage error:', e); }
}

async function fetchServerConfig() {
    try {
        const res = await fetch('/api/config');
        if (res.ok) {
            const data = await res.json();
            if (data.gemini_api_key) state.apiKey = data.gemini_api_key;
            if (data.genres && data.genres.length) state.genres = data.genres;
            if (data.accounts && data.accounts.length) {
                state.accounts = data.accounts;
                if (!state.accounts.find(a => a.id === state.currentAccountId)) {
                    state.currentAccountId = state.accounts[0].id;
                }
            }
        }
    } catch (e) { console.log('Using local config.'); }
}

function getCurrentAccount() {
    return state.accounts.find(a => a.id === state.currentAccountId) || state.accounts[0];
}

function getCurrentGenre() {
    const acc = getCurrentAccount();
    if (!acc) return DEFAULT_GENRES[0];
    return state.genres.find(g => g.id === acc.genre) || DEFAULT_GENRES[0];
}

// ── アカウントタブ ───────────────────────────────────────────────────────────
function renderAccountTabs() {
    const container = document.getElementById('account-tabs-container');
    if (!container) return;
    container.innerHTML = state.accounts.map(acc => {
        const isActive = acc.id === state.currentAccountId;
        const activeClass = isActive
            ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-md shadow-pink-200 border-transparent ring-2 ring-pink-400 font-bold scale-[1.02]'
            : 'bg-slate-50 hover:bg-pink-50/70 text-slate-800 border-slate-200 hover:border-pink-300';
        const subBadge = isActive ? 'bg-white/20 text-white border-white/30' : 'bg-slate-200/80 text-slate-600 border-slate-300/60';
        return `
            <button type="button" onclick="switchAccount('${acc.id}')"
                class="p-3 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between space-y-1 cursor-pointer ${activeClass}">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold truncate">${escapeHtml(acc.name)}</span>
                    ${isActive ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-white shrink-0"></i>' : ''}
                </div>
                <div class="flex items-center justify-between text-[10px]">
                    <span class="font-mono truncate max-w-[130px] opacity-80">${escapeHtml(acc.internal_name || acc.id)}</span>
                    <span class="px-1.5 py-0.5 rounded border ${subBadge} text-[9px]">${isActive ? '選択中' : '選択'}</span>
                </div>
            </button>`;
    }).join('');
    refreshIcons();
}

function switchAccount(id) {
    state.currentAccountId = id;
    saveLocalConfig();
    const currIdx = state.accounts.findIndex(a => a.id === id);
    if (currIdx !== -1) localStorage.setItem(ROTATION_STORAGE_KEY, currIdx.toString());
    renderAccountTabs();
    renderAccountDropdown();
    updateActiveAccountDisplay();
    renderDailySuggestions();
    const acc = getCurrentAccount();
    showToast(`「${acc.name}」に切り替えました✨`);
}

function renderAccountDropdown() {
    const select = document.getElementById('account-select');
    if (!select) return;
    select.innerHTML = state.accounts.map(acc =>
        `<option value="${acc.id}" ${acc.id === state.currentAccountId ? 'selected' : ''}>${escapeHtml(acc.name)}</option>`
    ).join('');
}

function updateActiveAccountDisplay() {
    const acc = getCurrentAccount();
    if (!acc) return;
    const genre = getCurrentGenre();
    const nameEl = document.getElementById('active-acc-name');
    const internalEl = document.getElementById('active-acc-internal-name');
    const genreBadge = document.getElementById('active-genre-badge');
    const tagDisplay = document.getElementById('current-tag-display');
    const promptPreview = document.getElementById('active-prompt-preview');
    const genreLabel = document.getElementById('daily-genre-label');
    if (nameEl) nameEl.textContent = acc.name;
    if (internalEl) { internalEl.textContent = `[${acc.internal_name || acc.id}]`; internalEl.classList.remove('hidden'); }
    if (genreBadge) genreBadge.textContent = genre.name;
    if (tagDisplay) tagDisplay.textContent = `TAG: ${acc.tag || 'papasprint-22'}`;
    if (promptPreview) promptPreview.textContent = acc.prompt || '未設定';
    if (genreLabel) genreLabel.textContent = `【${genre.name}】`;
}

function renderDailySuggestions(shuffled = false) {
    const container = document.getElementById('daily-suggestions-container');
    if (!container) return;
    const genre = getCurrentGenre();
    let products = GENRE_RECOMMENDED_PRODUCTS[genre.id] || GENRE_RECOMMENDED_PRODUCTS.cosme_20s || [];
    
    // 🛡️ かぶり防止：現在のアカウントで過去に投稿した商品を除外！
    const unpostedProducts = products.filter(p => !isProductPostedForCurrentAccount(p.title, p.asin));
    
    // まだ投稿していない商品が3個以上あれば未投稿のみ、無ければ全体から
    const candidateProducts = unpostedProducts.length > 0 ? unpostedProducts : products;

    let displayProducts = [...candidateProducts];
    if (shuffled || unpostedProducts.length > 3) {
        displayProducts = displayProducts.sort(() => 0.5 - Math.random());
    }
    displayProducts = displayProducts.slice(0, 3);

    container.innerHTML = displayProducts.map(p => {
        const isPosted = !!isProductPostedForCurrentAccount(p.title, p.asin);
        const postedBadge = isPosted ? '<span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">過去に投稿済</span>' : '';

        return `
        <div class="bg-white/90 border border-pink-200/90 hover:border-pink-400 hover:shadow-md transition-all rounded-xl p-3.5 flex flex-col justify-between space-y-2 group">
            <div class="space-y-1">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">おすすめコスメ</span>
                    ${postedBadge}
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <h4 class="font-bold text-xs text-slate-800 line-clamp-2 leading-snug group-hover:text-pink-600 transition-colors">${escapeHtml(p.title)}</h4>
                <p class="text-[11px] text-slate-500 line-clamp-2">${escapeHtml(p.tag_hint)}</p>
            </div>
            <button type="button" onclick="applySuggestion('${escapeHtml(p.title)}', '${p.asin || ''}')"
                class="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer">
                <i data-lucide="arrow-down-circle" class="w-3.5 h-3.5"></i>
                <span>この商品で投稿を作成</span>
            </button>
        </div>`;
    }).join('');
    refreshIcons();
}

function applySuggestion(title, asin) {
    const input = document.getElementById('input-url');
    if (input) {
        // Use clean direct DP link if ASIN is present, to save ~150 chars!
        input.value = asin ? `https://www.amazon.co.jp/dp/${asin}` : title;
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        fetchProduct();
    }
}

// ── イベントリスナー ─────────────────────────────────────────────────────────
function setupEventListeners() {
    const accountSelect = document.getElementById('account-select');
    if (accountSelect) accountSelect.addEventListener('change', e => switchAccount(e.target.value));

    const btnOpenActiveThreads = document.getElementById('btn-open-active-threads');
    if (btnOpenActiveThreads) btnOpenActiveThreads.addEventListener('click', () => {
        const acc = getCurrentAccount();
        const handle = acc.threads_handle || '';
        window.open(handle ? `https://www.threads.net/@${handle}` : 'https://www.threads.net', '_blank');
    });

    const btnShuffle = document.getElementById('btn-shuffle-suggestions');
    if (btnShuffle) btnShuffle.addEventListener('click', () => { renderDailySuggestions(true); showToast('おすすめ商品を更新しました✨'); });

    const btnOpenSettings = document.getElementById('btn-open-settings');
    if (btnOpenSettings) btnOpenSettings.addEventListener('click', e => { e.preventDefault(); openSettingsModal(); });

    const btnQuickEdit = document.getElementById('btn-quick-edit-prompt');
    if (btnQuickEdit) btnQuickEdit.addEventListener('click', e => { e.preventDefault(); openSettingsModal(); });

    const btnCloseSettings = document.getElementById('btn-close-settings');
    if (btnCloseSettings) btnCloseSettings.addEventListener('click', e => { e.preventDefault(); closeSettingsModal(); });

    const btnCancelSettings = document.getElementById('btn-cancel-settings');
    if (btnCancelSettings) btnCancelSettings.addEventListener('click', e => { e.preventDefault(); closeSettingsModal(); });

    const btnSaveSettings = document.getElementById('btn-save-settings');
    if (btnSaveSettings) btnSaveSettings.addEventListener('click', e => { e.preventDefault(); saveSettings(); });

    const btnAddAccount = document.getElementById('btn-add-account');
    if (btnAddAccount) btnAddAccount.addEventListener('click', e => { e.preventDefault(); addNewAccount(); });

    // スケジュールモーダル
    const btnOpenSchedule = document.getElementById('btn-open-schedule');
    if (btnOpenSchedule) btnOpenSchedule.addEventListener('click', e => { e.preventDefault(); openScheduleModal(); });

    const btnCloseSchedule = document.getElementById('btn-close-schedule');
    if (btnCloseSchedule) btnCloseSchedule.addEventListener('click', e => { e.preventDefault(); closeScheduleModal(); });

    const btnAddSchedule = document.getElementById('btn-add-schedule-item');
    if (btnAddSchedule) btnAddSchedule.addEventListener('click', e => { e.preventDefault(); addScheduleItem(); });

    const btnFetch = document.getElementById('btn-fetch-product');
    if (btnFetch) btnFetch.addEventListener('click', fetchProduct);

    const inputUrl = document.getElementById('input-url');
    if (inputUrl) inputUrl.addEventListener('keypress', e => { if (e.key === 'Enter') { e.preventDefault(); fetchProduct(); } });

    document.querySelectorAll('input[name="post-style"]').forEach(radio => {
        radio.addEventListener('change', e => {
            document.querySelectorAll('.style-card').forEach(card => {
                card.classList.remove('border-pink-500', 'bg-pink-50/50');
                card.classList.add('border-slate-200', 'bg-white');
            });
            const parent = e.target.closest('.style-card');
            if (parent) { parent.classList.remove('border-slate-200', 'bg-white'); parent.classList.add('border-pink-500', 'bg-pink-50/50'); }
        });
    });

    const btnGeneratePosts = document.getElementById('btn-generate-posts') || document.getElementById('btn-generate');
    if (btnGeneratePosts) btnGeneratePosts.addEventListener('click', e => { e.preventDefault(); generatePost(); });

    const btnCopyUrl = document.getElementById('btn-copy-url');
    if (btnCopyUrl) btnCopyUrl.addEventListener('click', () => copyText(document.getElementById('product-aff-url')?.value || '', 'アフィリエイトURLをコピーしました！'));

    const btnCopyThreads = document.getElementById('btn-copy-threads');
    if (btnCopyThreads) btnCopyThreads.addEventListener('click', () => copyText(document.getElementById('textarea-threads')?.value || '', 'Threads 投稿文をコピーしました！'));

    const btnPostThreads = document.getElementById('btn-post-threads');
    if (btnPostThreads) btnPostThreads.addEventListener('click', async () => {
        const val = document.getElementById('textarea-threads')?.value || '';
        if (val) copyText(val, '投稿文をコピーしました！専用Chromeを起動します');
        
        const acc = getCurrentAccount();
        try {
            // アカウント専用Chromeの自動起動を試みる
            const res = await fetch('/api/open-threads-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ account_id: state.currentAccountId, post_text: val })
            });
            if (res.ok) {
                showToast(`🚀 【${acc.name}】専用Chromeを起動しました！`);
                return;
            }
        } catch (e) {
            console.log('Local profile launcher unavailable, falling back to window.open');
        }

        // フォールバック（外部アクセス時やChrome未検出時）
        window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(val)}`, '_blank');
    });

    const btnVisitThreads = document.getElementById('btn-visit-profile-threads');
    if (btnVisitThreads) btnVisitThreads.addEventListener('click', () => {
        const acc = getCurrentAccount();
        window.open(acc.threads_handle ? `https://www.threads.net/@${acc.threads_handle}` : 'https://www.threads.net', '_blank');
    });

    const btnClearHist = document.getElementById('btn-clear-history');
    if (btnClearHist) btnClearHist.addEventListener('click', () => {
        if (confirm('生成履歴をクリアしますか？')) { state.history = []; renderHistory(); showToast('履歴をクリアしました'); }
    });

    const threadsContent = document.getElementById('textarea-threads');
    if (threadsContent) threadsContent.addEventListener('input', () => updateCharCount('textarea-threads', 'threads-char-count', 500));
}

// ── 商品取得 ─────────────────────────────────────────────────────────────────
async function fetchProduct() {
    const input = document.getElementById('input-url')?.value.trim();
    if (!input) { showToast('商品名またはAmazon URLを入力してください'); return; }

    const btn = document.getElementById('btn-fetch-product');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> <span>情報取得中...</span>`; refreshIcons(); }

    const acc = getCurrentAccount();
    const tag = acc.tag || 'papasprint-22';

    try {
        // まずサーバー通信を試みる（ローカル環境用）
        const res = await fetch('/api/fetch-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: input, account_id: state.currentAccountId })
        });
        if (res.ok) {
            const product = await res.json();
            state.currentProduct = product;
            renderProductSection(product);
            return;
        }
        throw new Error('サーバー未接続');
    } catch (e) {
        // サーバーが無くても（Vercelやスマホでも）クライアント側で即座に解析完了！
        const clientProduct = parseAmazonUrlClient(input, tag);
        state.currentProduct = clientProduct;
        renderProductSection(clientProduct);
    } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = origHtml; refreshIcons(); }
    }
}

function renderProductSection(p) {
    const section = document.getElementById('product-section');
    if (!section) return;
    const titleEl = document.getElementById('product-title');
    const priceEl = document.getElementById('product-price');
    const asinBadge = document.getElementById('product-asin-badge');
    const affUrlInput = document.getElementById('product-aff-url');
    const imgEl = document.getElementById('product-img');
    const featuresContainer = document.getElementById('product-features-container');
    const featuresList = document.getElementById('product-features');
    const openSearchBtn = document.getElementById('btn-open-amazon-search');

    if (titleEl) titleEl.textContent = p.title || '商品名未取得';
    if (priceEl) priceEl.textContent = p.price || 'Amazonで確認';
    if (asinBadge) asinBadge.textContent = p.asin ? `ASIN: ${p.asin}` : 'キーワード検索';
    if (affUrlInput) affUrlInput.value = p.affiliate_url || '';
    if (imgEl) {
        if (p.image_url) { imgEl.src = p.image_url; imgEl.classList.remove('hidden'); }
        else { imgEl.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="%23ec4899" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>'; }
    }
    if (p.features && p.features.length) {
        if (featuresContainer) featuresContainer.classList.remove('hidden');
        if (featuresList) featuresList.innerHTML = p.features.map(f => `<li>${escapeHtml(f)}</li>`).join('');
    } else {
        if (featuresContainer) featuresContainer.classList.add('hidden');
    }
    if (openSearchBtn) {
        if (p.is_keyword) { openSearchBtn.classList.remove('hidden'); openSearchBtn.onclick = () => window.open(p.affiliate_url, '_blank'); }
        else { openSearchBtn.classList.add('hidden'); }
    }
    // 🛡️ 重複投稿チェックと警告バナー
    const duplicatePostedItem = isProductPostedForCurrentAccount(p.title, p.asin);
    let dupAlertEl = document.getElementById('duplicate-post-warning-alert');
    if (!dupAlertEl) {
        dupAlertEl = document.createElement('div');
        dupAlertEl.id = 'duplicate-post-warning-alert';
        dupAlertEl.className = 'col-span-full mb-3 p-3.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs flex items-center justify-between shadow-xs hidden';
        section.insertBefore(dupAlertEl, section.firstChild);
    }
    if (duplicatePostedItem) {
        dupAlertEl.innerHTML = `
            <div class="flex items-center space-x-2">
                <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span><strong>かぶり注意：</strong> この商品は <strong>${escapeHtml(duplicatePostedItem.timestamp || '')}</strong> に投稿済みです。別のおすすめ商品を選ぶことを推奨します。</span>
            </div>
            <button type="button" onclick="renderDailySuggestions(true)" class="underline font-bold text-amber-700 hover:text-amber-900 shrink-0 ml-2">別のおすすめを見る</button>
        `;
        dupAlertEl.classList.remove('hidden');
    } else {
        dupAlertEl.classList.add('hidden');
    }

    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── 投稿文生成 ───────────────────────────────────────────────────────────────
async function generatePost() {
    if (!state.currentProduct) {
        const inputVal = document.getElementById('input-url')?.value.trim();
        if (inputVal) { await fetchProduct(); }
        else { showToast('先に商品名またはURLを入力してください'); document.getElementById('input-url')?.focus(); return; }
    }

    const btn = document.getElementById('btn-generate-posts') || document.getElementById('btn-generate');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> <span>Threads用コスメ投稿文を生成中...</span>`; refreshIcons(); }

    const selectedRadio = document.querySelector('input[name="post-style"]:checked');
    const style = selectedRadio ? selectedRadio.value : 'review';
    const customPrompt = document.getElementById('input-custom-prompt')?.value.trim() || '';

    try {
        const res = await fetch('/api/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product: state.currentProduct, style, custom_prompt: customPrompt, account_id: state.currentAccountId }) });
        if (!res.ok) throw new Error('生成失敗');
        const data = await res.json();
        renderGeneratedResults(data);
        await loadHistory();
        showToast('Threads用投稿文の生成が完了しました！✨');
    } catch (e) {
        console.error(e);
        showToast('生成中にエラーが発生しました: ' + e.message);
    } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = origHtml; refreshIcons(); }
    }
}


// ── 投稿文生成（メインロジック） ─────────────────────────────────────────────
async function generatePosts() {
    if (!state.currentProduct) {
        showToast('先に対象商品を読み込んでください');
        return;
    }

    const btn = document.getElementById('btn-generate-posts');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> <span>投稿文を生成中...</span>`;
        refreshIcons();
    }

    const selectedRadio = document.querySelector('input[name="post-style"]:checked');
    const style = selectedRadio ? selectedRadio.value : 'review';
    const customPrompt = document.getElementById('input-custom-prompt')?.value.trim() || '';

    try {
        let data = null;

        // 1. サーバーAPIがある場合（ローカル稼働時）は試行
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product: state.currentProduct,
                    style: style,
                    custom_prompt: customPrompt,
                    account_id: state.currentAccountId
                })
            });
            if (res.ok) {
                data = await res.json();
            }
        } catch (serverErr) {
            console.log('Server not responding, using instant client-side generator');
        }

        // 2. サーバーレス環境（Vercel/スマホ等）はクライアント側エンジンで即時生成！
        if (!data || !data.threads_post) {
            data = generatePostsClient(state.currentProduct, style, customPrompt, state.currentAccountId);
        }

        renderGeneratedResults(data);

        // 履歴に追加
        const acc = getCurrentAccount();
        const historyItem = {
            id: 'hist-' + Date.now(),
            timestamp: new Date().toLocaleString('ja-JP'),
            account_id: state.currentAccountId,
            account_name: acc ? acc.name : 'アカウント',
            product_title: state.currentProduct.title,
            product_asin: state.currentProduct.asin,
            product_image: state.currentProduct.image_url || '',
            affiliate_url: state.currentProduct.affiliate_url,
            threads_post: data.threads_post,
            posted: false
        };
        state.history.unshift(historyItem);
        if (state.history.length > 50) state.history = state.history.slice(0, 50);
        renderHistory();

        showToast('Threads用投稿文の生成が完了しました！✨');
    } catch (e) {
        console.error('generatePosts error:', e);
        // 万が一の例外時も絶対に止めず直接表示
        const fallback = generatePostsClient(state.currentProduct, style, customPrompt, state.currentAccountId);
        renderGeneratedResults(fallback);
        showToast('Threads用投稿文を生成しました！✨');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = origHtml;
            refreshIcons();
        }
    }
}

function renderGeneratedResults(data) {
    const section = document.getElementById('results-section');
    const threadsContent = document.getElementById('textarea-threads');
    if (threadsContent) threadsContent.value = data.threads_post || data.x_post || '';
    updateCharCount('textarea-threads', 'threads-char-count', 500);

    // ── 🏷️ ハッシュタグパネル更新 ──
    renderHashtagPanel();

    if (section) {
        section.classList.remove('hidden');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ── 🏷️ ハッシュタグパネル ────────────────────────────────────────────────────
function renderHashtagPanel() {
    const panel = document.getElementById('hashtag-panel');
    if (!panel) return;
    const genre = getCurrentGenre();
    const tags = HASHTAG_PRESETS[genre.id] || HASHTAG_PRESETS.cosme_20s || [];

    panel.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <i data-lucide="hash" class="w-3.5 h-3.5 text-purple-500"></i>
                ハッシュタグを追加（クリックで末尾に挿入）
            </span>
            <button type="button" onclick="addAllHashtags()" class="text-[11px] font-bold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-lg border border-purple-200 transition cursor-pointer">
                全タグをまとめて追加
            </button>
        </div>
        <div class="flex flex-wrap gap-1.5">
            ${tags.map(tag => `
                <button type="button" onclick="insertHashtag('${escapeHtml(tag)}')"
                    class="text-[11px] px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 hover:border-purple-400 rounded-full transition cursor-pointer font-medium">
                    ${escapeHtml(tag)}
                </button>`).join('')}
        </div>`;
    refreshIcons();
}

function insertHashtag(tag) {
    const ta = document.getElementById('textarea-threads');
    if (!ta) return;
    const current = ta.value;
    // 重複チェック
    if (current.includes(tag)) {
        showToast(`${tag} は既に入力されています`);
        return;
    }
    ta.value = current + (current && !current.endsWith('\n') && !current.endsWith(' ') ? ' ' : '') + tag;
    updateCharCount('textarea-threads', 'threads-char-count', 500);
    showToast(`${tag} を追加しました`);
}

function addAllHashtags() {
    const ta = document.getElementById('textarea-threads');
    if (!ta) return;
    const genre = getCurrentGenre();
    const tags = HASHTAG_PRESETS[genre.id] || HASHTAG_PRESETS.cosme_20s || [];
    const current = ta.value;
    
    // まだ含まれていないタグだけを抽出して最大10個以内を維持
    const newTags = tags.filter(tag => !current.includes(tag));
    if (newTags.length === 0) {
        showToast('ハッシュタグはすべて追加済みです');
        return;
    }
    
    const tagStr = (current.endsWith('\n') ? '' : '\n') + newTags.join(' ');
    ta.value = current.trimEnd() + tagStr;
    updateCharCount('textarea-threads', 'threads-char-count', 500);
    showToast(`${newTags.length}件のハッシュタグを追加しました✨`);
}

function updateCharCount(textareaId, countSpanId, maxLimit) {
    const ta = document.getElementById(textareaId);
    const span = document.getElementById(countSpanId);
    if (!ta || !span) return;
    const len = ta.value.length;
    span.textContent = `${len} / ${maxLimit}文字`;
    if (len > maxLimit) { span.classList.add('text-rose-600', 'font-bold'); span.classList.remove('text-slate-400'); }
    else { span.classList.remove('text-rose-600', 'font-bold'); span.classList.add('text-slate-400'); }
}

function copyText(text, successMsg) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => showToast('コピーに失敗しました'));
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');
    setTimeout(() => { toast.classList.remove('opacity-100'); toast.classList.add('opacity-0', 'pointer-events-none'); }, 2500);
}

// ── ✅ 投稿済みフラグ ─────────────────────────────────────────────────────────
async function markAsPosted(id, done) {
    try {
        await fetch(`/api/history/${id}/posted`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ done })
        });
        const item = state.history.find(h => h.id === id);
        if (item) item.posted = done;
        renderHistory();
        showToast(done ? '✅ 投稿済みにマークしました！' : '投稿済みを取り消しました');
    } catch (e) {
        showToast('エラーが発生しました');
    }
}

// ── 履歴 ─────────────────────────────────────────────────────────────────────
async function loadHistory() {
    try {
        const res = await fetch('/api/history');
        if (res.ok) { state.history = await res.json(); renderHistory(); }
    } catch (e) { console.log('History fetch error'); }
}

function renderHistory() {
    const container = document.getElementById('history-container');
    if (!container) return;
    if (!state.history.length) {
        container.innerHTML = `<div class="text-center py-6 text-slate-400 text-xs col-span-full">生成履歴はまだありません</div>`;
        return;
    }
    container.innerHTML = state.history.slice(0, 6).map(h => {
        const posted = h.posted === true;
        const borderClass = posted ? 'border-emerald-300 bg-emerald-50/40' : 'border-slate-200 bg-white';
        return `
        <div class="rounded-xl p-3.5 border ${borderClass} shadow-2xs space-y-2 text-xs transition-all">
            <div class="flex items-center justify-between pb-1 border-b border-slate-100">
                <span class="font-bold text-pink-700 truncate max-w-[140px]">${escapeHtml(h.account_name)}</span>
                <div class="flex items-center gap-1.5">
                    ${posted ? '<span class="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full border border-emerald-200">投稿済み ✅</span>' : ''}
                    <span class="text-[10px] text-slate-400">${escapeHtml(h.timestamp)}</span>
                </div>
            </div>
            <p class="font-semibold text-slate-800 line-clamp-1">${escapeHtml(h.product_title)}</p>
            <p class="text-slate-500 font-mono text-[11px] bg-slate-50 p-2 rounded line-clamp-2">${escapeHtml(h.threads_post || h.x_post)}</p>
            <div class="flex justify-between items-center pt-1">
                <button onclick="markAsPosted('${h.id}', ${!posted})"
                    class="${posted ? 'text-slate-400 hover:text-slate-600' : 'text-emerald-600 hover:text-emerald-700 font-semibold'} text-[11px] flex items-center gap-1 cursor-pointer transition">
                    <i data-lucide="${posted ? 'x-circle' : 'check-circle-2'}" class="w-3 h-3"></i>
                    ${posted ? '投稿済みを取り消す' : '✅ 投稿済みにする'}
                </button>
                <button onclick="restoreHistory('${h.id}')" class="text-pink-600 hover:text-pink-700 font-semibold text-[11px] flex items-center gap-1 cursor-pointer">
                    <i data-lucide="rotate-ccw" class="w-3 h-3"></i> 投稿文を再表示
                </button>
            </div>
        </div>`;
    }).join('');
    refreshIcons();
}

function restoreHistory(id) {
    const h = state.history.find(item => item.id === id);
    if (!h) return;
    state.currentProduct = { asin: h.product_asin, title: h.product_title, price: h.product_price, image_url: h.product_image, affiliate_url: h.affiliate_url, features: [] };
    renderProductSection(state.currentProduct);
    renderGeneratedResults({ threads_post: h.threads_post || h.x_post });
}

// ── 📅 スケジュールモーダル ──────────────────────────────────────────────────
async function loadSchedule() {
    try {
        const res = await fetch('/api/schedule');
        if (res.ok) { state.schedule = await res.json(); }
    } catch (e) { console.log('Schedule fetch error'); }
}

function openScheduleModal() {
    const modal = document.getElementById('schedule-modal');
    if (!modal) return;

    // アカウント選択プルダウンを動的生成
    const accSelect = document.getElementById('schedule-account-select');
    if (accSelect) {
        accSelect.innerHTML = state.accounts.map(acc =>
            `<option value="${acc.id}" ${acc.id === state.currentAccountId ? 'selected' : ''}>${escapeHtml(acc.name)}</option>`
        ).join('');
    }

    // 今日の日付をデフォルト
    const dateInput = document.getElementById('schedule-date-input');
    if (dateInput && !dateInput.value) {
        const today = new Date();
        dateInput.value = today.toISOString().split('T')[0];
    }

    renderScheduleList();
    modal.classList.remove('hidden');
    refreshIcons();
}

function closeScheduleModal() {
    const modal = document.getElementById('schedule-modal');
    if (modal) modal.classList.add('hidden');
}

async function addScheduleItem() {
    const accSelect = document.getElementById('schedule-account-select');
    const dateInput = document.getElementById('schedule-date-input');
    const memoInput = document.getElementById('schedule-product-memo');
    const noteInput = document.getElementById('schedule-note-input');

    const accountId = accSelect?.value || state.currentAccountId;
    const scheduledDate = dateInput?.value || '';
    const productMemo = memoInput?.value.trim() || '';
    const memo = noteInput?.value.trim() || '';

    if (!scheduledDate || !productMemo) {
        showToast('日付と商品メモを入力してください');
        return;
    }

    try {
        const res = await fetch('/api/schedule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account_id: accountId, product_memo: productMemo, scheduled_date: scheduledDate, memo })
        });
        if (res.ok) {
            const item = await res.json();
            state.schedule.push(item);
            state.schedule.sort((a, b) => a.scheduled_date.localeCompare(b.scheduled_date));
            if (memoInput) memoInput.value = '';
            if (noteInput) noteInput.value = '';
            renderScheduleList();
            showToast('📅 予定を追加しました！');
        }
    } catch (e) { showToast('エラーが発生しました'); }
}

async function toggleScheduleDone(id, done) {
    try {
        await fetch(`/api/schedule/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ done }) });
        const item = state.schedule.find(s => s.id === id);
        if (item) item.done = done;
        renderScheduleList();
        showToast(done ? '✅ 完了しました！' : '未完了に戻しました');
    } catch (e) { showToast('エラーが発生しました'); }
}

async function deleteScheduleItem(id) {
    if (!confirm('この予定を削除しますか？')) return;
    try {
        await fetch(`/api/schedule/${id}`, { method: 'DELETE' });
        state.schedule = state.schedule.filter(s => s.id !== id);
        renderScheduleList();
        showToast('予定を削除しました');
    } catch (e) { showToast('エラーが発生しました'); }
}

function renderScheduleList() {
    const container = document.getElementById('schedule-list');
    if (!container) return;
    if (!state.schedule.length) {
        container.innerHTML = `<div class="text-center py-6 text-slate-400 text-xs">予定はまだありません</div>`;
        return;
    }
    const today = new Date().toISOString().split('T')[0];
    container.innerHTML = state.schedule.map(s => {
        const acc = state.accounts.find(a => a.id === s.account_id);
        const accName = acc ? acc.name : s.account_id;
        const isPast = s.scheduled_date < today && !s.done;
        const rowClass = s.done ? 'bg-emerald-50 border-emerald-200 opacity-70' : isPast ? 'bg-rose-50 border-rose-200' : 'bg-white border-slate-200';
        const dateLabel = formatDate(s.scheduled_date);
        return `
        <div class="flex items-center gap-2 p-3 rounded-xl border ${rowClass} transition-all text-xs">
            <div class="shrink-0 text-center min-w-[48px]">
                <div class="font-bold text-slate-700 text-[11px]">${dateLabel}</div>
                ${isPast ? '<div class="text-[9px] text-rose-500 font-bold">期限切れ</div>' : ''}
            </div>
            <div class="flex-1 min-w-0">
                <div class="font-bold text-slate-800 truncate">${escapeHtml(s.product_memo)}</div>
                <div class="text-[11px] text-slate-500 truncate">${escapeHtml(accName)}</div>
                ${s.memo ? `<div class="text-[10px] text-slate-400 mt-0.5 italic">${escapeHtml(s.memo)}</div>` : ''}
            </div>
            <div class="flex items-center gap-1 shrink-0">
                ${s.done
                    ? `<button onclick="toggleScheduleDone('${s.id}', false)" class="text-[11px] text-slate-500 hover:text-slate-700 px-2 py-1 rounded border border-slate-200 bg-white cursor-pointer transition">取消</button>`
                    : `<button onclick="toggleScheduleDone('${s.id}', true)" class="text-[11px] text-emerald-600 hover:text-emerald-800 px-2 py-1 rounded border border-emerald-300 bg-emerald-50 font-bold cursor-pointer transition">完了</button>`
                }
                <button onclick="deleteScheduleItem('${s.id}')" class="text-[11px] text-rose-500 hover:text-rose-700 px-2 py-1 rounded border border-rose-200 bg-rose-50 cursor-pointer transition">削除</button>
            </div>
        </div>`;
    }).join('');
    refreshIcons();
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const d = new Date(dateStr + 'T00:00:00');
        const days = ['日', '月', '火', '水', '木', '金', '土'];
        return `${(d.getMonth() + 1)}/${d.getDate()}(${days[d.getDay()]})`;
    } catch { return dateStr; }
}

// ── 設定モーダル ─────────────────────────────────────────────────────────────
function openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;
    const keyInput = document.getElementById('input-gemini-key');
    if (keyInput) keyInput.value = state.apiKey || '';
    renderSettingsAccounts();
    modal.classList.remove('hidden');
    refreshIcons();
}

function closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.add('hidden');
}

function renderSettingsAccounts() {
    const container = document.getElementById('accounts-list');
    if (!container) return;
    container.innerHTML = state.accounts.map((acc, idx) => `
        <div class="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-xs">${idx + 1}</span>
                    <span class="font-bold text-slate-800 text-sm">${escapeHtml(acc.name)}</span>
                </div>
                ${state.accounts.length > 1 ? `<button type="button" onclick="deleteAccount('${acc.id}')" class="text-rose-500 hover:text-rose-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i> 削除</button>` : ''}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-semibold text-slate-600 mb-1">表示用アカウント名</label>
                    <input type="text" value="${escapeHtml(acc.name)}" onchange="updateAccount('${acc.id}', 'name', this.value)"
                        class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
                </div>
                <div>
                    <label class="block text-[11px] font-semibold text-slate-600 mb-1">ログイン用Gmail / 管理ID</label>
                    <input type="text" value="${escapeHtml(acc.internal_name || '')}" onchange="updateAccount('${acc.id}', 'internal_name', this.value)"
                        class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-semibold text-slate-600 mb-1">アソシエイトタグ</label>
                    <input type="text" value="${escapeHtml(acc.tag)}" onchange="updateAccount('${acc.id}', 'tag', this.value)"
                        class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-pink-600 focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
                </div>
                <div>
                    <label class="block text-[11px] font-semibold text-slate-600 mb-1">Threads ユーザー名 (例: miyu_cosme20)</label>
                    <input type="text" value="${escapeHtml(acc.threads_handle || '')}" onchange="updateAccount('${acc.id}', 'threads_handle', this.value);"
                        placeholder="ユーザー名 (任意)"
                        class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
                </div>
            </div>
            <div>
                <label class="block text-[11px] font-semibold text-slate-600 mb-1">キャラ設定・専用プロンプト（AIへの個別指示）</label>
                <textarea rows="2" onchange="updateAccount('${acc.id}', 'prompt', this.value)"
                    class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-sans focus:ring-2 focus:ring-pink-500 focus:outline-none"
                >${escapeHtml(acc.prompt)}</textarea>
            </div>
        </div>`).join('');
    refreshIcons();
}

function updateAccount(id, field, value) {
    const acc = state.accounts.find(a => a.id === id);
    if (acc) acc[field] = value;
}

function addNewAccount() {
    const newId = 'acc-' + Date.now();
    state.accounts.push({ id: newId, name: '💄 新規Threadsアカウント', internal_name: 'example@gmail.com', genre: 'cosme_20s', threads_handle: '', tag: 'papasprint-22', prompt: 'あなたはコスメ愛用者目線で熱量高くレビューするアカウントです。', default_style: 'review' });
    renderSettingsAccounts();
}

function deleteAccount(id) {
    if (state.accounts.length <= 1) { alert('最低1つのアカウントが必要です。'); return; }
    if (confirm('このアカウントを削除しますか？')) {
        state.accounts = state.accounts.filter(a => a.id !== id);
        if (state.currentAccountId === id) state.currentAccountId = state.accounts[0].id;
        renderSettingsAccounts();
    }
}

async function saveSettings() {
    const keyInput = document.getElementById('input-gemini-key');
    if (keyInput) state.apiKey = keyInput.value.trim();
    saveLocalConfig();
    try {
        await fetch('/api/config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ gemini_api_key: state.apiKey, genres: state.genres, accounts: state.accounts }) });
    } catch (e) { console.warn('Server config save failed, saved locally'); }
    renderAccountTabs();
    renderAccountDropdown();
    updateActiveAccountDisplay();
    renderDailySuggestions();
    closeSettingsModal();
    showToast('設定を正常に保存しました！');
}

function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}


// ── 📊 Amazon売上分析 ＆ 商品選定最適化 ─────────────────────────────────────────
function initAnalytics() {
    const btnOpen = document.getElementById('btn-open-analytics');
    const btnClose = document.getElementById('btn-close-analytics');
    const btnCloseFooter = document.getElementById('btn-close-analytics-footer');
    const modal = document.getElementById('analytics-modal');
    const dropZone = document.getElementById('csv-drop-zone');
    const fileInput = document.getElementById('input-sales-csv');

    if (btnOpen) {
        btnOpen.addEventListener('click', (e) => {
            e.preventDefault();
            openAnalyticsModal();
        });
    }

    if (btnClose) btnClose.addEventListener('click', closeAnalyticsModal);
    if (btnCloseFooter) btnCloseFooter.addEventListener('click', closeAnalyticsModal);

    if (dropZone && fileInput) {
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-emerald-500', 'bg-emerald-100/50');
        });
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-emerald-500', 'bg-emerald-100/50');
        });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-emerald-500', 'bg-emerald-100/50');
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                uploadSalesCSV(e.dataTransfer.files[0]);
            }
        });
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                uploadSalesCSV(e.target.files[0]);
            }
        });
    }
}

async function openAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    refreshIcons();
    await loadSalesAnalytics();
}

function closeAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (modal) modal.classList.add('hidden');
}

async function uploadSalesCSV(file) {
    if (!file) return;
    showToast('CSVファイルを解析中...');

    try {
        const res = await fetch('/api/upload-sales-csv', {
            method: 'POST',
            body: file
        });
        if (!res.ok) throw new Error('アップロード失敗');
        const data = await res.json();
        renderSalesAnalytics(data);
        showToast(`✅ ${data.summary.total_products}件の売上データを解析しました！`);
    } catch (e) {
        console.error(e);
        showToast('CSV解析エラー: フォーマットを確認してください');
    }
}

async function loadSalesAnalytics() {
    try {
        const res = await fetch('/api/sales-analytics');
        if (res.ok) {
            const data = await res.json();
            renderSalesAnalytics(data);
        }
    } catch (e) {
        console.log('No existing sales data');
    }
}

function renderSalesAnalytics(data) {
    const statEarnings = document.getElementById('stat-total-earnings');
    const statItems = document.getElementById('stat-total-items');
    const statProducts = document.getElementById('stat-total-products');
    const tbody = document.getElementById('sales-ranking-tbody');

    if (!data || !data.items || data.items.length === 0) {
        if (statEarnings) statEarnings.textContent = '¥0';
        if (statItems) statItems.textContent = '0 個';
        if (statProducts) statProducts.textContent = '0 種類';
        if (tbody) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-8 text-slate-400">CSVファイルをアップロードすると、売れ筋ランキングが表示されます</td></tr>`;
        }
        return;
    }

    if (statEarnings) statEarnings.textContent = `¥${Math.round(data.summary.total_earnings).toLocaleString()}`;
    if (statItems) statItems.textContent = `${data.summary.total_items} 個`;
    if (statProducts) statProducts.textContent = `${data.summary.total_products} 種類`;

    if (tbody) {
        tbody.innerHTML = data.items.slice(0, 20).map((item, idx) => {
            const rankBadge = idx === 0 
                ? '<span class="w-6 h-6 rounded-full bg-amber-400 text-white font-bold inline-flex items-center justify-center text-xs shadow-xs">1</span>'
                : idx === 1
                ? '<span class="w-6 h-6 rounded-full bg-slate-300 text-slate-700 font-bold inline-flex items-center justify-center text-xs shadow-xs">2</span>'
                : idx === 2
                ? '<span class="w-6 h-6 rounded-full bg-amber-600 text-white font-bold inline-flex items-center justify-center text-xs shadow-xs">3</span>'
                : `<span class="text-slate-500 font-semibold">${idx + 1}</span>`;

            return `
            <tr class="hover:bg-slate-50/80 transition-colors">
                <td class="py-3 px-3 text-center">${rankBadge}</td>
                <td class="py-3 px-3">
                    <p class="font-bold text-slate-800 line-clamp-1">${escapeHtml(item.title)}</p>
                    <span class="text-[10px] text-slate-400 font-mono">${escapeHtml(item.asin || 'ASINなし')}</span>
                </td>
                <td class="py-3 px-3 text-center font-bold text-blue-600">${item.qty} 個</td>
                <td class="py-3 px-3 text-right font-bold text-emerald-600 font-mono">¥${Math.round(item.earnings).toLocaleString()}</td>
                <td class="py-3 px-3 text-center">
                    <button type="button" onclick="createPostFromSalesItem('${escapeHtml(item.title)}', '${escapeHtml(item.asin)}')"
                        class="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-2.5 py-1.5 rounded-lg text-[11px] font-bold shadow-xs transition cursor-pointer flex items-center justify-center gap-1 mx-auto">
                        <i data-lucide="sparkles" class="w-3 h-3"></i>
                        <span>この商品で投稿</span>
                    </button>
                </td>
            </tr>`;
        }).join('');
    }

    refreshIcons();
}

function createPostFromSalesItem(title, asin) {
    closeAnalyticsModal();
    const input = document.getElementById('input-url');
    if (input) {
        input.value = asin && asin !== 'ASINなし' ? asin : title;
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        fetchProduct();
        showToast(`「${title.slice(0, 15)}...」を投稿作成フォームにセットしました！✨`);
    }
}


// 🌐 特定アカウントの専用Chromeを手動起動（初回ログイン用・確認用）
async function launchChromeProfile(accountId) {
    const acc = state.accounts.find(a => a.id === accountId) || getCurrentAccount();
    try {
        const res = await fetch('/api/open-threads-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account_id: accountId, post_text: '' })
        });
        if (res.ok) {
            showToast(`🚀 【${acc.name}】専用Chromeを起動しました！`);
        } else {
            showToast('Chromeの起動に失敗しました（ローカルPCのみ対応）');
        }
    } catch (e) {
        showToast('専用Chromeの起動はローカルPCで実行してください');
    }
}
