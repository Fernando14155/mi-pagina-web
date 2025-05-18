document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo de productos
    const products = [
        { id: 1, name: "Camiseta", price: 20, img: "https://via.placeholder.com/100?text=Camiseta" },
        { id: 2, name: "Pantalones", price: 35, img: "https://via.placeholder.com/100?text=Pantalones" },
        { id: 3, name: "Zapatos", price: 50, img: "https://via.placeholder.com/100?text=Zapatos" },
        { id: 4, name: "Gorra", price: 15, img: "https://via.placeholder.com/100?text=Gorra" }
    ];

    let cart = [];

    const productListEl = document.getElementById('product-list');
    const cartCountEl = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Función para actualizar el contador del carrito en el sidebar
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = `Productos: ${totalItems}`;
    }

    // Función para renderizar productos
    function renderProducts() {
        productListEl.innerHTML = "";
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}" />
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Agregar al carrito</button>
            `;
            productListEl.appendChild(card);
        });
    }

    // Función para agregar producto al carrito
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartCount();
    }

    // Función para renderizar carrito en el modal
    function renderCart() {
        cartItemsEl.innerHTML = "";
        if(cart.length === 0){
            cartItemsEl.innerHTML = "<li>El carrito está vacío.</li>";
            cartTotalEl.textContent = "";
            checkoutBtn.style.display = "none";
            return;
        }
        checkoutBtn.style.display = "block";
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity}`;
            const priceSpan = document.createElement('span');
            priceSpan.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            li.appendChild(priceSpan);
            cartItemsEl.appendChild(li);
        });
        cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Eventos

    // Agregar al carrito desde botón en productos
    productListEl.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        }
    });

    // Mostrar modal carrito
    viewCartBtn.addEventListener('click', () => {
        renderCart();
        cartModal.classList.remove('hidden');
    });

    // Cerrar modal carrito
    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // Cerrar modal si haces click fuera del contenido
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    // Simulación de pago
    checkoutBtn.addEventListener('click', () => {
        alert('Gracias por tu compra!');
        cart = [];
        updateCartCount();
        renderCart();
        cartModal.classList.add('hidden');
    });

    // Inicializamos
    renderProducts();
    updateCartCount();
});
