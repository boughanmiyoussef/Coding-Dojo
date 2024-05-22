console.log("page loaded...");

var abc=document.querySelector(".card-list-item")
var inc=document.querySelector(".badge")

function sup(){
    abc.remove();
    inc.innerText--;
}


var abc2=document.querySelector(".card-list-itemm")
function sup2(){
    abc2.remove();
    inc.innerText--
}

var git=document.querySelector("#badge2")
function count(){
    git.innerText++
    sup()
}

function count1(){
    git.innerText++
    sup2()
}