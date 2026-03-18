function diagnose() {
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const who = document.getElementById("who").value;
    const mood = document.getElementById("mood").value;
    const budget = document.getElementById("budget").value;

    let title = "";
    let desc = "";
    let keyword = ""; // 画像検索用

    // --- 徹底分岐ロジック ---
    
    // 1. 予算が「高い」場合の豪華プラン
    if (budget === "high") {
        if (mood === "food") {
            title = "最高級の美食体験ディナー";
            desc = `${who === 'alone' ? '自分へのご褒美に' : '大切な人と'}、予約困難な名店へ。予算を気にせず、一番良いコースを堪能する贅沢な時間を。`;
            keyword = "luxury,dinner";
        } else if (time === "full") {
            title = "日帰り贅沢温泉リゾート";
            desc = "1日フルに使って、貸切露天風呂やエステを満喫。移動もタクシーで快適に、究極の癒やしを。";
            keyword = "spa,resort";
        } else {
            title = "ヘリクルーズ or 高級スパ";
            desc = "短時間でも圧倒的な非日常を。空からの景色やプロの施術で、心身ともにリフレッシュ。";
            keyword = "helicopter,massage";
        }
    } 
    // 2. 予算が「低い」場合の工夫プラン
    else if (budget === "low") {
        if (mood === "active") {
            title = "絶景を巡るサイクリング旅";
            desc = "レンタサイクルで、まだ行ったことのない公園や海岸へ。風を感じながら体を動かす、最高にヘルシーな休日です。";
            keyword = "cycling,park";
        } else if (who === "alone") {
            title = "大型書店のハシゴ＆カフェ読書";
            desc = "気になる本を片っ端からチェック。コーヒー1杯の値段で、知識の海に溺れる静かな休日。";
            keyword = "book,cafe";
        } else {
            title = "おしゃピク（おしゃれピクニック）";
            desc = "家にあるものを持ち寄って、景色の良い公園へ。外で食べるだけで、いつもの食事がイベントに変わります。";
            keyword = "picnic";
        }
    }
    // 3. 予算が「普通」かつ「人数」で分ける
    else {
        if (people === "one") {
            if (mood === "new") {
                title = "ミニシアターで映画鑑賞";
                desc = "大型館ではやらないような、マニアックな名作を。鑑賞後は一人でじっくり余韻に浸って。";
                keyword = "cinema";
            } else {
                title = "隠れ家カフェ巡り";
                desc = "スマホを置いて、お店のこだわりを味わう時間。自分のペースで街を歩く楽しさを再発見。";
                keyword = "coffee,interior";
            }
        } else if (people === "two") {
            title = "話題の没入型アート展";
            desc = "2人で最新のデジタルアートを体験。写真もたくさん撮って、会話が途切れない刺激的な時間に。";
            keyword = "art,digital";
        } else {
            title = "チーム対抗！ボウリング or ダーツ";
            desc = "みんなでワイワイ盛り上がるなら定番が一番。チーム戦にして、ちょっとした景品を用意するとさらに楽しい！";
            keyword = "darts,party";
        }
    }

    // --- 画像の表示 (Unsplashから動的に取得) ---
    // ランダム要素を入れるためにランダムな数字を末尾に付与
    const randomNum = Math.floor(Math.random() * 100);
    const imageUrl = `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop&sig=${randomNum}`; 
    // ※↑本来はキーワード連動が理想ですが、Unsplashの仕様変更に備え、安定した画像にキーワードを添えます
    const dynamicImageUrl = `https://source.unsplash.com/featured/?${keyword},city`;

    // 画面に反映
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    
    document.getElementById("resultTitle").innerText = title;
    document.getElementById("resultText").innerText = desc;
    document.getElementById("resultImage").src = dynamicImageUrl;

    // スムーズに結果まで移動
    window.scrollTo({ top: resultBox.offsetTop, behavior: 'smooth' });
}
