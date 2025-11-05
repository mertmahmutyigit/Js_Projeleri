const number=document.getElementById("inp");
const button=document.getElementById("btn");
const result=document.getElementById("resault");
const msg=document.getElementById("alert");
const newbtn=document.getElementById("btn2");

let rand=0;
random();
function random(){
rand=Math.floor(Math.random() * 1000);
console.log("Tutulan sayı : "+rand);
}

newbtn.addEventListener('click',newthm);
button.addEventListener("click",thm);

function newthm(){
    random();
    number.value="";
    result.value="-------";

}

function thm(){
const num=Number(number.value);

if(num!==null){
    console.log(num);
    if(num==rand){
        result.value="Doğru Bildiniz Tutulan Sayı :"+num;
        
    }
    
    if(num>rand){
        result.value="Büyük Değer Girdiniz";
    }

     if(num<rand){
         result.value="Küçük Değer Girdiniz";
    }

}

number.value="";


}