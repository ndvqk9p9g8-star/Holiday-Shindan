function diagnose() {
    const people = document.getElementById("people").value; // one, two, group
    const time = document.getElementById("time").value;     // full, half, short
    const mood = document.getElementById("mood").value;     // relax, active, new, food
    const budget = document.getElementById("budget").value; // low, mid, high

    // 1. メインの目的地（気分 × 予算 × 人数）
    const spots = {
        relax: {
            low:  { one: "大きな都立公園", two: "静かな日本庭園", group: "開放感のある河川敷" },
            mid:  { one: "サウナ付き銭湯", two: "プラネタリウム", group: "貸切露天風呂" },
            high: { one: "ホテルのスパ", two: "高級ラウンジ", group: "リゾートホテルのデイユース" }
        },
        active: {
            low:  { one: "街歩き・階段巡り", two: "神社仏閣スタンプラリー", group: "公園でアクティブスポーツ" },
            mid:  { one: "ボルダリング", two: "インドアゴルフ", group: "大型スポッチャ" },
            high: { one: "パーソナルジム体験", two: "本格アスレチック", group: "プライベートサバゲー" }
        },
        new: {
            low:  { one: "知らない街の商店街", two: "フリーマーケット", group: "謎解きウォーキング" },
            mid:  { one: "陶芸教室", two: "没入型アート展", group: "脱出ゲーム施設" },
            high: { one: "オーダーメイド体験", two: "ナイトクルージング", group: "リムジンパーティー" }
        },
        food: {
            low:  { one: "行列のラーメン店", two: "仲見世通り食べ歩き", group: "デパ地下フェス" },
            mid:  { one: "隠れ家ビストロ", two: "テラスランチ", group: "本格BBQ場" },
            high: { one: "カウンター寿司", two: "夜景フレンチ", group: "ホテルビュッフェ" }
        }
    };

    // 2. 時間による「過ごし方」の味付け（ここで行き先が具体化される）
    const timeDetails = {
        short: {
            action: "をピンポイントで攻略！",
            tip: "移動時間を最小限にして、その場所の「一番美味しいところ」だけを凝縮して楽しむのが正解です。"
        },
        half: {
            action: "をメインに周辺散策！",
            tip: "目的地を楽しんだ後は、近くのカフェやショップにも立ち寄って、エリア全体を味わい尽くしましょう。"
        },
        full: {
            action: "を拠点に1日じっくり！",
            tip: "朝から晩まで時間を気にせず、普段は見落としてしまうような細かい魅力まで徹底的に堪能する贅沢な1日を。"
        }
    };

    // 選択された要素を抽出
    const baseSpot = spots[mood][budget][people];
    const detail = timeDetails[time];

    // 最終的なタイトルと説明文
    const title = baseSpot + detail.action;
    const desc = `今の気分にぴったりのプランをご提案します。${baseSpot}へ行って、${detail.tip}`;

    // 画面表示
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    document.getElementById("resultTitle").innerText = "✨ 行き先： " + title;
    document.getElementById("resultText").innerText = desc;

    resultBox.scrollIntoView({ behavior: 'smooth' });
}
