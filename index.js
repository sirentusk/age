const textbox = document.getElementById("textbox"); // create input textbox
const submit = document.getElementById("submit"); // create submit button
const results = document.getElementById("results"); // create results
let age; // create the inputted result

submit.onclick = function(){

    age = textbox.value;
    age = Number(age);

    if(age >= 18){
        results.textContent = `You are old enough to enter this site. Press the button below to enter.`;
        }
    else {
        results.textContent = `You must be 18+ to enter this site.`;
    }
}
