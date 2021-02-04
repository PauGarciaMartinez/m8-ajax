// BUTTON EVENT
const button = document.querySelector("button").addEventListener("click", () => {
    resetDisplay();
    loadJoke();
})

// HTTP REQUEST
function loadJoke() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "json/jokes.json", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const jokesList = JSON.parse(xhr.responseText);

            function randomizeJokes(jokes) {
                return jokes[Math.floor(Math.random()*jokes.length)];    
            }

            const displayJoke = document.createElement("p");
            displayJoke.innerHTML = randomizeJokes(jokesList).joke;
            const jokeContainer = document.querySelector(".joke-container");
            jokeContainer.appendChild(displayJoke);
            jokeContainer.classList.add("full");
        }
    }
    xhr.send();
}

// RESET DISPLAY
function resetDisplay() {
    const jokeContainer = document.querySelector(".joke-container");
    if (jokeContainer.classList.contains("full")) {
        jokeContainer.removeChild(jokeContainer.firstChild); 
    }
    jokeContainer.classList.remove("full");
}