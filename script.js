const cursor = document.querySelector(".cursor");
let timeout;
// cursor movement
document.addEventListener("mousemove",(e)=>{
   let x=e.pageX;
   let y=e.pageY; 
   cursor.style.top=y+'px';
   cursor.style.left=x+'px';
   cursor.style.display='block';

// stop annimation
function mousestop(){
    cursor.style.display = 'none';
}
// hide animation
clearTimeout(timeout);
timeout =setTimeout(mousestop,1000);
});
// stop animation for going out of screen
document.addEventListener("mouseout",()=>{
    cursor.style.display = 'none';
});
