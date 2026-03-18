function diagnose() {
    const time = document.getElementById("time").value;
    const budget = document.getElementById("budget").value;
    const mood = document.getElementById("mood").value;
    const who = document.getElementById("who").value;

    let title = "";
    let desc = "";
    let keyword = "";

    // -----------------------------------------
    // 【1. 予算：節約（low）】のときの時間別プラン
    // -----------------------------------------
    if (budget === "low") {
        if (time === "full") {
            title = "1日たっぷり！大きな公園でピクニック＆読書";
            desc = "お弁当を持って、広大な公園へ。1日あるからこそ、時間を気にせず芝生でゴロゴロしたり、園内を散策したり。究極の0円贅沢です。";
            keyword = "park,picnic";
        } else if (time === "half") {
            title = "半日ぶらり。知らない街の商店街歩き";
            desc = "片道数百円の電車賃だけで、隣町の商店街へ。活気ある空気を感じながら、気になったお店を覗く「小さな冒険」が楽しめます。";
            keyword = "street,japan";
        } else {
            title = "2〜3時間。大型書店のハシゴ";
            desc = "短時間なら、空調の効いた本屋さんが最高。普段見ないジャンルの棚をチェックするだけで、良い刺激になります。";
            keyword = "bookstore,library";
        }
    }
    // -----------------------------------------
    // 【2. 予算：普通（mid）】のときの時間別プラン
    // -----------------------------------------
    else if (budget === "mid") {
        if (time === "full") {
            title = "1日満喫！江の島や鎌倉など「プチ旅行」";
            desc = "少し足を伸ばして観光地へ。食べ歩きを楽しんだり、景色を眺めたり。1日あれば、日帰り旅行気分をしっかり味わえます。";
            keyword = "kamakura,travel";
        } else if (time === "half") {
            title = "半日リフレッシュ。お洒落な映画館＆カフェ";
            desc = "ちょっと良いシートの映画館で最新作を。その後はカフェで感想を語り合う、王道だけど満足度の高い休日です。";
            keyword = "cinema,cafe";
        } else {
            title = "2〜3時間。こだわりスイーツ or 銭湯";
            desc = "短時間なら、行列のできる人気店でおやつを食べるか、綺麗な銭湯でサッと汗を流すのが最高のリフレッシュ。";
            keyword = "sweets,sento";
        }
    }
    // -----------------------------------------
    // 【3. 予算：贅沢（high）】のときの時間別プラン
    // -----------------------------------------
    else if (budget === "high") {
        if (time === "full") {
            title = "1日贅沢！個室露天風呂がある日帰り温泉";
            desc = "ヘリは乗りませんが、温泉なら最高！個室で豪華な食事と温泉を楽しめるプランで、日頃の疲れを完全にリセットしましょう。";
            keyword = "onsen,luxury";
        } else if (time === "half") {
            title = "半日リッチ。ホテルでのアフタヌーンティー";
            desc = "午後の数時間を使って、高級ホテルのラウンジへ。最高のサービスと美味しい紅茶で、特別な気分に浸れます。";
            keyword = "afternoontea,hotel";
        } else {
            title = "2〜3時間。高級部位専門の焼肉 or スパ";
            desc = "短時間で予算を使うなら、食か癒やしに集中！最高級のお肉を少しだけ、またはプロによるマッサージで自分を甘やかして。";
            keyword = "yakiniku,spa";
        }
    }

    // 気分による微調整（隠し味）
    if (mood === "active") {
        desc += " 今日は「アクティブ」な気分なので、なるべく歩くコースを選んでみてくださいね！";
    }

    // 画面に反映
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    
    document.getElementById("resultTitle").innerText = "✨ " + title;
    document.getElementById("resultText").innerText = desc;
    
    // 画像はUnsplashのAPIを使用
    document.getElementById("resultImage").src = `https://images.unsplash.com/featured/?${keyword},city`;

    resultBox.scrollIntoView({ behavior: 'smooth' });
}
