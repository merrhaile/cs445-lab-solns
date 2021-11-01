
const swapBtn = document.getElementById("swap-btn");
const imgOne = document.querySelector(".img-1");


swapBtn.addEventListener("click", function (){
    if(!imgOne.classList.contains("img-swap")){
        imgOne.classList.add("img-swap")
    } else {
        imgOne.classList.remove("img-swap")
    }
});