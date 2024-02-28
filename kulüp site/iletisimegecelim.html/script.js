function sayfaAc() {
    // Aynı dizindeki "secondPage.html" dosyasını aç
    window.location.href = "../index.html";
}
function showSweetAlert() {
  // Sweet Alert modalini göster
  Swal.fire({
      title: 'Mesaj Gönderildi',
      text: 'Mesajınız gönderildi, takip etmek için profilinizde taleplerim kısmına bakabilirsiniz. Üyeliğiniz yoksa e-posta adresinize dönüş yapılacaktır. Sayfa 30 saniye içerisinde kapanıp ana menüye atacaktır.',
      icon: 'success', // success, error, warning, info, veya question
      confirmButtonText: 'Tamam'
  });
}
