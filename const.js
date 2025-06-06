// id
const startscrean = document.getElementById("startscrean");
const startscrean_botton = document.getElementById("startscrean_botton");

const OP_1 = document.getElementById("OP_1");
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
const difficulty_Easy = document.getElementById("difficulty_Easy");
const difficulty_Normal = document.getElementById("difficulty_Normal");
const difficulty_Hard = document.getElementById("difficulty_Hard");

const wordchoice_Easy = document.getElementById("wordchoice_Easy");
const wordchoice_Normal = document.getElementById("wordchoice_Normal");
const wordchoice_Hard1 = document.getElementById("wordchoice_Hard1");
const wordchoice_Hard2 = document.getElementById("wordchoice_Hard2");

const wordchoice_Hard1_front = document.getElementById("wordchoice_Hard1_front");
const wordchoice_Hard2_back = document.getElementById("wordchoice_Hard2_back");

const final_confirmation = document.getElementById("final_confirmation");
const final_confirmation_word = document.getElementById("final_confirmation_word");
const final_confirmation_front = document.getElementById("final_confirmation_front");
const final_confirmation_back = document.getElementById("final_confirmation_back");

const speak_example = document.getElementById("speak_example");
const speak_example_word = document.getElementById("speak_example_word");
const speak_example_repeat = document.getElementById("speak_example_repeat");
const speak_example_front = document.getElementById("speak_example_front");

const mainstage = document.getElementById("mainstage");
const mainstage_turn = document.getElementById("mainstage_turn");
const mainstage_damage = document.getElementById("mainstage_damage");
const mainstage_HPber_line = document.getElementById("mainstage_HPber_line");
const mainstage_score = document.getElementById("mainstage_score");
const mainstage_Lets_speak = document.getElementById("mainstage_Lets_speak");
const dragon_power = document.getElementById("dragon_power");
const mainstage_monster_victory = document.getElementById("mainstage_monster_victory");
const mainstage_monster_down = document.getElementById("mainstage_monster_down");
const mainstage_effect_dragon = document.getElementById("mainstage_effect_dragon");
const mainstage_effect_monster = document.getElementById("mainstage_effect_monster");
const mainstage_monster_words = document.getElementById("mainstage_monster_words");
const mainstage_player_cheerful = document.getElementById("mainstage_player_cheerful");
const mainstage_player_words = document.getElementById("mainstage_player_words");
const mainstage_turn_next = document.getElementById("mainstage_turn_next");
const mainstage_monster_win_words = document.getElementById("mainstage_monster_win_words");
const mainstage_monster_lose_words = document.getElementById("mainstage_monster_lose_words");

const count_line = document.getElementById("count_line");
const count_meter = document.getElementById("count_meter");
const count_supell = document.getElementById("count_supell");

const start_bgm = document.getElementById("start_bgm");
const battle_bgm = document.getElementById("battle_bgm");

const win_display = document.getElementById("win_display");
const win_display_front = document.getElementById("win_display_front");

const lose_display = document.getElementById("lose_display");
const lose_display_front = document.getElementById("lose_display_front");

const win_display_ED = document.getElementById("win_display_ED");
const win_display_ED_front = document.getElementById("win_display_ED_front");

const lose_display_ED = document.getElementById("lose_display_ED");
const lose_display_ED_front = document.getElementById("lose_display_ED_front");

const ED = document.getElementById("ED");
const ED_front = document.getElementById("ED_front");

//炎Easy
const Easy_fire_png = document.getElementById("Easy_fire_png");
//炎Normal
const Normal_fire_png = document.getElementById("Normal_fire_png");
//炎Hard
const Hard_fire_png = document.getElementById("Hard_fire_png");

//水Easy
const Easy_water_png = document.getElementById("Easy_water_png");
//水Normal
const Normal_water_png = document.getElementById("Normal_water_png");
//水Hard
const Hard_water_png = document.getElementById("Hard_water_png");

//草Easy
const Easy_grass_png = document.getElementById("Easy_grass_png");
//草Normal
const Normal_grass_png = document.getElementById("Normal_grass_png");
//草Hard
const Hard_grass_png = document.getElementById("Hard_grass_png");

//雷Easy
const Easy_thunder_png = document.getElementById("Easy_thunder_png");
//雷Normal
const Normal_thunder_png = document.getElementById("Normal_thunder_png");
//雷Hard
const Hard_thunder_png = document.getElementById("Hard_thunder_png");

//氷Easy
//const  = document.getElementById("");
//氷Normal
//const  = document.getElementById("");
//氷Hard
//const  = document.getElementById("");

//風Easy
//const  = document.getElementById("");
//風Normal
//const  = document.getElementById("");
//風Hard
//const  = document.getElementById("");

//岩Easy
//const  = document.getElementById("");
//岩Normal
//const  = document.getElementById("");
//岩Hard
//const  = document.getElementById("");

//毒Easy
//const  = document.getElementById("");
//毒Normal
//const  = document.getElementById("");
//毒Hard
//const  = document.getElementById("");

//光Easy
//const  = document.getElementById("");
//光Normal
//const  = document.getElementById("");
//光Hard
//const  = document.getElementById("");

//闇Easy
//const  = document.getElementById("");
//闇Normal
//const  = document.getElementById("");
//闇Hard
//const  = document.getElementById("");

//氷
const mainstage_effect_monster_ice = document.getElementById("mainstage_effect_monster_ice");
//風
const mainstage_effect_monster_wind = document.getElementById("mainstage_effect_monster_wind");
//岩
const mainstage_effect_monster_rock = document.getElementById("mainstage_effect_monster_rock");
//毒
const mainstage_effect_monster_poison = document.getElementById("mainstage_effect_monster_poison");
//光
const mainstage_effect_monster_light = document.getElementById("mainstage_effect_monster_light");
//闇
const mainstage_effect_monster_darkness = document.getElementById("mainstage_effect_monster_darkness");

// 日本語版
const startscrean_botton_japan = document.getElementById("startscrean_botton_japan");

const OP_1_japan = document.getElementById("OP_1_japan");
const storyfront_1_japan = document.getElementById("storyfront_1_japan");
const storyback_1_japan = document.getElementById("storyback_1_japan");
const OP_2_japan = document.getElementById("OP_2_japan");
const storyfront_2_japan = document.getElementById("storyfront_2_japan");
const storyback_2_japan = document.getElementById("storyback_2_japan");
const OP_3_japan = document.getElementById("OP_3_japan");
const storyfront_3_japan = document.getElementById("storyfront_3_japan");
const storyback_3_japan = document.getElementById("storyback_3_japan");
const OP_4_japan = document.getElementById("OP_4_japan");
const storyfront_4_japan = document.getElementById("storyfront_4_japan");
const storyback_4_japan = document.getElementById("storyback_4_japan");
const OP_5_japan = document.getElementById("OP_5_japan");
const storyfront_5_japan = document.getElementById("storyfront_5_japan");
const storyback_5_japan = document.getElementById("storyback_5_japan");

const wordchoice_Easy_japan = document.getElementById("wordchoice_Easy_japan");









