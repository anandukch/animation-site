

var bioIems = document.querySelectorAll('.bio')
bioIems.forEach(bioItem => {
  bioItem.addEventListener('mouseover', ()=>{
    bioItem.childNodes[1].classList.add('img-darken')
  })
  bioItem.addEventListener('mouseout', ()=>{
    bioItem.childNodes[1].classList.remove('img-darken')
  })
})