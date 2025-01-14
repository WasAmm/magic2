function responseDataGet(response){
	result = response['result']
	score = response['score']
	word_score = response['word_score']

	//信頼度スコアの取得に成功
	if(response['result'] == 'success'){
		console.log('信頼度スコアの取得に成功しました')
		console.log('全体的なスコア：'+score[0]);
		for(key in word_score){
			console.log(key + '：' + word_score[key])
		}
	}
	else{
		console.log('信頼度スコアの取得に失敗しました');
	}
}

function getScore(magic_spell,base64){

	//音声データを送信するAzureのURL
	posturl = 'https://itmiraitestapp2.azurewebsites.net/api/ITMirai_Func';

	//Azureに送信するデータ
	magic_data = {
		magic_spell:magic_spell,	//魔法名
		magic_audio:base64			//Base64形式の音声データ
	};

	//非同期通信でAzureにデータを渡す
	$.ajax({
		type:'POST',
		url:posturl,
		data:JSON.stringify(magic_data),
		timeout: 30000,
		dataType:'json',
		contentType: 'application/json'
	}).done(function(response){

		//返却された信頼度スコアを表示
		console.log(response);
		responseDataGet(response)

	}).fail(function(response){
		//Azure側の処理が異常終了
		console.log('信頼度スコアの取得に失敗しました');
		console.log(response);
	});
}