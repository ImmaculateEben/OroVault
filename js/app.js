// ============================================================
// Watch Store â€” Shared App Logic (Navbar, Footer, Toast, etc.)
// ============================================================

// â”€â”€ Init on Every Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateWishlistBadge();
  initScrollReveal();
});

// â”€â”€ Mobile Navigation Toggle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

// â”€â”€ Toast Notification â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showToast(message, type = 'success') {
  // Remove existing toasts
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  };

  const icons = {
    success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
    error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
    info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  };

  const toast = document.createElement('div');
  toast.className = `toast ${colors[type]} text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-sm font-medium`;
  toast.innerHTML = `${icons[type]}<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// â”€â”€ Scroll Reveal (Intersection Observer) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// â”€â”€ Star Rating HTML Generator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `<svg class="w-4 h-4 star-filled inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else if (i - rating < 1) {
      stars += `<svg class="w-4 h-4 star-filled inline" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#2A2A2A"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else {
      stars += `<svg class="w-4 h-4 star-empty inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    }
  }
  return stars;
}

// â”€â”€ Slug Generator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function productURL(product) {
  return `product.html?id=${product.id}&name=${generateSlug(product.name)}`;
}

// â”€â”€ Product Card HTML Generator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderProductCard(product) {
  const wishlisted = isWishlisted(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return `
    <div class="product-card bg-[var(--dark-light)] rounded-xl overflow-hidden group cursor-pointer relative">
      <div class="product-image relative aspect-square bg-[var(--dark-img)]">
        <a href="${productURL(product)}">
          <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy" onerror="handleImgError(this)">
        </a>
        <div class="product-overlay absolute inset-0 bg-black/40 flex items-center justify-center gap-3">
          <button onclick="event.stopPropagation(); addToCart(${product.id})" class="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--dark)] p-3 rounded-full transition-all font-semibold" title="Add to Cart">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
          </button>
          <button onclick="event.stopPropagation(); handleWishlistToggle(this, ${product.id})" class="wishlist-btn ${wishlisted ? 'active' : ''} bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all" title="Wishlist">
            <svg class="w-5 h-5" fill="${wishlisted ? '#E74C3C' : 'none'}" stroke="${wishlisted ? '#E74C3C' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
        </div>
        ${product.isNew ? '<span class="absolute top-3 left-3 bg-[var(--gold)] text-[var(--dark)] text-xs font-bold px-2 py-1 rounded">NEW</span>' : ''}
        ${discount > 0 ? `<span class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">-${discount}%</span>` : ''}
        ${!product.inStock ? '<span class="absolute bottom-3 left-3 bg-red-900/80 text-white text-xs font-bold px-2 py-1 rounded">OUT OF STOCK</span>' : ''}
      </div>
      <div class="p-4">
        <p class="text-[var(--gray)] text-xs uppercase tracking-wider mb-1">${product.brand}</p>
        <a href="${productURL(product)}">
          <h3 class="text-white font-medium text-sm mb-2 hover:text-[var(--gold)] transition-colors line-clamp-1">${product.name}</h3>
        </a>
        <div class="flex items-center gap-1 mb-2">
          ${renderStars(product.rating)}
          <span class="text-[var(--gray)] text-xs ml-1">(${product.reviews})</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[var(--gold)] font-bold text-lg">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="text-[var(--gray)] text-sm line-through">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// â”€â”€ Wishlist Toggle Handler â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function handleWishlistToggle(btn, productId) {
  const added = toggleWishlist(productId);
  const svg = btn.querySelector('svg');
  if (added) {
    btn.classList.add('active');
    svg.setAttribute('fill', '#E74C3C');
    svg.setAttribute('stroke', '#E74C3C');
  } else {
    btn.classList.remove('active');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
  }
}

// â”€â”€ Format Price â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function formatPrice(amount) {
  if (typeof formatCurrency === 'function') return formatCurrency(amount);
  return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

// â”€â”€ Image Fallback â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function handleImgError(img) {
  img.onerror = null;
  img.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect fill="%231A1A1A" width="600" height="600"/><text fill="%23555" font-family="sans-serif" font-size="18" x="50%25" y="48%25" text-anchor="middle">Image Unavailable</text><text fill="%23C9A84C" font-family="serif" font-size="32" x="50%25" y="56%25" text-anchor="middle">OroVault</text></svg>');
}

// â”€â”€ Navbar HTML (inserted via JS) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getNavbarHTML() {
  return `
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[var(--dark)]/95 backdrop-blur-md border-b border-[var(--dark-lighter)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-2">
          <svg class="w-8 h-8 text-[var(--gold)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          <span class="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-white">ORO<span class="text-[var(--gold)]">VAULT</span></span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="index.html" class="text-sm uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">Home</a>
          <a href="shop.html" class="text-sm uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">Shop</a>
          <a href="about.html" class="text-sm uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">About</a>
          <a href="contact.html" class="text-sm uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">Contact</a>
        </div>

        <!-- Right Icons -->
        <div class="flex items-center gap-4 md:gap-6">
          <!-- Currency Switcher (desktop) -->
          <div class="hidden md:block">
            ${typeof getCurrencyDropdownHTML === 'function' ? getCurrencyDropdownHTML() : ''}
          </div>
          <!-- Search (desktop) -->
          <button onclick="toggleSearch()" class="hidden md:block text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
          <!-- Auth -->
          <a href="auth.html" class="text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </a>
          <!-- Wishlist -->
          <a href="wishlist.html" class="relative text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            <span class="wishlist-badge badge-count" style="display:none">0</span>
          </a>
          <!-- Cart -->
          <a href="cart.html" class="relative text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            <span class="cart-badge badge-count" style="display:none">0</span>
          </a>
          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="md:hidden text-[var(--gray-light)] hover:text-[var(--gold)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Search Bar (hidden by default) -->
    <div id="search-bar" class="hidden border-t border-[var(--dark-lighter)] bg-[var(--dark)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="relative">
          <input type="text" id="nav-search-input" placeholder="Search watches..." class="w-full bg-[var(--dark-light)] text-white border border-[var(--dark-lighter)] rounded-lg px-4 py-3 pl-10 focus:border-[var(--gold)]" oninput="handleNavSearch(this.value)">
          <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <div id="search-results" class="absolute top-full left-0 right-0 mt-2 bg-[var(--dark-light)] border border-[var(--dark-lighter)] rounded-lg max-h-80 overflow-y-auto hidden"></div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Nav Overlay -->
  <div id="mobile-nav" class="mobile-nav fixed inset-0 z-[60] bg-[var(--dark)]">
    <div class="flex items-center justify-between p-4 border-b border-[var(--dark-lighter)]">
      <span class="font-['Playfair_Display'] text-xl font-bold text-white">ORO<span class="text-[var(--gold)]">VAULT</span></span>
      <button id="mobile-menu-close" class="text-[var(--gray-light)] hover:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="flex flex-col p-6 gap-6">
      <a href="index.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Home</a>
      <a href="shop.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Shop</a>
      <a href="about.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">About</a>
      <a href="contact.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Contact</a>
      <a href="auth.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Account</a>
      <a href="wishlist.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Wishlist</a>
      <a href="cart.html" class="text-lg uppercase tracking-wider text-[var(--gray-light)] hover:text-[var(--gold)]">Cart</a>
      <div class="pt-4 border-t border-[var(--dark-lighter)]">
        <p class="text-[var(--gray)] text-xs uppercase tracking-wider mb-3">Currency</p>
        <select onchange="setCurrency(this.value)" class="w-full bg-[var(--dark-light)] border border-[var(--dark-lighter)] rounded-lg px-3 py-2 text-white text-sm">
          ${typeof getAllCurrencies === 'function' ? Object.values(getAllCurrencies()).map(c => `<option value="${c.code}" ${c.code === getCurrency().code ? 'selected' : ''}>${c.flag} ${c.code} - ${c.name}</option>`).join('') : '<option value="USD">USD</option>'}
        </select>
      </div>
    </div>
  </div>
  `;
}

// â”€â”€ Footer HTML â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getFooterHTML() {
  return `
  <footer class="bg-[var(--dark-deeper)] border-t border-[var(--dark-lighter)] mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <a href="index.html" class="flex items-center gap-2 mb-4">
            <svg class="w-8 h-8 text-[var(--gold)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <span class="font-['Playfair_Display'] text-xl font-bold text-white">ORO<span class="text-[var(--gold)]">VAULT</span></span>
          </a>
          <p class="text-[var(--gray)] text-sm leading-relaxed">Curating the world's finest timepieces since 2018. Every watch tells a story â€” let us help you find yours.</p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg></a>
            <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z"/></svg></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="shop.html" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">All Watches</a></li>
            <li><a href="shop.html?category=Luxury" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Luxury Collection</a></li>
            <li><a href="shop.html?category=Sport" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Sport Collection</a></li>
            <li><a href="shop.html?category=Smart" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Smart Watches</a></li>
            <li><a href="shop.html?category=Dress" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Dress Watches</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Customer Service</h4>
          <ul class="space-y-3">
            <li><a href="contact.html" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Contact Us</a></li>
            <li><a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Shipping & Returns</a></li>
            <li><a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Warranty</a></li>
            <li><a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">Size Guide</a></li>
            <li><a href="about.html" class="text-[var(--gray)] hover:text-[var(--gold)] text-sm transition-colors">About Us</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Newsletter</h4>
          <p class="text-[var(--gray)] text-sm mb-4">Subscribe for exclusive offers, new arrivals, and horological insights.</p>
          <form onsubmit="event.preventDefault(); showToast('Subscribed successfully!'); this.reset();" class="flex gap-2">
            <input type="email" placeholder="Your email" required class="flex-1 bg-[var(--dark-light)] border border-[var(--dark-lighter)] rounded-lg px-3 py-2 text-sm text-white">
            <button type="submit" class="btn-gold text-[var(--dark)] px-4 py-2 rounded-lg text-sm font-semibold">Join</button>
          </form>
        </div>
      </div>

      <div class="border-t border-[var(--dark-lighter)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-[var(--gray)] text-xs">&copy; 2026 OroVault. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-xs transition-colors">Privacy Policy</a>
          <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-xs transition-colors">Terms of Service</a>
          <a href="#" class="text-[var(--gray)] hover:text-[var(--gold)] text-xs transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

// â”€â”€ Search Functions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('hidden');
  if (!bar.classList.contains('hidden')) {
    document.getElementById('nav-search-input').focus();
  }
}

function handleNavSearch(query) {
  const resultsDiv = document.getElementById('search-results');
  if (query.length < 2) {
    resultsDiv.classList.add('hidden');
    return;
  }
  const results = searchProducts(query).slice(0, 8);
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p class="p-4 text-[var(--gray)] text-sm">No watches found</p>';
  } else {
    resultsDiv.innerHTML = results.map(p => `
      <a href="product.html?id=${p.id}&name=${generateSlug(p.name)}" class="flex items-center gap-3 p-3 hover:bg-[var(--dark-lighter)] transition-colors">
        <img src="${p.images[0]}" alt="${p.name}" class="w-12 h-12 rounded object-cover" onerror="handleImgError(this)">
        <div>
          <p class="text-white text-sm font-medium">${p.name}</p>
          <p class="text-[var(--gold)] text-sm">${formatPrice(p.price)}</p>
        </div>
      </a>
    `).join('');
  }
  resultsDiv.classList.remove('hidden');
}

// â”€â”€ Inject Navbar & Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initPage() {
  const navPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = getNavbarHTML();
  if (footerPlaceholder) footerPlaceholder.innerHTML = getFooterHTML();
  initMobileNav();
}

document.addEventListener('DOMContentLoaded', initPage);
