// 人数が「1人」の時は関係性選択を隠す
function toggleWho() {
    const people = document.getElementById("people").value;
    const whoGroup = document.getElementById("whoGroup");
    const whoSelect = document.getElementById("who");

    if (people === "one") {
        whoGroup.style.display = "none";
        whoSelect.value = "alone";
    } else {
        whoGroup.style.display = "block";
        if (whoSelect.value === "alone") {
            whoSelect.value = "friends";
        }
    }
}

function diagnose() {
    const time = document.getElementById("time").value;
    const budget = document.getElementById("budget").value;
    const people = document.getElementById("people").value;
    const who = document.getElementById("who").value;
    const mood = document.getElementById("mood").value;

    let title = "";
    let desc = "";

    // --- 超詳細ロジック ---

    // 1. 予算：節約(low)
    if (budget === "low") {
        if (people === "one") {
            if (mood === "relax") title = "国立国会図書館の閲覧室";
            else if (mood === "active") title = "都心の階段・坂道ウォーキング";
            else if (mood === "new") title = "知らない駅での途中下車歩き";
            else title = "デパ地下の試食巡り（気分だけ）";
            desc = "1人なら、究極にストイックに趣味を追求できます。誰にも邪魔されない自由を楽しんで。";
        } else {
            if (who === "couple") title = "夜景の見える無料展望ロビー";
            else if (who === "family") title = "大型遊具のある県立公園";
            else title = "公園でのカードゲーム大会";
            desc = "お金をかけなくても、場所と相手がいれば最高の思い出になります。";
        }
    }
    // 2. 予算：普通(mid)
    else if (budget === "mid") {
        if (time === "full") {
            if (mood === "active") title = "高尾山や近場の低山ハイキング";
            else title = "江の島・鎌倉1日観光";
            desc = "1日あれば、交通費とランチ代でしっかり「旅」が成立します。";
        } else if (time === "half") {
            if (mood === "food") {
                if (people === "one") title = "カウンターの名店でラーメン or カレー";
                else title = "ホテルのランチビュッフェ";
            } else title = "最新設備のスーパー銭湯・サウナ";
            desc = "半日という限られた時間で、満足度を最大化する過ごし方です。";
        } else {
            if (people === "one") title = "ミニシアターでの映画鑑賞";
            else title = "コンセプトカフェや猫カフェ";
            desc = "2〜3時間のスキマ時間を、特別な空間で埋め尽くしましょう。";
        }
    }
    // 3. 予算：贅沢(high)
    else if (budget === "high") {
        if (who === "alone") {
            if (mood === "relax") title = "高級ホテルのデイユース（スパ付）";
            else title = "一流ブランドの旗艦店でお買い物";
            desc = "誰にも邪魔されず、最高のサービスと空間を独り占め。自分への究極のご褒美。";
        } else if (who === "couple") {
            if (time === "full") title = "個室露天風呂付き日帰り温泉";
            else title = "夜景の見える高級フレンチディナー";
            desc = "2人の特別な記念日にふさわしい、ラグジュアリーな場所を選びました。";
        } else {
            if (mood === "active") title = "貸切クルーザーでの海釣り・BBQ";
            else title = "高級ホテルのスイートルームで女子会・家族会";
            desc = "大人数で予算を出し合って、非日常なプライベート空間を楽しみましょう！";
        }
    }

    // 画面表示
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    document.getElementById("resultTitle").innerText = "✨ 行き先： " + title;
    document.getElementById("resultText").innerText = desc;

    resultBox.scrollIntoView({ behavior: 'smooth' });
}
