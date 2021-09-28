const clssname=["circle-i","circle-ii","circle-iii"];
$(".user-icon").click(function(){
    $(".first-main-screen").addClass("first-screen");
    $(".second-main-screen").removeClass("second-screen");
    var computerselected=Math.random()*3;
    computerselected=Math.floor(computerselected);
    var selectedclass=clssname[computerselected];
    setTimeout(function() {
        $('.computerclass').addClass(selectedclass);            
    }, 1500 )
    setTimeout(function() {
        $('#desided-win-lose').removeClass("win-lose");        
    }, 2500 );
});
$(".paper").click(function(){
    var elmId = $(".paper").attr("id");
    setTimeout(function() {            
        var classname=document.querySelector(".computerclass").classList[1]
        randomcircle(elmId,classname);
    }, 1500);
    $(".userSelected").addClass(elmId);
});
$(".scissors").click(function(){
    var elmId = $(".scissors").attr("id");
    setTimeout(function() {            
        var classname=document.querySelector(".computerclass").classList[1]
        randomcircle(elmId,classname);
    }, 1500 );
    $(".userSelected").addClass(elmId);
});
$(".rock").click(function(){
    var elmId = $(".rock").attr("id");
    setTimeout(function() {            
        var classname=document.querySelector(".computerclass").classList[1]
        randomcircle(elmId,classname);
    }, 1500);
    $(".userSelected").addClass(elmId);
});
function randomcircle(omkar,aryan){
    console.log(omkar,aryan);
    var userValue=omkar;
    var comValue=aryan;
    setTimeout(function() {
        if(userValue==="circle-one"&&comValue==="circle-i"){
            document.querySelector(".youpicked").innerHTML = "DRAW";
        }
        if(userValue==="circle-one"&&comValue==="circle-ii"){
            document.querySelector(".youpicked").innerHTML = "YOU LOSE";
        }
        if(userValue==="circle-one"&&comValue==="circle-iii"){
            document.querySelector(".youpicked").innerHTML = "YOU WIN";  
        }
        if(userValue==="circle-two"&&comValue==="circle-i"){
            document.querySelector(".youpicked").innerHTML = "YOU WIN";        
        }
        if(userValue==="circle-two"&&comValue==="circle-ii"){
            document.querySelector(".youpicked").innerHTML = "DRAW";
        }
        if(userValue==="circle-two"&&comValue==="circle-iii"){
            document.querySelector(".youpicked").innerHTML = "YOU LOSE";   
        }
        if(userValue==="circle-three"&&comValue==="circle-i"){
            document.querySelector(".youpicked").innerHTML = "YOU LOSE";           
        }
        if(userValue==="circle-three"&&comValue==="circle-ii"){
            document.querySelector(".youpicked").innerHTML = "YOU WIN";       
        }
        if(userValue==="circle-three"&&comValue==="circle-iii"){
            document.querySelector(".youpicked").innerHTML = "DRAW";
        }
    }, 100);
    setTimeout(function(){
        var score= document.querySelector('.zero').innerText;
        var winner=document.querySelector(".youpicked").innerHTML;
        if(winner==="YOU WIN"){
            document.querySelector('.zero').innerText=parseInt(score)+1;
        }
    },1000);
    setTimeout(function(){
        var winner=document.querySelector(".youpicked").innerHTML;
        if(winner==="YOU WIN"){
            $(".userSelected").addClass("circle-ripple");
            document.querySelector(".playAgain").style.color="gray"
        }
        if(winner==="YOU LOSE"){
            $(".computerclass").addClass("circle-ripple");
            document.querySelector(".playAgain").style.color="red"
        }      
    },1000);
}
// play again button
setTimeout(function() {    
    $(".playAgain").click(function(){
        $(".first-main-screen").removeClass("first-screen");
        $(".userSelected").removeClass("circle-one");
        $(".userSelected").removeClass("circle-two");
        $(".userSelected").removeClass("circle-three");
        $(".userSelected").removeClass("circle-ripple");
        $(".computerclass").removeClass("circle-i");
        $(".computerclass").removeClass("circle-ii");
        $(".computerclass").removeClass("circle-iii");
        $(".computerclass").removeClass("circle-ripple");
        $(".second-main-screen").addClass("second-screen");
        $(".youpicked").text("")
        $("#desided-win-lose").addClass("win-lose");
        $(".rules").removeClass("rules-1");
    })       
}, 100 );
$(".rules").click(function(){
    document.querySelector(".first-main-screen").style.opacity = "0.1"
    document.querySelector(".second-main-screen").style.opacity = "0.1"
    document.querySelector(".main-top").style.opacity = "0.1"
    document.querySelector(".rulesbackground").style.display = "inline";
});
$(".x").click(function(){
    document.querySelector(".rulesbackground").style.display = "none";
    document.querySelector(".first-main-screen").style.opacity = "1"
    document.querySelector(".second-main-screen").style.opacity = "1"
    document.querySelector(".main-top").style.opacity = "1"
});
