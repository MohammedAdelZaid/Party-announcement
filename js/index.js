
////////////////////////Side Bar Animate//////////////////////////

$(".open").on("click",function(){

    $(".sidebar").animate({width : "toggle"})

})


$(".exite-icon").on("click",function(){

    $(".sidebar").animate({width : "toggle"})

})


$(".nav-prop").on("click",function(){
let SectionId=$(e.target).attr("href")
let SectionsOffset=$(SectionId).offset().top;
$("body").animate({scrollTop :SectionsOffset},2000)
})






//////////////////singer-Slide///////////////////


$(".singer").on("click",function(e){
  
    $(e.target).next().slideToggle(500);

})

/////////////////////calculation of countDown///////////////////////////


let x= setInterval(function(){


    let countDown=new Date("October 23 2023").getTime()

    // console.log(countDown)
    
    let now = new Date().getTime()
    
    // console.log(now)
    
    let gapOfTime=now-countDown
    
    // console.log(gapOfTime)
    
    //convert times from milliseconds to Days/hours/minutes/seconds
    
    let days=Math.floor(gapOfTime/(1000*60*60*24))
    // console.log(days)
    let hours=Math.floor(gapOfTime%(1000*60*60*24)/(1000*60*60))
    // console.log(hours)
    let minutes=Math.floor(gapOfTime%(1000*60*60)/(1000*60))
    // console.log(minutes)
    let seconds=Math.floor(gapOfTime%(1000*60)/(1000))
    // console.log(seconds)
    
    
    document.getElementById("days").innerHTML=`${-days} D`
    document.getElementById("hours").innerHTML=`${hours} h`
    document.getElementById("minutes").innerHTML=`${minutes} m`
    document.getElementById("seconds").innerHTML=`${seconds} s`
    
    
    if (gapOfTime < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The appointment date has passed!";
    }

},1000)


///////////////////////////////tracking number of chars in text box///////////////////////////


let textBox = document.getElementById("textBox");
let remainingSpan = document.getElementById("remaining");

let maxVal=100;

remainingSpan.innerHTML=maxVal

textBox.addEventListener("input",function(){

let currentValue=textBox.value.length

let remainingVal =maxVal-currentValue

remainingSpan.innerHTML=remainingVal

if(remainingVal<=0){
    remainingSpan.innerHTML=`your available character finished`

}

})
