//選んだ単語の音声を流す
document.getElementById("speak_example_repeat").addEventListener("click", e => {
    document.getElementById(difficult_select + selected_effect + "_mp3").play()
}, false);

//ボタンが押されたら表示非表示　（最終確認 から 難易度選択画面 もどる）
final_confirmation_back.addEventListener("click", e => {
    final_confirmation.style.display = "none"
    language.style.display = "block"
}, false);