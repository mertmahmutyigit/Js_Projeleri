const sgnEposta = document.getElementById("sgnInput");
const sgnSifre = document.getElementById("sgnPasword");
const sgnKayit = document.getElementById("sgnButton");
const lgnEposta=document.getElementById("lgnInput");
const lgnSifre=document.getElementById("lgnPasword");
const lgnGiriş=document.getElementById("lgnButton");
const uyariDiv = document.getElementById("uyari");

lgnGiriş.addEventListener('click',giris);
sgnKayit.addEventListener('click', kayit);

function kayit() {
    const eposta = sgnEposta.value.trim();
    const sifre = sgnSifre.value.trim();

    if (eposta !== "" && sifre !== "") {
        if (localStorage.getItem(eposta) === null) {
            localStorage.setItem(eposta, sifre);
            showUyari("Kayıt başarılı!", "green");
            
        } else {
            showUyari("Lütfen giriş yapınız, kullanıcı kaydınız var!", "red");
        }
    } else {
        showUyari("Lütfen e-posta ve şifreyi giriniz!", "red");

    }
    sgnEposta.value="";
    sgnSifre.value="";
}

// Uyarıyı göstermek için fonksiyon
function showUyari(mesaj, renk) {
    uyariDiv.innerText = mesaj;
    uyariDiv.style.backgroundColor = renk;
    uyariDiv.style.display = "block";

    // opacity geçişini başlat
    setTimeout(() => {
        uyariDiv.classList.add("gorunur");
    }, 10); // küçük gecikme, tarayıcıya render fırsatı verir

    // 2 saniye sonra kaybolsun
    setTimeout(() => {
        uyariDiv.classList.remove("gorunur");
        // transition bittiğinde display:none yap
        setTimeout(() => {
            uyariDiv.style.display = "none";
        }, 1000); // CSS transition süresi = 1s
    }, 2000);
}


function giris() {
    const eposta = lgnEposta.value.trim();
    const sifre = lgnSifre.value.trim();

    if (eposta !== "" && sifre !== "") {
        const kayitliSifre = localStorage.getItem(eposta); // epostaya karşılık şifre
        if (kayitliSifre !== null && kayitliSifre === sifre) {
            // Giriş başarılı → index2.html sayfasına yönlendir
            window.location.href = "index2.html";
        } else {
            showUyari("Hatalı e-posta veya şifre!", "red");
        }
    } else {
        showUyari("Lütfen e-posta ve şifreyi giriniz!", "red");
    }
}
