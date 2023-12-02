var loop=true;
function playincoming(){
    window.open("https://caio-kotan.itch.io/incoming");
}
function insta(){
    window.open("https://www.instagram.com/caio_kotan/");
}
function twitter(){
    window.open("https://twitter.com/caio_kotan");
}
function yt(){
    window.open("https://www.youtube.com/channel/UC4XZIO9UlDtTn3SKXsSZPhQ");
}

var numero=1;
var numerohtml=document.getElementById("num");

function atualizarnumero(){
    numero+=1;
    numerohtml.innerHTML=numero;
}

setInterval(atualizarnumero,1000);