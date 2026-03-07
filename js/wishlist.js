// ============================================================
// Watch Store — Wishlist Module (localStorage)
// ============================================================

const WISHLIST_KEY = 'watchstore_wishlist';

function getWishlist() {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistBadge();
}

function toggleWishlist(productId) {
  const list = getWishlist();
  const id = parseInt(productId);
  const index = list.indexOf(id);
  if (index > -1) {
    list.splice(index, 1);
    showToast('Removed from wishlist');
  } else {
    list.push(id);
    showToast('Added to wishlist');
  }
  saveWishlist(list);
  return index === -1; // true if added, false if removed
}

function isWishlisted(productId) {
  return getWishlist().includes(parseInt(productId));
}

function getWishlistCount() {
  return getWishlist().length;
}

function removeFromWishlist(productId) {
  let list = getWishlist();
  list = list.filter(id => id !== parseInt(productId));
  saveWishlist(list);
}

function updateWishlistBadge() {
  const badges = document.querySelectorAll('.wishlist-badge');
  const count = getWishlistCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}
