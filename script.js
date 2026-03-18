function diagnose() {
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const who = document.getElementById("who").value;
    const mood = document.getElementById("mood").value;
    const budget = document.getElementById("budget").value;

    let title = "";
    let desc = "";
    let keyword = "";

    // -----------------------------------------
    // 1. 予算が「低（節約）」の場合の場所と内容
    // -----------------------------------------
    if (budget === "low") {
        if (mood === "relax") {
            title = "芝生が広がる無料の大きな都立公園";
            desc = "お金をかけずに、レジャーシートを広げて読書やお昼寝。風を感じるだけで最高のデトックスになります。";
            keyword = "park,nature";
        } else if (mood === "active") {
            title = "街歩き＆階段ダッシュ？な展望台巡り";
            desc = "あえて一駅前で降りて、知らない道を散策。無料の展望ロビーを目指して歩く、ヘルシーな冒険へ。";
            keyword = "walking,city";
        } else if (mood === "food") {
            title = "地元で愛される激安・激ウマ立ち食いそば";
            desc = "ワンコインでお釣りがくる幸せ。回転の速いお店で、サクッと江戸っ子気分を味わってみて。";
            keyword = "streetfood,noodle";
        } else {
            title = "大型書店のマニアックな棚巡り";
            desc = "まだ知らない世界に出会える場所。1日いても飽きない情報の宝庫で、好奇心を満たしましょう。";
            keyword = "bookstore";
        }
    } 
    // -----------------------------------------
    // 2. 予算が「中（普通）」の場合の場所と内容
    // -----------------------------------------
    else if (budget === "mid") {
        if (mood === "relax") {
            title = "お洒落な隠れ家ブックカフェ";
            desc = "美味しいコーヒーと静かな空間。数時間、自分だけの世界に没入してリラックスできます。";
            keyword = "cafe,coffee";
        } else if (mood === "active") {
            title = "最新の室内アスレチック施設";
            desc = "天候を気にせず、大人も全力で遊べるスポット。友達や家族と、思いっきり体を動かして！";
            keyword = "sports,indoor";
        } else if (mood === "food") {
            title = "予約制のアフタヌーンティー";
            desc = "少しお洒落をして、見た目も美しいスイーツを。優雅な気分で美味しいものを味わう贅沢。";
            keyword = "afternoontea,cake";
        } else {
            title = "没入型の最新アート展";
            desc = "光と音の演出で、自分が作品の一部になる体験。新しいインスピレーションが湧いてくるはず。";
            keyword = "art,exhibition";
        }
    }
    // -----------------------------------------
    // 3. 予算が「高（贅沢）」の場合の場所と内容
    // -----------------------------------------
    else if (budget === "high") {
        if (mood === "relax") {
            title = "個室露天風呂付きの日帰り温泉";
            desc = "誰にも邪魔されず、プライベートな空間で温泉と懐石料理を。究極の癒やしをお約束します。";
            keyword = "onsen,luxury";
        } else if (mood === "active") {
            title = "東京湾を望むクルージング体験";
            desc = "海風を切り裂きながら進む贅沢。特別な乗り物で、日常では味わえないスピードと景色を楽しんで。";
            keyword = "cruise,ship";
        } else if (mood === "food") {
            title = "星付きレストランのフルコース";
            desc = "今日は特別な日。最高級の食材とサービスで、五感をフルに使って美食の世界に浸りましょう。";
            keyword = "fine-dining,chef";
        } else {
            title = "ヘリコプターでのナイトクルーズ";
            desc = "空から見下ろす街の輝き。これ以上の刺激はありません。一生の思い出に残る休日を。";
            keyword = "helicopter,nightview";
        }
    }

    // -----------------------------------------
    // 2人で過ごすならタイトルに付け加える（微調整）
    // -----------------------------------------
    const peoplePrefix = people === "one" ? "おひとり様で楽しむ" : 
                         people === "two" ? "2人で過ごす" : "みんなでワイワイ";
    
    const finalTitle = `✨ ${peoplePrefix}：${title}`;

    // 画面に反映
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    
    document.getElementById("resultTitle").innerText = finalTitle;
    document.getElementById("resultText").innerText = desc;
    
    // 画像URLをキーワード連動で生成
    document.getElementById("resultImage").src = `https://source.unsplash.com/featured/?${keyword},japan`;

    // 結果の位置まで自動でスクロール
    resultBox.scrollIntoView({ behavior: 'smooth' });
}
