$('#form').on('submit', event => {
  event.preventDefault();
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
    const timer = setInterval(decrementTime, 1000);

    function decrementTime() {
      if (totalSeconds === 0) {
        clearInterval(timer);
      }
      console.log(totalSeconds);
      totalSeconds--;
      displayTime(totalSeconds);
    }
  }
  reset;
  initializeTimer();
});
