function ChristmasCoutdown () {
    const christmasDate = new Date ("January 1, 2022 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

    const displayDays = Math.floor(diff/msInDays);
    const dayinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const dayinRussiaDisplay = dayinRussia (displayDays,['день', 'дня', 'дней']);
    document.querySelector('.days').innerHTML = `${displayDays} <br> ${dayinRussiaDisplay}`;


    const displayHours = Math.floor((diff%msInDays) / msInHours);
    const hourinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const hourinRussiaDisplay = hourinRussia (displayHours,['час', 'часа', 'часов']);
    document.querySelector('.hours').innerHTML = `${displayHours} <br> ${hourinRussiaDisplay}`;


    const displayMinutes = Math.floor((diff%msInHours) / msInMinutes);
    const minutesinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const minutesinRussiaDisplay = minutesinRussia (displayMinutes,['минута', 'минуты', 'минут']);
    document.querySelector('.minutes').innerHTML = `${displayMinutes} <br> ${minutesinRussiaDisplay}`;


    const displaySeconds = Math.floor((diff%msInMinutes) / msInSeconds);
    const secondsinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const secondsinRussiaDisplay = secondsinRussia (displaySeconds,['сенунда', 'секунды', 'секунд']);
    document.querySelector('.seconds').innerHTML = `${displaySeconds} <br> ${secondsinRussiaDisplay}`;



    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas(); 
    }

}

let timerID = setInterval(ChristmasCoutdown, 1000)

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'С НОВЫМ ГОДОМ!!!!'
    heading.classList.add('red');
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
        button.classList.toggle('btn-pause')
    }
    else {
        audio.pause();
        button.classList.toggle('btn-pause');
    }
})

const search = document.querySelector('.search');
const divs = document.querySelectorAll('.movieName');


search.addEventListener('keyup', function(event) {
  let word = event.target.value.toLowerCase().trim();
  
    divs.forEach (item => {
        item.querySelector('.itemMovie').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
        
    })
})




particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode":  "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

