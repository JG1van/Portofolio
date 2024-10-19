// Mendapatkan elemen tombol next dan prev
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

// Mendapatkan elemen slider dan daftar gambar di dalamnya
let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".list");

// Fungsi untuk tombol next
nextBtn.onclick = function () {
  moveSlider("next");
};

// Fungsi untuk tombol prev
prevBtn.onclick = function () {
  moveSlider("prev");
};

// Slide otomatis
let slideInterval = setInterval(function () {
  moveSlider("next");
}, 5000); // 5000 milidetik = 5 detik

function moveSlider(direction) {
  // Mendapatkan daftar gambar di dalam slider
  let sliderItems = sliderList.querySelectorAll(".item");

  if (direction === "next") {
    // Memindahkan gambar pertama ke akhir
    sliderList.appendChild(sliderItems[0]);
    // Menambahkan kelas 'next' untuk animasi
    slider.classList.add("next");
  } else {
    // Memindahkan gambar terakhir ke awal
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    // Menambahkan kelas 'prev' untuk animasi
    slider.classList.add("prev");
  }

  // Menghapus kelas animasi setelah animasi selesai
  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true } // Hapus event listener setelah dipanggil sekali
  );
}
