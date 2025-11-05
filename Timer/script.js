// Elemanları seçiyoruz
const tensSpan = document.querySelector(".tens");
const secondsSpan = document.querySelector(".second");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnReset = document.querySelector(".btnReset");
const secondvalue=document.getElementById("secondid");
const minuteid=document.getElementById("minuteid");
const warning=document.querySelector(".wrapper");


let tens ;
let seconds ;
console.log(tens+" "+seconds);
let interval; // setInterval referansı

// Start butonu
btnStart.addEventListener("click", () => {
 seconds = secondvalue.value;
 tens  = minuteid.value;
    clearInterval(interval); // zaten varsa temizle
    interval = setInterval(startTimer, 30); // 10ms aralıkla çalıştır
});

// Stop butonu
btnStop.addEventListener("click", () => {
    clearInterval(interval);
});

// Reset butonu
btnReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    tensSpan.textContent = "00";
    secondsSpan.textContent = "00";
});

// Kronometre fonksiyonu
function startTimer() {
    tens--; // her 10ms’de 1 artar
    if (tens < 0) { // 100 tens = 1 saniye
        tens = 60;
        seconds--;
    }

    if(seconds<0){

     warning.style.boxShadow= "0 0 25px 10px rgba(255, 0, 0, 1)";
        
        return;}

    // Görünümü güncelle
    tensSpan.textContent = tens < 10 ? "0" + tens : tens;
    secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
}