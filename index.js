let inputValue = 1
let firstOutput = document.getElementById("output1")
let secondOutput = document.getElementById("output2")
let thirdOutput = document.getElementById("output3")
let convert = document.getElementById("convert-btn")

convert.addEventListener("click",function(){ 
    inputValue = Number(document.getElementById("number-input").value)
    if(inputValue){
    firstOutput.textContent = `${inputValue} meters = ${(3.281*inputValue).toFixed(3)} feet | ${inputValue} feet = ${(0.305*inputValue).toFixed(3)} meters`

    secondOutput.textContent = `${inputValue} liters = ${(0.264*inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${(3.785*inputValue).toFixed(3)} liters`

    thirdOutput.textContent = `${inputValue} kilograms = ${(2.205*inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${(0.454*inputValue).toFixed(3)} kilograms`
    console.log("Clicked")}
    else{
        firstOutput.textContent = "Please enter a valid number"
        secondOutput.textContent = "Please enter a valid number"
        thirdOutput.textContent = "Please enter a valid number"
    }
})