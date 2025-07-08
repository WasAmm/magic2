//ボタンが押されたら表示非表示　（難易度選択画面からEasyの単語選択画面）
difficulty_Easy_japan.addEventListener("click", e => {
    difficulty_japan.style.display = "none"
    wordchoice_Easy_japan.style.display = "block"
    difficult_select = "Easy_"
}, false);

//ボタンが押されたら表示非表示　（難易度選択画面からEasyの単語選択画面）
difficulty_Normal_japan.addEventListener("click", e => {
    difficulty_japan.style.display = "none"
    wordchoice_Normal_japan.style.display = "block"
    difficult_select = "Normal_"
}, false);