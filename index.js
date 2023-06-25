const toggleBtn = document.querySelector('.bars')
const toggleBtnIcon = document.querySelector('.I')
const dropDown = document.querySelector('.drop-down')

toggleBtn.addEventListener('click', function(){
    dropDown.classList.toggle('open')
})
