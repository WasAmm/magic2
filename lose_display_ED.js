//ボタンが押されたら表示非表示　（敗北画面 から ED すすむ）
lose_display_front.addEventListener("click", e => {
    lose_display.style.display = "none"
    lose_display_ED.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（敗北画面 から ED すすむ）
lose_display_ED_front.addEventListener("click", e => {
    lose_display_ED.style.display = "none"
    ED.style.display = "block"
}, false);


