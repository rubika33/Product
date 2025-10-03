// Featured Carousel
let carouselIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide() {
    slides.forEach((slide, i) => slide.style.display = i === carouselIndex ? 'block' : 'none');
    carouselIndex = (carouselIndex + 1) % slides.length;
}
setInterval(showSlide, 3000);
showSlide();

// Products Data
const products = [
    { name: "IBM Laptop A", category: "laptop", price: 999.99, description: "High-end IBM laptop.", image: "https://via.placeholder.com/200?text=Laptop+A" },
    { name: "IBM Mobile B", category: "mobile", price: 499.99, description: "Latest IBM mobile device.", image: "https://via.placeholder.com/200?text=Mobile+B" },
    { name: "IBM Accessory C", category: "accessory", price: 49.99, description: "Durable accessory.", image: "https://via.placeholder.com/200?text=Accessory+C" },
    { name: "IBM Laptop D", category: "laptop", price: 1199.99, description: "Premium IBM laptop.", image: "https://via.placeholder.com/200?text=Laptop+D" },
    { name: "IBM Mobile E", category: "mobile", price: 699.99, description: "Smart IBM mobile.", image: "https://via.placeholder.com/200?text=Mobile+E" },
];

// Render Products
const container = document.getElementById('productContainer');

function renderProducts(productsArray) {
    container.innerHTML = '';
    productsArray.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.dataset.category = product.category;
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <p class="description">${product.description}</p>
            <button>Add to Cart</button>
        `;
        // Add Toast on Add to Cart
        card.querySelector('button').addEventListener('click', () => showToast(`${product.name} added to cart!`));
        container.appendChild(card);
    });
}
renderProducts(products);

// Search Functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter));
    renderProducts(filtered);
});

// Category Filter
const categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', () => {
    const selected = categoryFilter.value;
    const filtered = selected === 'all' ? products : products.filter(p => p.category === selected);
    renderProducts(filtered);
});

// Toast Function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}
