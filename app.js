document.addEventListener('DOMContentLoaded', () => {

    const square = document.querySelectorAll('.square')
    const score = document.querySelector('#score')
    const goals = document.querySelector('.goal')
    const timeAlready = document.querySelector('#time')
    let colourArray = ["rgb(141,228,211)", "rgb(36,118,114)", "rgb(157,232,102)", "rgb(87,131,46)", "rgb(175,198,254)", "rgb(122,47,155)", "rgb(245,135,200)", "rgb(19,90,194)", "rgb(132,130,149)", "rgb(66,69,94)"]
    let chosenColour = []
    let goalColour = ""
    let result = 0
    let currentTime = 0
    let high_score = 0

    score.textContent = result

    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length)
        return choices[index]
      }
    
    function addingSquares() {
        for (let i = 0; i < square.length; i++) {
            let randomPosition = square[i]
            let oneColour = choose(colourArray)
            chosenColour.push(oneColour)
            randomPosition.setAttribute("style", "background-color: " + oneColour)
            randomPosition.addEventListener('click', checkColour)
        }
    }
    
    function setGoal() {
        goalColour = (square[Math.floor(Math.random() * 4)]).style.backgroundColor
        //console.log(goalColour)
        goals.setAttribute("style", "background-color: " + goalColour)
        return goalColour
    }

    function settingUp() {
        addingSquares()
        setGoal()
    }

    function gameOver() {
        alert('Game over! You chose the wrong colour! Your final score is ' + result + '.' + 'The time you used is ' + currentTime + 's.' + 'The highest score right now is ' + high_score + '!')
    }

    function checkColour() {
        let chosenSquare = this.style.backgroundColor // colour of clicked
        if (chosenSquare === goalColour) {
            result += 1
            score.textContent = result
            settingUp()
        } else {
            if (result > high_score) {
                high_score = result
            }
            gameOver()
            result = 0
            score.textContent = result
            currentTime = -0.5
            timeAlready.textContent = currentTime
            settingUp()
        }
    }

    function countUp() {
        currentTime += 0.5
        // console.log(currentTime)
        timeAlready.textContent = currentTime
    }
    
    settingUp()
    setInterval(countUp, 500)
})

