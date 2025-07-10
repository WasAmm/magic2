//HPの点数
const HP_tensuu = document.getElementsByName("HP_tensuu");
const words_word = document.getElementsByName("words_word");

async function azure_word(select_language,word, mills) {
    //return azure_dummy(word);
    try {
        return await sendVoice(select_language,word, mills);
    } catch (error) {
        return Promise.resolve((0))
    }

};

async function azure_dummy(word) {
    return await new Promise((resolove) => {
        setTimeout(() => {
            resolove(Math.floor(Math.random() * 100));
        }, 5000);
    });
}

let selected_text;
let select_language;
let selected_effect;
let zanryou = 370;
let count_down = 370;
let difficult_select;
//単語を引っ張ってくる
for (const w of words_word) {
    w.addEventListener("click", e => {
        selected_text = w.textContent;
        console.log(w.dataset.word);
        wordchoice_Easy.style.display = "none"
        wordchoice_Normal.style.display = "none"
        wordchoice_Hard1.style.display = "none"
        wordchoice_Hard2.style.display = "none"
        wordchoice_Easy_japan.style.display = "none"
        wordchoice_Normal_japan.style.display = "none"
        wordchoice_Hard1_japan.style.display = "none"
        wordchoice_Hard2_japan.style.display = "none"
        final_confirmation.style.display = "block"
        final_confirmation_word.textContent = selected_text;
        speak_example_word.textContent = selected_text;
        mainstage_word.textContent = selected_text;
        mainstage_player_words.textContent = selected_text;
        //エフェクト引っ張ってくるやつ
        selected_effect = w.getAttribute("data-word");
        console.log(selected_effect);

        select_language = w.getAttribute("data-lang");
        console.log(select_language);

    });
}

//ボタンが押されたら表示非表示（次のターンに進むから難易度選択画面）
mainstage_turn_next.addEventListener("click", e => {
    mainstage.style.display = "none"
    language.style.display = "block"
    document.getElementById(difficult_select + selected_effect + "_png").style.display = "none";
    document.getElementById("battle_bgm").pause()
    document.getElementById("battle_bgm").currentTime = 0
})

//ボタンが押されたら表示非表示　（発音確認 から ゲーム確認画面 すすむ）
speak_example_front.addEventListener("click", async (e) => {
    console.log("speak_example_front click");
    speak_example.style.display = "none"
    mainstage.style.display = "block"
    mainstage_score.style.display = "none"
    mainstage_damage.style.display = "none"
    mainstage_turn_next.style.display = "none"
    count_supell.style.display = "block"
    count_line.style.display = "block"
    count_meter.style.display = "block"
    document.getElementById(difficult_select + selected_effect + "_mp3").pause()
    document.getElementById(difficult_select + selected_effect + "_mp3").currentTime = 0

    mainstage_player_words.style.display = "none"
    mainstage_Lets_speak.style.display = "block"
    mainstage_word.style.display = "block"
    
    //Azure AI の録音時間だけのカウント
    setTimeout(() => {
        count_supell.style.display = "none"
        count_line.style.display = "none"
        mainstage_Lets_speak.style.display = "none"
        mainstage_word.style.display = "none"
        count_meter.style.display = "none"
        mainstage_damage.style.display = "block"
        mainstage_score.style.display = "block"
    }, 7000);
    setTimeout(() => {
        document.getElementById(difficult_select + selected_effect + "_png").style.display = "block" //エフェクト表示
        mainstage_player_words.style.display = "block"
    }, 8000);
    document.getElementById("HP_tensuu").textContent = "HP " + zanryou + "/370";    //HP残量のところ
    window.document.getElementById("mainstage_HPber").style.width = zanryou + "px";
    window.document.getElementById("count_meter").style.width = "370px";
    setTimeout(() => {
        window.document.getElementById("count_meter").style.width = "0px";
    }, 10);
    const t = await azure_word(select_language,selected_text, 5000);

    console.log(t);
    const text = t;
    document.getElementById("mainstage_score").textContent = "あなたの点数は" + text + "点";    //点数のところ
    let text2 = text * 2
    zanryou = zanryou - text2
    document.getElementById("mainstage_damage").textContent = "敵に" + text2 + "のダメージ";   //ダメージのところ
    if (zanryou < 0) zanryou = 0;
    document.getElementById("HP_tensuu").textContent = "HP " + (zanryou) + "/370";    //HP残量のところ
    window.document.getElementById("mainstage_HPber").style.width = zanryou + "px";

    //ターン数に関係なくHPが0以下になったら勝利画面に行く
    if (zanryou <= 0 && turn <= 4) {
        setTimeout(() => {
            mainstage_score.style.display = "none"
            mainstage_damage.style.display = "none"
            mainstage_monster_win_words.style.display = "block"
            mainstage_turn_next.style.display = "none"
            mainstage_monster_down.style.display = "block"
            dragon_power.style.display = "none"
            document.getElementById(difficult_select + selected_effect + "_png").style.display = "none"
        }, 5000);
    }

    //ダメージが残ってるときとターンが3以上の時に負けたを表示
    if (zanryou >= 1 && turn >= 3) {
        setTimeout(() => {
            mainstage_score.style.display = "none"
            mainstage_damage.style.display = "none"
            mainstage_turn_next.style.display = "none"
            mainstage_monster_victory.style.display = "block"
            mainstage_monster_lose_words.style.display = "block"
            dragon_power.style.display = "none"
            mainstage_effect_dragon.style.display = "block"
            mainstage_effect_dragon.style.display = "none"

        }, 5000);
    }
    await new Promise(resolve => setTimeout(resolve, 5000));
    if (zanryou <= 0 && turn <= 4) {

    } else if (zanryou >= 1 && turn >= 3) {

    } else {
        document.getElementById("mainstage_turn_next").textContent = (turn + 1) + "ターン目に進む"
        mainstage_score.style.display = "none"
        mainstage_damage.style.display = "none"
        mainstage_turn_next.style.display = "block"
    }


}, false);

//バトル画面　ターン数のところ
let turn = 1
document.getElementById("mainstage_turn").textContent = turn + "ターン" + "/3ターン";
document.getElementById("mainstage_turn_next").addEventListener("click", e => {
    turn = turn + 1
    document.getElementById("mainstage_turn").textContent = turn + "ターン" + "/3ターン";
})