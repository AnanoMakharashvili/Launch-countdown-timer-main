const getDays = document.getElementById("days");
const getHours = document.getElementById("hours");
const getMinutes = document.getElementById("minutes");
const getSeconds = document.getElementById("seconds");

const targetDate = new Date("2025-05-04T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    getDays.textContent = days.toString().padStart(2, "0");
    getHours.textContent = hours.toString().padStart(2, "0");
    getMinutes.textContent = minutes.toString().padStart(2, "0");
    getSeconds.textContent = seconds.toString().padStart(2, "0");
  } else {
    clearInterval(interval);
    document.querySelector(".countdown").textContent = "🎉 Time's Up! 🎉";
  }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();
