const WHATSAPP_NUMBER = "5493888650351";

// Carga de imágenes en la carpeta 'images/'
// Puedes ir agregando los nombres exactos de los archivos que subas
const images = [
  "WhatsApp Image 2026-07-23 at 13.33.22.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.26.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.27 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.27.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.28 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.28.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.29.jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.30 (1).jpeg",
  "WhatsApp Image 2026-07-23 at 13.33.30.jpeg"
];

const catalogContainer = document.getElementById("catalog");

images.forEach((imgFileName, index) => {
  const imagePath = `images/${imgFileName}`;
  const productNum = index + 1;
  const message = encodeURIComponent(`Hola! Me interesa realizar una consulta sobre el producto #${productNum} de su catálogo.`);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${imagePath}" alt="Producto ${productNum}" class="product-image" onclick="openModal('${imagePath}')">
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
