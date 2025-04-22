const storyskip_japan = document.getElementsByName("storyskip_japan");

//スキップボタン（任意のあらすじから難易度選択画面）
for (const skip of storyskip_japan) {
    skip.addEventListener("click", e => {
        OP_1_japan.style.display = "none"
        OP_2_japan.style.display = "none"
        OP_3_japan.style.display = "none"
        OP_4_japan.style.display = "none"
        OP_5_japan.style.display = "none"
        difficulty.style.display = "block"
        document.getElementById("story_bgm").pause()
        document.getElementById("story_bgm").currentTime = 0
    }, false);
}


//ボタンが押されたら表示非表示　（あらすじ画面1からスタート画面　もどる）
storyback_1_japan.addEventListener("click", e => {
    OP_1_japan.style.display = "none"
    startscrean.style.display = "block"
    document.getElementById("story_bgm").pause()
    document.getElementById("story_bgm").currentTime = 0
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面1からあらすじ画面2　すすむ）
storyfront_1_japan.addEventListener("click", e => {
    OP_1_japan.style.display = "none"
    OP_2_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面２からあらすじ画面１　もどる）
storyback_2_japan.addEventListener("click", e => {
    OP_2_japan.style.display = "none"
    OP_1_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面2からあらすじ画面3　すすむ）
storyfront_2_japan.addEventListener("click", e => {
    OP_2_japan.style.display = "none"
    OP_3_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面3からあらすじ画面2　もどる）
storyback_3_japan.addEventListener("click", e => {
    OP_3_japan.style.display = "none"
    OP_2_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面3からあらすじ画面4　すすむ）
storyfront_3_japan.addEventListener("click", e => {
    OP_3_japan.style.display = "none"
    OP_4_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面4からあらすじ画面3）
storyback_4_japan.addEventListener("click", e => {
    OP_4_japan.style.display = "none"
    OP_3_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面4からあらすじ画面5）
storyfront_4_japan.addEventListener("click", e => {
    OP_4_japan.style.display = "none"
    OP_5_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面5からあらすじ画面4）
storyback_5_japan.addEventListener("click", e => {
    OP_5_japan.style.display = "none"
    OP_4_japan.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ最終から難易度選択画面）
storyfront_5_japan.addEventListener("click", e => {
    OP_5_japan.style.display = "none"
    difficulty_japan.style.display = "block"
    document.getElementById("story_bgm").pause()
    document.getElementById("story_bgm").currentTime = 0
}, false);