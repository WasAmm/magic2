// あらすじ画面

const storyskip_1 = document.getElementById("storyskip_1");
const storyfront_1 = document.getElementById("storyfront_1");
const storyback_1 = document.getElementById("storyback_1");
const story_bgm = document.getElementById("story_bgm");
const OP_2 = document.getElementById("OP_2");
const storyskip_2 = document.getElementById("storyskip_2");
const storyfront_2 = document.getElementById("storyfront_2");
const storyback_2 = document.getElementById("storyback_2");
const OP_3 = document.getElementById("OP_3");
const storyskip_3 = document.getElementById("storyskip_3");
const storyfront_3 = document.getElementById("storyfront_3");
const storyback_3 = document.getElementById("storyback_3");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");






OP_4

storyskip_4

storyfront_4

storyback_4

OP_5

storyskip_5

storyfront_5

storyback_5

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





