window.addEventListener('scroll', function() {
    var element = document.querySelector('.animation-element');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight) {
        element.classList.add('appear');
        /* verifica se o elemeto está no processo de rolagem para ser visualizado */
    }
});
