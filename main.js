let output = document.getElementById("out");

async function getJoke(){
    output.classList.remove("fade");
    let getting = await fetch('https://icanhazdadjoke.com', {
        headers:{
            accept: "application/json"
        }
    })
    let jokes = await getting.json();
    let data = jokes.joke;
    // output.innerHTML = data;
    output.textContent = data;
    output.classList.add("fade");
}  

getJoke();