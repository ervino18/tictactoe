console.log("affichage de la table :" + document.getElementsByTagName("table")[0]);
console.log("affichage du contenu de la case 1: " + document.getElementById("case1"));

let tableMorpion=document.getElementsByTagName("table")[0];


let caseMorpion1=document.getElementById("case1");
caseMorpion1.innerText="";

let caseMorpion2= document.getElementById("case2");
caseMorpion2.innerText="";

let caseMorpion3=document.getElementById("case3");
caseMorpion3.innerText="";

let caseMorpion4= document.getElementById("case4");
caseMorpion4.innerText="";

let caseMorpion5=document.getElementById("case5");
caseMorpion5.innerText="";

let caseMorpion6= document.getElementById("case6");
caseMorpion6.innerText="";

let caseMorpion7=document.getElementById("case7");
caseMorpion7.innerText="";

let caseMorpion8= document.getElementById("case8");
caseMorpion8.innerText="";

let caseMorpion9=document.getElementById("case9");
caseMorpion9.innerText="";

//mes fonctions 

function messMorpion (mess){
    let messLigne = document.getElementById("mess");
    messLigne

}

let nombreDeClic=0;
let play = "X";


function quandOnClique(event){
    //console.log("J'ai cliqué");
    //console.log (event.target);
    if (event.target.innerText.length !=0){
        return;
    }
    nombreDeClic++
    if((nombreDeClic % 2) == 0){
        play = 'X';
    } else {
        play = 'O';
    }
    event.target.innerText = play;
    //event.target.innerHTML = "<strong>" + play + "</strong>";
}
caseMorpion1.addEventListener("click", quandOnClique);
caseMorpion2.addEventListener("click", quandOnClique);
caseMorpion3.addEventListener("click", quandOnClique);
caseMorpion4.addEventListener("click", quandOnClique);
caseMorpion5.addEventListener("click", quandOnClique);
caseMorpion6.addEventListener("click", quandOnClique);
caseMorpion7.addEventListener("click", quandOnClique);
caseMorpion8.addEventListener("click", quandOnClique);
caseMorpion9.addEventListener("click", quandOnClique);

function verifierVainqueur(){
    // if() {}
if( (caseMorpion1.innerText.length != 0) (caseMorpion2.innerText.length != 0) (caseMorpion3.innerText.length != 0)) {
    let result = caseMorpion1 + caseMorpion2 + caseMorpion3;
    if (result.toString() === "XXX") {
        partieWin = true;
        messMorpion("XXX a gagner");
    }
}
if (result.toString() === "OOO") {
    partieWin = true;
    messMorpion("OOO a gagner");
}


if( (caseMorpion4.innerText.length != 0) (caseMorpion5.innerText.length != 0) (caseMorpion6.innerText.length !=0)) {
    let result = caseMorpion4 + caseMorpion5 + caseMorpion6;
    if (result.toString() === "OOO") {
        partieWin = true;
        messMorpion("OOO a gagner");
    }
}
if((caseMorpion7.innerText.length !=0) (caseMorpion8.innerText.length !=0) (caseMorpion9.innerText.length !=0)){
}
}