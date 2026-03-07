// ============================================================
// Watch Store â€” Auth (Login / Register) Tab Toggle
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (loginTab && registerTab) {
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('auth-tab', 'active');
      registerTab.classList.remove('auth-tab', 'active');
      registerTab.classList.add('text-[var(--gray)]');
      loginTab.classList.remove('text-[var(--gray)]');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', () => {
      registerTab.classList.add('auth-tab', 'active');
      loginTab.classList.remove('auth-tab', 'active');
      loginTab.classList.add('text-[var(--gray)]');
      registerTab.classList.remove('text-[var(--gray)]');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    });
  }

  // Password visibility toggles
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = isPassword
        ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>`
        : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
    });
  });

  // Form submissions (demo only)
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login successful! (Demo)');
  });

  document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Account created! (Demo)');
  });

  document.getElementById('forgot-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Password reset link sent! Check your email. (Demo)');
  });
});

function showForgotPassword(e) {
  e.preventDefault();
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('forgot-form').classList.remove('hidden');
  // Hide tabs
  document.getElementById('login-tab').parentElement.classList.add('hidden');
}

function showLoginForm(e) {
  e.preventDefault();
  document.getElementById('forgot-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  // Show tabs and set login active
  const tabRow = document.getElementById('login-tab').parentElement;
  tabRow.classList.remove('hidden');
  document.getElementById('login-tab').click();
}
