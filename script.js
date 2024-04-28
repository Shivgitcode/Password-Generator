const displayPassword = document.querySelector(".displayPassword")

const symbols = "!@#$%^&*()_{}|"
let password = ""
const generatePassword = document.querySelector(".pass")
const slider = document.querySelector(".slider")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const other = document.querySelector("#symbols")
const numbers = document.querySelector("#numbers")
const displayPass = document.querySelector(".displayPassword")
let functions = []
const clip = document.querySelector(".clipboard")
const mainCont = document.querySelector(".mainContainer")
let shufflePass = ""
let checkCount = 0
const myAlert = document.querySelector(".myAlert")
const displayLength = document.querySelector(".displayLength")
const input = slider.value

let range = slider.value


displayLength.innerHTML = range

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function randomFunction(length) {
    return Math.floor(Math.random() * length)
}

function randomUppercase() {
    const upperCase = randomNum(65, 90)
    const letter = String.fromCharCode(upperCase)
    // console.log(letter)

    // const letter = upperCase.toString()
    // return letter
    return letter


}



slider.addEventListener("input", (e) => {
    // console.log(e.target.value)
    range = e.target.value
    displayLength.innerHTML = range
    console.log(range)
})

console.log(range)

function randomLowerCase() {
    const lowerCase = randomNum(97, 122)
    const letter = String.fromCharCode(lowerCase)
    return letter
}

function randomNumber() {
    const lowerCase = randomNum(48, 57)
    const letter = String.fromCharCode(lowerCase)
    return letter
}

function randomSymbol() {
    const index = randomNum(0, symbols.length)
    const letter = symbols[index]
    return letter
}
async function copyToClip() {
    const value = displayPass.innerHTML
    await navigator.clipboard.writeText(value)
    console.log(clip.getAttribute("data-bs-title"))

}

async function shufflePassword() {
    for (let i = 0; i < password.length; i++) {
        const index = randomNum(0, password.length) - 1
        console.log("inside shuflle pass", index, password[index])

    }
}

function displayLen(e) {
    displayLength.innerHTML = e.target.value


}



// displayLength.addEventListener("input",displayLen)



uppercase.addEventListener("click", (e) => {
    if (e.target.checked) {
        functions.push(randomUppercase)
        checkCount++

    }
    else {
        functions.splice(functions.indexOf(randomUppercase), 1)
        checkCount--
    }

    console.log(functions)

})
lowercase.addEventListener("click", (e) => {
    if (e.target.checked) {
        functions.push(randomLowerCase)
        checkCount++

    }
    else {
        functions.splice(functions.indexOf(randomLowerCase), 1)
        checkCount--
    }

    console.log(functions)

})
numbers.addEventListener("click", (e) => {
    if (e.target.checked) {
        functions.push(randomNumber)
        checkCount++

    }
    else {
        functions.splice(functions.indexOf(randomNumber), 1)
        checkCount--
    }

    console.log(functions)

})
other.addEventListener("click", (e) => {
    if (e.target.checked) {
        functions.push(randomSymbol)
        checkCount++

    }
    else {
        functions.splice(functions.indexOf(randomSymbol), 1)
        checkCount--
    }

    console.log(functions)

})

// const functions = [randomUppercase, randomLowerCase, randomSymbol, randomNumber]

function randomPassword() {
    if (checkCount < 1) {
        myAlert.classList.add("opacity-100")
        myAlert.classList.remove("opacity-0")
        // myAlert.style.transition = "all 2"

        setTimeout(() => {
            myAlert.classList.remove("opacity-100")
            myAlert.classList.add("opacity-0")
        }, 3000)


        return
    }

    for (let i = 0; i < functions.length; i++) {
        password += functions[i]()
    }

    for (let i = 0; i < (range - functions.length); i++) {
        password += functions[randomFunction(functions.length)]()
    }
    console.log(password)
    console.log(range)
    console.log(functions)
    shufflePassword()
    // shufflePassword()    
    displayPass.innerHTML = password
    password = ""
    shufflePass = ""

}



generatePassword.addEventListener("click", randomPassword)
clip.addEventListener("click", copyToClip)







// console.log(randomUppercase())