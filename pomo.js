let flag;
let timerID;
let sessionTime;
let breakTime;
let onBreak = false;
const beep = $('#beep')[0];

$('.toggle').on('click', '.toggle__btn--start', function(event) {
  toggleButton($(this), true);
  initializeTimer();
});

$('.toggle').on('click', '.toggle__btn--stop', function(event) {
  let userInput = confirm('This will reset the clock! Are you sure?');
  if (userInput) {
    clearInterval(timerID);
    toggleButton($(this), false);
    $('#time').text($('#session').val() + ':00');
  }
});

function toggleButton(element, stopStatus) {
  element.toggleClass('toggle__btn--start');
  element.toggleClass('toggle__btn--stop');
  if (stopStatus) {
    element.val('Stop');
  } else {
    element.val('Start');
  }
}

function initializeTimer() {
  sessionTime = parseInt($('#session').val() * 60);
  breakTime = parseInt($('#break').val() * 60);
  displayTime(sessionTime);
  startTimer(sessionTime);
}

function displayTime(timeInSeconds) {
  minutes = Math.floor(timeInSeconds / 60).toString();
  seconds = (timeInSeconds % 60).toString();
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  $('#time').text(`${minutes}:${seconds}`);
}

function startTimer(timeInSeconds) {
  timerID = setInterval(decrementTime, 10);

  function decrementTime() {
    flag = true;
    if (timeInSeconds === 0) {
      beep.play();
      clearInterval(timerID);
      displayTime(timeInSeconds);
      if (!onBreak) {
        onBreak = true;
        $('.timer__status').text('Break:');
        startTimer(breakTime);
      } else {
        $('.toggle__btn').toggleClass('toggle__btn--start');
        $('.toggle__btn').toggleClass('toggle__btn--stop');
        $('.toggle__btn').val('Start');
        $('.timer__status').text('Session:');
        onBreak = false;
      }
    } else {
      console.log(timeInSeconds);
      timeInSeconds--;
      displayTime(timeInSeconds);
    }
  }
}
