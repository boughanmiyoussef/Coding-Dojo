function changeMe(element){
    if(element.innerText=="Login"){
        element.innerText="Log out"
        element.style.backgroundColor="red"
    }else{
        element.innerText="Login"
    element.style.backgroundColor="green"
    }
}

function hide(button) {
    button.remove()
}