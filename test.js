'use strict';
// https://icanhazdadjoke.com/api

const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const urlJoke = 'https://icanhazdadjoke.com/';

let data;

fetchJsonAPI();

jokeBtn.addEventListener('click', () => {
  fetchJsonAPI();
  jokeEL.innerText = data;
})

function fetchJsonAPI() { // !async
  data =  fetch(urlJoke, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response) => response.json()) // JSON.parse
  .then((data) => {
    return data.joke;
  })
  .catch(err => {
    return err;
  }); 
};


// Using async / await
// async function fetchJsonAPI() { // !async
//   const res = await fetch(urlJoke, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }
//   })
  
//   const data = await res.json();
// };

async function fetchTextApi() {
  fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      'Accept': 'text/plain'
    }
  })
  .then((res) => res.text())
  .then((data) => data)
  .catch(err => err);
}

//Command: curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd
