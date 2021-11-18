let parallax = document.querySelectorAll('.parallax');
let char = document.querySelector('.player');



document.addEventListener('keydown', function (event) {
    // console.log(event.key);
    jump();



});

function jump() {
    if (player.classList !== 'jump') {
        player.classList.add('jump');
        setTimeout(function () {
            char.classList.remove('jump');
        }, 300)
    }

}