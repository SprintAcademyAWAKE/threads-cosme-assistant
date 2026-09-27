
// ── 🚀 完全クライアント完結型（Vercel・スマホ・オフライン 100%保証） ───────────

// クライアント側 Amazon URL / ASIN パーサー

// ==========================================
// 💬 日常・共感つぶやき データベース (年代・属性別 1000通り以上のバリエーション)
// ==========================================
const CASUAL_TOPICS_DB = {
    cosme_20s: [
        {
            hooks: [
                "金曜の夜、どれだけ眠くてもクレンジングだけは気絶する前にやれって過去の自分に叫びたい😇",
                "どれだけ疲れて帰ってきても、メイク落とす前の自分に『絶対に今落とせ！』って言いたい金曜日。",
                "【全ズボラ女子へ】帰宅してベッドにダイブする前にクレンジングだけは死守して…！😭"
            ],
            body: "疲れて帰ってきた時、メイク落とすのが世界で一番重労働に感じるの私だけ…？\n『ちょっとだけスマホ見てから…』って思ったら最後、翌朝起きて絶望するやつ。\n\n最近は帰宅したら靴脱ぐより先に拭き取りクレンジングで即オフする技を覚えたんだけど、翌朝の肌の治安が劇的に変わった…！",
            questions: [
                "みんな帰宅後すぐメイク落とす派？それともお風呂まで我慢する派？？🥹",
                "疲れた日のメイク落とし、みんなはどうやって乗り切ってる？？",
                "同じ経験あるズボラ民いたらコメントで教えて〜！🙋‍♀️"
            ],
            tags: ["#20代メイク", "#垢抜け", "#スキンケア", "#コスメ好きさんと繋がりたい", "#あるある"]
        },
        {
            hooks: [
                "コスメカウンター行くの、いまだにちょっと緊張しちゃうの私だけ…？🥺笑",
                "デパコスのコスメカウンターって、何歳になったら堂々と入れるようになるの…？笑",
                "【コスメオタクあるある】BAさんが綺麗すぎてカウンター前で急に挙動不審になるやつ。"
            ],
            body: "BAさんみんな美しすぎて圧倒されるし、見てるだけの時『見てるだけで…』って言うのめちゃくちゃ勇気いるよね。\n\nだから結局ドラコスとかロフトで1時間くらい延々とテスター試して『これデパコス級じゃん！』って掘り出し物見つけた時が一番テンション上がる🫶✨\nプチプラの安心感がやっぱり落ち着く…！",
            questions: [
                "みんなはデパコス派？プチプラ派？おすすめのドラコスあったら教えてほしい…！",
                "コスメカウンター緊張する同士いる？？コメントで教えて🥹",
                "最近ドラコスで感動したアイテムあったら教えて〜！"
            ],
            tags: ["#プチプラコスメ", "#ドラコス", "#コスメオタク", "#垢抜けメイク", "#20代OL"]
        },
        {
            hooks: [
                "給料日前なのに新作コスメ見に行ったら完全に負け確でした😇💸",
                "『見るだけ、見るだけ…』ってドラッグストア寄った5分後の私へ。レジに並ぶな。笑",
                "給料日前にコスメ欲が大爆発する現象、誰か止めてください…！💸"
            ],
            body: "『今月は節約するぞ！』って決めてたのに、限定色のアイシャドウと目が合っちゃって気づいたらお会計してた。\n\nでも新しいコスメ買った翌朝のメイクの楽しさって何にも代えられないよね…！\n新しいリップ塗るだけで、憂鬱な月曜日の出勤もちょっとだけモチベ上がる気がする🫶✨",
            questions: [
                "今月すでにコスメに課金しすぎた人、仲間集まれ〜！🙋‍♀️笑",
                "みんな最近買ったお気に入りコスメ教えて！参考にしたい🥹",
                "コスメ買った翌朝のメイク、いつもより気合い入るよね？？"
            ],
            tags: ["#コスメ購入品", "#新作コスメ", "#自分へのご褒美", "#20代女子", "#プチプラ"]
        },
        {
            hooks: [
                "友達から『なんか最近垢抜けた？？』って言われた時、心の中で全力ガッツポーズした😭✨",
                "垢抜けたい20代女子へ。デパコス買い漁る前にこれだけは試してみてほしい…！",
                "『なんか雰囲気変わって可愛くなった！』って褒められたきっかけの話。"
            ],
            body: "ベースメイクを厚塗りするのやめて、ツヤ下地＋コンシーラーだけにしたら急に透明感出たみたい…！\n\n高いコスメを買い揃えるより、自分の肌に合う『引き算メイク』を覚える方が何倍も垢抜けの近道だったかも。\n毎日研究して試行錯誤した努力が報われる瞬間って本当に嬉しい🫶",
            questions: [
                "みんなが垢抜けのために『これやって一番効果あった！』ってこと教えてほしい🥹",
                "垢抜けのきっかけになったコスメあったら知りたい…！",
                "ベースメイク引き算派の人いる？？感想教えて！"
            ],
            tags: ["#垢抜けの近道", "#ベースメイク", "#透明感メイク", "#垢抜けたい", "#メイク初心者"]
        },
        {
            hooks: [
                "メイクブラシとパフを洗うの、永遠に先延ばしにしちゃうズボラ女子です🙋‍♀️笑",
                "『今週末こそ絶対にブラシ洗う！』って決めてたのに、気づいたら日曜の夜でした😇",
                "パフとブラシ、最後に洗ったのいつだっけ…？って記憶喪失になるやつ。"
            ],
            body: "汚れたパフ使い続けると肌荒れの原因になるのは百も承知なんだけど、乾かす場所とか干し方考えるとどうしてもめんどくささが勝っちゃう…！\n\n最近は使い捨てパフを大容量パックで買って、数回でポイする運用にしたら一気にストレスフリーになったので全国のズボラ民に全力でおすすめしたいです…！",
            questions: [
                "パフとブラシ、みんな正直どのくらいの頻度で洗ってる…？🫣",
                "使い捨てパフ派の人いる？？おすすめあったら教えて！",
                "ズボラでも続けられるメイクツールの洗い方あったら知りたい🥹"
            ],
            tags: ["#ズボラ美容", "#コスメ好きさんと繋がりたい", "#メイク道具", "#女子大生", "#OLの日常"]
        },
        {
            hooks: [
                "SNSでバズって買ったけど『あれ…私には合わないかも？』ってなったコスメ、ありません？🥲",
                "バズコスメをそのまま真似して大失敗した20代前半の思い出…笑",
                "バズりコスメ信者だった私が、自分の顔立ちに合うコスメ選びに目覚めた話。"
            ],
            body: "インフルエンサーさんが絶賛してても、パーソナルカラーや肌質が違うと仕上がりが全然違ったりするよね。\n\n『みんなが良いって言ってるから』じゃなくて、『今の自分の肌悩みを解決してくれるか』で選ぶようになってからコスメの失敗ゼロになった！\n自分にぴったりの名品に出会えたときの感動は格別🫶",
            questions: [
                "バズったけど自分には合わなかったコスメ、正直あった人いる？？",
                "コスメ選びで一番失敗しない基準って何だと思う？🥹",
                "みんなは何を基準に新作コスメ買ってる？？"
            ],
            tags: ["#バズコスメ", "#コスメレビュー", "#自分磨き", "#パーソナルカラー", "#垢抜け"]
        },
        {
            hooks: [
                "朝起きてメイクのノリが最悪な日のテンションの下がり方、エグくないですか😇",
                "メイクのノリが悪い日って、もうその日1日の運勢凶になった気分になる…笑",
                "ファンデがモロモロして朝から発狂しそうになったことある人集まれ〜！🙋‍♀️"
            ],
            body: "スキンケアと下地の相性が悪くてモロモロが出たり、粉吹きした時のあの絶望感…。\n朝時間ないのに全部拭き取ってやり直すハメになったこと何回もある🥲\n\n朝のスキンケアは『水分たっぷり、油分は薄く、しっかりハンドプレスで馴染ませてからベースに入る』を徹底したらモロモロ事故がゼロになった！急がば回れですね✨",
            questions: [
                "ファンデが綺麗に乗らない朝、みんなはどうやってリカバリーしてる？🥹",
                "朝のメイク前スキンケア、こだわりあったら教えてほしい！",
                "モロモロ出たときの絶望感、共感してくれる人いる…？笑"
            ],
            tags: ["#メイク前スキンケア", "#ベースメイクのコツ", "#モロモロ対策", "#朝のメイク", "#美肌作り"]
        },
        {
            hooks: [
                "電車の窓に映る自分の前髪とリップの崩れにギョッとした帰りの電車🚃笑",
                "退勤時の電車の窓ガラス、現実を突きつけてくるのやめてほしい…！😇",
                "夕方の電車の窓に映る顔、朝の自分と別人すぎて笑えないやつ。"
            ],
            body: "マスク外した瞬間リップが全部消えてたり、Tゾーンがテカテカになってたり…。\n『今日この顔で1日過ごしてたの…！？』って恥ずかしくなる瞬間あるよね。\n\nティントリップ＋キープミストの組み合わせにしてから退勤後も血色キープできるようになって感動してる🥹✨20代OLの強い味方！",
            questions: [
                "仕事終わりのメイク崩れ、みんな何が一番気になる？？",
                "マスクでも落ちない最強リップあったら教えてほしい…！💄",
                "電車の窓トラップに引っかかったことある人いいねして😂"
            ],
            tags: ["#メイク崩れ防止", "#オフィスメイク", "#リップティント", "#OLあるある", "#20代女子"]
        }
    ],

    cosme_30s: [
        {
            hooks: [
                "夕方17時、オフィスのトイレの鏡に映る自分に『えっ…誰…？』って絶望する現象に名前つけたい😇",
                "夕方になると顔が急に『お疲れモード全開』になるの、30代の通過儀礼ですか…？笑",
                "朝の自分と夕方17時の自分が別人すぎて、会社の鏡を見るのが怖いアラサーです🙋‍♀️"
            ],
            body: "朝はバッチリ決まってたはずなのに、夕方になるとくすみと乾燥のダブルパンチで顔全体がどんより…。\n20代の頃は夕方でもあぶらとり紙だけで乗り切れたのに、30代はお直しの保湿ミストと美容液スティックが必須装備になりました。\nオフィスのエアコンの乾燥、本当に大人の肌に容赦ないよね🥲",
            questions: [
                "30代の働く女子のみんな、夕方のメイク直しポーチに何入れてるか教えてほしい…！",
                "夕方のどんより顔、どうやって復活させてる？？おすすめ裏技求む🥹",
                "同じく夕方の鏡に絶望したことある人、コメントで教えて〜！"
            ],
            tags: ["#30代美容", "#オフィスメイク", "#夕方のくすみ", "#乾燥肌対策", "#働く女子"]
        },
        {
            hooks: [
                "20代の徹夜と30代の寝不足、肌への出方が違いすぎて泣けてくる🥲",
                "30代になってから、寝不足がダイレクトに『毛穴』と『くすみ』に出るの残酷すぎる…笑",
                "20代の頃の自分に『今のうちに早く寝る習慣つけろ』と本気で助言したい30代です。"
            ],
            body: "20代の頃はちょっと夜更かししても翌朝ファンデ塗れば余裕で誤魔化せたのに、30代は寝不足がそのまま肌のしぼみ感と毛穴の開きに直結する…！\n\nどんなに高級な美容液を塗るよりも、とにかく7時間しっかり寝るのが最強のエイジングケアだって最近痛感してます🌙\n自分の身体と肌の声をちゃんと聞いてあげる年齢になりましたね。",
            questions: [
                "忙しい日の翌朝、肌を速攻で復活させる愛用アイテムあったら教えてください🥹",
                "睡眠不足の時の肌治安、みんなはどうやってキープしてる？？",
                "共感してくれた同世代の方、ぜひ繋がりましょ〜！🫶"
            ],
            tags: ["#30代の肌悩み", "#アラサー美容", "#毛穴ケア", "#睡眠大事", "#すっぴん美肌"]
        },
        {
            hooks: [
                "スキンケア選ぶ時、ブランド名より『成分表』をガン見するようになった30代女子です🙋‍♀️",
                "コスメ売り場で裏の全成分表示を拡大して熟読してる人、だいたい同世代説。笑",
                "ビタミンC、レチノール、ナイアシンアミド…30代になって成分マニアが加速しました。"
            ],
            body: "『なんとなく良さそう』なイメージ買いを卒業して、『今の自分の毛穴・くすみにはどの有効成分が必要か？』を理系のように分析してスキンケアを組むのが楽しすぎる。\n\nお肌の曲がり角を実感したからこそ、しっかりエビデンスのある成分に自己投資したいお年頃です🫶✨肌は手をかけた分だけちゃんと応えてくれる！",
            questions: [
                "みんなが今一番信頼して投資してる美容成分は何ですか？？（私はビタミンC信者🍋）",
                "30代になってからスタメン入りした成分あったら知りたい！",
                "成分買い派の人、コメントで語り合いたいです🥹✨"
            ],
            tags: ["#成分重視", "#スキンケアマニア", "#ビタミンC", "#毛穴レス", "#アラサー女子"]
        },
        {
            hooks: [
                "ファンデーションを『カバー力重視』から『薄膜・崩れなさ重視』に変えたら劇的に褒められた話✨",
                "30代のファンデ選び、『隠そうとすればするほど老け見えする』罠に気づいた日。",
                "厚塗りファンデを卒業してノーファンデ風ベースに変えたら、肌を褒められるようになった理由。"
            ],
            body: "毛穴やシミを隠そうとファンデを重ねれば重ねるほど、時間が経った時に毛穴落ちして余計目立つことに気づいた30代前半。\n\n思い切ってトーンアップ下地＋部分コンシーラー＋微粒子パウダーだけにしたら、『ファンデ何使ってるの？肌綺麗！』って後輩に聞かれるようになった😭\n大人の肌は『隠す』より『ツヤで飛ばす』のが正解だった…！",
            questions: [
                "ファンデ厚塗り卒業した人いる？？薄膜ベースのおすすめあったら知りたい🥹",
                "30代になってベースメイクどう変わったか教えてほしい！",
                "ノーファンデ派・薄づき派の方、おすすめ下地あったらぜひ教えてください✨"
            ],
            tags: ["#大人のベースメイク", "#ノーファンデ", "#毛穴カバー", "#上品メイク", "#30代コスメ"]
        },
        {
            hooks: [
                "金曜の夜、お風呂上がりに贅沢シートマスクしながら一人晩酌するのが今週の最高のご褒美🍷✨",
                "1週間働いた肌と心を癒す、アラサー女子の金曜夜ルーティン。",
                "華金の飲み会も楽しいけど、家でじっくり自分メンテする夜が一番満たされる30代。"
            ],
            body: "オフィスの人間関係や仕事のプレッシャーで凝り固まった1週間。\n金曜の夜だけはちょっと良いシートマスクを貼って、好きな音楽を流しながら温かいハーブティーかワインを飲む時間が何よりの贅沢。\n\n自分を丁寧に扱う時間を作ると、月曜日からの活力も全然違う！みんな今週もお疲れ様でした🫶✨",
            questions: [
                "みんなの週末の自分ご褒美ルーティン、何してますか？？🥰",
                "金曜夜におすすめのスペシャルケアあったら教えてほしい！",
                "今週頑張った自分を褒めてあげたい人、いいねで乾杯しましょ〜！🍷"
            ],
            tags: ["#自分磨き", "#週末ルーティン", "#シートマスク", "#おうち美容", "#ご褒美時間"]
        },
        {
            hooks: [
                "高い美容液1本買うより、プチプラ化粧水を浴びるように使う方が肌潤う説、あると思います🙋‍♀️",
                "デパコス美容液に頼りきりだった私が、スキンケアの基本に立ち返った結果。",
                "【乾燥肌の結論】大人の肌に必要なのは、高い化粧品より『十分な水分量』だった話。"
            ],
            body: "どんなに高級なクリームを塗っても乾燥が治らなかったのに、ドラッグストアの大容量化粧水をコットンパックでヒタヒタにして毎日浴びるように使い始めたら、肌が内側からふっくらモチモチに復活した…！\n\nケチケチ使うデパコスより、惜しみなく使える実力派プチプラをたっぷり重ねる方が大人の肌には効く気がする✨",
            questions: [
                "化粧水は『デパコス派』？それとも『プチプラバシャバシャ派』？？",
                "コットンパック愛用してる人いる？？おすすめの化粧水教えて🥹",
                "大容量プチプラで一番好きなやつあったら知りたい！"
            ],
            tags: ["#保湿命", "#プチプラ化粧水", "#乾燥肌対策", "#コットンパック", "#美肌の秘訣"]
        }
    ],

    cosme_40s: [
        {
            hooks: [
                "ファンデを厚く塗れば塗るほどシワに入り込んで老けて見えると気づいた40代。大人の肌は『隠す』より『ツヤを仕込む』のが正解だった🌸",
                "40代のベースメイクで一番やってはいけないこと、それは『シワをファンデで埋めようとすること』でした。",
                "大人の肌にファンデの厚塗りは厳禁。ツヤと光を味方につけて若見えするベースの極意。"
            ],
            body: "目元や口元の乾燥小じわ、隠そうとファンデを重ねると夕方ひび割れみたいになっちゃうのが本当に悩みでした。\n\nカバー力よりも『高保湿なツヤ下地』で光を味方につけるようになってから、シワが自然に目立ちにくくなって若々しい印象に。\n40代からの美しさは、無理な若作りではなく『清潔感と上品なツヤ』で決まるんだと実感しています✨",
            questions: [
                "40代になってからメイク方法変えた方いますか？大人のツヤ肌作り、みんなのこだわり教えてください🌸",
                "大人のツヤ肌下地、おすすめあったらぜひ教えてほしいです！",
                "共感してくださる同世代の方、コメントいただけたら励みになります✨"
            ],
            tags: ["#40代メイク", "#エイジングケア", "#大人のツヤ肌", "#上品メイク", "#大人の品格"]
        },
        {
            hooks: [
                "最近、周りから『なんか疲れてる…？』って聞かれることが増えて地味にショックだった話🥲",
                "しっかり寝てるのに『体調大丈夫？』と心配される現象…原因は肌のハリ不足でした。",
                "【40代のお疲れ顔対策】『疲れて見える』と言われなくなったメイクの秘密。"
            ],
            body: "睡眠も取ってるし元気なのに、夕方になると頬の位置が下がって見えるし、顔全体のハリ不足が深刻…！\n\n『疲れて見える最大の原因は、肌のツヤと血色感の不足』だと気づいてから、チークの位置をほんの少し高めにしてハイライトをふんわり仕込むようにしたらパッと明るい表情に復活しました。\n年齢を受け入れつつ、品よく輝く工夫を楽しみたいですね🌸",
            questions: [
                "年齢によるお疲れ顔対策、皆様どんな工夫をされていますか？？",
                "40代におすすめの血色感チークやハイライトあったら教えてください🌸",
                "同じく『疲れてる？』攻撃に悩んだことある人、お話ししましょ〜！"
            ],
            tags: ["#アラフォー美容", "#40代美容", "#ハリ不足", "#血色感", "#エイジングケア"]
        },
        {
            hooks: [
                "顔と同じスキンケアを、首元と手の甲まで塗りたくるのが日課です🙋‍♀️✨",
                "『首元と手の甲を見れば年齢がわかる』と聞いて背筋が凍った40代のあの日…笑",
                "顔だけ完璧にお手入れしてもダメ。大人の美しさは首筋と手元に出るというお話。"
            ],
            body: "顔はメイクでカバーできても、首筋や手の甲は年齢がそのまま出やすいと聞いてハッとした40代。\n\nそれ以来、化粧水や乳液、レチノール美容液を手にとったら、必ず首とデコルテ、手の甲まで伸ばしてハンドプレスするようにしています。\n『若作り』ではなく、隅々まで手入れの行き届いた『品のある大人』を目指したいですね🌸手元が潤っていると気分も上がります。",
            questions: [
                "首元や手のエイジングケア、皆様おすすめの方法や愛用クリームはありますか？？",
                "首までスキンケア塗ってる仲間いますか？ぜひ教えてください🌸",
                "大人世代のスキンケア仲間、気軽にコメントしてくださいね✨"
            ],
            tags: ["#大人のエイジングケア", "#首元ケア", "#ハンドケア", "#40代の美肌作り", "#大人の嗜み"]
        },
        {
            hooks: [
                "朝起きたときの『枕の跡』がなかなか消えなくなって、肌の弾力低下を実感した朝…笑",
                "枕の跡が午後まで残るようになって気づいた、大人のコラーゲン・エラスチンの重要性。",
                "『昔はすぐ消えたのに…！』寝起きの肌の戻りの遅さにクスッとしながらも対策始めた話。"
            ],
            body: "朝起きて鏡を見たら、頬にくっきり枕のシーツの跡が…。そして出勤時間になっても消えてない！笑\n\n肌の弾力とハリが落ちてくると戻りが遅くなるんですよね。\nそれ以来、朝のスキンケアにビタミンC誘導体とペプチドを取り入れて、優しくリフトアップマッサージをするようにしたらハリ感が復活してきました。\nクスッと笑いながらも、前向きにケアを重ねていきたいですね🌸",
            questions: [
                "枕の跡が消えにくくなった同士、いらっしゃいませんか…？笑",
                "朝のハリ感アップにおすすめのルーティンがあったら教えてください！",
                "大人の肌悩み、みんなで共有して楽しくエイジングケアしましょ〜🌸"
            ],
            tags: ["#40代スキンケア", "#ハリ弾力", "#枕の跡", "#大人美容", "#前向きエイジングケア"]
        }
    ],

    cosme_kosodate: [
        {
            hooks: [
                "朝、子どもの着替えとご飯でバタバタしてたら、自分の顔面にかける時間がリアルに1分しかなかった月曜の朝😇",
                "世の中のママたちへ。朝自分のメイクに何分かけられてますか…？私は1分です。笑",
                "『早く靴履いて〜！』と叫びながら片手でUV下地を塗りたくる、これが子育てママのリアルな朝。"
            ],
            body: "子どもに朝ごはん食べさせて、着替えさせて、連絡帳書いて…。\n気づいたら家を出る時間で、自分のメイクに使える時間はリアルに1分しか残ってない！\n\nでも1分でもトーンアップUV下地をサッと塗って眉毛だけ描いておくと、送り迎えでママ友や先生に会っても慌てずに済むから、時短コスメはもはや育児の必須装備です🥹世のママたち、毎日本当にお疲れ様です！",
            questions: [
                "朝の自分の支度時間、みんな正直何分くらいかけてる…？🫣",
                "1分で顔面を完成させるママの神コスメ、おすすめあったら教えてください！",
                "朝バタバタのママ仲間、コメントで励まし合いましょ〜！🫶"
            ],
            tags: ["#子育てママ", "#時短メイク", "#ママの朝", "#ワンオペ育児", "#時短コスメ"]
        },
        {
            hooks: [
                "抱っこ紐してると子どもが顔擦り寄せてくるから、ファンデ迷子になってパウダーしか勝たん説🥺",
                "赤ちゃんのほっぺにファンデがつくのが嫌で、リキッドファンデを完全に封印したママです。",
                "【抱っこ期ママあるある】子どもの肌に触れても安心なベースメイクを極めた結果。"
            ],
            body: "抱っこ紐の中でスヤスヤ眠る我が子、可愛いんだけど顔を服や胸元にスリスリしてくるからファンデがつかないかヒヤヒヤしてました。\n\n最近は『石鹸で落ちる低刺激UV＋サラサラのフェイスパウダー』でベース完了。\n子どもに触れても安心だし、夜もお風呂で子どもと一緒に一瞬で顔を洗えるから本当に楽ちん…！\nママの美容は『安心安全』と『洗いやすさ』が最優先ですね🫶",
            questions: [
                "抱っこ期・幼児期のママたち、ベースメイク何使ってますか？？",
                "石鹸オフコスメ愛用してるママいる？？おすすめ教えて🥹",
                "子どものスリスリ対策、みんなはどうしてる？？"
            ],
            tags: ["#石鹸オフメイク", "#抱っこ紐ママ", "#子育て美容", "#低刺激コスメ", "#すっぴん美肌"]
        },
        {
            hooks: [
                "子どもを寝かしつけた後、静まり返ったリビングでやるスキンケアが1日の中で一番の癒しタイム☕️✨",
                "怒涛のワンオペを生き延びた夜。寝かしつけ後の5分間だけが私に戻れる時間です。",
                "『今日も一日みんな無事に生き延びた！』自分を全力で褒め称えたい夜のルーティン。"
            ],
            body: "昼間はイヤイヤ期と格闘して、離乳食こぼされて、散らかった部屋を片付けて…。自分のことなんて完全に後回し。\n\nでも子どもが寝息を立てた後、温かいお茶を淹れてシートマスクを貼る5分間だけは本当に至福の時間です。\nママがご機嫌で笑顔でいるためにも、自分を労るプチご褒美時間って絶対に必要ですよね🥹今夜も全国のパパママお疲れ様でした！",
            questions: [
                "ママのみんな、夜のプチご褒美タイムに何してますか？？🥰",
                "寝かしつけ後の自分時間、みんなの楽しみ教えてほしい！",
                "今日も1日やりきったママたち、いいねで乾杯しましょ〜！☕️"
            ],
            tags: ["#ママのご褒美", "#寝かしつけ後", "#ワンオペママ", "#自分時間", "#子育ての息抜き"]
        },
        {
            hooks: [
                "久しぶりにちゃんとリップ塗ったら『ママ今日どこ行くの？』って子どもに真顔で聞かれた件😂",
                "いつもすっぴん同然だったから、ちょっとメイクしただけで家族全員に怪しまれるママです。笑",
                "リップ1本塗るだけで『ちゃんとしたお母さん』になれた気がする不思議。"
            ],
            body: "毎日バタバタで色付きリップすら塗ってなかったんだけど、ふと鏡を見たら唇の色が完全に消滅しててびっくり…。\n\nドラッグストアで血色感の出るリップクリームを買って塗ってみたら、子どもに『ママ可愛い！』って言われて胸がキュンとした😭✨\n高い化粧品じゃなくても、ほんの少し血色感を足すだけで自分の気持ちも明るくなるんだなって実感しました。",
            questions: [
                "子どもにメイク褒められたことあるママいる？？🥰",
                "ママにおすすめの荒れない血色リップあったら教えてほしい！",
                "同じようなこと家族に言われたことある人、語りましょ〜！笑"
            ],
            tags: ["#ママメイク", "#血色リップ", "#子育て日記", "#子どもの一言", "#ママも可愛くいたい"]
        },
        {
            hooks: [
                "公園遊びで日焼け止め塗り直す暇なんてないママたちへ。朝のUV対策が命運を分けます…！☀️",
                "砂場で走り回る子どもを追いかけながら日焼け止め塗り直すの、無理ゲーすぎませんか😇",
                "春夏の公園遊び、ママの紫外線対策どう乗り切ってる？？"
            ],
            body: "帽子かぶってアームカバーしてても、砂埃と子どもの追っかけで日焼け止め塗り直す時間なんて皆無！\n\nだからこそ、朝に塗る日焼け止めは『SPF50+で汗・水に強くて、白浮きしない高密着タイプ』を選ぶのが鉄則。\n公園帰りの鏡見て『焼けたかも…』って落ち込まないために、朝の仕込みだけは徹底してます！ママ友のみんな、紫外線対策一緒に頑張りましょ〜！💪",
            questions: [
                "公園遊びに最強の日焼け止め、おすすめあったら教えてほしいです！",
                "ママたちの紫外線対策グッズ、何愛用してる？？☀️",
                "週末の公園遊びでヘトヘトになったママ、お疲れ様でした！"
            ],
            tags: ["#公園遊び", "#ママの日焼け対策", "#UVケア", "#男の子ママ", "#女の子ママ"]
        }
    ]
};



// ==========================================
// 🔴 楽天アフィリエイト連携エンジン
// ==========================================
const DEFAULT_RAKUTEN_ID = '57e27f33.1497ef8f.57e27f35.8c6f1d99';

function getRakutenAffiliateUrl(keywordOrUrl, rakutenId = DEFAULT_RAKUTEN_ID) {
    const activeRakutenId = rakutenId || state.rakutenId || DEFAULT_RAKUTEN_ID;
    const text = (keywordOrUrl || '').trim();
    
    // 楽天市場の商品URLがそのまま入力されている場合
    if (text.startsWith('http') && (text.includes('rakuten.co.jp') || text.includes('item.rakuten'))) {
        return `https://hb.afl.rakuten.co.jp/ichiba/${activeRakutenId}/?pc=${encodeURIComponent(text)}`;
    }
    
    // 商品名からクリーンな検索キーワードを抽出
    const cleanTitle = text.replace(/\[.*?\]|\(.*?\)|【.*?】/g, ' ')
        .replace(/\b(ASIN|B0[A-Z0-9]{8})\b/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    const queryWords = cleanTitle.split(' ').slice(0, 3).join(' ') || text || 'コスメ';
    const searchTarget = `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(queryWords)}/`;
    return `https://hb.afl.rakuten.co.jp/ichiba/${activeRakutenId}/?pc=${encodeURIComponent(searchTarget)}`;
}


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

// ==========================================
// 🎯 7:3 黄金比率 自動判定ロジック & 日常つぶやき生成
// ==========================================

// 直近10件の履歴から、次回「日常(casual)」か「PR(pr)」かを判定
function determinePostType(accountId) {
    const accHistory = (state.history || []).filter(h => h.account_id === accountId);
    
    // 履歴が空なら、まずはフォロワー獲得のための日常つぶやきからスタート
    if (accHistory.length === 0) return 'casual';
    
    // 【最重要ルール】直前の投稿がPRなら、絶対に連続でPRにはしない（日常確定）
    const lastPost = accHistory[0];
    if (lastPost.post_type === 'pr' || (lastPost.threads_post && lastPost.threads_post.includes('#PR'))) {
        return 'casual';
    }
    
    // 直近10件のPR割合を計算
    const recent = accHistory.slice(0, 10);
    const prCount = recent.filter(h => h.post_type === 'pr' || (h.threads_post && h.threads_post.includes('#PR'))).length;
    const prRatio = prCount / recent.length;
    
    // PRが3割(30%)以上の場合は、日常を生成してバランスを整える
    if (prRatio >= 0.35) {
        return 'casual';
    }
    
    // それ以外は 70%の確率で日常、30%の確率でPR
    return Math.random() < 0.7 ? 'casual' : 'pr';
}

// 日常・共感つぶやきを生成（リンクなし・フォロワー獲得特化）
function generateCasualPostClient(genreId, customPrompt, accountId) {
    const topics = CASUAL_TOPICS_DB[genreId] || CASUAL_TOPICS_DB.cosme_20s;
    
    // 前回のインデックスと重複しないようランダム選択
    const topicIdx = Math.floor(Math.random() * topics.length);
    const topic = topics[topicIdx];
    
    const hook = topic.hooks[Math.floor(Math.random() * topic.hooks.length)];
    const question = topic.questions[Math.floor(Math.random() * topic.questions.length)];
    const tags = topic.tags.join(' ');
    
    let body = topic.body;
    if (customPrompt) {
        body += `\n\n（ちなみに最近は「${customPrompt}」も気になってて色々試してます…！）`;
    }
    
    const threadsPost = `${hook}\n\n${body}\n\n${question}\n\n${tags}`;
    const xPost = `${hook}\n\n${body.split('\n\n')[0]}\n\n${question}\n${tags}`;
    
    return {
        threads_post: threadsPost.trim(),
        x_post: xPost.trim(),
        post_type: 'casual',
        is_pr: false
    };
}

// 7:3インジケーターのUI表示を更新
function updateRatioIndicator() {
    const banner = document.getElementById('ratio-banner');
    const label = document.getElementById('ratio-next-label');
    const stats = document.getElementById('ratio-stats');
    if (!banner || !label) return;
    
    const acc = getCurrentAccount();
    const nextType = determinePostType(state.currentAccountId);
    
    const accHistory = (state.history || []).filter(h => h.account_id === state.currentAccountId);
    const recent = accHistory.slice(0, 10);
    const prCount = recent.filter(h => h.post_type === 'pr' || (h.threads_post && h.threads_post.includes('#PR'))).length;
    const casualCount = recent.length - prCount;
    
    const casualPct = recent.length > 0 ? Math.round((casualCount / recent.length) * 100) : 70;
    const prPct = 100 - casualPct;
    
    if (nextType === 'casual') {
        label.innerHTML = `次回：<span class="text-indigo-600 font-extrabold">【フォロワー獲得・日常共感】</span>を自動生成`;
    } else {
        label.innerHTML = `次回：<span class="text-pink-600 font-extrabold">【収益化・神コスメPR】</span>を自動生成`;
    }
    
    if (stats) {
        stats.textContent = `直近バランス：日常 ${casualPct}% (${casualCount}件) : PR ${prPct}% (${prCount}件)`;
    }
}


function generatePostsClient(product, style, customPrompt, accountId) {
    const acc = state.accounts.find(a => a.id === accountId) || getCurrentAccount();
    const genreId = acc.genre || 'cosme_20s';

    // 🎯 7:3自動判定モードの場合、日常かPRかを自動決定！
    let effectiveStyle = style;
    if (style === 'auto_73') {
        const nextType = determinePostType(accountId);
        effectiveStyle = (nextType === 'casual') ? 'casual' : 'review';
    }

    // 💬 日常・共感つぶやき（リンクなし・フォロワー増加特化）
    if (effectiveStyle === 'casual') {
        return generateCasualPostClient(genreId, customPrompt, accountId);
    }

    // 💄 コスメPRの場合、商品が未指定ならアカウント専用の厳選25コスメから未投稿の神アイテムを自動選定！
    if (!product || !product.title || product.title === 'KEYWORD') {
        const products = GENRE_RECOMMENDED_PRODUCTS[genreId] || GENRE_RECOMMENDED_PRODUCTS.cosme_20s || [];
        const unposted = products.filter(p => !isProductPostedForCurrentAccount(p.title, p.asin));
        const selectedProd = unposted.length > 0 ? unposted[Math.floor(Math.random() * unposted.length)] : products[Math.floor(Math.random() * products.length)];
        if (selectedProd) {
            product = parseAmazonUrlClient(selectedProd.asin, acc.tag || 'papasprint-22');
            product.title = selectedProd.title;
            state.currentProduct = product;
            renderProductSection(product);
        }
    }
    const title = (product.title || '').trim();
        const amazonUrl = product.affiliate_url || `https://www.amazon.co.jp/?tag=${acc.tag || 'papasprint-22'}`;
    const rakutenUrl = product.rakuten_url || getRakutenAffiliateUrl(product.title, acc.rakuten_id || state.rakutenId || DEFAULT_RAKUTEN_ID);
    
    const selectedMall = document.querySelector('input[name="aff-mall"]:checked')?.value || 'both';
    
    // 🔴 楽天高還元・スーパーDEAL用のキラーコピーを自動付与
    let rakutenDealCallout = '';
    if (selectedMall === 'rakuten' || selectedMall === 'both') {
        const dealBadge = product.deal_hint || '';
        if (dealBadge.includes('DEAL') || dealBadge.includes('還元')) {
            rakutenDealCallout = '\n\n💡 楽天スーパーDEAL対象でポイント高還元中！実質かなりお得に買えます✨';
        } else if (dealBadge.includes('公式') || dealBadge.includes('P10倍')) {
            rakutenDealCallout = '\n\n💡 楽天公式ショップなら限定クーポン＆ポイントアップ中でお得です✨';
        } else {
            rakutenDealCallout = '\n\n💡 楽天お買い物マラソン・5と0のつく日の買い回りに超おすすめです🛒';
        }
    }
    let url = '';
    let mallHashtags = '';
    
    if (selectedMall === 'amazon') {
        url = amazonUrl;
        mallHashtags = '#PR #Amazon';
    } else if (selectedMall === 'rakuten') {
        url = `▼楽天市場（ポイント還元中✨）\n${rakutenUrl}`;
        mallHashtags = '#PR #楽天市場 #楽天お買い物マラソン';
    } else { // both
        url = `▼Amazon派はこちら👇\n${amazonUrl}\n\n▼楽天ポイント派はこちら👇\n${rakutenUrl}`;
        mallHashtags = '#PR #Amazon #楽天市場';
    }
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

    threadsPost = threadsPost.replace('一度使うと手放せなくなる名品です👇', `一度使うと手放せなくなる名品です👇${rakutenDealCallout}`);
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
        { title: 'TIRTIR マスクフィットレッドクッション ファンデーション', tag_hint: '圧倒的カバー力と崩れなさ！20代の陶器肌作りNo.1', asin: 'B09NNK7T3H', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'VT COSMETICS リードルショット 100 美容液', tag_hint: '美容針で翌朝の肌つるん！毛穴とキメを整える神コスメ', asin: 'B0C77DLS88', deal_hint: '🏆 楽天ランキング1位' },
        { title: 'Anua ドクダミ 77% スージングトナー 化粧水', tag_hint: 'SNSで超話題！ニキビ・赤みを鎮静してくれる鎮静化粧水', asin: 'B0892B1G8R', deal_hint: '🔴 楽天公式ポイント10倍' },
        { title: 'Wonjungyo (ウォンジョンヨ) W デイリームードアップパレット', tag_hint: 'アイドルメイクの巨匠プロデュース！捨て色なし神パレット', asin: 'B0BCJ6MQN4', deal_hint: '🔥 楽天公式・入荷即売れ' },
        { title: '魔女工場 (Manyo) ガラクナイアシン2.0エッセンス 50ml', tag_hint: 'トーンアップ＆キメ美肌！韓国ベストセラー美白美容液', asin: 'B087R98J4T', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'CLIO キルカバー メッシュグロウ クッションファンデ', tag_hint: 'みずみずしい透明ツヤ肌が続く！素肌感とカバーの両立', asin: 'B0BKG3M72B', deal_hint: '🔴 楽天公式限定クーポン' },
        { title: 'rom&nd ジューシーラスティングティント 06 フィグフィグ', tag_hint: 'ちゅるんとした粘膜リップ！落ちにくさも抜群の殿堂入り', asin: 'B0855L4G56', deal_hint: '🛒 買い回り定番人気' },
        { title: 'COSRX RXザ・ビタミンC23セラム 20g', tag_hint: '純粋ビタミンC高濃度配合！毛穴とくすみにダイレクトに効く', asin: 'B0B4DC45SZ', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'ラネージュ (LANEIGE) リップスリーピングマスク ベリー', tag_hint: '寝ている間にぷるぷる唇復活！乾燥知らずのリップケア', asin: 'B07V6WNZB7', deal_hint: '🔴 楽天公式P10倍' },
        { title: 'ナンバーズイン 3番 すべすべキメケアセラム 50ml', tag_hint: '発酵成分で毛穴つるん！肌のザラつきを消し去る名品', asin: 'B09F6H4G8Q', deal_hint: '🏆 楽天韓国フェス人気' }
    ],
    cosme_30s: [
        { title: 'ラ ロッシュ ポゼ UVイデア XL プロテクショントーンアップ ローズ', tag_hint: '30代のくすみを一瞬で払う！石鹸オフできる殿堂入りUV下地', asin: 'B084G47742', deal_hint: '🔥 楽天公式P10倍〜20倍' },
        { title: 'タカミスキンピール 角質美容水 30ml (TAKAMI)', tag_hint: '毛穴の目立ち・肌のざらつきに！大人の肌代謝を整える名品', asin: 'B001GXBZFM', deal_hint: '🏆 楽天コスメ大賞受賞' },
        { title: 'アテニア スキンクリア クレンズ オイル アロマタイプ', tag_hint: '大人のくすみ・肌ステインをオフ！洗い上がりしっとり極上', asin: 'B0CNVBDGB2', deal_hint: '🔥 楽天DEAL高還元' },
        { title: 'Yunth (ユンス) 生ビタミンC美白美容液 1ml×28包', tag_hint: '使用期限30秒の生ビタミンC！透明感爆上がりの楽天1位コスメ', asin: 'B09NNBXZT8', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'KANEBO カネボウ スクラビング マッド ウォッシュ 130g', tag_hint: '吸着泥で毛穴すっきりなのに突っ張らない！30代ベスコス洗顔', asin: 'B08T6K26F7', deal_hint: '🔴 楽天公式ショップ' },
        { title: 'コスメデコルテ リポソーム アドバンスト リペアセラム 50ml', tag_hint: '1滴に1兆個のリポソーム！夕方まで乾かない大人の名品美容液', asin: 'B09D3R6V3Y', deal_hint: '🏆 楽天年間ランキング1位' },
        { title: 'オバジ C25セラム ネオ 12ml (Obagi)', tag_hint: '毛穴・くすみ・ハリ・小じわ！大人の5大悩みに全方位アプローチ', asin: 'B08V8R36V9', deal_hint: '🔴 楽天ポイント還元中' },
        { title: 'シュウ ウエムラ アルティム8∞ スブリム クレンジング オイル', tag_hint: '毛穴汚れもするんと落ちて潤い残す！一生モノのクレンジング', asin: 'B0CF8V9Q6N', deal_hint: '🔴 楽天公式P10倍' },
        { title: 'ランコム ジェニフィック アドバンスト N 50ml', tag_hint: '美肌菌に着目！肌の基礎力を底上げする30代の投資美容液', asin: 'B07W94R8M1', deal_hint: '🔥 ブランドデーP20倍' },
        { title: 'ETVOS (エトヴォス) ミネラルインナートリートメントベース', tag_hint: 'まるで美容液！上品なツヤで夕方までくすまない石鹸オフ下地', asin: 'B08FRPBC76', deal_hint: '🔴 楽天公式P10倍' }
    ],
    cosme_40s: [
        { title: 'エリクシール レチノパワー リンクルクリーム S (15g)', tag_hint: '日本で唯一の純粋レチノール配合！目元・口元のシワ改善', asin: 'B0CGDCL29R', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'アテニア ドレスリフト ローション 150ml (医薬部外品)', tag_hint: '大人のハリ不足に！とろみ化粧水がふっくら押し返すツヤ肌へ', asin: 'B0CLL2X33M', deal_hint: '🔥 楽天DEAL高還元' },
        { title: 'クレ・ド・ポー ボーテ ヴォワールコレクチュールn 40g', tag_hint: '塗った瞬間、肌の品格が上がる！大人のツヤ肌補正下地', asin: 'B085F6Y2X2', deal_hint: '🏆 楽天ベスコス殿堂' },
        { title: 'POLA (ポーラ) リンクルショット メディカル セラム N 20g', tag_hint: '日本初のシワ改善認可！大人の本気エイジングケアの最高峰', asin: 'B08QCPV9Q4', deal_hint: '🔴 楽天公式旗艦店' },
        { title: 'ドクターシーラボ VC100エッセンスローションEX 150ml', tag_hint: '高浸透ビタミンC(APPS)高濃度！大人の毛穴とキメをふっくら', asin: 'B09TBBNR86', deal_hint: '🔥 楽天公式P15倍〜20倍' },
        { title: 'カバーマーク フローレス フィット SPF35 PA+++', tag_hint: 'ひとはけで大人のシミをなかったことに！ツヤが続く神ファンデ', asin: 'B01I14L28M', deal_hint: '🔴 楽天公式ショップ' },
        { title: 'アスタリフト ジェリー アクアリスタ (先行美容液) 40g', tag_hint: 'ヒト型ナノセラミドで土台からうるおう！40代のハリ肌スキンケア', asin: 'B07WCJ8V5L', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'オバジ ダーマパワーX ステムリフト クリーム 50g', tag_hint: '濃厚なテクスチャーで大人のフェイスラインを上向きリフトケア', asin: 'B07HF2L2N4', deal_hint: '🔴 楽天ポイント還元' },
        { title: 'アルビオン フローラドリップ 160ml (化粧液)', tag_hint: '濃密発酵液で肌密度を高める！しなやかでキメ整った大人の肌へ', asin: 'B07X995H6C', deal_hint: '🏆 楽天高評価レビュー' },
        { title: 'エスティローダー アドバンス ナイト リペア SMR 50ml', tag_hint: '夜間の肌修復をサポート！翌朝起きたときのふっくら感が違う', asin: 'B08C7K8V3C', deal_hint: '🔥 楽天DEAL 20%還元' }
    ],
    cosme_kosodate: [
        { title: 'エトヴォス ミネラルインナートリートメントベース ラベンダー', tag_hint: '石鹸オフできる高保湿UV下地！朝1分でくすみを飛ばして血色UP', asin: 'B08FRPBC76', deal_hint: '🔴 楽天公式P10倍' },
        { title: 'オルビス (ORBIS) サンスクリーン フリーエンス 50ml', tag_hint: '紫外線吸収剤不使用！赤ちゃんや幼児と一緒に使える安心UV', asin: 'B00E0G5P9C', deal_hint: '🔥 楽天DEAL高還元' },
        { title: 'アロベビー (ALOBABY) UV＆アウトドアミスト 80ml', tag_hint: '日焼け止め＋虫除けが1本で！公園遊びママの圧倒的支持No.1', asin: 'B00J2L3JCY', deal_hint: '🏆 楽天年間ランキング1位' },
        { title: 'カナデル (CANADEL) プレミアリフト オールインワン 58g', tag_hint: '朝1分でスキンケア完了！ハリとうるおいを秒速チャージ', asin: 'B07V2HWW3D', deal_hint: '🔥 楽天DEAL 20%還元' },
        { title: 'マナラ ホットクレンジングゲル マッサージプラス 200g', tag_hint: 'ダブル洗顔不要！じんわり温感で子育てママの時短＆毛穴ケア', asin: 'B093S6XQ1N', deal_hint: '🔴 楽天公式ショップ' },
        { title: 'オンリーミネラル ミネラルエッセンスBBクリーム 30g', tag_hint: 'ベースメイクがこれ1本！落とすのも石鹸だけでOKな時短ファンデ', asin: 'B07NV28HLC', deal_hint: '🔴 楽天公式P10倍' },
        { title: 'キュレル ディープモイスチャースプレー 250g (特大)', tag_hint: 'お風呂上がりに全身シューッ！子どもを待たせないセラミド保湿', asin: 'B085VQL4B6', deal_hint: '🛒 買い回りまとめ買い' },
        { title: 'サボリーノ (Saborino) 目ざまシート 朝用マスク 32枚入', tag_hint: '洗顔＋スキンケア＋下地が60秒！忙しい朝の救世主シートマスク', asin: 'B01E3V562A', deal_hint: '🔥 楽天まとめ買いDEAL' },
        { title: '&be (アンドビー) UVプライマー SPF50+ PA++++', tag_hint: 'ツヤ肌美肌がひと塗りで完成！石鹸オフできるママの愛用下地', asin: 'B09R6VG6G5', deal_hint: '🔴 楽天公式・人気No.1' },
        { title: 'ママ＆キッズ (Mama & Kids) オリゴミルク 120ml', tag_hint: '産院でも使われる低刺激！ママも子どもも一緒にうるおう乳液', asin: 'B00K5F79Q6', deal_hint: '🏆 楽天ベビー・コスメ部門' }
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
    rakutenId: '57e27f33.1497ef8f.57e27f35.8c6f1d99',
    rakutenAppId: 'c1282a1c-cebb-4a84-8711-2140d72a4fad',
    rakutenAccessKey: 'pk_oMdFLJ0SLnoeZoAfrq3fo4zR6Tf1kVHMEM1b8fFcPe5',
    rakutenRankingItems: [],
    activeSuggestionSource: 'curated',
    rakutenRankingIndex: 0,
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
    updateRatioIndicator();
    const initType = determinePostType(state.currentAccountId);
    switchSuggestionSource(initType === 'casual' ? 'casual' : 'curated');
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
                if (parsed.rakutenId) state.rakutenId = parsed.rakutenId;
                if (parsed.rakutenAppId) state.rakutenAppId = parsed.rakutenAppId;
                if (parsed.rakutenAccessKey) state.rakutenAccessKey = parsed.rakutenAccessKey;
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
            rakutenId: state.rakutenId,
            rakutenAppId: state.rakutenAppId,
            rakutenAccessKey: state.rakutenAccessKey,
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
            if (data.rakuten_affiliate_id) state.rakutenId = data.rakuten_affiliate_id;
            if (data.rakuten_application_id) state.rakutenAppId = data.rakuten_application_id;
            if (data.rakuten_access_key) state.rakutenAccessKey = data.rakuten_access_key;
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
    updateRatioIndicator();
    const nextType = determinePostType(id);
    switchSuggestionSource(nextType === 'casual' ? 'casual' : 'curated');
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

function switchSuggestionSource(source) {
    state.activeSuggestionSource = source;

    // タブボタンスタイルの更新
    const tabCasual = document.getElementById('tab-suggest-casual');
    const tabCurated = document.getElementById('tab-suggest-curated');
    const tabRakuten = document.getElementById('tab-suggest-rakuten');

    [tabCasual, tabCurated, tabRakuten].forEach(btn => {
        if (!btn) return;
        btn.classList.remove('bg-white', 'text-indigo-700', 'text-pink-700', 'text-red-700', 'font-bold', 'shadow-2xs');
        btn.classList.add('text-slate-600', 'font-semibold');
    });

    if (source === 'casual' && tabCasual) {
        tabCasual.classList.add('bg-white', 'text-indigo-700', 'font-bold', 'shadow-2xs');
        tabCasual.classList.remove('text-slate-600', 'font-semibold');
    } else if (source === 'curated' && tabCurated) {
        tabCurated.classList.add('bg-white', 'text-pink-700', 'font-bold', 'shadow-2xs');
        tabCurated.classList.remove('text-slate-600', 'font-semibold');
    } else if (source === 'rakuten_live' && tabRakuten) {
        tabRakuten.classList.add('bg-white', 'text-red-700', 'font-bold', 'shadow-2xs');
        tabRakuten.classList.remove('text-slate-600', 'font-semibold');
        if (!state.rakutenRankingItems || state.rakutenRankingItems.length === 0) {
            fetchRakutenLiveRanking();
            return;
        }
    }

    renderDailySuggestions();
}

function applyCasualSuggestionByIndex(idx) {
    const genre = getCurrentGenre();
    const topics = CASUAL_TOPICS_DB[genre.id] || CASUAL_TOPICS_DB.cosme_20s || [];
    const topic = topics[idx % topics.length];
    if (!topic) return;

    // スタイルを「日常・共感」に切り替え
    const casualRadio = document.querySelector('input[name="post-style"][value="casual"]');
    if (casualRadio) {
        casualRadio.checked = true;
        document.querySelectorAll('.style-card').forEach(c => {
            c.classList.remove('border-pink-500', 'bg-pink-50/50');
            c.classList.add('border-slate-200', 'bg-white');
        });
        casualRadio.closest('.style-card')?.classList.remove('border-slate-200', 'bg-white');
        casualRadio.closest('.style-card')?.classList.add('border-pink-500', 'bg-pink-50/50');
    }

    // 対象商品エリアのクリア＆日常モード表示
    state.currentProduct = null;
    const inputUrl = document.getElementById('input-url');
    if (inputUrl) inputUrl.value = '';

    const hook = topic.hooks[Math.floor(Math.random() * topic.hooks.length)];
    const question = topic.questions[Math.floor(Math.random() * topic.questions.length)];
    const tags = topic.tags.join(' ');
    const customPrompt = document.getElementById('input-custom-prompt')?.value.trim() || '';

    let body = topic.body;
    if (customPrompt) {
        body += `\n\n（ちなみに最近は「${customPrompt}」も気になってて色々試してます…！）`;
    }

    const threadsPost = `${hook}\n\n${body}\n\n${question}\n\n${tags}`;
    const xPost = `${hook}\n\n${body.split('\n\n')[0]}\n\n${question}\n${tags}`;

    const data = {
        threads_post: threadsPost.trim(),
        x_post: xPost.trim(),
        post_type: 'casual',
        is_pr: false
    };

    renderGeneratedResults(data);

    // 履歴追加
    const acc = getCurrentAccount();
    const historyItem = {
        id: 'hist-' + Date.now(),
        timestamp: new Date().toLocaleString('ja-JP'),
        account_id: state.currentAccountId,
        account_name: acc ? acc.name : 'アカウント',
        product_title: '💬 日常・共感つぶやき（リンクなし）',
        product_asin: '',
        threads_post: data.threads_post,
        x_post: data.x_post,
        style: 'casual',
        post_type: 'casual',
        posted: false
    };
    state.history.unshift(historyItem);
    state.history = state.history.slice(0, 50);
    saveLocalHistory();
    renderHistorySection();
    updateRatioIndicator();

    showToast('💬 日常・共感つぶやきを作成しました！そのまま投稿できます✨');
}

function renderDailySuggestions(shuffled = false) {
    const container = document.getElementById('daily-suggestions-container');
    if (!container) return;
    const genre = getCurrentGenre();
    const genreLabel = document.getElementById('daily-genre-label');

    // 💬 日常・共感つぶやきモード (フォロワー獲得・7割推奨)
    if (state.activeSuggestionSource === 'casual') {
        const titleEl = document.getElementById('suggestions-header-title');
        const subTitleEl = document.getElementById('suggestions-header-subtitle');
        if (titleEl) titleEl.textContent = `💬 本日の日常・共感ネタ提案`;
        if (subTitleEl) subTitleEl.textContent = `商品リンクなし・アカウント育成とフォロワー獲得のためのリアルなつぶやきネタです`;
        if (genreLabel) genreLabel.textContent = `【${genre.name}】`;

        const topics = CASUAL_TOPICS_DB[genre.id] || CASUAL_TOPICS_DB.cosme_20s || [];
        let candidateTopics = [...topics];
        if (shuffled) {
            candidateTopics = candidateTopics.sort(() => 0.5 - Math.random());
        }
        const displayTopics = candidateTopics.slice(0, 3);

        container.innerHTML = displayTopics.map((topic, idx) => {
            const hook = topic.hooks[0] || '';
            const previewBody = topic.body.split('\n')[0] || '';
            const tags = (topic.tags || []).slice(0, 3).join(' ');

            return `
            <div class="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all rounded-xl p-3.5 flex flex-col justify-between space-y-2.5 group">
                <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-extrabold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded border border-indigo-200 flex items-center gap-1 shadow-2xs">
                            <i data-lucide="message-circle" class="w-3 h-3 text-indigo-600"></i>
                            💬 共感フォロワー獲得
                        </span>
                        <span class="text-[10px] font-bold text-slate-400">#ネタ${idx + 1}</span>
                    </div>
                    <h4 class="font-bold text-xs text-slate-900 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors pt-0.5">${escapeHtml(hook)}</h4>
                    <p class="text-[11px] text-slate-600 line-clamp-2 leading-relaxed bg-white/70 p-2 rounded-lg border border-indigo-50">${escapeHtml(previewBody)}</p>
                    <p class="text-[10px] text-indigo-500 font-medium truncate">${escapeHtml(tags)}</p>
                </div>
                <button type="button" onclick="applyCasualSuggestionByIndex(${idx})"
                    class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-200"></i>
                    <span>この日常ネタで投稿文を作成</span>
                </button>
            </div>`;
        }).join('');
        refreshIcons();
        return;
    }

    // 🔴 楽天リアルタイムランキングモードの場合
    if (state.activeSuggestionSource === 'rakuten_live' && state.rakutenRankingItems && state.rakutenRankingItems.length > 0) {
        const titleEl = document.getElementById('suggestions-header-title');
        const subTitleEl = document.getElementById('suggestions-header-subtitle');
        if (titleEl) titleEl.textContent = `🔥 楽天リアルタイム人気コスメ提案`;
        if (subTitleEl) subTitleEl.textContent = `楽天公式APIよりリアルタイムランキング順位とポイント還元情報を自動取得しています`;
        if (genreLabel) genreLabel.textContent = `【🔥 楽天リアルタイム人気コスメ】`;
        
        let items = state.rakutenRankingItems;
        if (shuffled) {
            state.rakutenRankingIndex = (state.rakutenRankingIndex + 3) % items.length;
        }
        let displayItems = [];
        for (let i = 0; i < 3; i++) {
            const idx = (state.rakutenRankingIndex + i) % items.length;
            displayItems.push({ item: items[idx], originalIndex: idx });
        }

        container.innerHTML = displayItems.map(({ item, originalIndex }) => {
            const isPosted = !!isProductPostedForCurrentAccount(item.title, '');
            const postedBadge = isPosted ? '<span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">過去に投稿済</span>' : '';

            return `
            <div class="bg-white/95 border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all rounded-xl p-3.5 flex flex-col justify-between space-y-2 group">
                <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-extrabold text-red-700 bg-red-100 px-2 py-0.5 rounded border border-red-300 flex items-center gap-1 shadow-2xs">
                            ${escapeHtml(item.badge || `🏆 楽天コスメ ${item.rank}位`)}
                        </span>
                        ${postedBadge}
                        <span class="text-[10px] font-bold text-slate-400">#${item.rank}</span>
                    </div>
                    <div class="flex gap-2 items-start pt-1">
                        ${item.image_url ? `<img src="${item.image_url}" alt="" class="w-12 h-12 object-contain rounded-lg border border-slate-200 shrink-0 bg-white">` : ''}
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-xs text-slate-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">${escapeHtml(item.title)}</h4>
                            <div class="flex items-center gap-2 mt-1 text-[11px]">
                                <span class="font-bold text-red-600">${escapeHtml(item.price_str)}</span>
                                <span class="text-slate-400 text-[10px]">★${item.review_average || '4.5'} (${item.review_count || 0})</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onclick="applyRakutenItemByIndex(${originalIndex})"
                    class="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-90 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer">
                    <i data-lucide="arrow-down-circle" class="w-3.5 h-3.5 text-amber-200"></i>
                    <span>この楽天人気商品で投稿を作成</span>
                </button>
            </div>`;
        }).join('');
        refreshIcons();
        return;
    }

    // 💎 アカウント別・厳選高還元コスメモード (3割)
    const titleEl = document.getElementById('suggestions-header-title');
    const subTitleEl = document.getElementById('suggestions-header-subtitle');
    if (titleEl) titleEl.textContent = `💄 厳選高還元コスメ・美容商品提案`;
    if (subTitleEl) subTitleEl.textContent = `ワンクリックで商品情報とアフィリエイトリンクを読み込みます`;
    if (genreLabel) genreLabel.textContent = `【${genre.name}】`;
    let products = GENRE_RECOMMENDED_PRODUCTS[genre.id] || GENRE_RECOMMENDED_PRODUCTS.cosme_20s || [];
    
    // 🛡️ かぶり防止：現在のアカウントで過去に投稿した商品を除外！
    const unpostedProducts = products.filter(p => !isProductPostedForCurrentAccount(p.title, p.asin));
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
                    <span class="text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200 flex items-center gap-0.5 shadow-2xs">
                        ${p.deal_hint ? escapeHtml(p.deal_hint) : '🔥 楽天DEAL高還元'}
                    </span>
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

function applyRakutenItemByIndex(idx) {
    const item = state.rakutenRankingItems[idx];
    if (!item) return;

    state.currentProduct = {
        asin: `RAKUTEN_${item.rank}`,
        title: item.title,
        price: item.price_str || `¥${item.price.toLocaleString()}`,
        image_url: item.image_url || '',
        affiliate_url: item.affiliate_url,
        rakuten_url: item.affiliate_url,
        deal_hint: item.badge,
        features: [
            `${item.badge} の人気ベストコスメ`,
            `レビュー評価 ★${item.review_average || 4.5} (${item.review_count || 100}件以上の高評価)`,
            `ショップ: ${item.shop_name || '楽天市場'}`
        ],
        is_keyword: false
    };

    // モール選択を「両方」または「楽天市場」に合わせる
    const mallRadios = document.querySelectorAll('input[name="aff-mall"]');
    const currMall = document.querySelector('input[name="aff-mall"]:checked')?.value;
    if (currMall === 'amazon') {
        mallRadios.forEach(r => {
            if (r.value === 'both') {
                r.checked = true;
                r.closest('.mall-card')?.classList.add('border-purple-500', 'bg-purple-50/60');
            } else {
                r.closest('.mall-card')?.classList.remove('border-purple-500', 'bg-purple-50/60');
            }
        });
    }

    const input = document.getElementById('input-url');
    if (input) input.value = item.title;

    renderProductSection(state.currentProduct);
    
    // スタイルをPRに確実にして投稿文を即座に生成
    const prRadio = document.querySelector('input[name="post-style"][value="review"]');
    if (prRadio) {
        prRadio.checked = true;
        document.querySelectorAll('.style-card').forEach(c => c.classList.remove('border-pink-500', 'bg-pink-50/50'));
        prRadio.closest('.style-card')?.classList.add('border-pink-500', 'bg-pink-50/50');
    }

    generatePosts();
    showToast(`「${item.title}」の楽天リンク＆投稿文を作成しました！✨`);
}

async function fetchRakutenLiveRanking() {
    const btn = document.getElementById('btn-fetch-rakuten-ranking');
    const btnText = document.getElementById('rakuten-ranking-btn-text');
    const origText = btnText ? btnText.textContent : '🔥 楽天リアルタイムランキング取得';
    if (btnText) btnText.textContent = 'ランキング取得中...⏳';
    if (btn) btn.disabled = true;

    try {
        const acc = getCurrentAccount();
        const res = await fetch(`/api/rakuten/ranking?account_id=${acc.id}`);
        if (res.ok) {
            const data = await res.json();
            if (data.items && data.items.length > 0) {
                state.rakutenRankingItems = data.items;
                state.activeSuggestionSource = 'rakuten_live';
                state.rakutenRankingIndex = 0;
                renderDailySuggestions();
                showToast(`🔥 楽天リアルタイム人気コスメを${data.items.length}件取得しました！`);
                return;
            }
        }
        throw new Error('API取得不可');
    } catch (e) {
        console.warn('Rakuten ranking fetch failed, using curated list:', e);
        state.activeSuggestionSource = 'curated';
        renderDailySuggestions(true);
        showToast('🔥 楽天スーパーDEAL高還元コスメを表示しました！');
    } finally {
        if (btnText) btnText.textContent = origText;
        if (btn) btn.disabled = false;
        refreshIcons();
    }
}

function applySuggestion(title, asin) {
    const input = document.getElementById('input-url');
    if (input) {
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

    const btnFetchRakuten = document.getElementById('btn-fetch-rakuten-ranking');
    if (btnFetchRakuten) btnFetchRakuten.addEventListener('click', () => fetchRakutenLiveRanking());

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
    if (btnGeneratePosts) btnGeneratePosts.addEventListener('click', e => { e.preventDefault(); generatePosts(); });

    const btnCopyUrl = document.getElementById('btn-copy-url');
    if (btnCopyUrl) btnCopyUrl.addEventListener('click', () => copyText(document.getElementById('product-aff-url')?.value || '', 'アフィリエイトURLをコピーしました！'));

    const btnCopyThreads = document.getElementById('btn-copy-threads');
    if (btnCopyThreads) btnCopyThreads.addEventListener('click', () => copyText(document.getElementById('textarea-threads')?.value || '', 'Threads 投稿文をコピーしました！'));

    const btnPostThreads = document.getElementById('btn-post-threads');
    if (btnPostThreads) btnPostThreads.addEventListener('click', () => {
        const val = document.getElementById('textarea-threads')?.value || '';
        const acc = getCurrentAccount();
        const shortName = acc ? acc.name.split(' | ')[0] : '選択中';
        if (val) {
            copyText(val, `📋 【${shortName}】の投稿文をコピーしました！(Threads右下のアイコン長押しで切替可能)`);
        }
        const targetUrl = val 
            ? `https://www.threads.net/intent/post?text=${encodeURIComponent(val)}` 
            : 'https://www.threads.net';
        window.open(targetUrl, '_blank');
    });

    const btnVisitThreads = document.getElementById('btn-visit-profile-threads');
    if (btnVisitThreads) btnVisitThreads.addEventListener('click', () => {
        const acc = getCurrentAccount();
        window.open(acc.threads_handle ? `https://www.threads.net/@${acc.threads_handle}` : 'https://www.threads.net', '_blank');
    });

    const btnClearHist = document.getElementById('btn-clear-history');
    if (btnClearHist) btnClearHist.addEventListener('click', () => {
        if (confirm('生成履歴をクリアしますか？')) { state.history = []; renderHistory();
        updateRatioIndicator(); showToast('履歴をクリアしました'); }
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
    return await generatePosts();
}


// ── 投稿文生成（メインロジック） ─────────────────────────────────────────────
async function generatePosts() {
    const selectedRadio = document.querySelector('input[name="post-style"]:checked');
    const style = selectedRadio ? selectedRadio.value : 'auto_73';

    // 日常モードまたは7:3自動モードの場合、商品入力なしでも完全自動生成可能！
    if (style !== 'casual' && style !== 'auto_73') {
        if (!state.currentProduct) {
            const inputVal = document.getElementById('input-url')?.value.trim();
            if (inputVal) {
                await fetchProduct();
            }
            if (!state.currentProduct) {
                showToast('先に商品名またはURLを入力してください');
                return;
            }
        }
    }

    const btn = document.getElementById('btn-generate-posts');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> <span>投稿文を生成中...</span>`;
        refreshIcons();
    }

// style already resolved above
    const customPrompt = document.getElementById('input-custom-prompt')?.value.trim() || '';

    try {
        let data = null;

        // 日常・共感スタイルの場合はクライアント完結エンジン（CASUAL_TOPICS_DB）で即座に生成（リンクなし・PRなしを100%保証）
        if (style === 'casual') {
            data = generatePostsClient(null, 'casual', customPrompt, state.currentAccountId);
        } else {
            // 1. サーバーAPIがある場合（ローカル稼働時）は試行
            try {
                const res = await fetch('/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        product: state.currentProduct || {},
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

            // ガード処理：もし日常投稿が期待されているのにPRやURLが含まれていた場合はクライアント日常エンジンで上書き
            if (style === 'casual' || (data.post_type === 'casual' && data.threads_post.includes('#PR'))) {
                data = generatePostsClient(null, 'casual', customPrompt, state.currentAccountId);
            }
        }

        renderGeneratedResults(data);

        // 履歴に追加
        const acc = getCurrentAccount();
        const isCasual = data.post_type === 'casual' || !data.threads_post.includes('#PR');
        const historyItem = {
            id: 'hist-' + Date.now(),
            timestamp: new Date().toLocaleString('ja-JP'),
            account_id: state.currentAccountId,
            account_name: acc ? acc.name : 'アカウント',
            product_title: isCasual ? '💬 日常・共感つぶやき（リンクなし）' : (state.currentProduct ? state.currentProduct.title : 'コスメ紹介'),
            product_asin: isCasual ? 'CASUAL' : (state.currentProduct ? state.currentProduct.asin : ''),
            product_image: isCasual ? '' : (state.currentProduct ? state.currentProduct.image_url || '' : ''),
            affiliate_url: isCasual ? '' : (state.currentProduct ? state.currentProduct.affiliate_url : ''),
            threads_post: data.threads_post,
            post_type: isCasual ? 'casual' : 'pr',
            posted: false
        };
        state.history.unshift(historyItem);
        if (state.history.length > 50) state.history = state.history.slice(0, 50);
        renderHistory();
        updateRatioIndicator();

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
        updateRatioIndicator();
        showToast(done ? '✅ 投稿済みにマークしました！' : '投稿済みを取り消しました');
    } catch (e) {
        showToast('エラーが発生しました');
    }
}

// ── 履歴 ─────────────────────────────────────────────────────────────────────
async function loadHistory() {
    try {
        const res = await fetch('/api/history');
        if (res.ok) { state.history = await res.json(); renderHistory();
        updateRatioIndicator(); }
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
    const rakutenInput = document.getElementById('input-rakuten-id');
    if (rakutenInput) rakutenInput.value = state.rakutenId || '';
    const rakutenAppInput = document.getElementById('input-rakuten-app-id');
    if (rakutenAppInput) rakutenAppInput.value = state.rakutenAppId || '';
    const rakutenKeyInput = document.getElementById('input-rakuten-access-key');
    if (rakutenKeyInput) rakutenKeyInput.value = state.rakutenAccessKey || '';
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
    const rakutenInput = document.getElementById('input-rakuten-id');
    if (rakutenInput) state.rakutenId = rakutenInput.value.trim();
    const rakutenAppInput = document.getElementById('input-rakuten-app-id');
    if (rakutenAppInput) state.rakutenAppId = rakutenAppInput.value.trim();
    const rakutenKeyInput = document.getElementById('input-rakuten-access-key');
    if (rakutenKeyInput) state.rakutenAccessKey = rakutenKeyInput.value.trim();
    saveLocalConfig();
    try {
        await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gemini_api_key: state.apiKey,
                rakuten_affiliate_id: state.rakutenId,
                rakuten_application_id: state.rakutenAppId,
                rakuten_access_key: state.rakutenAccessKey,
                genres: state.genres,
                accounts: state.accounts
            })
        });
    } catch (e) { console.warn('Server config save failed, saved locally'); }
    renderAccountTabs();
    renderAccountDropdown();
    updateActiveAccountDisplay();
    updateRatioIndicator();
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
