var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.globalCompositeOperation = 'destination-over';
canvas.style.backgroundColor = "black";

var mouse = {
    x : undefined,
    y : undefined
}

var maxRadius = 60;

window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x
        mouse.y = event.y
    }
);

window.addEventListener('resize', 
    function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


});


    function Circle(x, y, dx, dy, radius, minRadius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = this.minRadius;
        var color = 'white';
    
        this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = color
            c.stroke();
            c.fillStyle = color;
            c.fill();
        }
    
        this.update = function(){
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                color = '#' + randomColor;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                color = '#' + randomColor;
            }
           
            this.x += this.dx;
            this.y += this.dy;
            
            if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if(this.radius < maxRadius){
                    this.radius+=1
                }    
            }
            else{
                if(this.radius > minRadius){
                    this.radius-=1
                } 

            }
    
            this.draw();
    
        }
    }
    
var circleArray = [];

for(var i = 0; i < 600; i++){

    var x = Math.random() * (innerWidth - radius * 15) + radius;
    var y = Math.random() * (innerHeight - radius * 15) + radius;
    var dy = (Math.random() - 0.5) * 6;
    var dx = (Math.random() - 0.5) * 6;
    var radius = Math.random() * 3 + 1;
    var minRadius = radius;

    var circle = new Circle(x, y, dx, dy, radius, minRadius);
    circleArray.push( circle);

}
function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i ++){
        circleArray[i].update();
    }
}

animate();




