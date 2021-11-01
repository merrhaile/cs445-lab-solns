
const valueOne = document.getElementById("text-1")
const fback1 = document.getElementById("feedback-1");
    valueOne.onkeyup = function (){
        if(!Number(valueOne.value)) {
            fback1.innerHTML = "Enter a valid number";
            fback1.style.color="red";
        } else {
            fback1.innerHTML = ""
        }
        document.getElementById("text-3").value = null;
    }

const valueTwo = document.getElementById("text-2")
const fback2 = document.getElementById("feedback-2");
    valueTwo.onkeyup = function (){
        if (!Number(valueTwo.value)){
            fback2.innerHTML = "Enter a valid number";
            fback2.style.color="red";
        } else {
            fback2.innerHTML = ""
        }
        document.getElementById("text-3").value = null;
    }


const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    const valueOne = document.getElementById("text-1");
    const valueTwo = document.getElementById("text-2");
    const result = document.getElementById("text-3");
    
    if(!Number(valueOne.value) || !Number(valueTwo.value)) {
        fback1.innerHTML = "Enter a valid number";
        fback1.style.color="red";
        fback2.innerHTML = "Enter a valid number";
        fback2.style.color="red";
    } else {
        fback2.innerHTML = "";
        fback1.innerHTML = ""
        result.value = +valueOne.value + +valueTwo.value
    }
    

});

const clearBtn = document.getElementById("clear-btn");
clearBtn.onclick = function () {
    location.reload();
}