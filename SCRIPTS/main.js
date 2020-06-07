let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "IMAGES/PAO-DE-MEL1.jpeg"){
        myImage.setAttribute("src","IMAGES/PAO-DE-MEL2.jpeg");
    }  
        else{
            myImage.setAttribute("src","IMAGES/PAO-DE-MEL1.jpeg");
        }    
}

let myButton = document.querySelector("button");
let myHeader = document.querySelector("h2");

function setUsername(){
    let myName = prompt("Por favor, digite seu nome.");
    if(!myName || myName === null) {
        setUsername();
    }
        else{
        localStorage.setItem("name", myName);
        myHeader.textContent = "Seja bem vindo! :) , "+ myName;
        }
    }
if(!localStorage.getItem("name")){
    setUsername();
}
    else{
        let savedName = localStorage.getItem("name");
        myHeader.textContent ="Seja bem vindo! :) , "+ savedName;
    }

myButton.onclick = function() {setUsername()};

