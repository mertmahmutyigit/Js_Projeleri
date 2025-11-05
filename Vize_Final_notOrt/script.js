// inputları seç
const vizeInput = document.querySelector(".vize input");
const finalInput = document.querySelector(".final input");
const sonucInput = document.querySelector(".sonuc input");
const hesaplaBtn = document.querySelector(".btn-warning");

// her inputa min-max kontrolü ekle
[vizeInput, finalInput].forEach(input => {
  input.addEventListener("input", () => {
    if (input.value > 100) input.value = 100;
    if (input.value < 0) input.value = 0;
  });
});

// hesapla butonuna tıklanınca ortalama hesapla
hesaplaBtn.addEventListener("click", () => {
  const vize = Number(vizeInput.value);
  const final = Number(finalInput.value);

  if (isNaN(vize) || isNaN(final)) {
    sonucInput.value = "Lütfen değer girin";
    return;
  }

  const ortalama = vize * 0.4 + final * 0.6; // vize %40, final %60
  sonucInput.value = "Ortalama: " + ortalama.toFixed(2);
});

