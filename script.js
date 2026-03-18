function diagnose() {
    // 選択された値を取得
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const who = document.getElementById("who").value;
    const mood = document.getElementById("mood").value;
    const budget = document.getElementById("budget").value;

    // --- 1. 場所を決める (who × mood) ---
    const places = {
        alone: { relax: "静かな隠れ家ブックカフェ", active: "展望台のある大きな公園", new: "まだ降りたことのない駅の商店街", food: "行列ができる人気のラーメン屋" },
        friends: { relax: "広めのソファーがあるラウンジ", active: "最新の室内アスレチック施設", new: "話題の没入型アート展", food: "多国籍料理が楽しめるフードコート" },
        couple: { relax: "海が見える静かな公園", active: "夜景がきれいなスケートリンク", new: "ワークショップができる工芸スタジオ", food: "隠れ家風のイタリアンレストラン" },
        family: { relax: "芝生が広がる大きな植物園", active: "家族で楽しめるサバゲー場", new: "体験型サイエンスミュージアム", food: "個室のある豪華な回転寿司" }
    };

    // --- 2. 過ごし方を決める (budget × time) ---
    // これで「たっぷりなのにサクッと」という矛盾を防ぎます
    const details = {
        low: {
            full: "お金をかけず、お弁当を持って1日中その場所の空気を味わい尽くしましょう。歩くだけでも新しい発見があるはず。",
            half: "数時間はスマホを置いて、景色や雰囲気をぼーっと楽しんで。0円でできる最高の贅沢です。",
            short: "ちょっとした散歩気分で立ち寄ってみて。お金を使わなくても、リフレッシュには十分な時間です。"
        },
        mid: {
            full: "ランチからおやつまで、自分へのご褒美をちりばめた充実の1日に。少し贅沢なプランを選んでみて。",
            half: "お気に入りのメニューやグッズを1つだけ奮発して、短時間でも満足度の高い時間を過ごしましょう。",
            short: "スキマ時間にプレミアムな体験を。限定スイーツや特別席など、プチ贅沢が今日のラッキーポイント。"
        },
        high: {
            full: "今日は最高級の休日！一番良いコースを予約して、朝から晩までVIP気分で遊び尽くすのが正解です。",
            half: "移動はタクシーを使ったり、待ち時間を短縮するパスを買ったりして、濃密でリッチな時間を過ごして。",
            short: "短時間だからこそ、最高級の素材やサービスに一点突破で投資を。短いけれど忘れられない体験になります。"
        }
    };

    // --- 3. 人数の呼び方 ---
    const peopleTexts = { one: "ひとりで", two: "2人で", group: "みんなで" };

    // --- 4. 画像 (mood) ---
    const images = {
        relax: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
        active: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
        new: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500",
        food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
    };

    // 結果の組み立て
    const resultPlace = places[who][mood];
    const resultDetail = details[budget][time];
    const resultPeople = peopleTexts[people];

    const finalTitle = "✨ あなたへの休日プラン ✨";
    const finalText = `今日は${resultPeople}「${resultPlace}」へ！\n\n${resultDetail}`;

    // 画面に表示
    document.getElementById("resultBox").style.display = "block";
    document.getElementById("resultTitle").innerText = finalTitle;
    document.getElementById("resultText").innerText = finalText;
    document.getElementById("resultImage").src = images[mood];

    // 結果の位置までスクロール（おまけ）
    document.getElementById("resultBox").scrollIntoView({ behavior: 'smooth' });
}
