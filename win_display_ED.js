//ボタンが押されたら表示非表示　（勝利画面 から ED すすむ）
win_display_front.addEventListener("click", e => {
    win_display.style.display = "none"
    win_display_ED.style.display = "block"
}, false);