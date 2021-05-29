const btn = document.querySelector('button')

btn.addEventListener('click' , getJoke)
async function getJoke(){
    const joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    document.querySelector('.output').textContent = joke.value
}



