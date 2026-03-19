function diagnose() {
    const people = document.getElementById("people").value;
    const time = document.getElementById("time").value;
    const mood = document.getElementById("mood").value;
    const budget = document.getElementById("budget").value;

    // 巨大なプランデータベース： [気分][予算][時間]
    const masterData = {
        relax: {
            low: {
                short: "静かな公立図書館の閲覧室",
                half: "大きな公園の芝生で読書",
                full: "海辺の堤防でぼーっとする"
            },
            mid: {
                short: "駅近の足湯・銭湯",
                half: "最新設備のスーパー銭湯",
                full: "緑に囲まれた日帰り温泉"
            },
            high: {
                short: "ホテルのティーラウンジ",
                half: "個室ヘッドスパ",
                full: "客室露天風呂のデイユース"
            }
        },
        active: {
            low: {
                short: "近所の階段・坂道散歩",
                half: "パワースポット巡りウォーキング",
                full: "低山での軽ハイキング"
            },
            mid: {
                short: "バッティングセンター",
                half: "ボルダリングジム",
                full: "大型アスレチックパーク"
            },
            high: {
                short: "最新VRアトラクション",
                half: "乗馬体験レッスン",
                full: "貸切テニスコート・BBQ"
            }
        },
        new: {
            low: {
                short: "知らない駅での途中下車",
                half: "大きなリサイクルショップ巡り",
                full: "路面電車で終点まで行く旅"
            },
            mid: {
                short: "コンセプトカフェ",
                half: "陶芸やシルバーリング作り",
                full: "脱出ゲーム施設をはしご"
            },
            high: {
                short: "ブランド旗艦店の見学",
                half: "プライベートサウナ",
                full: "話題の没入型体験アート"
            }
        },
        food: {
            low: {
                short: "SNSで話題のスイーツ店",
                half: "商店街の食べ歩き",
                full: "デパ地下の限定品ハンティング"
            },
            mid: {
                short: "本格的なカレー・ラーメン店",
                half: "見晴らしの良いテラスランチ",
                full: "少し遠くの漁港で海鮮丼"
            },
            high: {
                short: "高級店のアフタヌーンティー",
                half: "ホテルランチビュッフェ",
                full: "夜景の見えるフルコース"
            }
        }
    };

    // 人数による一言コメント
    const peopleAdvice = {
        one: "自分だけの時間を贅沢に味わえますね。",
        two: "二人だからこその会話も楽しめそうです。",
        group: "みんなでワイワイ、最高の思い出になりそう！"
    };

    // 結果を取得
    const spot = masterData[mood][budget][time];
    const advice = peopleAdvice[people];

    // 画面表示
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    document.getElementById("resultTitle").innerText = "✨ 行き先： " + spot;
    document.getElementById("resultText").innerText = `${spot}へ行くのが今のあなたにぴったり。${advice}`;

    resultBox.scrollIntoView({ behavior: 'smooth' });
}
