// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized for all pages

  /* coverimg */
  $('.coverimg').each(function () {
    var imgpath = $(this).find('img');
    $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
    imgpath.hide();
  });

  $('.accordion-toggle').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.accordion-list').find('.accordion-content').toggleClass('show')
  })
});

$(document).on('page:init', '.page[data-name="splash"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/landing/');
  }, 3000);
})
$(document).on('page:init', '.page[data-name="thankyouorder"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/home/');
  }, 3000);
})
$(document).on('page:init', '.page[data-name="landing"]', function (e) {
  var swiper1 = app.swiper.create(".swiper-intro", {
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: {
      el: '.pagination-intro'
    }
  });
});
$(document).on('page:init', '.page[data-name="verify"]', function (e) {
  document.getElementById('timer').innerHTML = '03' + ':' + '00';
  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
      return
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }

});



/* pwa app install */
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  deferredPrompt = e;
  return false;
});



$(document).on('page:init', '.page[data-name="home"]', function (e) {

  /* pwa app install */
  $('#addtohome').on('click', function () {
    if (deferredPrompt !== undefined) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {

        if (choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }
        deferredPrompt = null;
      });
    }
  });

  /* filter sliders range picker for filter */
  var html5Slider = document.getElementById('rangeslider');
  noUiSlider.create(html5Slider, {
    start: [100, 200],
    connect: true,
    range: {
      'min': 0,
      'max': 500
    }
  });

  var inputNumber = document.getElementById('input-number');
  var select = document.getElementById('input-select');

  html5Slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
      inputNumber.value = value;
    } else {
      select.value = Math.round(value);
    }
  });

  select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });

  /* carousel */
  var swiper1 = new Swiper(".categoriesswiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
  });

  var swiper2 = new Swiper(".offerslides", {
    slidesPerView: "1",
    spaceBetween: 10,
    pagination: {
      el: ".pagination-offerslides",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper3 = new Swiper(".trendingslides", {
    slidesPerView: "auto",
    spaceBetween: 26,
  });

  var swiper4 = new Swiper(".shopslides", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
})

$(document).on('page:init', '.page[data-name="stats"]', function (e) {

  // Range Picker
  calendarRange = app.calendar.create({
    inputEl: '#daterange',
    rangePicker: true
  });

  $('.daterange-btn').on('click', function () {
    $('#daterange').click();
  });

  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 50);
  }
  var areachart = document.getElementById('areachart').getContext('2d');
  var gradient = areachart.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, '#FF1C52');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
  var myareachartCofig = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: gradient,
        borderColor: '#FF1C52',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true
        },
        x: {
          color: '#666666',
        }
      }
    }
  }
  var myAreaChart = new Chart(areachart, myareachartCofig);

  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart.update();
  }, 2000);


  /* Progress circle  */
  var progressCircles = new ProgressBar.Circle(progressCircle1, {
    color: '#52E5A5',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#52E5A5', width: 10 },
    to: { color: '#52E5A5', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles.text.style.fontSize = '12px';
  progressCircles.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles3 = new ProgressBar.Circle(progressCircle3, {
    color: '#FFC400',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FFC400', width: 10 },
    to: { color: '#FFC400', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles3.text.style.fontSize = '12px';
  progressCircles3.animate(0.60);  // Number from 0.0 to 1.0

  var progressCircles2 = new ProgressBar.Circle(progressCircle2, {
    color: '#FF1C52',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FF1C52', width: 10 },
    to: { color: '#FF1C52', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles2.text.style.fontSize = '12px';
  progressCircles2.animate(0.85);  // Number from 0.0 to 1.0


})


$(document).on('page:init', '.page[data-name="profile"]', function (e) {
  /* swiper carousel summary blocks */
  var swiper1 = app.swiper.create(".swipersummary", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });
})

$(document).on('page:init', '.page[data-name="shophome"]', function (e) {
  /* swiper carousel categories */
  var swiper1 = app.swiper.create(".swipercategory", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel projects */
  var swiper2 = app.swiper.create(".swipertrending", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });


})
$(document).on('page:init', '.page[data-name="product"]', function (e) {
  /* swiper carousel projects */
  var swiper5 = new Swiper(".imageswiper", {
    slidesPerView: "1",
    spaceBetween: 12,
    pagination: {
      el: ".imageswiper-pagination",
    },
  });
  var swiper6 = new Swiper(".shopslides", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });

  var swiper7 = new Swiper(".offerslides", {
    slidesPerView: "1",
    spaceBetween: 10,
    pagination: {
      el: ".pagination-offerslides",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper8 = new Swiper(".trendingslides", {
    slidesPerView: "auto",
    spaceBetween: 26,
  });

  /* Progress circle  */
  var progressCircles4 = new ProgressBar.Circle(progressCircle4, {
    color: '#52E5A5',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#52E5A5', width: 10 },
    to: { color: '#52E5A5', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles4.text.style.fontSize = '12px';
  progressCircles4.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles5 = new ProgressBar.Circle(progressCircle5, {
    color: '#FFC400',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FFC400', width: 10 },
    to: { color: '#FFC400', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles5.text.style.fontSize = '12px';
  progressCircles5.animate(0.60);  // Number from 0.0 to 1.0

  var progressCircles6 = new ProgressBar.Circle(progressCircle6, {
    color: '#FF1C52',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FF1C52', width: 10 },
    to: { color: '#FF1C52', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  progressCircles6.text.style.fontSize = '12px';
  progressCircles6.animate(0.85);  // Number from 0.0 to 1.0
})
