let firstName = document.querySelector("#first-name");
let favoriteFood = document.querySelector("#favorite-food");
let submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", postMessage)

function postMessage() {

    console.log(firstName.value);
    console.log(favoriteFood.value);

    const info = {
        firstName: firstName.value, favoriteFood: favoriteFood.value
    };

    const jsonString = JSON.stringify(info);

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(xhttp.responseText));
        }
    }
    xhttp.open("POST", "http://100.66.169.122:3000/chat", true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.send(jsonString);

}
