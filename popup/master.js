button = document.querySelector('button')
popup = document.querySelector('.popup-wrapper')
close = document.querySelector('.close-popup')

button.addEventListener('click', () => {
    popup.style.display = "block";
})

close.addEventListener('click', () => {
    popup.style.display = "none";
})

popup.addEventListener('click', () => {
    popup.style.display = "none";
})
