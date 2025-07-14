//ボタンが押されたら表示非表示　（ED から スタート画面 すすむ）
ED_front.addEventListener("click", e => {
    ED.style.display = "none"
    startscrean.style.display = "block"
    window.location.reload();
}, false);