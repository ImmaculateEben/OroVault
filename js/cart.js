// ============================================================
// Watch Store — Cart Module (localStorage)
// ============================================================

const CART_KEY = 'watchstore_cart';

function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === parseInt(productId));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: parseInt(productId), qty });
  }
  saveCart(cart);
  showToast('Added to cart');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== parseInt(productId));
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === parseInt(productId));
  if (item) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    item.qty = qty;
    saveCart(cart);
  }
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}
