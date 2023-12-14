document.querySelector("#form").addEventListener("submit", event =>{
  event.preventDefault()
  console.log(event.target.col.value)
  document.body.style.background = event.target.col.value
})
//make it so dark background = light text and vice versa
//add columns with bootstrap
//due 15/12/23
//add another question maybe-give it tabs at the top instead of like this