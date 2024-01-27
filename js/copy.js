const copy = async (textCopy, e) => {
  try {
    await navigator.clipboard.writeText(textCopy)
  } catch (err) {
    throw new Error('No se pudo copiar el texto')
  }

  e.classList.add('btn-copy')
  e.innerText = 'Copiado'
  setTimeout(() => {
    e.classList.remove('btn-copy')
    e.innerText = 'Copiar'
  }, 1000)
}

export default copy