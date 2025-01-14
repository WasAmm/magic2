// 単語・エフェクト引っ張るやつ
const final_confirmation = document.getElementById("final_confirmation");
const final_confirmation_word = document.getElementById("final_confirmation_word");
const speak_example_word = document.getElementById("speak_example_word");
const mainstage_word = document.getElementById("mainstage_word");
const mainstage_player_words = document.getElementById("mainstage_player_words");

let selected_text;
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
        final_confirmation.style.display = "block"
        final_confirmation_word.textContent = selected_text;
        speak_example_word.textContent = selected_text;
        mainstage_word.textContent = selected_text;
        mainstage_player_words.textContent = selected_text;
        //エフェクト引っ張ってくるやつ
        selected_effect = w.getAttribute("data-word");
        console.log(selected_effect);

    });
}
