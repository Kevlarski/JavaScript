function change(country){
    let top = document.querySelector("h1");
    top.innerHTML=country.getAttribute("id");       
}

function iceland(){
   let iceland = document.getElementById("Iceland");
   iceland.setAttribute('src','images/iceland_map.gif');
   change(iceland);
}

function norway(){
    let norway = document.getElementById("Norway");
    norway.setAttribute('src','images/norway_map.jpg');
    change(norway);
}

function sweden(){
    let sweden = document.getElementById("Sweden");
    sweden.setAttribute('src','images/sweden_map.jpg');       
    change(sweden);
}

function iceBack(){
    let iceland = document.getElementById("Iceland");
    iceland.setAttribute('src','images/iceland.png');
    let top = document.querySelector("h1");
    top.innerHTML="Countries and Flags";
}

function norBack(){
    let iceland = document.getElementById("Norway");
    iceland.setAttribute('src','images/norway.png');
    let top = document.querySelector("h1");
    top.innerHTML="Countries and Flags";
}

function sweBack(){
    let iceland = document.getElementById("Sweden");
    iceland.setAttribute('src','images/sweden.png');
    let top = document.querySelector("h1");
    top.innerHTML="Countries and Flags";
}