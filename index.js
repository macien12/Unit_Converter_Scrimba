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
    convertNumber()
})

function convertNumber() {
    lengthEl.innerHTML = `<p> ${inputEl.value} meters = ${(inputEl.value * meterCount).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / meterCount).toFixed(3)} meters</p>`
    
    volumeEl.innerHTML = `<p> ${inputEl.value} liters = ${(inputEl.value * literCount).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / literCount).toFixed(3)} liters</p>`
    
    massEl.innerHTML = `<p> ${inputEl.value} kilos = ${(inputEl.value * kilogramCount).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / kilogramCount).toFixed(3)} kilos</p>`
}


