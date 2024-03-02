
/* window.onload = function(){
    fillmenu(words);
}; */

function fillmenu(){
    //for all elements in list x call the DOM to put a button with an id that matches the location of element in the list to the html menu.
    let i = 0;
    let len = words.length;

    for (; i<len;){
        var x = document.createElement("BUTTON");
        var t = document.createTextNode(words[i]);
        console.log(words[i]);

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
    let top_mid = document.getElementById("top-mid");
    let bot_mid = document.getElementById("bot-mid");
    let bot_right_picture = document.getElementById("bot-right-picture");

    top_mid.textContent = word;
    bot_mid.textContent = "";

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


    if(Isflipped == "false"){
        flashcard.setAttribute("data-IsFlipped","true");
        flipflashcard(CurrWordIndex);
        
    } else{
        flashcard.setAttribute("data-IsFlipped","false");
        nextcard(CurrWordIndex);
        
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
    

    card_bot_mid.textContent = card;
    card_bot_left.textContent = "";
    card_top_mid.textContent = "";
    card_bot_right_picture.setAttribute("src","");
}


/*
set newcard's word to the same as current card 
then loop getting a random card until the new card and the current card are different.
then return the current card 
*/
/*
function getanewcard(CurrLessonIndex, CurrCardIndex){ 
    let newcard = words[CurrCardIndex];
    while(newcard == words[CurrCardIndex]){
        let newcardindex = lessons[CurrLessonIndex][Math.floor(Math.random * lessons[CurrLessonIndex].length)];
        newcard  = words[lessons[CurrLessonIndex][newcardindex]];
    }
    return newcard;
}
*/


function getanewcard(CurrLessonIndex, CurrCardIndex){ 
    let PointInLesson = lessons[CurrLessonIndex].indexOf(CurrCardIndex);

    let newcardindex = lessons[CurrLessonIndex][PointInLesson + 1];
    
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
    "tenpo","toki","tomo","tu","unpa","uta","utala","walo",
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
"verb: listen, hear | modifier: auditory, hearing" /* do the L's next */
];

const imgs = [
"A_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Akesi_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ala_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Alasa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ale_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg", "Anpa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ante_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Anu_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Awen_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"E_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","En_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Epiku_-_sitelen_pona_tan_lipu_pu_pi_toki_Epelanto.png","Esun_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ijo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ike_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ilo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Insa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Jaki_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jan_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jelo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Jo_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"","","","","",""

];

const lessons = [
[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8]
];