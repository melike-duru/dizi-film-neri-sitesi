const ucCizgi = document.querySelector("#hamburger-ac");
const xIsareti = document.querySelector("#menu-kapat");
const sagMenu = document.querySelector("#yan-menu");

ucCizgi.addEventListener("click" , function() {
    sagMenu.classList.remove("gizli");
});

xIsareti.addEventListener("click" ,function() {
    sagMenu.classList.add("gizli"); 
});

const girisSayfasi = document.querySelector("#giris-sayfasi");
const kayitSayfasi = document.querySelector("#kayit-sayfasi");
const hesapAcma = document.querySelector("#hesap-butonu");
const girisYapma = document.querySelector("#giris-butonu");

if( hesapAcma && girisYapma) {

hesapAcma.addEventListener("click" , function () {
    kayitSayfasi.classList.remove("gizli");
    girisSayfasi.classList.add("gizli");
});

girisYapma.addEventListener("click" , function() {
    kayitSayfasi.classList.add("gizli");
    girisSayfasi.classList.remove("gizli");
});
}

const kayitFormu = document.querySelector("#kayit-formu");

if(kayitFormu) {
    
    kayitFormu.addEventListener("submit" , function(e) {
        e.preventDefault();
        const kullaniciAdi = document.querySelector("#kullanici-adi").value;
        const emailAdresi2 = document.querySelector("#email-adresi-2").value;
        const sifre2 = document.querySelector("#sifre-2").value;
        const sifreDogrulama = document.querySelector("#sifre-dogrulama").value;

    if(sifre2!=sifreDogrulama) {
    alert("Şifreleriniz uyuşmuyor!");
    return; }

    if(sifre2==sifreDogrulama) {
        const yeniKullanici = {kullaniciAdi,emailAdresi2,sifre2};
        localStorage.setItem("kullanici", JSON.stringify(yeniKullanici));
        alert("Kayıt başarılı yeni hesabınızla giriş yapabilirsiniz."); }
        kayitFormu.reset();
         kayitSayfasi.classList.add("gizli");
        girisSayfasi.classList.remove("gizli");
    })
}

const girisFormu = document.querySelector("#giris-formu");

if(girisFormu) {

    girisFormu.addEventListener("submit" , function(e) {
    e.preventDefault();
    const emailAdresi = document.querySelector("#email-adresi").value;
    const sifre = document.querySelector("#sifre").value;
    const kayitliKullanici = JSON.parse(localStorage.getItem("kullanici"));
    if(kayitliKullanici && emailAdresi==kayitliKullanici.emailAdresi2 && sifre==kayitliKullanici.sifre2) {
        alert("Giriş Başarılı Hoşgeldiniz," + kayitliKullanici.kullaniciAdi); }
    else {
        alert("E-posta adresi ya da şifre hatalı"); }
    });
}
