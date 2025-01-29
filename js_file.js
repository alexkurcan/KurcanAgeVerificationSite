const ageInput = document.getElementById('ageInput');
const submitBtn = document.getElementById('submitButton');
const result = document.getElementById('result');

let age;

submitBtn.onclick = function() {
    age = ageInput.value;
    age = Number(age); // change to integer

    if (age >= 18 && age <= 100) {
        result.textContent = "Perfect age!";
    } else if (age < 18 && age >= 13) {
        result.textContent = "You are a teenager...NOT eligiable for this site";
    } else if (age < 13 && age >= 0) {
        result.textContent = "You are a child...get off this site";
    } else if (age < 0) {
        result.textContent = "Your age isn't possible";
    } else if (age == 0) {
        result.textContent = "How were you just born?...";
    } else if (age >= 101){
        result.textContent = "You are far too old for this site!"
    }
     else {
        result.textContent = "That's not a valid input";
    }
};
