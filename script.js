document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Menghentikan submit form agar halaman tidak ter-refresh

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        // Lakukan pengecekan email dan password yang sesuai
        if (email === "a@gmail.com" && password === "a") {
            // Redirect ke halaman setelah berhasil login
            window.location.href = "index.html";
        } else {
            // Tampilkan pesan kesalahan
            alert("Email atau password salah. Silakan coba lagi.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarNav = document.querySelector(".sidebar-nav");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        sidebarNav.classList.toggle("active");
    });
});

document.getElementById("logout-btn").addEventListener("click", function() {
    // Hapus sesi pengguna atau lakukan tindakan logout lainnya
  
    // Alihkan ke halaman login atau halaman lainnya
    window.location.href = "login.html";
  });
  