let url = 'https://icanhazdadjoke.com/'
let jokeText = document.querySelector('.joke')
fetch(url, {
    headers: {
        "Accept": "application/json"
    }
})
    .then(incomingData => incomingData.json())
    .then(data => {
        console.log(data)
        document.createElement('h1').innerText = data.joke
        document.querySelector('.joke').innerText = data.joke
    })
    .catch(err => {newFunction(err);})

function newFunction(err) {
    console.log(err);
}
