let flag;
let timerID;

$('.toggle').on('click', '.toggle__btn--start', function(event) {
  $(this).toggleClass('toggle__btn--stop');
  $(this).toggleClass('toggle__btn--start');
  $(this).val('Stop');
  initializeTimer();
});

$('.toggle').on('click', '.toggle__btn--stop', function(event) {
  let userInput = confirm('This will reset the clock! Are you sure?');
  if (userInput) {
    $('#time').text($('#session').val() + ':00');
    clearInterval(timerID);
    $(this).toggleClass('toggle__btn--start');
    $(this).toggleClass('toggle__btn--stop');
    $(this).val('Start');
  }
});

function toggleButton() {}

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
