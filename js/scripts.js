document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#fff',
      lineColor: '#fff',
      density: 12000,
      particleRadius: 7,
      minSpeedX: 0.1,
      directionX: 'center',
      lineWidth: 2
    });
}, false);