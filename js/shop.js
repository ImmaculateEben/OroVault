// ============================================================
// Watch Store â€” Shop Page Logic (Filter, Sort, Search)
// ============================================================

let filteredProducts = [];
let currentFilters = {
  category: [],
  brand: [],
  minPrice: 0,
  maxPrice: 10000,
  minRating: 0,
  search: '',
  sort: 'featured'
};

document.addEventListener('DOMContentLoaded', () => {
  // Read URL params for pre-filtering
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  if (cat) {
    currentFilters.category = [cat];
  }

  initFilters();
  applyFilters();
});

function initFilters() {
  const categories = getAllCategories();
  const brands = getAllBrands();

  // Category checkboxes
  const catContainer = document.getElementById('filter-categories');
  if (catContainer) {
    catContainer.innerHTML = categories.map(c => `
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" value="${c}" ${currentFilters.category.includes(c) ? 'checked' : ''} 
          onchange="toggleFilter('category', '${c}')" 
          class="filter-checkbox w-4 h-4 rounded border-[var(--dark-lighter)] bg-[var(--dark-light)]">
        <span class="text-[var(--gray-light)] text-sm group-hover:text-[var(--gold)] transition-colors">${c}</span>
        <span class="text-[var(--gray)] text-xs ml-auto">(${getProductsByCategory(c).length})</span>
      </label>
    `).join('');
  }

  // Brand checkboxes
  const brandContainer = document.getElementById('filter-brands');
  if (brandContainer) {
    brandContainer.innerHTML = brands.map(b => `
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" value="${b}" 
          onchange="toggleFilter('brand', '${b}')" 
          class="filter-checkbox w-4 h-4 rounded border-[var(--dark-lighter)] bg-[var(--dark-light)]">
        <span class="text-[var(--gray-light)] text-sm group-hover:text-[var(--gold)] transition-colors">${b}</span>
        <span class="text-[var(--gray)] text-xs ml-auto">(${getProductsByBrand(b).length})</span>
      </label>
    `).join('');
  }

  // Price range
  const priceRange = document.getElementById('price-range');
  if (priceRange) {
    priceRange.value = currentFilters.maxPrice;
    priceRange.addEventListener('input', (e) => {
      currentFilters.maxPrice = parseInt(e.target.value);
      document.getElementById('price-value').textContent = `$0 â€” $${parseInt(e.target.value).toLocaleString()}`;
      applyFilters();
    });
  }

  // Rating filter
  const ratingBtns = document.querySelectorAll('.rating-filter-btn');
  ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ratingBtns.forEach(b => b.classList.remove('text-[var(--gold)]', 'border-[var(--gold)]'));
      btn.classList.add('text-[var(--gold)]', 'border-[var(--gold)]');
      currentFilters.minRating = parseFloat(btn.dataset.rating);
      applyFilters();
    });
  });

  // Search input
  const searchInput = document.getElementById('shop-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilters.search = e.target.value;
      applyFilters();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentFilters.sort = e.target.value;
      applyFilters();
    });
  }
}

function toggleFilter(type, value) {
  const arr = currentFilters[type];
  const idx = arr.indexOf(value);
  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(value);
  }
  applyFilters();
}

function applyFilters() {
  let results = getAllProducts();

  // Category filter
  if (currentFilters.category.length > 0) {
    results = results.filter(p => currentFilters.category.includes(p.category));
  }

  // Brand filter
  if (currentFilters.brand.length > 0) {
    results = results.filter(p => currentFilters.brand.includes(p.brand));
  }

  // Price filter
  results = results.filter(p => p.price >= currentFilters.minPrice && p.price <= currentFilters.maxPrice);

  // Rating filter
  if (currentFilters.minRating > 0) {
    results = results.filter(p => p.rating >= currentFilters.minRating);
  }

  // Search
  if (currentFilters.search.length >= 2) {
    const q = currentFilters.search.toLowerCase();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (currentFilters.sort) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      results = results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'featured':
    default:
      results = results.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
  }

  filteredProducts = results;
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const countEl = document.getElementById('product-count');

  if (countEl) {
    countEl.textContent = `${filteredProducts.length} watch${filteredProducts.length !== 1 ? 'es' : ''}`;
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20">
        <svg class="w-16 h-16 text-[var(--dark-lighter)] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <h3 class="text-xl font-serif text-[var(--gray)] mb-2">No watches found</h3>
        <p class="text-[var(--gray)] text-sm">Try adjusting your filters or search term</p>
        <button onclick="clearAllFilters()" class="mt-4 btn-outline-gold px-6 py-2 rounded-lg text-sm">Clear All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredProducts.map(p => renderProductCard(p)).join('');
}

function clearAllFilters() {
  currentFilters = {
    category: [],
    brand: [],
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    search: '',
    sort: 'featured'
  };
  // Reset checkboxes
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  const priceRange = document.getElementById('price-range');
  if (priceRange) priceRange.value = 10000;
  const priceValue = document.getElementById('price-value');
  if (priceValue) priceValue.textContent = '$0 â€” $10,000';
  const searchInput = document.getElementById('shop-search');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';
  document.querySelectorAll('.rating-filter-btn').forEach(b => {
    b.classList.remove('text-[var(--gold)]', 'border-[var(--gold)]');
  });
  applyFilters();
}

function toggleMobileFilters() {
  const sidebar = document.getElementById('filter-sidebar');
  sidebar.classList.toggle('hidden');
}
