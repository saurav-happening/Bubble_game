let score_value = 0;
let random_num = 0;
let bottom_panel = document.querySelector("#bottom-panel")
let capture = document.querySelector("#score_box");
// let final_score = document.querySelector("final_score")
// let play_again = document.querySelector("play_again")


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
    let countdown = 10
    let count_timer = setInterval(function(){
    if(countdown>0){
        countdown--;

        document.querySelector("#timer").innerHTML = countdown
    } else{
        clearInterval(count_timer)

        // when time become 0 remove bubbles that is bottom-panel

        bottom_panel.innerHTML = ""
        show_button_score()
        try_again()
        
        
        
    }
},1000)}


// creating button to play again

// adding final score also by creating new element and appending to bottom panel

let bt = document.createElement("button")
let socre_display = document.createElement("h3")

// function to show play again button and final score

function show_button_score(){
    bt.classList.add('play_button')
    bt.innerText = 'Try Again'
    bottom_panel.appendChild(bt)

    socre_display.classList.add('score_disp')
    socre_display.innerHTML = `Final socre : ${score_value}`
    bottom_panel.appendChild(socre_display)

}

// try again function 
// reset capture score box to 0 and score value - 0
function try_again(){
    bt.addEventListener("click", function(){
        capture.innerHTML = "0"
        score_value = 0
        creating_bubble()
        countdown_timer()
        hit_value()
    })

}



// hit counter - changing hit number

function hit_value(){
    random_num = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = random_num
}

// increasing value of score

function score_increasing(){
    score_value += 10;
    capture.innerHTML = score_value

}



// capturing click event on bubble

function click_bubble(){
    bottom_panel.addEventListener("click", function(e){
        let num = Number(e.target.innerHTML)  // get the number from the bubble
        
        if(num === random_num){
            score_increasing()
            hit_value()
            creating_bubble()
    
           
        }
    
    })
}


click_bubble()
hit_value()
countdown_timer()
creating_bubble()





