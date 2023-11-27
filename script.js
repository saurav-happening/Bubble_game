let score_value = 0;
let random_num = 0;
let bottom_panel = document.querySelector("#bottom-panel")

// creating bubble div

function creating_bubble(){
    let create_div = ""
    for(let i = 0; i <= 143; i++){
        // creating div using for loop
        
        // generating random number to put inside circle or div.
        const random = Math.floor(Math.random() * 10)
    
    
        create_div += `<div class="bubble">${random}</div>`
    
    
    }
    
    
    bottom_panel.innerHTML = create_div
}


// countdown timer

function countdown_timer(){
    let countdown = 5
    let count_timer = setInterval(function(){
    if(countdown>0){
        countdown--;

        document.querySelector("#timer").innerHTML = countdown
    } else{
        clearInterval(count_timer)

        // when time become 0 remove bubbles that is bottom-panel

        
        bottom_panel.innerHTML = ""

        
    }
},1000)}







// hit counter - changing hit number

function hit_value(){
    random_num = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = random_num
}

// increasing value of score

function score_increasing(){
    score_value += 10;
    let capture = document.querySelector("#score_box");
    capture.innerHTML = score_value

}



// capturing click event on bubble


bottom_panel.addEventListener("click", function(e){
    let num = Number(e.target.innerHTML)  // get the number from the bubble
    
    if(num === random_num){
        score_increasing()
        hit_value()
        creating_bubble()

       
    }

})


hit_value()
countdown_timer()
creating_bubble()





