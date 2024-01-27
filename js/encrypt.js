const encrypt = (text) => {
  text = text.split("")

  text.map((letter, index) => {
    if (letter === 'a') text[index] = 'ai'
    if (letter === 'e') text[index] = 'enter'
    if (letter === 'i') text[index] = 'imes'
    if (letter === 'o') text[index] = 'ober'
    if (letter === 'u') text[index] = 'ufat'
  });

  return text.join("");
}

export default encrypt