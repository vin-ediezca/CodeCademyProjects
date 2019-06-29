function getSleepHours(day) {
  day = day.toLowerCase();

  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Invalid input'
      break;
  }
}

function getActualSleepHours() {
  var sleepSum = 0;

  sleepSum += getSleepHours('monday');
  sleepSum += getSleepHours('tuesday');
  sleepSum += getSleepHours('wednesday');
  sleepSum += getSleepHours('thursday');
  sleepSum += getSleepHours('friday');
  sleepSum += getSleepHours('saturday');
  sleepSum += getSleepHours('sunday');

  return sleepSum;
}

function getIdealSleepHours(hours) {
  const idealHours = hours;
  return idealHours * 7; 
}

function calculateSleepDebt(hours) {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(hours);

  if (actualSleepHours === idealSleepHours) {
    console.log(`You had a perfect amount of sleep. Total of ${actualSleepHours} hours this week.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You had more sleep than needed. Normal sleep is ${idealSleepHours} hours a week and yours is ${actualSleepHours} hours. ${actualSleepHours - idealSleepHours} hour/s over.`);
  } else {
    console.log(`You had less sleep this week. Ideal sleep is ${idealSleepHours} hours. Yours is ${actualSleepHours} hours only. ${idealSleepHours - actualSleepHours} hour/s less.`);
  }
}

calculateSleepDebt(9);