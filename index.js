import './js/muñeco.js'
import autoHeight from './js/autoHeight.js'
import formatError from './js/formatError.js'
import copy from './js/copy.js'
import decrypt from './js/decrypt.js'
import encrypt from './js/encrypt.js'

const form = document.querySelector('#form')
const textarea = document.querySelector('#textarea')
const textResult = document.querySelector('#textResult') 
const buttonCopy = document.createElement('button')
buttonCopy.classList.value = 'btn'
buttonCopy.innerText = 'Copiar'
let text

// encrypt

form.addEventListener('submit', (e) => {
  try {
    e.preventDefault()
    const textUser = textarea.value

    formatError(textUser)

    e.submitter.id === 'btnEncrypt'
      ? text = encrypt(textUser)
      : text = decrypt(textUser)

    textResult.innerHTML = `<p class='pResult'>${text}</p>`
    textResult.appendChild(buttonCopy)
  } catch (err) {
    return console.log(err)
  }
})

textarea.addEventListener('input', (e) => {
  if (window.screen.width > 767) return e.target.style.height = '50vh'
  autoHeight(e.target)
})

buttonCopy.addEventListener('click', e => copy(text, e.target))


