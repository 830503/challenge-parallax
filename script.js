document.addEventListener('DOMContentLoaded', () => {
    let char = document.querySelector('.player');
    let obstacle = document.querySelector('.marsh');
    let score = document.getElementById('score');
    let counter = 0;

    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

    function jump() {
        if (char.classList !== 'jump') {
            char.classList.add('jump');
            setTimeout(function () {
                char.classList.remove('jump');
            }, 500)
        }
    }


    let CheckAlive = setInterval(() => {
        let charTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
        // console.log(charTop);
        let obsLeft = parseInt(window.getComputedStyle(marsh).getPropertyValue('left'));
        //console.log(obsLeft);
        
        if (obsLeft < 40 && obsLeft > 0 && charTop >= 500){
            
            alert("Game over.");
            counter=0;

            //console.log('collision');
        }else{
            counter++;
            score.innerHTML = Math.floor(counter/100);
        }

        
    }, 10);
    
    document.addEventListener('keydown', control);











})













