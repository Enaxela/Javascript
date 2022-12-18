let salutation = document.getElementById("salutation");

let prenom = prompt('Quel est votre prénom \?');

salutation.innerHTML = 'Bienvenue ' + prenom + ' ♡';




const button = document.querySelector("#btn");
const me = document.querySelector(".me");

button.addEventListener("click", function  () {
    me.classList.toggle("me")   
   });


const btn2 = document.querySelector("#btn2")
const h2 = document.querySelector("h2")

btn2.addEventListener("click", function() {

       if (h2.style.color === "black"){

       h2.style.color = "pink";
       
    } else {
            h2.style.color = "black";
        } 
    });

  
    
