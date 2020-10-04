import * as header from './header';
import * as displayMenu from './menu';
import * as displayContact from './contact';

console.log("hello world");

const container = document.getElementById("container");

container.appendChild(header.createHeader());
displayMenu.display("#content-area");
document.querySelector("#Menu").classList.add("active-tab");


let clearContent = () => {
    document.querySelector("#content-area").innerHTML = "";
}

const tab = document.querySelectorAll(".tab");
tab.forEach(function(e){
    e.addEventListener("click", function(){
        if(e.innerText == "About"){
            clearContent();
            document.querySelector("#About").classList.add("active-tab")
            document.querySelector("#Menu").classList.remove("active-tab")
            displayContact.display("#content-area");
        } else if (e.innerText == "Menu"){
            clearContent();
            document.querySelector("#About").classList.remove("active-tab")
            document.querySelector("#Menu").classList.add("active-tab")
            displayMenu.display("#content-area");
        }
    });
});


