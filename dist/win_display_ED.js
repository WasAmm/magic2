//ボタンが押されたら表示非表示　（勝利画面 から ED すすむ）
win_display_front.addEventListener("click", e => {
    win_display.style.display = "none"
    win_display_ED.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（敗北画面 から ED すすむ）
win_display_ED_front.addEventListener("click", e => {
    win_display_ED.style.display = "none"
    ED.style.display = "block"
}, false);