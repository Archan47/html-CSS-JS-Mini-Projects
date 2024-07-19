score = 0;
cross = true;

audiobg = new Audio('OnePeice.mp3');
audioGo = new Audio('DragonGameover.mp3');
audioJump = new Audio('JumpSound.mp3');
setTimeout(() => {
    audiobg.play()
}, 1000);
document.onkeydown = function(e){
    console.log("key code is : ",e.keyCode);
    if(e.keyCode == 32){
       ninja = document.querySelector('.ninja');
       ninja.classList.add('animateNinja');
       setTimeout(() => {
            ninja.classList.remove('animateNinja')
       }, 700);
       audioJump.play();
       
    }
    if(e.keyCode == 39){
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));
        ninja.style.left = ninjaX + 112 + "px";
     }
     if(e.keyCode == 37){
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));
        ninja.style.left = (ninjaX - 100) + "px";
     }
}
setInterval(() => {
    ninja = document.querySelector('.ninja');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    nx = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));
    ny = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));


    offsetX = Math.abs(nx-ox);
    offsetY = Math.abs(ny-oy);
    console.log(offsetX,offsetY);
    if(offsetX<95 && offsetY<80){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audioGo.play();
        setTimeout(() => {
            audioGo.pause()
        }, 7000);
        setTimeout(() => {
            audiobg.pause()
        }, 100);
    }
    else if(offsetX < 100 && cross){
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
           cross = true; 
        }, 1000);
        setTimeout(() => {
            animationDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newAnimationDur = animationDur - 0.1;
            obstacle.style.animationDuration = newAnimationDur + 's';
        }, 500);
    }
}, 100);

function updateScore(score){
    scorecount.innerHTML = " Your Score : " + score;
}
