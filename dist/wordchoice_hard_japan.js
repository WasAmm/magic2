// Hard単語画面


//ボタンが押されたら表示非表示　（Hard1 から Hard2）
wordchoice_Hard1_front_japan.addEventListener("click", e => {
    wordchoice_Hard1_japan.style.display = "none"
    wordchoice_Hard2_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（Hard2 から Hard1）
wordchoice_Hard2_back_japan.addEventListener("click", e => {
    wordchoice_Hard2_japan.style.display = "none"
    wordchoice_Hard1_japan.style.display = "block"
}, false);