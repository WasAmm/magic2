// タイトル画面
const startscrean = document.getElementById("startscrean");
const startscrean_botton = document.getElementById("startscrean_botton");
const OP_1 = document.getElementById("OP_1");

//ボタンが押されたら表示非表示　（スタート画面からあらすじ画面1 すすむ）
startscrean_botton.addEventListener("click", e =>{
    startscrean.style.display = "none"
    OP_1.style.display = "block"
}, false);
