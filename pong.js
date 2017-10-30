//Speed variable is declared globally as it is defined in setInterval) function
//and is called by setInterval() method to increase speed when ever user wishes to changes.
//top:50px;left:0px;     top:50px;
var speed;
//StartGame() intiates the game and and calls function move() based on speed using setInterval()
//to start moving the ball top and left style properties are used .
//Paddle's top and left are compared with ball's top and left to find whether ball
//made conatct with paddle.
//variables vx for direction in x direction,postive going left ,negative going top and vy for y direction,positive going down, positive going up.
//variable stikes to count no of strikes made  and maxScore to calculate to maximum score in the game.
//if ball touches the dotted line  game ends and everything will be resette to default.
function startGame() {
    document.getElementById("messages").innerHTML ="Game Starts!!";
    var ball = document.getElementById("ball");
    var paddle1=document.getElementById("paddle");
    var strike=0;
    var maxScore=document.getElementById("score").innerHTML;
    var left = parseInt(ball.getBoundingClientRect().left, 10);
    var top = parseInt(ball.getBoundingClientRect().top, 10);
    var vx = 1, vy = 1;
   var id = setInterval(move, speed);
    function move() {
        var paddleTop=parseInt(paddle1.style.top);
        var paddleleft=parseInt(paddle1.style.left);
        // var strikes= document.createElement('strikes')
        if (top  == 399 || top==-90 ) {
            vy = -vy;
        }
        if(left==0)
        {
            vx=-vx;
        }
        if(top+80>=paddleTop && top+80<=paddleTop+102 && left==paddleleft)
        {
            vx=-vx;
            strike++;
        }
        if(left>780){
            top=50;
            left=0;
            vx=vx;
            vy=vy;
            var newScore=strike;
            strike=0;
            if(newScore>maxScore){
                maxScore=newScore;
            }
            else{
                maxScore=maxScore;
            }
            document.getElementById("score").innerHTML =maxScore;
            document.getElementById("messages").innerHTML ="Game Over!";

            clearInterval(id);
        }
        top += vy;
        left += vx;
        ball.style.top = top + "px";
        ball.style.left = left + "px";
        document.getElementById("strikes").innerHTML =strike;
        document.getElementById("score").innerHTML =maxScore;
    }
}
// resetGame() function is used to reset everything to default.
function resetGame(){
    // clearInterval(id);
    document.getElementById("messages").innerHTML ="New Game!!";
    document.getElementById("ball").style.top = "50" + "px";
    document.getElementById("ball").style.left = "0" + "px";
    document.getElementById("strikes").innerHTML =0;
    document.getElementById("score").innerHTML =0;
}
//speed sets the pace of the ball moves, which will be used by setInterval() to call move() function.
function setSpeed(s)
{
if(s=="0")
{
    speed=15;
}
if(s=="1")
{
    speed=10;
}
if(s=="2"){
    speed=5;
}
}
function movePaddle(event) {
    var paddle=document.getElementById("paddle");
    document.addEventListener('mousemove', function catchaction(event) {
        var y=event.pageY;
        var paddle=document.getElementById("paddle");
        if(y<400 && y>1)
        {
            paddle.style.top = y + "px";
        }

    });
}
 //movePaddle() to move the paddle up and down in the court.
// an eventListner is added to mousemove and
//calling method catchaction() to capture the y-axis movement of the mouse and moving the paddle based on it.



