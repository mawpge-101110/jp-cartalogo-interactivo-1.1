const WHATSAPP_NUMBER = "5493888650351";

// Lista completa con todos los nombres de imágenes subidos
const images = [
  "WhatsApp Image 2026-07-23 at 13.33.22.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.26.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.27 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.27.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.28 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.28.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.29.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.30 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.30.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.31 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.31.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.32.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.33 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.33 (2).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.33.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.34 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.34.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.35 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.35 (2).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.35.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.36 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.36 (2).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.36.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.37.jpeg",
  "WhatsApp Image 2026-07-23 at 13.35.05 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.35.05.jpeg",
  "WhatsApp Image 2026-07-23 at 13.35.06.jpeg",
  "WhatsApp Image 2026-07-23 at 13.35.07.jpeg",
  "WhatsApp Image 2026-07-23 at 13.35.09.jpeg",
  "WhatsApp Image 2026-07-23 at 14.03.05.jpeg",
  "WhatsApp Image 2026-07-23 at 18.58.19.jpeg",
  "WhatsApp Image 2026-07-23 at 18.58.20.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.21.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.22.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.28 (1).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.28.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.29.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.30.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.31 (1).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.31 (2).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.31.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.32 (1).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.32 (2).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.32.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.33 (1).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.33 (2).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.33.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.34.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.56 (1).jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.56.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.57.jpeg",
  "WhatsApp Image 2026-08-05 at 18.58.58.jpeg"
];

const catalogContainer = document.getElementById("catalog");

images.forEach((imgFileName, index) => {
  const productNum = index + 1;
  const message = encodeURIComponent(`Hola! Me interesa realizar una consulta sobre el producto #${productNum} de su catálogo.`);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${imgFileName}" alt="Producto ${productNum}" class="product-image" onclick="openModal('${imgFileName}')">
    <div class="product-info">
      <h3>Producto #${productNum}</h3>
      <a href="${waUrl}" target="_blank" class="btn-whatsapp">Consultar por WhatsApp</a>
    </div>
  `;

  catalogContainer.appendChild(card);
});

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
