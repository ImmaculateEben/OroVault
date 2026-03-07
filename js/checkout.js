// ============================================================
// Watch Store â€” Checkout Form Validation & International Support
// ============================================================

let currentPaymentMethod = 'card';

// Country-specific field labels and postal code terms
const countryConfig = {
  US: { stateLabel: 'State', zipLabel: 'ZIP Code', zipPlaceholder: '10001' },
  CA: { stateLabel: 'Province', zipLabel: 'Postal Code', zipPlaceholder: 'K1A 0B1' },
  GB: { stateLabel: 'County', zipLabel: 'Postcode', zipPlaceholder: 'SW1A 1AA' },
  AU: { stateLabel: 'State', zipLabel: 'Postcode', zipPlaceholder: '2000' },
  DE: { stateLabel: 'State', zipLabel: 'Postleitzahl', zipPlaceholder: '10115' },
  FR: { stateLabel: 'Region', zipLabel: 'Code Postal', zipPlaceholder: '75001' },
  JP: { stateLabel: 'Prefecture', zipLabel: 'Postal Code', zipPlaceholder: '100-0001' },
  CH: { stateLabel: 'Canton', zipLabel: 'PLZ', zipPlaceholder: '8001' },
  IN: { stateLabel: 'State', zipLabel: 'PIN Code', zipPlaceholder: '110001' },
  CN: { stateLabel: 'Province', zipLabel: 'Postal Code', zipPlaceholder: '100000' },
  BR: { stateLabel: 'State', zipLabel: 'CEP', zipPlaceholder: '01001-000' },
  KR: { stateLabel: 'Province', zipLabel: 'Postal Code', zipPlaceholder: '03000' },
  AE: { stateLabel: 'Emirate', zipLabel: 'P.O. Box', zipPlaceholder: '00000' },
  NG: { stateLabel: 'State', zipLabel: 'Postal Code', zipPlaceholder: '100001' },
  SG: { stateLabel: 'District', zipLabel: 'Postal Code', zipPlaceholder: '018956' },
  NZ: { stateLabel: 'Region', zipLabel: 'Postcode', zipPlaceholder: '6011' },
  MX: { stateLabel: 'State', zipLabel: 'CÃ³digo Postal', zipPlaceholder: '06600' },
  ZA: { stateLabel: 'Province', zipLabel: 'Postal Code', zipPlaceholder: '0001' },
  default: { stateLabel: 'State / Province', zipLabel: 'Postal Code', zipPlaceholder: '00000' }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateCheckout()) {
      showToast('Order placed successfully!');
      clearCart();
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }
  });

  // Real-time validation on blur
  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
  });

  // Dynamic labels based on country selection
  const countrySelect = document.getElementById('country');
  if (countrySelect) {
    countrySelect.addEventListener('change', updateAddressLabels);
    updateAddressLabels();
  }
});

function updateAddressLabels() {
  const country = document.getElementById('country')?.value || 'US';
  const config = countryConfig[country] || countryConfig.default;

  const stateLabel = document.getElementById('state-label');
  const zipLabel = document.getElementById('zip-label');
  const zipInput = document.getElementById('zip');

  if (stateLabel) stateLabel.textContent = config.stateLabel + ' *';
  if (zipLabel) zipLabel.textContent = config.zipLabel + ' *';
  if (zipInput) zipInput.placeholder = config.zipPlaceholder;
}

function selectPaymentMethod(method) {
  currentPaymentMethod = method;
  const methods = ['card', 'paypal', 'bank'];

  methods.forEach(m => {
    const btn = document.getElementById(`pm-${m}`);
    const section = document.getElementById(`payment-${m}`);

    if (m === method) {
      btn.classList.remove('border-[var(--dark-lighter)]');
      btn.classList.add('border-[var(--gold)]');
      btn.querySelectorAll('svg, span').forEach(el => {
        el.classList.remove('text-[var(--gray)]');
        el.classList.add('text-[var(--gold)]');
      });
      const spanEl = btn.querySelector('span');
      if (spanEl) { spanEl.classList.remove('text-[var(--gray)]'); spanEl.classList.add('text-white'); }
      section.classList.remove('hidden');
    } else {
      btn.classList.remove('border-[var(--gold)]');
      btn.classList.add('border-[var(--dark-lighter)]');
      btn.querySelectorAll('svg').forEach(el => {
        el.classList.remove('text-[var(--gold)]');
        el.classList.add('text-[var(--gray)]');
      });
      const spanEl = btn.querySelector('span');
      if (spanEl) { spanEl.classList.remove('text-white'); spanEl.classList.add('text-[var(--gray)]'); }
      section.classList.add('hidden');
    }
  });
}

function validateCheckout() {
  const baseFields = [
    { id: 'first-name', msg: 'First name is required' },
    { id: 'last-name', msg: 'Last name is required' },
    { id: 'email', msg: 'Valid email is required', type: 'email' },
    { id: 'phone', msg: 'Phone number is required' },
    { id: 'address', msg: 'Address is required' },
    { id: 'city', msg: 'City is required' },
    { id: 'state', msg: 'State / Province is required' },
    { id: 'zip', msg: 'Postal code is required' },
  ];

  // Payment-specific fields
  let paymentFields = [];
  if (currentPaymentMethod === 'card') {
    paymentFields = [
      { id: 'card-number', msg: 'Card number is required', minLength: 16 },
      { id: 'card-expiry', msg: 'Expiry date is required' },
      { id: 'card-cvv', msg: 'CVV is required', minLength: 3 },
      { id: 'card-name', msg: 'Name on card is required' },
    ];
  } else if (currentPaymentMethod === 'paypal') {
    paymentFields = [
      { id: 'paypal-email', msg: 'PayPal email is required', type: 'email' },
    ];
  } else if (currentPaymentMethod === 'bank') {
    paymentFields = [
      { id: 'bank-name', msg: 'Account holder name is required' },
    ];
  }

  const fields = [...baseFields, ...paymentFields];
  let isValid = true;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    if (!input) return;
    const error = !validateField(input, field);
    if (error) isValid = false;
  });

  return isValid;
}

function validateField(input, fieldConfig) {
  const errorEl = document.getElementById(`${input.id}-error`);
  const value = input.value.trim();
  let valid = true;

  if (!value) {
    valid = false;
  } else if (fieldConfig?.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    valid = false;
  } else if (fieldConfig?.minLength && value.replace(/\s/g, '').length < fieldConfig.minLength) {
    valid = false;
  }

  if (errorEl) {
    errorEl.classList.toggle('hidden', valid);
  }
  input.classList.toggle('border-red-500', !valid);
  input.classList.toggle('border-[var(--dark-lighter)]', valid);

  return valid;
}
