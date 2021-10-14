// right-fixed on scroll

var scrollPosition = window.scrollY;
var rightBox = document.querySelector('.right-box');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
      rightBox.classList.add('active');
    } else {
      rightBox.classList.remove('active');
    }

});


// timer countdown

const countDownClock = (number = 100, format = 'seconds') => {
    const d = document;
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);

    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);             
      }
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {  
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  
  countDownClock(30, 'minutes');


  const sectionOne = document.querySelector("#observer")
  const options = {
      root: null,
      threshold: 0,
      rootMargin: "-10px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries);
      console.log(observer)
  })

  observer.observe(sectionOne)