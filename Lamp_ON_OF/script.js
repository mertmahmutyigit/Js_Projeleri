const on=document.getElementById("on");
const of=document.getElementById("of");
const imgg=document.getElementById("imgg");

let mp3= new Audio("click.mp3")


on.addEventListener("click",()=>{
    mp3.play();
    imgg.src="on.jpg";
});

of.addEventListener("click",()=>{
    mp3.play();
    imgg.src="of.jpg";
});
