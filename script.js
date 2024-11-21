// Example product data (10 products)
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        image: "https://via.placeholder.com/250x150?text=Product+1",
        price: "$29.99",
        rating: 4.5
    },
    {
        id: 2,
        name: "Smartphone Case - iPhone 14",
        image: "https://via.placeholder.com/250x150?text=Product+2",
        price: "$15.99",
        rating: 4.0
    },
    {
        id: 3,
        name: "Electric Toothbrush",
        image: "https://via.placeholder.com/250x150?text=Product+3",
        price: "$39.99",
        rating: 4.7
    },
    {
        id: 4,
        name: "Laptop Sleeve - 15.6 inch",
        image: "https://via.placeholder.com/250x150?text=Product+4",
        price: "$12.99",
        rating: 4.2
    },
    {
        id: 5,
        name: "Portable Power Bank",
        image: "https://via.placeholder.com/250x150?text=Product+5",
        price: "$19.99",
        rating: 4.3
    },
    {
        id: 6,
        name: "4K Smart TV - 55 inch",
        image: "https://via.placeholder.com/250x150?text=Product+6",
        price: "$499.99",
        rating: 4.8
    },
    {
        id: 7,
        name: "Gaming Mouse",
        image: "https://via.placeholder.com/250x150?text=Product+7",
        price: "$29.99",
        rating: 4.6
    },
    {
        id: 8,
        name: "Bluetooth Smart Watch",
        image: "https://via.placeholder.com/250x150?text=Product+8",
        price: "$59.99",
        rating: 4.4
    },
    {
        id: 9,
        name: "Noise-Cancelling Headphones",
        image: "https://via.placeholder.com/250x150?text=Product+9",
        price: "$99.99",
        rating: 4.9
    },
    {
        id: 10,
        name: "Home Security Camera",
        image: "https://via.placeholder.com/250x150?text=Product+10",
        price: "$49.99",
        rating: 4.3
    }
];

// Helper function to update count in the navbar
function updateCounts() {
    const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;
    const wishlistCount = JSON.parse(localStorage.getItem('wishlist'))?.length || 0;
    document.getElementById('cart-count').textContent = `Cart: ${cartCount}`;
    document.getElementById('wishlist-count').textContent = `Wishlist: ${wishlistCount}`;
}

// Add product to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
    }
}

// Add product to wishlist
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateCounts();
    }
}

// Function to render products dynamically
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ""; // Clear the grid

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.setAttribute('data-id', product.id);

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-rating">⭐ ${product.rating}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="add-to-wishlist">Add to Wishlist</button>
        `;

        // Attach event listeners
        const addToCartBtn = productDiv.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => addToCart(product.id));

        const addToWishlistBtn = productDiv.querySelector('.add-to-wishlist');
        addToWishlistBtn.addEventListener('click', () => addToWishlist(product.id));

        productGrid.appendChild(productDiv);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCounts();
});
