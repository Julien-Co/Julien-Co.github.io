// =============================================================
// site.js — Dark mode, publication filter, toggles, scroll effects,
//           copy bibtex, back-to-top
// =============================================================

(function () {
  'use strict';

  // ----- Dark Mode Toggle -----

  var toggle = document.getElementById('darkModeToggle');
  var icon = document.getElementById('themeIcon');

  function updateIcon() {
    if (!icon) return;
    var theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-moon';
    } else {
      icon.className = 'fa-solid fa-sun';
    }
  }

  if (toggle) {
    updateIcon();

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-bs-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateIcon();
    });
  }

  // ----- Publication Expand/Collapse -----

  document.addEventListener('click', function (e) {
    var button = e.target.closest('[data-toggle-target]');
    if (!button) return;

    var targetId = button.getAttribute('data-toggle-target');
    var target = document.getElementById(targetId);
    if (!target) return;

    target.classList.toggle('show');
  });

  // ----- Publication Search/Filter -----

  var searchInput = document.getElementById('pubSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var entries = document.querySelectorAll('[data-pub-searchable]');

      entries.forEach(function (entry) {
        if (!query) {
          entry.style.display = '';
          return;
        }
        var text = entry.textContent.toLowerCase();
        entry.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ----- Copy BibTeX Button -----

  document.querySelectorAll('.pub-collapse').forEach(function (collapse) {
    // Only add copy to bibtex blocks (id starts with "bib-")
    if (!collapse.id || !collapse.id.startsWith('bib-')) return;

    var pre = collapse.querySelector('pre');
    if (!pre) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'copy-wrapper';
    wrapper.style.position = 'relative';

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    btn.title = 'Copy to clipboard';

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          btn.classList.remove('copied');
        }, 2000);
      });
    });

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(btn);
  });

  // ----- Back to Top Button -----

  var topBtn = document.createElement('button');
  topBtn.className = 'back-to-top';
  topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  topBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  // ----- Navbar Scroll Shadow -----

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ----- Fade-in on Scroll -----

  var fadeElements = document.querySelectorAll('.fade-in-section');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ----- Desktop-only Feature Visualization Hydration -----

  var desktopFeatureQuery = window.matchMedia('(min-width: 769px) and (pointer: fine)');
  document.querySelectorAll('[data-feature-visualizations-root]').forEach(function (root) {
    if (!desktopFeatureQuery.matches || root.querySelector('.feature-figure')) return;

    var template = root.querySelector('[data-feature-visualizations-template]');
    if (!template || !template.content) return;

    root.appendChild(template.content.cloneNode(true));
    root.classList.add('is-hydrated');
  });

  // ----- Draggable Pan Viewports -----

  document.querySelectorAll('[data-draggable-pan]').forEach(function (viewport) {
    var isDragging = false;
    var startX = 0;
    var startY = 0;
    var startLeft = 0;
    var startTop = 0;
    var pointerId = null;

    viewport.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      isDragging = true;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = viewport.scrollLeft;
      startTop = viewport.scrollTop;

      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(pointerId);
      e.preventDefault();
    });

    viewport.addEventListener('pointermove', function (e) {
      if (!isDragging) return;

      var dx = e.clientX - startX;
      var dy = e.clientY - startY;

      viewport.scrollLeft = startLeft - dx;
      viewport.scrollTop = startTop - dy;
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      viewport.classList.remove('is-dragging');

      if (pointerId !== null && viewport.hasPointerCapture(pointerId)) {
        viewport.releasePointerCapture(pointerId);
      }

      pointerId = null;
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'mouse') {
        endDrag(e);
      }
    });
  });

  // ----- Feature Visualization Zoom Controls -----

  document.querySelectorAll('.home-feature-visualizations').forEach(function (section) {
    var zoomInButton = section.querySelector('[data-feature-zoom-in]');
    var zoomOutButton = section.querySelector('[data-feature-zoom-out]');
    if (!zoomInButton || !zoomOutButton) return;

    var minZoom = 1;
    var maxZoom = 2;
    var zoomStep = 0.1;
    var zoomLevel = 1;

    function applyZoom() {
      section.style.setProperty('--feature-zoom', String(zoomLevel));
      zoomOutButton.disabled = zoomLevel <= minZoom;
      zoomInButton.disabled = zoomLevel >= maxZoom;
    }

    function updateZoom(delta) {
      zoomLevel = Math.max(minZoom, Math.min(maxZoom, Math.round((zoomLevel + delta) * 10) / 10));
      applyZoom();
    }

    [zoomInButton, zoomOutButton].forEach(function (button) {
      button.addEventListener('pointerdown', function (e) {
        e.stopPropagation();
      });
    });

    zoomInButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      updateZoom(zoomStep);
    });

    zoomOutButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      updateZoom(-zoomStep);
    });

    applyZoom();
  });

  // ----- Site Search -----

  var searchToggleBtn = document.getElementById('searchToggle');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInputEl = document.getElementById('searchInput');
  var searchResultsEl = document.getElementById('searchResults');
  var searchData = null;

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(function () { searchInputEl.focus(); }, 100);
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('open');
    searchInputEl.value = '';
    searchResultsEl.innerHTML = '';
  }

  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', openSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay && searchOverlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  function loadSearchData(callback) {
    if (searchData) { callback(searchData); return; }
    fetch('/assets/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        searchData = data;
        callback(data);
      })
      .catch(function () {
        searchResultsEl.innerHTML = '<div class="search-no-results">Could not load search index.</div>';
      });
  }

  function renderResults(query, data) {
    if (!query) {
      searchResultsEl.innerHTML = '';
      return;
    }
    var q = query.toLowerCase();
    var matches = data.filter(function (item) {
      return item.title.toLowerCase().includes(q) ||
             item.content.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      searchResultsEl.innerHTML = '<div class="search-no-results">No results for "' + query + '"</div>';
      return;
    }

    searchResultsEl.innerHTML = matches.map(function (item) {
      var snippet = item.content.substring(0, 150).trim() + '...';
      return '<a href="' + item.url + '" class="search-result-item">' +
        '<div class="search-result-title">' + item.title + '</div>' +
        '<div class="search-result-snippet">' + snippet + '</div>' +
        '</a>';
    }).join('');
  }

  if (searchInputEl) {
    var debounceTimer;
    searchInputEl.addEventListener('input', function () {
      var query = this.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        loadSearchData(function (data) {
          renderResults(query, data);
        });
      }, 150);
    });
  }

})();
