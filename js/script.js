$(document).ready(function () {
  "use strict";

  function animateElements() {
    $('.statistics-box').each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var color = $(this).find('.circle').attr('data-color');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          size: 76,
          thickness: 2,
          emptyFill: "#FBFBFC",
          fill: {
            color: color
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(0)).append(`<span class="percentage-sign">%<span/>`);
        }).stop();
      }
    });
  }
  animateElements();
  $(window).scroll(animateElements);

  const ctx = document.getElementById('homeworkChart').getContext('2d');
  const homeworkChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['19/5', '18/4', '17/6', '20/7', '22/7', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8'],
      datasets: [{
        type: 'bar',
        label: 'Adam',
        data: [60, 65, 30, 54, 10, 25, 30, 65, 10, 74, 30, 18, 55, 20, 88, 94, 66],
        borderColor: '#0575B6',
        backgroundColor: '#E5F0F7',
        borderWidth: 2,
        borderRadius: 15,
        borderSkipped: false,
        borderDash: [5, 5],
      }, {
        type: 'bar',
        label: 'Average',
        data: [65, 55, 30, 62, 10, 20, 30, 78, 85, 48, 75, 40, 10, 35, 25, 75, 45],
        fill: false,
        borderColor: '#333333',
        backgroundColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 15,
        borderSkipped: false,
        borderDash: [5, 5],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});