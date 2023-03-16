const cardNumber = document.querySelector('.card-number')
const cardName = document.querySelector('.card-name')
const cardExpMM = document.querySelector('.card-expire-MM')
const cardExpYY = document.querySelector('.card-expire-YY')
const cardCVC = document.querySelector('.card-CVC')
let inputName = document.getElementById('name')
let inputCardNumber = document.getElementById('card')
let inputExpMM = document.querySelector('.MM')
let inputExpYY = document.querySelector('.YY')
let inputCVC = document.querySelector('.CVC')

const updateName = () => cardName.innerHTML = inputName.value
const updateCardNumber = () => cardNumber.innerHTML = inputCardNumber.value
const updateMM = () => {
  cardExpMM.innerHTML = inputExpMM.value
  inputExpMM.addEventListener('keydown', (event) => {
    if (inputExpMM.value.length == 2 && event.keyCode !== 8 && event.keyCode !== 46) {
      event.preventDefault()
    }
  })
}
const updateYY = () => {
  cardExpYY.innerHTML = inputExpYY.value
  inputExpYY.addEventListener('keydown', (event) => {
    if (inputExpYY.value.length == 2 && event.keyCode !== 8 && event.keyCode !== 46) {
      event.preventDefault()
    }
  })
}
const updateCVC = () => {
  cardCVC.innerHTML = inputCVC.value
  inputCVC.addEventListener('keydown', (event) => {
    if (inputCVC.value.length == 3 && event.keyCode !== 8 && event.keyCode !== 46) {
      event.preventDefault()
    }
  })
}



