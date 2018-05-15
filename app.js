let flag;
let timerID;

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
  let totalSeconds = parseInt($('#session').val() * 60);
  const breakTime = $('#break').val();
  displayTime(totalSeconds);
  startTimer(totalSeconds);
}

function displayTime(totalSeconds) {
  minutes = Math.floor(totalSeconds / 60).toString();
  seconds = (totalSeconds % 60).toString();
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  $('#time').text(`${minutes}:${seconds}`);
}

function startTimer(totalSeconds) {
  timerID = setInterval(decrementTime, 1000);

  function decrementTime() {
    flag = true;
    if (totalSeconds === 0) {
      clearInterval(timerID);
      displayTime(totalSeconds);
    } else {
      console.log(totalSeconds);
      totalSeconds--;
      displayTime(totalSeconds);
    }
  }
}
