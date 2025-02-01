const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}
const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true

const yesButton = document.querySelector('#yes')
const noButton = document.querySelector('#no')

btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
    
    // Show response buttons
    yesButton.style.display = 'block'
    noButton.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
    
    // Hide response buttons
    yesButton.style.display = 'none'
    noButton.style.display = 'none'
  },500)
})

noButton.addEventListener('click', () => {
  const currentScale = parseFloat(noButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
  const newScale = currentScale - 0.1;
  noButton.style.transform = `scale(${newScale})`;
  if (newScale <= 0) {
    noButton.style.display = 'none';
  }
})

yesButton.addEventListener('click', () => {
  window.location.href = 'confirmacion.html'
})
