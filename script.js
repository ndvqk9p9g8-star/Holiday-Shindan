function diagnose() {
    const time = document.getElementById("time").value;
    const budget = document.getElementById("budget").value;
    const mood = document.getElementById("mood").value;
    const who = document.getElementById("who").value;

    let title = "";
    let desc = "";
    let imageUrl = ""; // ここに直接画像のURLを入れます

    // -----------------------------------------
    // 【1. 予算：節約（low）】のときの時間別プラン
    // -----------------------------------------
    if (budget === "low") {
        if (time === "full") {
            title = "1日たっぷり！大きな公園でピクニック＆読書";
            desc = "お弁当を持って、広大な公園へ。1日あるからこそ、時間を気にせず芝生でゴロゴロしたり、園内を散策したり。究極の0円贅沢です。";
            imageUrl = "https://images.unsplash.com/photo-1593351280145-8a241857c7d4?q=80&w=1000&auto=format&fit=crop"; // 公園
        } else if (time === "half") {
            title = "半日ぶらり。知らない街の商店街歩き";
            desc = "片道数百円の電車賃だけで、隣町の商店街へ。活気ある空気を感じながら、気になったお店を覗く「小さな冒険」が楽しめます。";
            imageUrl = "https://images.unsplash.com/photo-1511993215505-1a87b3254585?q=80&w=1000&auto=format&fit=crop"; // 商店街
        } else {
            title = "2〜3時間。大型書店のハシゴ";
            desc = "短時間なら、空調の効いた本屋さんが最高。普段見ないジャンルの棚をチェックするだけで、良い刺激になります。";
            imageUrl = "https://images.unsplash.com/photo-1520698188001-9e23c7f993f4?q=80&w=1000&auto=format&fit=crop"; // 本屋
        }
    }
    // -----------------------------------------
    // 【2. 予算：普通（mid）】のときの時間別プラン
    // -----------------------------------------
    else if (budget === "mid") {
        if (time === "full") {
            title = "1日満喫！江の島や鎌倉など「プチ旅行」";
            desc = "少し足を伸ばして観光地へ。食べ歩きを楽しんだり、景色を眺めたり。1日あれば、日帰り旅行気分をしっかり味わえます。";
            imageUrl = "https://images.unsplash.com/photo-1582234032541-65f5e5b85a1e?q=80&w=1000&auto=format&fit=crop"; // 江の島・鎌倉
        } else if (time === "half") {
            title = "半日リフレッシュ。お洒落な映画館＆カフェ";
            desc = "ちょっと良いシートの映画館で最新作を。その後はカフェで感想を語り合う、王道だけど満足度の高い休日です。";
            imageUrl = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop"; // 映画館
        } else {
            title = "2〜3時間。こだわりスイーツ or 銭湯";
            desc = "短時間なら、行列のできる人気店でおやつを食べるか、綺麗な銭湯でサッと汗を流すのが最高のリフレッシュ。";
            // 気分で画像を少し変える
            imageUrl = mood === "food" ? "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1598115591321-2e6353d717f2?q=80&w=1000&auto=format&fit=crop"; 
            // スイーツ or 銭湯
        }
    }
    // -----------------------------------------
    // 【3. 予算：贅沢（high）】のときの時間別プラン
    // -----------------------------------------
    else if (budget === "high") {
        if (time === "full") {
            title = "1日贅沢！個室露天風呂がある日帰り温泉";
            desc = "ヘリは乗りませんが、温泉なら最高！個室で豪華な食事と温泉を楽しめるプランで、日頃の疲れを完全にリセットしましょう。";
            imageUrl = "https://images.unsplash.com/photo-1620320573966-26792f96e147?q=80&w=1000&auto=format&fit=crop"; // 温泉
        } else if (time === "half") {
            title = "半日リッチ。ホテルでのアフタヌーンティー";
            desc = "午後の数時間を使って、高級ホテルのラウンジへ。最高のサービスと美味しい紅茶で、特別な気分に浸れます。";
            imageUrl = "https://images.unsplash.com/photo-1534017637824-34208a70f5e3?q=80&w=1000&auto=format&fit=crop"; // アフタヌーンティー
        } else {
            title = "2〜3時間。高級部位専門の焼肉 or スパ";
            desc = "短時間で予算を使うなら、食か癒やしに集中！最高級のお肉を少しだけ、またはプロによるマッサージで自分を甘やかして。";
            imageUrl = mood === "food" ? "https://images.unsplash.com/photo-1563242095-23c348f3b147?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1563242095-23c348f3b147?q=80&w=1000&auto=format&fit=crop"; // 焼肉
        }
    }

    // 画面に反映
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    
    document.getElementById("resultTitle").innerText = "✨ " + title;
    document.getElementById("resultText").innerText = desc;
    
    // 用意した画像のURLを直接セット！
    document.getElementById("resultImage").src = imageUrl;

    resultBox.scrollIntoView({ behavior: 'smooth' });
}
