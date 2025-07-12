// 言語選択画面

//ボタンが押されたら表示非表示　（あらすじ画面1からスタート画面　もどる）
language_japanese.addEventListener("click", e => {
    language.style.display = "none"
    difficulty_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面1からあらすじ画面2　すすむ）
language_english.addEventListener("click", e => {
    language.style.display = "none"
    difficulty.style.display = "block"
}, false);