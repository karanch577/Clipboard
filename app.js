const inputField = document.getElementById("inputField")
const error = document.querySelector(".error")
const success = document.querySelector(".success")
error.style.color = "red"

const copy = () => {

    // check if input is empty
    if(inputField.value.trim().length == 0) {
        error.innerText = "* Please enter something"
    }
    else {
    error.innerText = ""

    // copy to clipboard function
    copyToClip()
    }
}

async function copyToClip() {
    await navigator.clipboard.writeText(inputField.value)
    success.classList.remove("hidden")
}

// remove the success message on input focus 

function removeSuccessMsg() {
    success.classList.add("hidden")
}