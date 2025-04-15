//戦闘BGM
document.getElementById("speak_example_front").addEventListener("click", e => {
    document.getElementById("battle_bgm").play()
    battle_bgm.volume = 0.1;
}, false);

//あらすじBGM
document.getElementById("startscrean_botton").addEventListener("click", e => {
    document.getElementById("story_bgm").play()
    story_bgm.volume = 0.3;
}, false);



//ボタンが押されたら表示非表示　（ドラゴンを倒した から 勝利画面 すすむ）
mainstage_monster_win_words.addEventListener("click", e => {
    mainstage.style.display = "none"
    win_display.style.display = "block"
    mainstage_score.style.display = "none"
    mainstage_damage.style.display = "none"
    mainstage_turn_next.style.display = "block"
    document.getElementById("battle_bgm").pause()
    document.getElementById("battle_bgm").currentTime = 0
}, false);

//ボタンが押されたら表示非表示　（プレイヤー から 敗北画面 すすむ）
mainstage_monster_lose_words.addEventListener("click", e => {
    mainstage.style.display = "none"
    lose_display.style.display = "block"
    mainstage_score.style.display = "none"
    mainstage_damage.style.display = "none"
    mainstage_turn_next.style.display = "block"
    mainstage_effect_dragon.style.display = "none"
    mainstage_effect_monster_darkness.style.display = "none"
    mainstage_effect_monster_grass.style.display = "none"
    mainstage_effect_monster_ice.style.display = "none"
    mainstage_effect_monster_light.style.display = "none"
    mainstage_effect_monster_poison.style.display = "none"
    mainstage_effect_monster_rock.style.display = "none"
    mainstage_effect_monster_thunder.style.display = "none"
    mainstage_effect_monster_water.style.display = "none"
    mainstage_effect_monster_wind.style.display = "none"
    document.getElementById("battle_bgm").pause()
    document.getElementById("battle_bgm").currentTime = 0
}, false);