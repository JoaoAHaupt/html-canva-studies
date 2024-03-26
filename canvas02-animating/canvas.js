var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.globalCompositeOperation = 'destination-over'
canvas.style.backgroundColor = "black";

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    var color = 'white';

    this.draw = function(){
        c.beginPath();
        
        c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = color
        c.stroke();
        c.fillStyle = color;
        c.fill()
    }
    this. update = function(x,y){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            color = '#' + randomColor
        }
        if (this.y  > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            color = '#' + randomColor
        }
       
        this.x += this.dx;
        this.y += this.dy;
        this.draw();

    }
}
var circleArray = [];

for(var i = 0; i < 100; i++){

    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 6;
    var dx = (Math.random() - 0.5) * 6;
    var radius = 30;

    var circle = new Circle(x, y, dx, dy, radius);
    circleArray.push( circle)

}
    
console.log(circleArray)

animate();

function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i ++){
        circleArray[i].update();
    }
}


