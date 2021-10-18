// right-fixed on scroll

var scrollPosition = window.scrollY;
var rightBox = document.querySelector(".right-box");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  // if (scrollPosition >= 100) {
  //   rightBox.classList.add('active');
  // } else {
  //   rightBox.classList.remove('active');
  // }
});

// timer countdown

const countDownClock = (number = 100, format = "seconds") => {
  const d = document;
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

countDownClock(30, "minutes");

const sectionOne = document.querySelector("#observer");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "10px",
};

const observer = new IntersectionObserver((entries, observer) => {
  const interSecting = entries[0].isIntersecting;
  if (interSecting) {
    rightBox.classList.remove("active");
  } else {
    rightBox.classList.add("active");
  }
});

observer.observe(sectionOne);

// bottom to top button

const myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const popupCounter = (number = 100, format = "seconds") => {
  const d = document;

  const hoursElement = d.querySelector(".hour-time");
  const minutesElement = d.querySelector(".minute-time");
  const secondsElement = d.querySelector(".second-time");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    hoursElement.textContent =  +Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};


popupCounter (20, "hours");




const card_popup = document.querySelector(".popup-card");
const close_btn = document.querySelector(".close");
const current_btn = document.querySelector(".current-page");
const overlay = document.querySelector(".overlay");
const overlay_show = document.querySelector(".overlay-show");

window.addEventListener("load", function () {
  popupShow();
});

function popupShow(time) {
  setTimeout(function () {
    card_popup.classList.add("show");
    overlay.classList.add("overlay-show");
  }, time);
}

close_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");

});

current_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
  
});

document.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
  
});





