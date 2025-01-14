//ボタンが押されたら表示非表示　（敗北画面 から ED すすむ）
lose_display_front.addEventListener("click", e => {
    lose_display.style.display = "none"
    lose_display_ED.style.display = "block"
}, false);