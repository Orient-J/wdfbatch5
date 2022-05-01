//UI

const getfirstdisplay = document.getElementById("display"),
            getsecdisplay = document.getElementById("displaytwo");


const getfirstinput = document.getElementsByClassName("firstinput")[0],
            getsecinput = document.getElementsByClassName("secondinput")[0],
            getsign = document.getElementsByTagName("input")[4];


const getnumbtn = document.querySelectorAll(".num-btn"),
            getoperatorbtn = document.querySelectorAll(".operator-btn"),
            getactionbtn = document.querySelectorAll(".action-btn");

const getsqrtbtn = document.querySelector(".sqrt-btn");

let text = "ID = WDF-5446";

let idx = 0;


getfirstdisplay.disabled = true;
getsecdisplay.disabled = true;

// Testing

// console.log(getfirstdisplay);
// console.log(getsecdisplay);
// console.log(getfirstinput);
// console.log(getsecinput);
// console.log(getsign);
// console.log(getnumbtn);
// console.log(getoperatorbtn);
// console.log(getactionbtn);

// let firstnum =  Number(getfirstinput.value);
// let secondnum = +getsecinput.value;

getnumbtn.forEach(function(getnum){

    // console.log(getnum);

    getnum.addEventListener("click",function(e){

        // console.log(e.target);
        // console.log(e.target.innerText);



        if(getsign.value !== ""){

            getsecinput.value += e.target.textContent;

            let lastidx = getsecinput.value.length - 1;

            let lastcha = getsecinput.value[lastidx];

            getfirstdisplay.value += lastcha;

            let sign = getsign.value;

            // console.log(getsecinput.value[lastidx]);

        }else{

            getfirstinput.value += e.target.textContent;

            getfirstdisplay.value = getfirstinput.value;

        }


    });

});


getoperatorbtn.forEach(function(getoperator){

    getoperator.addEventListener("click",function(e){

        // console.log(e.target);
        // console.log(e.target.textContent);

        getsign.value = e.target.innerText;

        getfirstdisplay.value += getsign.value;

    });

});


getactionbtn.forEach(function(action){
    
    action.addEventListener("click",function(e){

        if(e.target.classList.contains("equal-btn")){

            calculation(getsign.value);

            getsecinput.value = "";

            getsign.value = "";
            
        }else if(e.target.className.includes("del-btn")){

           if(getsecinput.value !== ""){

                getsecinput.value = getsecinput.value.substring(0,getsecinput.value.length-1);
           }else if(getsign.value !== ""){
               
                getsign.value = getsign.value.substring(0,getsign.value.length-1);
           }else{
               
                getfirstinput.value = getfirstinput.value.substring(0,getfirstinput.value.length - 1);
            }
        
            getfirstdisplay.value = getfirstdisplay.value.substring(0,getfirstdisplay.value.length -1 );

            
        }else if(e.target.classList.textContent = "AC"){

            allclear("");


        }
    });

});

getsqrtbtn.addEventListener("click",function(){


    let output;

    output = Math.sqrt(Number(getfirstinput.value)).toFixed(3);

    getfirstinput.value = output

    getfirstdisplay.value = output;

});

function calculation(sign){



    // let display = getfirstdisplay.value;

    let result;

    let firstnum = Number(getfirstinput.value);

    let secnum = Number(getsecinput.value);

    switch(sign){

        case "+":

            result = firstnum + secnum;

            insertvalue(result);

        break;

        case "-":

            result = firstnum - secnum;

            insertvalue(result);

        break;

        case "x":

            result = firstnum * secnum;

            insertvalue(result);

        break;

        case "/":

            result = firstnum / secnum;

            insertvalue(result);

        break;

        default :

            result = firstnum % secnum;

            insertvalue(result);
        
        break;

    }


};

function insertvalue(rst){

    getfirstdisplay.value = rst;

    getfirstinput.value = rst;
}

function allclear(sth){


    getfirstdisplay.value = sth;
    getsecdisplay.value = sth;
    getfirstinput.value = sth;
    getsecinput.value = sth;
    getsign.value = sth;

};

function autotext(){

    if(idx !== text.length){
        
        let getptag = document.getElementsByTagName("p")[0];

        getptag.textContent += text[idx];

        idx++;
    }else{

        clearInterval(interval)

    }
}

// autotext()

let interval = setTimeout(setInterval(autotext,800),500);

// setTimeout(interval,2000);