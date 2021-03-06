document.addEventListener('DOMContentLoaded', () => {
    let char = document.querySelector('.player');
    let obstacle = document.querySelector('.marsh');
    let starbtn = document.getElementById('starbtn');

    let music = new Audio('music/music.mov');
    let gameover = new Audio('music/gameover.mp3');
    let jumpMusic = new Audio('jump.mp3');

    let score = document.getElementById('score');
    let counter = 0;

    starbtn.addEventListener('click', () => {
        music.loop = true;
        music.play();
        music.volume = 0.5;
    })


    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

    function jump() {
        if (char.classList !== 'jump') {
            char.classList.add('jump');
            jumpMusic.play();
            setTimeout(function () {
                char.classList.remove('jump')
            }, 500)
        }
    }

    let CheckAlive = true;
    setInterval(() => {
        let charTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
        // console.log(charTop);
        let obsLeft = parseInt(window.getComputedStyle(marsh).getPropertyValue('left'));
        //console.log(obsLeft);

        if (obsLeft < 40 && obsLeft > 0 && charTop >= 500) {
            alert("Game over.");
            counter = 0;
            //console.log('collision');
        } else {
            counter++;
            score.innerHTML = Math.floor(counter / 100);
        }
    }, 10);

    document.addEventListener('keydown', control);

})