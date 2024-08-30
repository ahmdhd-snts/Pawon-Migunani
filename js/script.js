// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

document.querySelectorAll(".item-detail-button").forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Data produk
    const productData = [
      {
        image: "img/products/bestseller-1.JPG",
        title: "Kue Ulang Tahun",
        description:
          "ukuran 20cm + tulisan + lilin kecil  (note : toping buah menyesuaikan stock buah yg ada).",
        price: "IDR 120K",
        stars: 5,
      },
      {
        image: "img/products/bestseller-2.JPG",
        title: "Cromboloni",
        description: "varian rasa coklat, macha, dan vanila + topping.",
        price: "IDR 15K",
        stars: 5,
      },
      {
        image: "img/products/bestseller-3.JPG",
        title: "Donat Manis",
        description:
          "varian rasa vanila, coklat, greentea, tiramisu, stroberi, taro + topping.",
        price: "4k/pcs ",
        discountPrice: "45rb/box isi 12",
        stars: 5,
      },
    ];

    // Mengambil data produk berdasarkan index
    const product = productData[index];

    // Update konten modal
    document.getElementById("modal-product-image").src = product.image;
    document.getElementById("modal-product-title").textContent = product.title;
    document.getElementById("modal-product-description").textContent =
      product.description;
    document.getElementById("modal-product-price").textContent = product.price;
    document.getElementById("modal-product-discount-price").textContent =
      product.discountPrice;

    // Generate stars
    const starsContainer = document.getElementById("modal-product-stars");
    starsContainer.innerHTML = "";
    for (let i = 0; i < product.stars; i++) {
      starsContainer.innerHTML +=
        '<i data-feather="star" class="star-full"></i>';
    }
    feather.replace(); // Update feather icons

    // Menampilkan modal
    document.getElementById("item-detail-modal").style.display = "block";
  });
});

// Menutup modal
document.querySelector(".close-icon").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("item-detail-modal").style.display = "none";
});

//FAQ Section
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const faqItem = item.parentElement;

    // Toggle the active class
    faqItem.classList.toggle("active");

    // Toggle the answer visibility
    const answer = faqItem.querySelector(".faq-answer");
    if (faqItem.classList.contains("active")) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
