const form = document.querySelector("form");
const vorName= document.querySelector("#firstname");
const nachName= document.querySelector("#lastname");
const email= document.querySelector("#email");
const speichern=document.querySelector("#speichern");
const geburtTag= document.querySelector("#birthday");
const password= document.querySelector("#pass");
const password1= document.querySelector("#pass1");
const geburtTagValue=geburtTag.value.substring(0,4);
const date = new Date().getFullYear();


form.addEventListener("submit", function (event){
    event.defaultPrevented();
    if(password.value !== password1.value){
            alert("Password ist nicht korrekt");
        }
        if((date - geburtTagValue) < 18){
            alert("Sie können nicht auf die Website registirien, weil Sie unter 18 Jahre alt sind.")
        }
});


function togglePassword() {
   password.type = (password.type == 'password' ? 'text' : 'password');
}

function togglePassword1() {
    password1.type = (password1.type == 'password' ? 'text' : 'password');
 }











