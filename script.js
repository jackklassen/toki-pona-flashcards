
/* window.onload = function(){
    fillmenu(words);
}; */

function fillmenu(){
    //for all elements in list x call the DOM to put a button with an id that matches the location of element in the list to the html menu.
    let i = 0;
    let len = words.length;

    for (; i<len;){
        var x = document.createElement("BUTTON");
        var t = document.createTextNode(words[i] + ": " + i);
        

        x.append(t);
        x.id = i;
        x.setAttribute('onclick',"callsetwordcard(this.id)" );
        x.className = "btn btn-primary";
        document.getElementById("menu").appendChild(x);
        i++;
        }
}

/*
Caller function for setwordcard() so that the buttons on the html can call it without overfilling the function.
i = id
*/

function callsetwordcard(i){
    setwordcard(i);
}


/*
i = index or id for the button
words = the array of words
descriptions = array of descriptions.
*/
function setwordcard(i){ 
   let w = document.getElementById("word");
   let d = document.getElementById("description");
   let p =  document.getElementById("picture");

   w.textContent = words[i];
   d.textContent = descriptions[i];
   p.setAttribute("src", "img/" + imgs[i]);
   p.setAttribute("width", "304");
   p.setAttribute("height", "228");
   p.setAttribute("alt", words[i]);

}

/*
A function to flip the card when the user clicks on it.
takes index of the word its currently on as well as words descriptiosn and imgs as int inputs.
*/
function flipflashcard(word_index){
    let word = words[word_index];
    let description = descriptions[word_index];
    let top_mid = document.getElementById("top-mid");
    let bot_mid = document.getElementById("bot-mid");
    let bot_right_picture = document.getElementById("bot-right-picture");
    let bot_left = document.getElementById("bot-left");

    top_mid.textContent = word;
    bot_mid.textContent = "";

    bot_left.textContent = description;

    bot_right_picture.setAttribute("src", "img/" + imgs[word_index]);
    bot_right_picture.setAttribute("width", "304");
    bot_right_picture.setAttribute("height", "228");
    bot_right_picture.setAttribute("alt", words[word_index]);
}



function checkflashcard(){
    console.log("clicked");

    let flashcard = document.getElementById("flashcard");
    let CurrWord = flashcard.getAttribute("data-CurrWord");
    let CurrWordIndex = words.indexOf(CurrWord);
    let Isflipped = flashcard.getAttribute("data-IsFlipped");
    let LessonOn = flashcard.getAttribute("data-CurrLesson");


    if(LessonOn !== ""){
        if(Isflipped == "false"){
            flashcard.setAttribute("data-IsFlipped","true");
            flipflashcard(CurrWordIndex);
        
        } else{
            flashcard.setAttribute("data-IsFlipped","false");
            nextcard(CurrWordIndex);
        }
    }
}
/*
given the current card displayed by the flashcard find a new word to display then call the setcard function to display it.

*/
function nextcard(CurrCardIndex){
    let flashcard = document.getElementById("flashcard");
    let CurrLessonIndex =  flashcard.getAttribute("data-CurrLesson")
    
    let newcard = getanewcard(CurrLessonIndex, CurrCardIndex);
    setcard(newcard);
}


/*
Set a flashcard up with just the word presented
this is a flashcard preflip
*/
function setcard(card){
    let card_bot_mid = document.getElementById("bot-mid");
    let card_top_mid = document.getElementById("top-mid");
    let card_bot_right_picture = document.getElementById("bot-right-picture");
    let card_bot_left = document.getElementById("bot-left");
    let flashcard = document.getElementById("flashcard");


    card_bot_mid.textContent = card;
    card_bot_left.textContent = "";
    card_top_mid.textContent = "";
    card_bot_right_picture.setAttribute("src","");
    flashcard.setAttribute("data-CurrWord", card);
}


/*
set newcard's word to the same as current card 
then loop getting a random card until the new card and the current card are different.
then return the current card 
*/
function getanewcard(CurrLessonIndex, CurrCardIndex){ 

    let FilterLesson = lessons[CurrLessonIndex].filter(function(i){return i !== CurrCardIndex});
    let rand = Math.floor(Math.random() * FilterLesson.length);
    
    console.log("filterlesson: " + FilterLesson);
    console.log("rand: "+ rand);


    let newcardindex = FilterLesson[rand];
    console.log("newcard: "+ newcardindex);
    let newcard = words[newcardindex];
    
    return newcard;
}


function startlesson(lessonid){
    let card = words[lessons[lessonid][1]];
    document.getElementById("flashcard").setAttribute("data-CurrLesson",lessonid);
    setcard(card);
}

const words = [
    "a","akesi","ala","alasa","ale, ali","anpa",
    "ante","anu","awen","e","en","esun","ijo",
    "ike","ilo","insa","jaki","jan","jelo","jo",
    "kala","kalama","kama","kasi","ken","kepeken",
    "kili","kin","kipisi","kiwen","ko","kon","kule",
    "kulupu","kute","la","lape","laso","lawa","len",
    "lete","li","lili","linja","lipu","loje","lon",
    "luka","lukin","lupa","ma","mama","mani","meli",
    "mi","mije","moku","moli","monsi","mu","mun","musi",
    "mute","namako","nanpa","nasa","nasin","nena","ni",
    "nimi","noka","o","oko","olin","ona","open","pakala",
    "pali","palisa","pan","pana","pi","pilin","pimeja","pini",
    "pipi","poka","poki","pona","pu","sama","seli","selo","seme",
    "sewi","sijelo","sike","sin","sina","sinpin","sitelen","sona",
    "soweli","suli","suno","supa","suwi","tan","taso","tawa","telo",
    "tenpo","toki","tomo","tonsi","tu","unpa","uta","utala","walo",
    "wan","waso","wawa","weka","wile"
];

const descriptions = [
"interjective: ah, ha, uh, oh, ooh, aw, well (emotion word)","noun: non-cute animal, reptile, amphibian", 
"modifier: no, not, none, un- | noun: nothing, negation, zero | interjective: no!", "verb gather, hunt, forage",
"noun: everything, anything, life, universe | modifier: all, every, complete, whole", "noun: bottom, lower part, under, below, floor, beneath | modifier: low, lower, bottom, down, lowly, humble, dependant",
"noun: difference | modifier: different | conjunction: otherwise, or else | verb: change, alter, modify",
"conjunction: or","verb: stay, wait, remain | verb: keep | modifier	remaining, stationary, permanent, sedentary",
"sep (introduces a direct object)","conjunction and (used to coordinate head nouns)","noun	market, shop, business, trading, selling, buying",
"noun thing, something, stuff, anything, object | modifier of something | verb	objectify",
"modifer bad, negative, wrong, evil, overly complex, (figuratively) unhealthy | interjective oh dear! woe! alas! | noun	negativity, badness, evil | verb	to make bad, to worsen, to have a negative effect upon to be bad, to suck[sounds like icky]",
"noun tool, device, machine, thing used for a specific purpose","noun inside, inner world, centre, stomach | modifier inner, internal [inside]",
"modifier	dirty, gross, filthy | noun dirt, pollution, garbage, filth | verb pollute, dirty | interjective ew! yuck![yucky]",
"noun person, people, human, being, somebody, anybody | modifier human, somebody's, personal, of people | verb	personify, humanize, personalize",
"modifier yellow, light green [yellow]","verb have, contain | noun having | compounded with kama receive, get, take, obtain",
"noun fish, sea creature","noun	sound, noise, voice | verb make noise, sound, ring, play (an instrument)","verb	come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to | noun	event, happening, chance, arrival, beginning | modifer	coming, future | verb bring about, summon[come up]",
"noun plant, leaf, herb, tree, wood","verb can, is able to, is allowed to, may, is possible | noun: possibility, ability, power to do things, permission | verb: make possible, enable, allow, permit | context when used before la: it is possible that",
"verb: use | preposition: with","noun: fruit, vegetable, mushroom","modifier: also, too, even, indeed (emphasizes the word(s) before it)","noun: part, partition | verb: split, cut, divide",
"modifier: hard, solid, stone-like, made of stone or metal | noun: hard thing, rock, stone, metal, mineral, clay","noun: semi-solid or squishy substance, e.g. paste, powder, gum",
"noun: air, wind, smell, soul | modifier: air-like, ethereal, gaseous","noun: colour, paint | modifier: colourful verb: colour, paint","noun: group, community, society, company, people | modifier: communal, shared, public, of the society [group]",
"verb: listen, hear | modifier: auditory, hearing","seperator (between adverb or phrase of context and sentence)", "noun, verb: sleep, rest | modifier: sleeping, of sleep",
"modifier: blue, blue-green","noun: head, mind | modifier: main, leading, in charge | verb: lead, control, rule, steer","noun: clothing, cloth, fabric",
"noun: cold | modifier:	cold, uncooked | verb: cool down, chill","seperator (between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
"modifier: small, little, young, a bit, short, few, less | verb: reduce, shorten, shrink, lessen","noun: long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
"noun: flat and bendable thing, e.g. paper, card, ticket","modifier: red","preposition: be (located) in/at/on | verb: be there, be present, be real/true, exist, be awake",
"noun: hand, arm","verb: see, look at, watch, read | look, watch out, pay attention | modifier: visual(ly) [looking]", "noun: hole, orifice, window, door [sounds like loop]",
"noun: land, earth, country, (outdoor) area","noun: parent, mother, father | modifier: of the parent, parental, maternal, fatherly[sounds like momma]",
"noun: money, material wealth, currency, dollar, capital[money]",
"noun: woman, female, girl, wife, girlfriend | modifier: female, feminine, womanly[Mary]", "noun: I, we | modifier: my, our[me]",
"noun: man, male, boy, husband, boyfriend | modifier: male, masculine, manly", "noun: food, meal | verb: eat, drink, swallow, ingest, consume",
"noun:	death | verb: die, be dead | kill | modifier: dead, deadly, fatal","noun: back, rear end, butt, behind | modifier: back, rear",
"interjective: oof! meow! moo! etc. (animal noise)[moo]","noun:	moon | modifier: lunar [moon]",
"noun: fun, playing, game, recreation, art, entertainment | modifier: artful, fun, recreational | verb:	play, have fun | amuse, entertain",
"modifier: many, very, much, several, a lot, abundant, numerous, more | noun: amount, quantity | verb: make many or much [multi]",
"noun: food additive, accessory, something extra | verb: season, embellish, stimulate","noun: number | other: -th (ordinal numbers)[number]", 
"modifier: silly, crazy, foolish, drunk, strange, stupid, weird | verb: drive crazy, make weird", "noun: way, manner, custom, road, path, doctrine, system, method",
"noun: bump, nose, hill, mountain, button", "modifier: this, that", "noun: word, name", "noun: leg, foot",
"seperator: O (vocative or imperative) | interjective: hey! (calling somebody's attention)", "noun: eye [similar to oculist]", "noun: love | modifier: love | verb: to love (a person)",
"noun: she, he, it, they | modifier: her, his, its, their", "verb: open, turn on", "noun: blunder, accident, mistake, destruction, damage, breaking | verb: screw up, f**k up, botch, ruin, break, hurt, injure, damage, spoil, ruin, screw up, fall apart, break | interjective: damn! f**k!",
"noun: activity, work, deed, project | modifier: active, work-related, operating, working | verb: do, make, build, create, act, work, function",
"noun: long, mostly hard object, e.g. rod, stick, branch", "noun: grain, cereal", "verb: give, put, send, place, release, emit, cause | noun: giving, transfer, exchange",
"seperator: of, belonging to","noun: feelings, emotion, heart | verb: feel, think, sense, touch [feeling]", "modifier: black, dark | noun: darkness, shadows | verb: darken",
"noun: end, tip | modifier: completed, finished, past, done, ago | verb: finish, close, end, turn off", "noun: bug, insect, spider", "noun: side, hip, next to | preposition: in the accompaniment of, with | modifier: neighbouring",
"noun: container, box, bowl, cup, glass [box]", "noun: good, simplicity, positivity | modifier: good, simple, positive, nice, correct, right | interjective: great! good! thanks! OK! cool! yay! | verb: improve, fix, repair, make good [bonam]",
"verb: interact with the official toki pona book", "modifier: same, similar, equal, of equal status or position | preposition: like, as, seem", "noun: fire, warmth, heat | modifier: hot, warm, cooked | verb: heat, warm up, cook","noun: outside, surface, skin, shell, bark, shape, peel",
"other: what, which, wh- (question word)", "noun: high, up, above, top, over, on | modifier: superior, elevated, religious, formal",
"noun: body, physical state", "noun: circle, wheel, sphere, ball, cycle | modifier: round, cyclical",
"modifier: new, fresh, another, more | verb: renew, renovate, freshen", "noun: you | modifier: your",
"noun: front, chest, torso, face, wall", "noun:	picture, image | verb: draw, write", "noun: knowledge, wisdom, intelligence, understanding | verb: know, understand, know how to | kama: learn, study", 
"noun: animal, especially land mammal, lovable animal", "modifier: big, tall, long, adult, important | verb: enlarge, lengthen | noun: size",
"noun: sun, light","noun: horizontal surface, e.g furniture, table, chair, pillow, floor",
"noun: candy, sweet food | modifier: sweet, cute | verb: sweeten [sweet]",
"preposition: from, by, because of, since | noun: origin, cause", "modifier: only, sole | conjunction: but [that's all]", "preposition: to, in order to, towards, for, until | verb: go to, walk, travel, move, leave, displace | noun: movement, transportation | modifier: moving, mobile [towards]",
"noun: water, liquid, juice, sauce | verb: water, wash with water","noun: time, period of time, moment, duration, situation", "noun: language, talking, speech, communication | modifer: talking, verbal | verb: say, talk, chat, communicate | interjective: hello! hi!",
"noun: indoor constructed space, e.g. house, home, room, building | modifier: urban, domestic, household", 
"noun: non-binary, transgender, non-conforming", "modifier: two | noun: duo, pair | verb: double, separate/cut/divide in two [two]", "noun:	sex, sexuality | modifier: erotic, sexual | verb: have sex with, sleep with, f**k, have sex",
"noun: mouth | modifier: oral", "noun: conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence | verb: hit, strike, attack, compete against",
"modifier: white, light (colour) | noun: white thing or part, whiteness, lightness [sounds like wall, which is often white]", "modifier: one, a | noun: unit, element, particle, part, piece | verb: unite, make one [one]" ,
"noun:	bird, winged animal", "noun: energy, strength, power | modifier: energetic, strong, fierce, intense, sure, confident | verb: strengthen, energize, empower","modifier: away, absent, missing | noun: absence | verb: throw away, remove, get rid of" , "verb: to want, need, wish, have to, must, will, should | noun: desire, need, will | modifer: necessary"
/*continue from the s's*/
];

const imgs = [ /* this is off by some amount cross check to fix */
"A_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Akesi_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ala_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Alasa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ale_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg", "Anpa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ante_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Anu_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Awen_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"E_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","En_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Esun_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ijo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ike_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ilo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Insa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Jaki_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jan_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jelo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Kala_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kalama_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kama_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kasi_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ken_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kepeken_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kili_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Kin_-_sitelen_pona_tan_lipu_pu_pi_toki_Epelanto.png","Kipisi_-_sitelen_pona_tan_lipu_pu_pi_toki_Epelanto.png","Kiwen_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ko_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Kon_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kule_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kulupu_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Kute_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"La_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Lape_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Laso_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Lawa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Len_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Lete_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Li_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Lili_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Linja_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Lipu_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Loje_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Lon_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Luka_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Lukin_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Lupa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ma_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Mama_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Mani_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Meli_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg"


];

const lessons = [
[13, 18, 27,45,53,68,102], [110, 113, 42,88,103], [54, 55, 98,33,97,121], [1, 2, 3, 4, 5, 6, 7, 8]
];