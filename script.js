$('#form').on('submit', () => {
  function initializeTimer() {
    const sessionTime = $('#session').val();
    const breakTime = $('#break').val();
    displayTime(sessionTime);
    startTimer(sessionTime);
  }

  function displayTime(sessionTime) {
    $('#time').text(`${sessionTime}:00`);
  }

  function startTimer(sessionTime) {
    setInterval(function() {
      console.log(sessionTime - 1);
    }, 1000);
  }
  initializeTimer();
});
