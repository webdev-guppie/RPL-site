// Simple nav toggle for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.nav-toggle');
  var mobilePanel = document.getElementById('mobile-nav-panel');
  var mobileNav = document.getElementById('mobile-nav');

  function toggleMobile(e) {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (mobilePanel) {
      mobilePanel.classList.toggle('open');
      mobilePanel.setAttribute('aria-hidden', String(expanded));
    }
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', toggleMobile);
  });

  // close mobile panel when clicking outside or pressing Escape
  document.addEventListener('click', function (e) {
    if (!mobilePanel) return;
    var isClickInside = mobilePanel.contains(e.target) || e.target.classList.contains('nav-toggle');
    if (!isClickInside && mobilePanel.classList.contains('open')) {
      mobilePanel.classList.remove('open');
      mobilePanel.setAttribute('aria-hidden', 'true');
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobilePanel && mobilePanel.classList.contains('open')) {
      mobilePanel.classList.remove('open');
      mobilePanel.setAttribute('aria-hidden', 'true');
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    }
  });
});
