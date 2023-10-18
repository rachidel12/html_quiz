//the score of the quizz 

function score1(){
    var score1=0;
    if(document.getElementById("correct1").checked){
        score1++;
    }
    if(document.getElementById("correct2").checked){
        score1++;
    }
    if(document.getElementById("correct3").checked){
        score1++;
    }
    if(document.getElementById("correct4").checked){
        score1++;
    }
    if(document.getElementById("correct5").checked){
        score1++;
    }
    if(document.getElementById("correct6").checked){
        score1++;
    }
    if(document.getElementById("correct7").checked){
        score1++;
    }
    if(document.getElementById("correct8").checked){
        score1++;
    }
    if(document.getElementById("correct9").checked){
        score1++;
    }
    if(document.getElementById("correct10").checked){
        score1++;
    }
    return score1;
}
function score2(){
    var score2 =0
    if(document.getElementById("correct1c").checked){
        score2++;
    }
    if(document.getElementById("correct2c").checked){
        score2++;
    }
    if(document.getElementById("correct3c").checked){
        score2++;
    }
    if(document.getElementById("correct4c").checked){
        score2++;
    }
    if(document.getElementById("correct5c").checked){
        score2++;
    }
    if(document.getElementById("correct6c").checked){
        score2++;
    }
    if(document.getElementById("correct7c").checked){
        score2++;
    }
    if(document.getElementById("correct8c").checked){
        score2++;
    }
    if(document.getElementById("correct9c").checked){
        score2++;
    }
    if(document.getElementById("correct10c").checked){
        score2++;
    }
    return score2;
}
function score3(){
    var score3 =0;
    if(document.getElementById("correct1p").checked){
        score3++;
    }
    if(document.getElementById("correct2p").checked){
        score3++;
    }
    if(document.getElementById("correct3p").checked){
        score3++;
    }
    if(document.getElementById("correct4p").checked){
        score3++;
    }
    if(document.getElementById("correct5p").checked){
        score3++;
    }
    if(document.getElementById("correct6p").checked){
        score3++;
    }
    if(document.getElementById("correct7p").checked){
        score3++;
    }
    if(document.getElementById("correct8p").checked){
        score3++;
    }
    if(document.getElementById("correct9p").checked){
        score3++;
    }
    if(document.getElementById("correct10p").checked){
        score3++;
    }
    return score3;
}
function score(){
    tot1 =0;
    tot2 =0;
    tot3 =0;
    if(document.getElementById("correct1").checked){
        tot1++;
    }
    if(document.getElementById("correct2").checked){
        tot1++;
    }
    if(document.getElementById("correct3").checked){
        tot1++;
    }
    if(document.getElementById("correct4").checked){
        tot1++;
    }
    if(document.getElementById("correct5").checked){
        tot1++;
    }
    if(document.getElementById("correct6").checked){
        tot1++;
    }
    if(document.getElementById("correct7").checked){
        tot1++;
    }
    if(document.getElementById("correct8").checked){
        tot1++;
    }
    if(document.getElementById("correct9").checked){
        tot1++;
    }
    if(document.getElementById("correct10").checked){
        tot1++;
    }
    if(document.getElementById("correct1c").checked){
        tot2++;
    }
    if(document.getElementById("correct2c").checked){
        tot2++;
    }
    if(document.getElementById("correct3c").checked){
        tot2++;
    }
    if(document.getElementById("correct4c").checked){
        tot2++;
    }
    if(document.getElementById("correct5c").checked){
        tot2++;
    }
    if(document.getElementById("correct6c").checked){
        tot2++;
    }
    if(document.getElementById("correct7c").checked){
        tot2++;
    }
    if(document.getElementById("correct8c").checked){
        tot2++;
    }
    if(document.getElementById("correct9c").checked){
        tot2++;
    }
    if(document.getElementById("correct10c").checked){
        tot2++;
    }
    if(document.getElementById("correct1p").checked){
        tot3++;
    }
    if(document.getElementById("correct2p").checked){
        tot3++;
    }
    if(document.getElementById("correct3p").checked){
        tot3++;
    }
    if(document.getElementById("correct4p").checked){
        tot3++;
    }
    if(document.getElementById("correct5p").checked){
        tot3++;
    }
    if(document.getElementById("correct6p").checked){
        tot3++;
    }
    if(document.getElementById("correct7p").checked){
        tot3++;
    }
    if(document.getElementById("correct8p").checked){
        tot3++;
    }
    if(document.getElementById("correct9p").checked){
        tot3++;
    }
    if(document.getElementById("correct10p").checked){
        tot3++;
    }
    // if(tot1>6 && tot2>6 && tot3>6){}
        document.getElementById("valider").disabled=false;
        s1 = score1();
        s2 = score2();
        s3 = score3();
        var scoreTotale =s1+s2+s3;  
        alert("Votre score est :" + scoreTotale);
    
   
}

function display(){
   
    
}
//html
//correct answer
function reponse1(){
    var submitButton = document.getElementById("btn1");
    submitButton.onclick = document.getElementById("answer1").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse2(){
    var submitButton = document.getElementById("btn2");
    submitButton.onclick = document.getElementById("answer2").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse3(){
    var submitButton = document.getElementById("btn3");
    submitButton.onclick = document.getElementById("answer3").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse4(){
    var submitButton = document.getElementById("btn4");
    submitButton.onclick = document.getElementById("answer4").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse5(){
    var submitButton = document.getElementById("btn5");
    submitButton.onclick = document.getElementById("answer5").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse6(){
    var submitButton = document.getElementById("btn6");
    submitButton.onclick = document.getElementById("answer6").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse7(){
    var submitButton = document.getElementById("btn7");
    submitButton.onclick = document.getElementById("answer7").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse8(){
    submitButton.onclick = document.getElementById("answer8").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    var submitButton = document.getElementById("btn8");
    
}
function reponse9(){
    var submitButton = document.getElementById("btn9");
    submitButton.onclick = document.getElementById("answer9").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse10(){
    var submitButton = document.getElementById("btn10");
    submitButton.onclick = document.getElementById("answer10").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
//display hidden : show layer
function toggleHTML(){
    var x = document.getElementById("QuestHTML");
    
    if(x.style.display === "none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
//fin html

//css
//correct answer
function reponse1c(){
    var submitButton = document.getElementById("btn1c");
    submitButton.onclick = document.getElementById("answer1c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse2c(){
    var submitButton = document.getElementById("btn2c");
    submitButton.onclick = document.getElementById("answer2").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse3c(){
    var submitButton = document.getElementById("btn3c");
    submitButton.onclick = document.getElementById("answer3c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse4c(){
    var submitButton = document.getElementById("btn4c");
    submitButton.onclick = document.getElementById("answer4c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse5c(){
    var submitButton = document.getElementById("btn5c");
    submitButton.onclick = document.getElementById("answer5").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse6c(){
    var submitButton = document.getElementById("btn6c");
    submitButton.onclick = document.getElementById("answer6c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse7c(){
    var submitButton = document.getElementById("btn7c");
    submitButton.onclick = document.getElementById("answer7c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse8c(){
    submitButton.onclick = document.getElementById("answer8c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    var submitButton = document.getElementById("btn8c");
    
}
function reponse9c(){
    var submitButton = document.getElementById("btn9c");
    submitButton.onclick = document.getElementById("answer9c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse10c(){
    var submitButton = document.getElementById("btn10c");
    submitButton.onclick = document.getElementById("answer10c").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function toggleCSS(){
    var x = document.getElementById("QuestCSS");
    
    if(x.style.display === "none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
//fin css


//php
//correct answer
function reponse1p(){
    var submitButton = document.getElementById("btn1p");
    submitButton.onclick = document.getElementById("answer1p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse2p(){
    var submitButton = document.getElementById("btn2p");
    submitButton.onclick = document.getElementById("answer2p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse3p(){
    var submitButton = document.getElementById("btn3p");
    submitButton.onclick = document.getElementById("answer3p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
function reponse4p(){
    var submitButton = document.getElementById("btn4p");
    submitButton.onclick = document.getElementById("answer4p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse5p(){
    var submitButton = document.getElementById("btn5p");
    submitButton.onclick = document.getElementById("answer5p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse6p(){
    var submitButton = document.getElementById("btn6p");
    submitButton.onclick = document.getElementById("answer6p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse7p(){
    var submitButton = document.getElementById("btn7p");
    submitButton.onclick = document.getElementById("answer7p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse8p(){
    submitButton.onclick = document.getElementById("answer8p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    var submitButton = document.getElementById("btn8p");
    
}
function reponse9p(){
    var submitButton = document.getElementById("btn9p");
    submitButton.onclick = document.getElementById("answer9p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
    
}
function reponse10p(){
    var submitButton = document.getElementById("btn10p");
    submitButton.onclick = document.getElementById("answer10p").innerHTML = "la réponse est : 1-Mettre en forme du texte"; 
}
//display hidden : show layer
function toggleHTML(){
    var x = document.getElementById("QuestHTML");
    
    if(x.style.display === "none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function togglePHP(){
    var x = document.getElementById("QuestPHP");
    
    if(x.style.display === "none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
//fin php