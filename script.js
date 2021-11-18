let char = document.querySelector('.player');
let obstacle = document.querySelector('.marsh');

function jump() {
    if (char.classList !== 'jump') {
        char.classList.add('jump');
        setTimeout(function () {
            char.classList.remove('jump');
        }, 300)
    }
}

let CheckAlive = setInterval(() => {
    let charTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    // console.log(charTop);
    let obsLeft = parseInt(window.getComputedStyle(marsh).getPropertyValue('left'));
    //console.log(obsLeft);
    if (obsLeft < 100 && obsLeft > 0 && charTop >= 500){
        //console.log('collision');
    }
}, 10);


document.addEventListener('keydown', function (event) {
    // console.log(event.key);
    jump();
});