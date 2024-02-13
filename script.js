function fillmenu(words){
    //for all elements in list x call the DOM to put a button with an id that matches the location of element in the list to the html menu.
    for (w in words){
        var x = document.createElement("BUTTON");
        var t = document.createTextNode(w);
        x.append(t);
        x.id = w;
        document.getElementById("menu").appendChild(x);
        }

}
