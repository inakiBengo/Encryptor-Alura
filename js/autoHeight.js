const autoHeight = (e) => {
  e.style.height = 'auto';  
  e.style.height = (e.scrollHeight) + 'px'; 
}

export default autoHeight