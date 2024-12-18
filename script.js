// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua elemen tautan navigasi di dalam <nav>
    const navLinks = document.querySelectorAll('nav a');
    // Mendapatkan semua elemen dengan kelas 'section'
    const sections = document.querySelectorAll('.section');

    // Fungsi untuk menampilkan section tertentu berdasarkan ID
    function showSection(sectionId) {
        // Menyembunyikan semua section dengan menghapus kelas 'active'
        sections.forEach(section => {
            section.classList.remove('active');
        });
        // Mencari section dengan ID yang sesuai
        const targetSection = document.getElementById(sectionId);
        // Jika section ditemukan, tambahkan kelas 'active' untuk menampilkannya
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Menambahkan event listener pada setiap tautan navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default dari tautan (tidak langsung meloncat)
            // Mendapatkan ID target dari atribut href (tanpa simbol '#')
            const targetId = this.getAttribute('href').substring(1);
            // Memanggil fungsi untuk menampilkan section yang sesuai
            showSection(targetId);

            // Menggulir halaman secara mulus ke atas (smooth scroll)
            window.scrollTo({
                top: 0, // Posisi scroll ke atas
                behavior: 'smooth' // Efek gulir halus
            });
        });
    });

    // Menampilkan section dengan ID 'home' sebagai default saat halaman dimuat
    showSection('home');
});
