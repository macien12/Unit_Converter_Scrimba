/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-Btn")
let lengthEl = document.getElementById("length-El")
let volumeEl = document.getElementById("volume-El")
let massEl = document.getElementById("mass-El")
const meterCount = 3.281
const literCount = 0.264
const kilogramCount = 2.204

convertBtn.addEventListener("click", function() {
    convertNumber(inputEl.value)
})

function convertNumber(value) {
    lengthEl.innerHTML = `<p> ${value} meters = ${(value * meterCount).toFixed(3)} feet | ${value} feet = ${(value / meterCount).toFixed(3)} meters</p>`
    
    volumeEl.innerHTML = `<p> ${value} liters = ${(value * literCount).toFixed(3)} gallons | ${value} gallons = ${(value / literCount).toFixed(3)} liters</p>`
    
    massEl.innerHTML = `<p> ${value} kilos = ${(value * kilogramCount).toFixed(3)} pounds | ${value} pounds = ${(value / kilogramCount).toFixed(3)} kilos</p>`
}


