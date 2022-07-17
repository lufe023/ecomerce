const clothesCardsContainer = document.querySelector('.cartClothesContainer')
const shopping = document.querySelector('.svgContainer')
const closeTag = document.querySelector('.closeTag')

shopping.addEventListener('click', function () {
    clothesCardsContainer.classList.add('show_cartClothesContainer')
});

closeTag.addEventListener('click', function () {
    clothesCardsContainer.classList.remove('show_cartClothesContainer')
})

