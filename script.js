const button1 = document.querySelector('#rate-1')
const button2 = document.querySelector('#rate-2')
const button3 = document.querySelector('#rate-3')
const button4 = document.querySelector('#rate-4')
const button5 = document.querySelector('#rate-5')
const submit = document.querySelector('#submit')
const thanks = document.querySelector('.rating-container-thanks')
const mainContainer = document.querySelector('.rating-container')
const valueRate = document.querySelector('#rate-selected')

const changeColor = (ev) =>{
  button1.classList.remove('selected')
  button2.classList.remove('selected')
  button3.classList.remove('selected')
  button4.classList.remove('selected')
  button5.classList.remove('selected')
  ev.target.classList.toggle('selected')
  valueRate.innerText= ev.target.textContent

}
const submitRate = () =>{
  setTimeout(() => {
    mainContainer.classList.toggle('inactive')
    thanks.classList.toggle('inactive')
  }, 1000);
}

button1.addEventListener('click', changeColor)
button2.addEventListener('click', changeColor)
button3.addEventListener('click', changeColor)
button4.addEventListener('click', changeColor)
button5.addEventListener('click', changeColor)
submit.addEventListener('click', submitRate)

