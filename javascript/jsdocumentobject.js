let val ;

// document

    val = document;

// doctype (document)

    val = document.doctype;


// head (document)

    val = document.head;

// body (document)

    val = document.body;

// URL (document)

    val = document.URL;

// links

    val = document.links; // HTMLCOLLECTION,array , this catch a tag
    val = document.links[0];
    val = document.links[0].id;
    val = document.links[0].className;
    val = document.links[0].classList; // DOMTokenList,array
    val = document.links[0].classList[0];

// forms

    val = document.forms; // HTMLCollection,array, this catch form
    val = document.forms[0];
    val = document.forms[0].id;
    val = document.forms[0].className;
    val = document.forms[0].classList; // DOMTokentList,array
    val = document.forms[0].classList[0];
    val = document.forms[0].action;
    val = document.forms[0].method;

// images

    val = document.images; // HTMLCollection,array, this catch image file
    val = document.images[0];
    val = document.images[0].id;
    val = document.images[0].className;
    val = document.images[0].classList; // DOMTokentList,array
    val = document.images[0].src;
    val = document.images[0].alt;
    val = document.images[0].getAttribute("abc");


// scripts

    val = document.scripts; // HTMLCollection,array
    val = document.scripts[0];
    val = document.scripts[0].src;
    val = document.scripts[0].type;
    val = document.scripts[0].getAttribute("src");


//  Change Styling

    // val = document.getElementById("tasktitle");
    // val = document.getElementById("tasktitle").style.color = "green";
    // val = document.getElementById("tasktitle").style.background = "cyan";
    // val = document.getElementById("tasktitle").style.padding = "20px";

// Change Content

    val = document.getElementById("tasktitle").textContent = "to do list";
    val = document.getElementById("tasktitle").innerText = "Lists to do";
    val = document.getElementById("tasktitle").innerHTML = `<span style='color:orange'>lists</span>`;

// Call to Class Name

    let lis;

    lis = document.getElementsByClassName("list-group-item"); // HTMLCollection , array
    lis[0];
    lis[0].style.color = "cyan";
    lis[0].innerText = "Have to eat";

// Call to tag

    let listags;

    listags = document.getElementsByTagName("li"); // HTMLCollection

    console.log(listags);
    console.log(listags[0]);
    console.log(typeof listags);

    listags[0].style.color = "silver";
    listags[1].textContent = "Have to go";

// querySelector

    // console.log(document.querySelector("#tasktitle"));
    // console.log(document.querySelector(".card-title"));
    // console.log(document.querySelector("h3"));

    // console.log(document.querySelector("li"));
    // document.querySelector("li").style.color = "brown";
    // document.querySelector("ul li").style.color = "pink";
    // document.querySelector("ul li:nth-of-type(odd)").style.background = "yellow";
    // document.querySelector("ul li:nth-child(even)").style.backgroundColor = "darkblue";
    // document.querySelector("ul li:last-child").textContent = "have to do hw";
    // document.querySelector("ul li:nth-of-type(3)").innerText = "have to bath";

// querySelector().getElement

    const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");

    console.log(listitems);

    // document.querySelector("ul li:nth-child(even)").style.background = "grey";
    // document.querySelector("ul li:nth-child(odd)").style.background = "cyan";

    console.log(typeof listitems);

    const arritems = Array.from(listitems);
    console.log(arritems);

    arritems.forEach(function(arritem,index){
        // console.log(index);
        // console.log(arritem);
        // console.log(arritems.length);
        arritem.innerText = `${index} . Hello `;
    });

// qureySelectorAll

    let its = document.querySelector("ul.list-group li.list-group-item");
    console.log(its);

    let itms = document.querySelectorAll("ul.list-group li.list-group-item");
    console.log(itms);

    itms.forEach(function(itm,index){
        console.log(itm,index);
        itm.textContent = "Hay";
        itm.innerText = `${index + 1} : Hay`;
    });

    const liodd = document.querySelectorAll("li:nth-child(odd)");
    const lieven = document.querySelectorAll("li:nth-of-type(even)");
    console.log(liodd,lieven);


    liodd.forEach(function(odd,index){
        // console.log(index,odd);
        odd.style.background = "cyan";
    });

    console.log(lieven.length - 1);

    for( let k = 0; k < lieven.length ; k++){
        // console.log(`index number is ${k}`);
        lieven[k].style.backgroundColor = "darkslateblue";
    };




// children

    let chl;

    const getul = document.querySelector("ul.list-group");
    console.log(getul);
    const getli = document.querySelector("li.list-group-item");
    console.log(getli);

    chl = getul.children // HTMLCollection , array
    console.log(chl);
    console.log(chl[0]);
    chl = getul.children[1];
    console.log(chl);

    getul.children[1].innerText = "Have to eat";
    getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`;


// children of children


    chl = getul.children; // HTMLCollection , array
    chl = getul.children[1];
    chl = getul.children[1].children;
    chl = getul.children[1].children[0];
    chl = getul.children[1].children[0].id;
    chl = getul.children[1].children[0].className;
    chl = getul.children[1].children[0].classList; // DOMTokenList
    chl = getul.children[1].children[0].href;
    chl = getul.children[1].children[0].getAttribute("href");


    chl = getul.children[1].children[0].children;
    chl = getul.children[1].children[0].children[0];



// First Element Child

    chl = getul.firstElementChild;

// Last Element Child

    chl = getul.lastElementChild;

// Child Element Count

    chl = getul.children.length;
    chl = getul.childElementCount;


    chl = getul.children[0].childElementCount;
    // chl = getul.children[0].children[0].childElementCount;

    // console.log(chl);



    // Parent Element

    const getfirstli = document.querySelector("li.list-group-item:first-child");

    const par = getfirstli.parentElement;

    console.log(getfirstli,par);

    // Sibiling

        let sbl = getfirstli.nextElementSibling;

        //      list item1      list item2      list item3          list item4      list item5
        sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

        // console.log(sbl);

                    //list item1    list item1      list item3          list item2              list item1
        let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;

        console.log(psbl);

        // Create Element

        const newli = document.createElement("li"); // result = <li></li>

        console.log(newli);

        // Add ID

        // console.log(newli.id); // result = ""

        newli.id = "new-item"; // "" = "new-item"


        // Add Class

        // console.log(newli.className); // result = ""

        newli.className = "list-group-item" // "" = "list-group-item"

        console.log(newli);

        // Add Attribute (qualifiedname,value)

        newli.setAttribute("title","newitem");

        console.log(newli);

        // Create Text Node

        newli.appendChild(document.createTextNode("Save Myanmar"));


        const newlink = document.createElement("a");

        newlink.href = "#";

        // Add ID

        newlink.id = "delete-item6";

        // Add Class

        newlink.className = "delete-item";

        newlink.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        console.log(newlink);

        newli.appendChild(newlink);

        // console.log(newli);


        document.querySelector("ul.list-group").appendChild(newli);


// 12CEC