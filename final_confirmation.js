//ボタンが押されたら表示非表示　（最終確認 から 発音例 すすむ）
document.getElementById("final_confirmation_front").addEventListener("click", e => {
    final_confirmation.style.display = "none"
    speak_example.style.display = "block"
    document.getElementById(difficult_select + selected_effect + "_mp3" + select_language).play()
}, false);