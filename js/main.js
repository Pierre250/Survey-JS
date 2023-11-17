let liste = document.querySelector(".liste ")
let vote_handball = document.querySelector(".vote_handball")
let vote_football = document.querySelector(".vote_football")
let vote_golf = document.querySelector(".vote_golf")
let handball = document.querySelector("#icon_handball")
let football = document.querySelector("#icon_football")
let golf = document.querySelector("#icon_golf")
let count_handball = 0;
let count_football = 0;
let count_golf = 0;
let star = document.querySelector("#etoile")
let moyenne = document.querySelector("#moyenne")
let best = document.querySelector("#best")
let calculMoyenne = document.querySelector("#moyenneBtn")
let progressHand = document.querySelector("#progress_hand")
let progressFoot = document.querySelector("#progress_foot")
let progressGolf = document.querySelector("#progress_golf")
// let progressHandBg = document.querySelector("#progress_Hand_Bg")
// let progressFootBg = document.querySelector("#progress_Foot_Bg")
// let progressGolfBg = document.querySelector("#progress_Golf_Bg")
let progressBar = document.querySelectorAll(".progress")


handball.addEventListener("click", function(){
    count_handball++;
    vote_handball.textContent = count_handball;
   
});

football.addEventListener("click", function(){
    count_football++;
    vote_football.textContent = count_football;

});

golf.addEventListener("click", function(){
    count_golf++;
    vote_golf.textContent = count_golf;

});
     

function pourcentage(){
    let total = count_football + count_golf + count_handball
    let moyenneHand = (count_handball*100) / total;
    let moyenneFoot = (count_football*100) / total;
    let moyenneGolf = (count_golf*100) / total;
     moyenneHand = parseInt(moyenneHand);
     moyenneFoot = parseInt(moyenneFoot);
     moyenneGolf = parseInt(moyenneGolf);
    document.querySelector("#moyenneHand").textContent = "Handball " + moyenneHand + "%";
    document.querySelector("#moyenneFoot").textContent = "Football " + moyenneFoot + "%";
    document.querySelector("#moyenneGolf").textContent = "Golf " + moyenneGolf + "%";
    progressHand.setAttribute("style", "width:" + moyenneHand + "%");
    progressFoot.setAttribute("style", "width:" + moyenneFoot + "%");
    progressGolf.setAttribute("style", "width:" + moyenneGolf + "%");
    progressBar.forEach.classList("")
}



calculMoyenne.addEventListener("click", function(){
    pourcentage();
    console.log("ok")

});
