const formatError = (textUser) => {
  const warning = document.querySelector('#warning')

  if(!(/^[a-z\s]+$/.test(textUser))) {
    warning.style.backgroundColor = 'red'
    warning.style.color = 'white'
    throw new Error('Solo letras en minúsculas y sin acento')
  } else {
    warning.style.color = 'var(--color-text)'
    warning.style.backgroundColor = 'transparent'
  }
}

export default formatError