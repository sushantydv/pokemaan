const NUM_BUSHES=50;
const NUM_BALLS = 5;

const player = document.querySelector('.player')
const player_pos = {
    x: parseInt (window.innerWidth/ 2),
    y: parseInt (window.innerWidth/ 2)
}
function createBushes(){
    for(let i=0; i<NUM_BUSHES; i++){
        const div = document.createElement('div')
        div.classList.add('bush')
        div.style.left = Math.random()*100 + '%'
        div.style.top = Math.random()*100 + '%'
        document.body.appendChild(div)
    }
}
function createBalls(){
    for(let i=0; i<NUM_BALLS; i++){
        const div = document.createElement('div')
        div.classList.add('pokeball')
        div.style.left = Math.random()*100 + '%'
        div.style.top = Math.random()*100 + '%'
        document.body.appendChild(div)
    }
}
function run{
    player.style.left = player_pos.x + 'px'
    player.style.top = player_pos.x + 'px'
}
function init(){
    createBushes()
    createBalls()
    run()
}
init()