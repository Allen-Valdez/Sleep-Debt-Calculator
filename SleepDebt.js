//We will start off by inputting how many hours of sleep you want to get per day!
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 3;
    case 'tuesday':
      return 3;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 3;
    case 'friday':
      return 3;
    case 'saturday':
      return 3;
    case 'sunday':
      return 3;
  };
};

//Now this will add all the hours 
const getActualSleepHours = () => {
  const totalHours = getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday')
  return totalHours;
};

//This will be your ideal sleep hours for the whole week
const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7;
};

//This will check if you OWE some sleep and let you know
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed!')
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`Oh No! You didn't get enough sleep this week! You needed to sleep ${(idealSleepHours - actualSleepHours)} hour(s) more! Go get some rest you hard worker.`)
  } else {
    console.log('Something went wrong calculating your sleep!')
  }
}
//This will run the application
calculateSleepDebt();
