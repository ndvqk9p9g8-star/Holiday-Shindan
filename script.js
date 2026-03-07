function diagnose() {
    let mood = document.getElementById("mood").value;

    let title = "";
    let text = "";
    let image = "";

    if (mood === "relax") {
        let options = [
            ["♨️ゆったり温泉コース", "あらスッキリ。今日はお肌も心もととのう日。近くの温泉に行ってみよう", "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"],
            ["🌿癒しカフェコース", "深呼吸したくなる休日。静かなカフェでのんびり時間", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"]
        ];
        let r = Math.floor(Math.random() * options.length);
        title = options[r][0]; text = options[r][1]; image = options[r][2];
    } else if (mood === "active") {
        let options = [
            ["🎢テーマパークコース", "アドレナリン全開！今日は思いっきり遊ぼう", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
            ["🚴アクティブ冒険コース", "身体がうずうずしている。外に飛び出そう", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"]
        ];
        let r = Math.floor(Math.random() * options.length);
        title = options[r][0]; text = options[r][1]; image = options[r][2];
    } else if (mood === "food") {
        let options = [
            ["🍜食べ歩きグルメ旅", "胃袋が主役の日。気になる店をハシゴしよう", "https://images.unsplash.com/photo-1504674900247-0877df9cc836"],
            ["🍰スイーツ巡り", "今日は甘いものの誘惑に負けてもいい日", "https://images.unsplash.com/photo-1551024601-bec78aea704b"]
        ];
        let r = Math.floor(Math.random() * options.length);
        title = options[r][0]; text = options[r][1]; image = options[r][2];
    } else if (mood === "new") {
        let options = [
            ["🎨アート散歩", "感性が刺激を求めている。美術館へ行こう", "https://images.unsplash.com/photo-1492724441997-5dc865305da7"],
            ["🧭未知の街探索", "知らない街で新しい発見を", "https://images.unsplash.com/photo-1501785888041-af3ef285b470"]
        ];
        let r = Math.floor(Math.random() * options.length);
        title = options[r][0]; text = options[r][1]; image = options[r][2];
    } else {
        title = "🌳自然リフレッシュ";
        text = "今日は自然に呼ばれている。公園で深呼吸";
        image = "https://images.unsplash.com/photo-1501785888041-af3ef285b470";
    }

    document.getElementById("resultTitle").innerText = title;
    document.getElementById("resultText").innerText = text;
    document.getElementById("resultImage").src = image;
}
