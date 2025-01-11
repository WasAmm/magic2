// あらすじ画面

const storyskip = document.getElementsByName("storyskip");
const storyfront_1 = document.getElementById("storyfront_1");
const storyback_1 = document.getElementById("storyback_1");
const story_bgm = document.getElementById("story_bgm");
const OP_2 = document.getElementById("OP_2");
const storyfront_2 = document.getElementById("storyfront_2");
const storyback_2 = document.getElementById("storyback_2");
const OP_3 = document.getElementById("OP_3");
const storyfront_3 = document.getElementById("storyfront_3");
const storyback_3 = document.getElementById("storyback_3");
const OP_4 = document.getElementById("OP_4");
const storyfront_4 = document.getElementById("storyfront_4");
const storyback_4 = document.getElementById("storyback_4");
const OP_5 = document.getElementById("OP_5");
const storyfront_5 = document.getElementById("storyfront_5");
const storyback_5 = document.getElementById("storyback_5");
const difficulty = document.getElementById("difficulty");

//スキップボタン（任意のあらすじから難易度選択画面）
for (const skip of storyskip) {
    skip.addEventListener("click", e => {
        OP_1.style.display = "none"
        OP_2.style.display = "none"
        OP_3.style.display = "none"
        OP_4.style.display = "none"
        OP_5.style.display = "none"
        difficulty.style.display = "block"
        document.getElementById("story_bgm").pause()
        document.getElementById("story_bgm").currentTime = 0
    }, false);
}


//ボタンが押されたら表示非表示　（あらすじ画面1からスタート画面　もどる）
storyback_1.addEventListener("click", e => {
    OP_1.style.display = "none"
    startscrean.style.display = "block"
    document.getElementById("story_bgm").pause()
    document.getElementById("story_bgm").currentTime = 0
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面1からあらすじ画面2　すすむ）
storyfront_1.addEventListener("click", e => {
    OP_1.style.display = "none"
    OP_2.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面２からあらすじ画面１　もどる）
storyback_2.addEventListener("click", e => {
    OP_2.style.display = "none"
    OP_1.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面2からあらすじ画面3　すすむ）
storyfront_2.addEventListener("click", e => {
    OP_2.style.display = "none"
    OP_3.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面3からあらすじ画面2　もどる）
storyback_3.addEventListener("click", e => {
    OP_3.style.display = "none"
    OP_2.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面3からあらすじ画面4　すすむ）
storyfront_3.addEventListener("click", e => {
    OP_3.style.display = "none"
    OP_4.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面4からあらすじ画面3）
storyback_4.addEventListener("click", e => {
    OP_4.style.display = "none"
    OP_3.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面4からあらすじ画面5）
storyfront_4.addEventListener("click", e => {
    OP_4.style.display = "none"
    OP_5.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ画面5からあらすじ画面4）
storyback_5.addEventListener("click", e => {
    OP_5.style.display = "none"
    OP_4.style.display = "block"
}, false);

//ボタンが押されたら表示非表示　（あらすじ最終から難易度選択画面）
storyfront_5.addEventListener("click", e => {
    OP_5.style.display = "none"
    difficulty.style.display = "block"
    document.getElementById("story_bgm").pause()
    document.getElementById("story_bgm").currentTime = 0
}, false);



