
window.onload = function(){
    fillmenu(words);
};

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
    setwordcard(i, words,descriptions,imgs);
}


/*
i = index or id for the button
words = the array of words
descriptions = array of descriptions.
*/
function setwordcard(i, words, descriptions,imgs){ 
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
/*start from the k's */"","","","",""
];

const imgs = [
"A_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Akesi_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ala_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Alasa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Ale_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg", "Anpa_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg",
"Ante_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Anu_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg","Awen_-_sitelen_pona_in_Sonja_Lang's_handwriting.svg"

];