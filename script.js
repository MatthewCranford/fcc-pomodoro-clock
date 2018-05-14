let flag;

$('#form').on('submit', event => {
  event.preventDefault();

  // if (flag) {
  //   clearInterval(timer);
  //   flag = false;
  //   console.log('Cleared');
  // }

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
    if (flag) {
      clearInterval(timer);
    }
    const timer = setInterval(decrementTime, 1000);
    function decrementTime() {
      flag = true;
      if (totalSeconds === 0) {
        clearInterval(timer);
      }
      console.log(totalSeconds);
      totalSeconds--;
      displayTime(totalSeconds);
    }
  }

  initializeTimer();
});
