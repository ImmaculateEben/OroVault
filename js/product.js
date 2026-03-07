// ============================================================
// Watch Store — Product Detail Page Logic
// ============================================================

let currentProduct = null;
let selectedQty = 1;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    showProductNotFound();
    return;
  }

  currentProduct = getProductById(id);
  if (!currentProduct) {
    showProductNotFound();
    return;
  }

  renderProduct();
  renderRelatedProducts();
  initTabs();
});

function showProductNotFound() {
  document.getElementById('product-content').innerHTML = `
    <div class="text-center py-20">
      <svg class="w-20 h-20 text-[#2A2A2A] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <h2 class="font-serif text-2xl text-[#888] mb-2">Product Not Found</h2>
      <p class="text-[#888] text-sm mb-6">The watch you're looking for doesn't exist or has been removed.</p>
      <a href="shop.html" class="btn-gold text-[#0D0D0D] px-6 py-3 rounded-lg text-sm font-semibold inline-block">Browse Collection</a>
    </div>
  `;
}

function renderProduct() {
  const p = currentProduct;
  const wishlisted = isWishlisted(p.id);
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  document.title = `${p.name} — OroVault`;

  document.getElementById('product-content').innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Image Gallery -->
      <div>
        <div class="bg-[#1A1A1A] rounded-xl overflow-hidden aspect-square mb-4">
          <img id="main-image" src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover" onerror="handleImgError(this)">
        </div>
        <div class="grid grid-cols-3 gap-3">
          ${p.images.map((img, i) => `
            <button onclick="changeImage(${i})" class="thumbnail ${i === 0 ? 'active' : ''} rounded-lg overflow-hidden aspect-square bg-[#1A1A1A]">
              <img src="${img}" alt="${p.name}" class="w-full h-full object-cover">
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Product Info -->
      <div>
        <!-- Breadcrumb -->
        <p class="text-[#888] text-xs mb-4">
          <a href="index.html" class="hover:text-[#C9A84C]">Home</a> / 
          <a href="shop.html" class="hover:text-[#C9A84C]">Shop</a> / 
          <a href="shop.html?category=${p.category}" class="hover:text-[#C9A84C]">${p.category}</a> / 
          <span class="text-[#C9A84C]">${p.name}</span>
        </p>

        <p class="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">${p.brand}</p>
        <h1 class="font-serif text-3xl md:text-4xl font-bold text-white mb-3">${p.name}</h1>

        <!-- Rating -->
        <div class="flex items-center gap-2 mb-4">
          ${renderStars(p.rating)}
          <span class="text-[#888] text-sm">${p.rating} (${p.reviews} reviews)</span>
        </div>

        <!-- Price -->
        <div class="flex items-center gap-3 mb-6">
          <span class="text-[#C9A84C] text-3xl font-bold">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="text-[#888] text-xl line-through">${formatPrice(p.originalPrice)}</span>` : ''}
          ${discount > 0 ? `<span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">SAVE ${discount}%</span>` : ''}
        </div>

        <!-- Description -->
        <p class="text-[#CCC] text-sm leading-relaxed mb-6">${p.description}</p>

        <!-- Stock Status -->
        <div class="flex items-center gap-2 mb-6">
          ${p.inStock 
            ? '<span class="w-2 h-2 rounded-full bg-green-500"></span><span class="text-green-400 text-sm">In Stock</span>'
            : '<span class="w-2 h-2 rounded-full bg-red-500"></span><span class="text-red-400 text-sm">Out of Stock</span>'
          }
        </div>

        ${p.inStock ? `
        <!-- Quantity & Actions -->
        <div class="flex flex-col sm:flex-row gap-4 mb-6">
          <div class="flex items-center border border-[#2A2A2A] rounded-lg">
            <button onclick="adjustQty(-1)" class="qty-btn px-4 py-3 text-[#CCC] hover:text-white border-r border-[#2A2A2A]">−</button>
            <span id="qty-display" class="px-6 py-3 text-white font-medium">1</span>
            <button onclick="adjustQty(1)" class="qty-btn px-4 py-3 text-[#CCC] hover:text-white border-l border-[#2A2A2A]">+</button>
          </div>
          <button onclick="addToCart(${p.id}, selectedQty)" class="btn-gold flex-1 text-[#0D0D0D] px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            Add to Cart
          </button>
        </div>
        ` : ''}

        <!-- Wishlist Button -->
        <button onclick="handleDetailWishlist(this)" class="flex items-center gap-2 text-sm ${wishlisted ? 'text-red-500' : 'text-[#CCC]'} hover:text-[#C9A84C] transition-colors mb-8">
          <svg class="w-5 h-5" fill="${wishlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          ${wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>

        <!-- Tags -->
        <div class="flex gap-2 flex-wrap mb-6">
          ${p.isNew ? '<span class="bg-[#C9A84C]/20 text-[#C9A84C] text-xs px-3 py-1 rounded-full">New Arrival</span>' : ''}
          <span class="bg-[#2A2A2A] text-[#CCC] text-xs px-3 py-1 rounded-full">${p.category}</span>
          <span class="bg-[#2A2A2A] text-[#CCC] text-xs px-3 py-1 rounded-full">${p.brand}</span>
        </div>

        <!-- Tabs: Description / Specs -->
        <div class="border-t border-[#2A2A2A] pt-6">
          <div class="flex gap-6 mb-4">
            <button class="tab-btn active text-sm uppercase tracking-wider font-semibold pb-2" data-tab="desc">Description</button>
            <button class="tab-btn text-[#888] text-sm uppercase tracking-wider font-semibold pb-2" data-tab="specs">Specifications</button>
          </div>
          <div id="tab-desc" class="tab-content">
            <p class="text-[#CCC] text-sm leading-relaxed">${p.description}</p>
          </div>
          <div id="tab-specs" class="tab-content hidden">
            <div class="space-y-2">
              ${p.specs.split(' | ').map(spec => {
                const [label, value] = spec.split(': ');
                return `<div class="flex justify-between text-sm py-2 border-b border-[#2A2A2A]">
                  <span class="text-[#888]">${label}</span>
                  <span class="text-white">${value}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function changeImage(index) {
  currentImageIndex = index;
  document.getElementById('main-image').src = currentProduct.images[index];
  document.querySelectorAll('.thumbnail').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function adjustQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  document.getElementById('qty-display').textContent = selectedQty;
}

function handleDetailWishlist(btn) {
  const added = toggleWishlist(currentProduct.id);
  const svg = btn.querySelector('svg');
  if (added) {
    btn.classList.remove('text-[#CCC]');
    btn.classList.add('text-red-500');
    svg.setAttribute('fill', 'currentColor');
    btn.querySelector('svg').nextElementSibling
    btn.childNodes[btn.childNodes.length - 1].textContent = ' Remove from Wishlist';
  } else {
    btn.classList.remove('text-red-500');
    btn.classList.add('text-[#CCC]');
    svg.setAttribute('fill', 'none');
    btn.childNodes[btn.childNodes.length - 1].textContent = ' Add to Wishlist';
  }
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.classList.add('text-[#888]');
      });
      btn.classList.add('active');
      btn.classList.remove('text-[#888]');
      
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
    });
  });
}

function renderRelatedProducts() {
  const related = getAllProducts()
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);

  const container = document.getElementById('related-products');
  if (container && related.length > 0) {
    container.innerHTML = related.map(p => renderProductCard(p)).join('');
  }
}
