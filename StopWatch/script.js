// Elemanları seçiyoruz
const tensSpan = document.querySelector(".tens");
const secondsSpan = document.querySelector(".second");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnReset = document.querySelector(".btnReset");

let tens = 0;
let seconds = 0;
let interval; // setInterval referansı

// Start butonu
btnStart.addEventListener("click", () => {
    clearInterval(interval); // zaten varsa temizle
    interval = setInterval(startTimer, 10); // 10ms aralıkla çalıştır
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
    tens++; // her 10ms’de 1 artar
    if (tens > 99) { // 100 tens = 1 saniye
        tens = 0;
        seconds++;
    }

    // Görünümü güncelle
    tensSpan.textContent = tens < 10 ? "0" + tens : tens;
    secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
}