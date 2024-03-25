var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext('2d');
c.fillStyle = '#fa1c3a'
c.fillRect(400, 100, 200, 200)
c.fillStyle = '#fa7c3a'
c.fillRect(200, 300, 200, 200) 

// linha
c.strokeStyle= '#fa9c3a'
c.beginPath();
c.moveTo(0,0);
c.lineTo(0,100);
c.lineTo(100,100);
c.lineTo(100,0);
c.lineTo(0,0);

c.stroke();

// arc / circle
c.strokeStyle = '#000000'
for(let i = 0; i < 100; i++){
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();

}

