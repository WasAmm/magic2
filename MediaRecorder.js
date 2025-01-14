const workerOptions = {
    OggOpusEncoderWasmPath: 'https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/OggOpusEncoder.wasm',
    WebMOpusEncoderWasmPath: 'https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/WebMOpusEncoder.wasm'
};

function download(blob) {
    var downLoadLink = document.createElement("a");
    downLoadLink.download = "a.wav";
    downLoadLink.href = URL.createObjectURL(blob);
    downLoadLink.click();
}


async function sendVoice(magicName, mills) {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const blob = await record(mediaStream, mills);
    //download(blob);

    const blobBase64 = await blobToBase64(blob);
    const res = await fetch('https://itmiraitestapp2.azurewebsites.net/api/ITMirai_Func', {
        body: JSON.stringify({
            "magic_spell": magicName,	//魔法名
            "magic_audio": blobBase64	//Base64形式の音声データ
        }),
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        }
    });

    const resJson = await res.json();
    console.log(resJson);

    let name_score_sum = 0;
    let name_score_ave = 0;

    //点数の取得　テスト
    for (let name of resJson["word_score"]) {
        console.log(name.length)
        console.log(name[1])
        name_score_sum = name_score_sum + name[1];
    }
    name_score_ave = Math.floor(name_score_sum / resJson["word_score"].length);
    console.log(name_score_ave)
    return name_score_ave

    /*for (let name of resJson["word_score"]) {
        console.log(name.length)
        console.log(name[1])
        name_score_sum = name_score_sum + name[1];
        name_score_ave = name_score_ave / name.length;
        function (a,woed_score,score_ave);{
            for (name in word_score);
                a += name[1]
                score_ave = a // len(word_score)
                return score_ave 
        }

    }
    console.log(name_score_sum)
    name_score_ave = name_score_ave / name.length;
    console.log(name_score_ave)*/

    //点数のみ取得できる
    /*var name_avg = 0;
    var average = 0;
    for (let name of resJson["word_score"]) {
        console.log(name[1])
        name_avg += name[1], kazu = name[1].length; name_avg  < kazu; ++name_avg; 
            average = Math.floor(name_avg / kazu);
            console.log(name[1]);
        return average;
    }*/
    //return 80;
}

function record(stream, mills) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        const mediaRecorder = new OpusMediaRecorder(stream, { mimeType: "audio/wav" }, workerOptions);
        mediaRecorder.onstart = (e) => {
        }
        mediaRecorder.onstop = (e) => {
            resolve(new Blob(chunks));
        }
        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        }
        mediaRecorder.onerror = (e) => {
            reject(e);
        }
        mediaRecorder.start();
        setTimeout(() => {
            mediaRecorder.stop();
        }, mills);
    });
}

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
