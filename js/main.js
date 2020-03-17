const userChoice = document.querySelectorAll('.userChoice')




//buttons
document.querySelector("#rock").addEventListener('click', (e) => {
  game()
})
document.querySelector("#paper").addEventListener('click', (e) => {
  game()
})
document.querySelector("#scissors").addEventListener('click', (e) => {
  game()
})
document.querySelector("#lizard").addEventListener('click', (e) => {
  game()
})
document.querySelector("#spock").addEventListener('click', (e) => {
  game()
})



  const ul = document.querySelector('ul')
















  function game(){
    let userAnswer = document.querySelector("input").value
    fetch(`https://rPSLS?checkRPLS=`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log()
