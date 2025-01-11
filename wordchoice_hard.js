// Hard単語画面
const wordchoice_Hard1_front = document.getElementById("wordchoice_Hard1_front");
const wordchoice_Hard2 = document.getElementById("wordchoice_Hard2");
const wordchoice_Hard2_back = document.getElementById("wordchoice_Hard2_back");

//ボタンが押されたら表示非表示　（Hard1 から Hard2）
wordchoice_Hard1_front.addEventListener("click", e => {
    wordchoice_Hard1.style.display = "none"
    wordchoice_Hard2.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（Hard2 から Hard1）
wordchoice_Hard2_back.addEventListener("click", e => {
    wordchoice_Hard2.style.display = "none"
    wordchoice_Hard1.style.display = "block"
}, false);