let currentDayDisplay = document.getElementById('currentDay')

let thisDay = moment().format('LL');

currentDayDisplay.textContent = thisDay