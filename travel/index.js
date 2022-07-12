console.log('Вёрстка соответствует макету. Ширина экрана 390px +48 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22');

const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.navigation');

if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        burgerButton.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });
}

function Close() {
    document.body.classList.remove('lock');
    burgerButton.classList.remove('active');
    navigationMenu.classList.remove('active');
}
