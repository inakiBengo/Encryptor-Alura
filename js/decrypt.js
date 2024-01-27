const decrypt = (text) => {
  text = text.replace(/ai/gi, 'a')
  text = text.replace(/enter/gi, 'e')
  text = text.replace(/imes/gi, 'i')
  text = text.replace(/ober/gi, 'o')
  text = text.replace(/ufat/gi, 'u')

  return text
}

export default decrypt