
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
        x.setAttribute('onclick',"setwordcard(this.id)" );
        x.className = "btn btn-primary";
        document.getElementById("menu").appendChild(x);
        i++;
        }
}

/*
i = index or id for the button
words = the array of words
descriptions = array of descriptions.
*/


/*function setwordcard(i, words, descriptions){ */
function  setwordcard(i){

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
        "","","","","","",""
        ];


   let w = document.getElementById("word");
   let d = document.getElementById("description");
   let p =  document.getElementById("picture");

   w.textContent = words[i];
   d.textContent = descriptions[i];
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
"","","","","","",""
];

