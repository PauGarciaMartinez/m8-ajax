// BUTTON EVENT
const button = document.querySelector("button").addEventListener("click", () => {
    resetDisplay();
    loadJoke();
})

// HTTP REQUEST

function loadJoke() {
    fetch("json/jokes.json")
    .then(res => res.json())
    .then(data => {

        function randomizeJokes(data) {
            return data[Math.floor(Math.random()*data.length)];    
        }

        const displayJoke = document.createElement("p");
        displayJoke.innerHTML = randomizeJokes(data).joke;
        const jokeContainer = document.querySelector(".joke-container");
        jokeContainer.appendChild(displayJoke);
        jokeContainer.classList.add("full");
    })
}

// RESET DISPLAY
function resetDisplay() {
    const jokeContainer = document.querySelector(".joke-container");
    if (jokeContainer.classList.contains("full")) {
        jokeContainer.removeChild(jokeContainer.firstChild); 
    }
    jokeContainer.classList.remove("full");
}