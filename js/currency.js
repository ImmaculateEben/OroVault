// ============================================================
// Watch Store — Currency Switcher Module
// ============================================================

const CURRENCY_KEY = 'watchstore_currency';

const currencies = {
  USD: { symbol: '$', code: 'USD', name: 'US Dollar', rate: 1, locale: 'en-US', flag: '🇺🇸' },
  EUR: { symbol: '€', code: 'EUR', name: 'Euro', rate: 0.92, locale: 'de-DE', flag: '🇪🇺' },
  GBP: { symbol: '£', code: 'GBP', name: 'British Pound', rate: 0.79, locale: 'en-GB', flag: '🇬🇧' },
  JPY: { symbol: '¥', code: 'JPY', name: 'Japanese Yen', rate: 149.5, locale: 'ja-JP', flag: '🇯🇵' },
  CHF: { symbol: 'CHF', code: 'CHF', name: 'Swiss Franc', rate: 0.88, locale: 'de-CH', flag: '🇨🇭' },
  CAD: { symbol: 'CA$', code: 'CAD', name: 'Canadian Dollar', rate: 1.36, locale: 'en-CA', flag: '🇨🇦' },
  AUD: { symbol: 'A$', code: 'AUD', name: 'Australian Dollar', rate: 1.53, locale: 'en-AU', flag: '🇦🇺' },
  INR: { symbol: '₹', code: 'INR', name: 'Indian Rupee', rate: 83.5, locale: 'en-IN', flag: '🇮🇳' },
  CNY: { symbol: '¥', code: 'CNY', name: 'Chinese Yuan', rate: 7.24, locale: 'zh-CN', flag: '🇨🇳' },
  AED: { symbol: 'د.إ', code: 'AED', name: 'UAE Dirham', rate: 3.67, locale: 'ar-AE', flag: '🇦🇪' },
  NGN: { symbol: '₦', code: 'NGN', name: 'Nigerian Naira', rate: 1550, locale: 'en-NG', flag: '🇳🇬' },
  BRL: { symbol: 'R$', code: 'BRL', name: 'Brazilian Real', rate: 4.97, locale: 'pt-BR', flag: '🇧🇷' },
  KRW: { symbol: '₩', code: 'KRW', name: 'South Korean Won', rate: 1330, locale: 'ko-KR', flag: '🇰🇷' },
  SGD: { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar', rate: 1.34, locale: 'en-SG', flag: '🇸🇬' },
  ZAR: { symbol: 'R', code: 'ZAR', name: 'South African Rand', rate: 18.6, locale: 'en-ZA', flag: '🇿🇦' },
};

function getCurrency() {
  const saved = localStorage.getItem(CURRENCY_KEY);
  if (saved && currencies[saved]) return currencies[saved];
  return currencies.USD;
}

function setCurrency(code) {
  if (!currencies[code]) return;
  localStorage.setItem(CURRENCY_KEY, code);
  document.dispatchEvent(new CustomEvent('currencyChanged', { detail: currencies[code] }));
  window.location.reload();
}

function convertPrice(usdAmount) {
  const curr = getCurrency();
  return usdAmount * curr.rate;
}

function formatCurrency(usdAmount) {
  const curr = getCurrency();
  const converted = usdAmount * curr.rate;

  const noDecimals = ['JPY', 'KRW', 'NGN', 'INR', 'CNY'];
  const decimals = noDecimals.includes(curr.code) ? 0 : 2;

  const formatted = converted.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return `${curr.symbol}${formatted}`;
}

function getAllCurrencies() {
  return currencies;
}

function getCurrencyDropdownHTML() {
  const current = getCurrency();
  return `
    <div class="currency-switcher relative">
      <button onclick="toggleCurrencyDropdown(event)" class="flex items-center gap-1.5 text-[var(--gray-light)] hover:text-[var(--gold)] transition-colors text-sm" title="Change Currency">
        <span class="text-base">${current.flag}</span>
        <span class="font-medium">${current.code}</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="currency-dropdown" class="hidden absolute right-0 top-full mt-2 bg-[var(--dark-light)] border border-[var(--dark-lighter)] rounded-xl shadow-2xl py-2 w-56 max-h-80 overflow-y-auto z-[100]">
        ${Object.values(currencies).map(c => `
          <button onclick="setCurrency('${c.code}')" class="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-[var(--dark-lighter)] transition-colors ${c.code === current.code ? 'bg-[var(--dark-lighter)] text-[var(--gold)]' : 'text-[var(--gray-light)]'}">
            <span class="text-base">${c.flag}</span>
            <span class="text-sm">${c.code}</span>
            <span class="text-xs text-[var(--gray)] ml-auto">${c.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleCurrencyDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('currency-dropdown');
  if (dd) {
    dd.classList.toggle('hidden');
    if (!dd.classList.contains('hidden')) {
      const close = (ev) => {
        if (!ev.target.closest('.currency-switcher')) {
          dd.classList.add('hidden');
          document.removeEventListener('click', close);
        }
      };
      setTimeout(() => document.addEventListener('click', close), 0);
    }
  }
}
