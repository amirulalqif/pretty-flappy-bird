document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    // setting the bird in the defalt location
    let birdLeft = 220
    let birdBottom = 100

    // setting gravity
    let gravity = 2

    // adding the defalt location 
    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }

    // makes te bird go down
    let timerId = setInterval(startGame, 20)

    // e as an event
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 490) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    // everytime when the finger leave the spece key, jump function runs
    document.addEventListener('keyup', control)

    // creating obstacle with random height
    function generateObstacle () {
        let obstacleLeft = 507
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px' 
    }
    generateObstacle()
})