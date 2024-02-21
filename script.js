let randomNumber = parseInt(Math.random()*100+1)
const userInput = document.getElementById('userInput')
const submitBtn = document.getElementById('submitBtn')
const newGameBtn = document.getElementById('newGameBtn')
const guessRem = document.getElementById('guessRem')
const prevGuess = document.getElementById('prevGuess')
const messageBox = document.getElementById('messageBox')
let totalGuesses = 10
submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const inputValue = parseInt(userInput.value)
    if (isNaN(inputValue)) {
        alert('Please enter a Number')
    } else if (inputValue > 100 || inputValue < 1) {
        alert('Please enter a Number between 1 and 100')
    } else {
        if (inputValue === randomNumber) {
            endGame()
            message()
        } else {
            userInput.value = ''
            prevGuess.innerHTML += `${inputValue}, `
            totalGuesses--
            guessRem.innerHTML = `${totalGuesses}`
            message()
        }
    }
    function message() {
        if (inputValue === randomNumber) {
            messageBox.innerHTML = 'Congratulations!!! You won the game.'
        } else if (totalGuesses === 0) {
            messageBox.innerHTML = 'You loss the game.'
            endGame()
        } else if (inputValue > randomNumber) {
            messageBox.innerHTML = 'Your number is higher than the random number.'
        } else if (inputValue < randomNumber) {
            messageBox.innerHTML = 'Your number is lower than the random number.'
        }
    }
    function endGame() {
        userInput.setAttribute('disabled', '')
        submitBtn.setAttribute('disabled', '')
        newGameBtn.classList.remove('hidden') 
        newGame()
    }
    function newGame() {
        newGameBtn.addEventListener('click', function(event) {
            event.preventDefault()
            userInput.value = ''
            randomNumber = parseInt(Math.random()*10+1)
            totalGuesses = 10
            guessRem.innerHTML = `${totalGuesses}`
            prevGuess.innerHTML = ''
            messageBox.innerHTML = ''
            userInput.removeAttribute('disabled')
            submitBtn.removeAttribute('disabled')
            newGameBtn.classList.add('hidden')
        })
    }
})
