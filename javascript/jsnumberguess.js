// UI


const minnum = document.querySelector(".mininumber"),
            maxnum = document.querySelector(".maxnumber"),
            getinput = document.querySelector("#guessnumber"),
            getbtn = document.querySelector("#btn"),
            message1 = document.querySelector(".message1"),
            message2 = document.querySelector(".message2"),
            getgame = document.querySelector("#game");

let min = 1,
        max = 10,
        gameleft = 3;
        // winningnum = 5 ; // instead of numbers use function to be dynamic 

// console.log(randomnum());
// auto count min max 

minnum.innerText = min;
maxnum.textContent = max;

// btn click

getbtn.addEventListener("click",function(){
    
    // console.log("i am working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value);

    let guess = parseInt(getinput.value); // to Number datatype 

    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){

        // console.log("Please enter only number between " + min + " and " + max + " .");

        // output in message 2 

            // message2.innerText = `Please enter number between ${min} and ${max} and do not enter alphabets .`;

                // instead will use user-defined function for message2

                    setmessage2(`Please enter number between ${min} and ${max} and do not enter alphabets .`,"red");

                    // getinput.value = "";


        }



    // 2 conditions

    // one is winning game only once 

    // second is losing game 

        // one is winning game before all gameleft gone

        // two is lose till all gameleft gone 

    else if(guess === winningnum){

        // // disable input
        //     // console.log(getinput.disabled); // result = false
        //         getinput.disabled = true; // rewrite 
        //         // console.log(getinput.disabled); // result = true

        // // input box border color
        //     // console.log(getinput.style.borderColor);
        //         getinput.style.borderColor = "cyan";

        // // // message1
        // //     message1.textContent = guess + " is correct ! Do you want to play again ?";

        // // // message1 text color
        // //     message1.style.color = "green";

        //         // use message function
        //             setmessage1(guess + " is correct ! Do you want to play again ?","green");

        // // change btn value 
        //     getbtn.value = "Play again";

            // All instruction in one function

                gameover(true,guess + " is correct ! Do you want to play again ?");


    }else{

        // gameleft--; // each time one decrease 

        gameleft -= 1; // gameleft -- ;

        console.log(gameleft);

        if(gameleft === 0){

    

            // // disable input 
            // getinput.disabled = true;

            // // input border color
            //     getinput.style.borderColor = "red";

            // // // message 2 
            // //     message1.innerText = `${guess} is wrong , your gameleft is all gone please try again .`;

            // // // message 2 text color
            // //     message1.style.color = "red"; 

            // // use of function for message

            //     setmessage1(`${guess} is wrong , your gameleft is all gone please try again .`,"red");


            // // change btn value 
            //     getbtn.value = "Play Again";

                // Using all instruction in one function

                    gameover(false,`${guess} is wrong , your gameleft is all gone please try again .`);
            

        }else{

                

                    // input border color    
                    getinput.style.borderColor = "red";

                    // // message 1
                    //     message1.textContent = guess + " is wrong . Your have " + gameleft + " game left";
        
                    // // message 1
                    //     message1.style.color = "darkslateblue";
        
                        // use of message function
                            setmessage1(guess + " is wrong . Your have " + gameleft + " game left","darkslateblue");
        
        
                    // change btn value 
                        getbtn.value = "Play Again";

                        // clear input box value
                            getinput.value = "";


        }

    }

});


// functions for message 

function setmessage1(msg,color){
    
    message1.textContent = msg;
    message1.style.color = color;

} 

function setmessage2(msg,color){

    message2.innerText = msg;
    message2.style.color = color;
};

// Function to brief the instructions 

function gameover(victory,msgtext){

    let textcolor;

        victory === true ? textcolor = "cyan" : textcolor =  "red";

    // disabled input

        getinput.disabled = true;

    // input border color 

        getinput.style.borderColor = textcolor;


    // setmessage1 

        setmessage1(msgtext,textcolor);

    // btn change 

        getbtn.value = "Play Again";

    // set class to game to make action on  button

        // getbtn.className = "btn active";
        
        getbtn.classList.add("active");
};



// click button and reload function 



getgame.addEventListener("mouseup",function(e){ // where did not use click cuz click is similar to mousedown 

    // console.log(e.target);

        if(e.target.className === "btn active"){

            // console.log(e.target.className);

            window.location.reload();

        }

});


// Function for random numbers 


function randomnum(maximum,minimum){

    let getrdm = Math.floor(Math.random() * (maximum - minimum) + 1 );


    return getrdm;
}

console.log(randomnum(max,min));