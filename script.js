function diagnose() {
    // 選択された値を取得
    const who = document.getElementById("who").value;
    const mood = document.getElementById("mood").value;
    const budget = document.getElementById("budget").value;

    // --- 1. 「場所」を決めるパーツ (who × mood) ---
    const places = {
        alone: {
            relax: "静かな隠れ家ブックカフェ",
            active: "展望台のある大きな公園",
            new: "まだ降りたことのない駅の商店街",
            food: "行列ができる人気のラーメン屋"
        },
        friends: {
            relax: "広めのソファーがあるラウンジ",
            active: "最新の室内アスレチック施設",
            new: "話題の没入型アート展",
            food: "多国籍料理が楽しめるフードコート"
        },
        couple: {
            relax: "海が見える静かな公園",
            active: "夜景がきれいなスケートリンク",
            new: "ワークショップができる工芸スタジオ",
            food: "隠れ家風のイタリアンレストラン"
        },
        family: {
            relax: "芝生が広がる大きな植物園",
            active: "家族で楽しめるサバゲー場",
            new: "体験型サイエンスミュージアム",
            food: "個室のある豪華な回転寿司"
        }
    };

    // --- 2. 「行動」を決めるパーツ (budget) ---
    const actions = {
        low: "をお得に満喫！お金を使わずに、その場の空気や景色を全力で楽しむのが今日の正解。",
        mid: "で充実した時間を。ちょっとした贅沢を取り入れて、自分へのご褒美をあげよう。",
        high: "を贅沢に独り占め！今日は金額を気にせず、一番良いプランを選んで最高の一日にして。"
    };

    // --- 3. 画像を決めるパーツ (mood) ---
    const images = {
        relax: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
        active: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        new: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    };

    // --- 組み合わせの魔法 ---
    // places[誰と][気分] ＋ actions[予算] で文章を作る
    const resultPlace = places[who][mood];
    const resultAction = actions[budget];

    const finalTitle = "✨ あなたへの提案 ✨";
    const finalText = "今日は「" + resultPlace + "」" + resultAction;
    const finalImage = images[mood];

    // 画面に表示
    document.getElementById("resultTitle").innerText = finalTitle;
    document.getElementById("resultText").innerText = finalText;
    document.getElementById("resultImage").src = finalImage;
}
