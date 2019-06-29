const getUserChoice = function(userInput) {
  userInput =  userInput.toLowerCase();
  
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    return `${userInput} is not a valid input.`;
  }
}

const getComputerChoice = function() {
  var random = Math.floor(Math.random() * 3);
  
  switch(random) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Internal Error!';
      break;
  }
}

const determineWinner = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } else if (userChoice === 'bomb') {
    return 'User won the game!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won the game!'
    } else {
      return 'User won the game!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won the game!'
    } else {
      return 'User won the game!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won the game!'
    } else {
      return 'User won the game!'
    }
  }
}

const playGame = () => {
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  
  console.log(`User: ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();