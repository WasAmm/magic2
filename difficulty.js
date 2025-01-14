// 難易度画面

//ボタンが押されたら表示非表示　（難易度選択画面からEasyの単語選択画面）
difficulty_Easy.addEventListener("click", e => {
    difficulty.style.display = "none"
    wordchoice_Easy.style.display = "block"
    difficult_select = "Easy_"
}, false);




//ボタンが押されたら表示非表示　（難易度選択画面からNormalの単語選択画面）
difficulty_Normal.addEventListener("click", e => {
    difficulty.style.display = "none"
    wordchoice_Normal.style.display = "block"
    difficult_select = "Normal_"
}, false);




//ボタンが押されたら表示非表示　（難易度選択画面からHardの単語選択画面）
difficulty_Hard.addEventListener("click", e => {
    difficulty.style.display = "none"
    wordchoice_Hard1.style.display = "block"
    difficult_select = "Hard_"
}, false);
