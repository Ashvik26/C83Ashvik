canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_positionmouseX, last_positionmouseY;
var last_positiontouchX, last_positiontouchY;

canvas.addEventListener( "mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value ;

width=document.getElementById("width").value ;
mouseEvent="down";
}
canvas.addEventListener( "mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="up";
}
canvas.addEventListener( "mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="leave";
}
canvas.addEventListener( "mousemove",my_mousemove);
function my_mousemove(e){
    console.log(e);
    current_positionmouseX=e.clientX-canvas.offsetLeft;
    current_positionmouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="down"){
 ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_positionmouseX, last_positionmouseY);
ctx.lineTo(current_positionmouseX, current_positionmouseY);
ctx.stroke();

    }
last_positionmouseX=current_positionmouseX;
last_positionmouseY=current_positionmouseY;
}
function ca(){

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener( "touchstart",my_touchstart);
function my_touchstart(e){
color=document.getElementById("color").value ;
width=document.getElementById("width").value ;
last_positiontouchX=e.touches[0].clientX-canvas.offsetLeft;
last_positiontouchY=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener( "touchmove",my_touchmove);
function my_touchmove(e){
    console.log(e);
    current_positiontouchX=e.touches[0].clientX-canvas.offsetLeft;
    current_positiontouchY=e.touches[0].clientY-canvas.offsetTop;
    
 ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_positiontouchX, last_positiontouchY);
ctx.lineTo(current_positiontouchX, current_positiontouchY);
ctx.stroke();


last_positiontouchX=current_positiontouchX;
last_positiontouchY=current_positiontouchY;
}



