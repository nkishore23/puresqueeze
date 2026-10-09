/**
 * PureSqueeze - Artisan Cold-Pressed Juice Bar
 * Multi-Page Dynamic Engine
 * Features:
 * - Cross-Page Cart State Management via localStorage
 * - Dynamic Dataset Rendering (Menu, Bestsellers, Cleanse Packs)
 * - Live Search, Dietary Filters & Multi-parameter Sorting (Menu page)
 * - Interactive Cleanse/Juice Quiz Recommendation Wizard (Home & Cleanses pages)
 * - Drink Customizer Modal (Bottle Size, Boosters, Sweetness, Live Price)
 * - Advanced Cart Drawer with Promo Code Engine, Delivery Progress & Consolidated WhatsApp Checkout
 * - Native Web Audio Sound Effects Synthesizer
 * - Real-Time Batch Countdown Timer & Hub Operating Status
 * - Dynamic Customer Review Filtering & Review Submission Simulator (Reviews page)
 * - Mobile Navigation Drawer & Sticky Header (All pages)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. DATASET: CRAFT COLD-PRESSED BEVERAGES
  // =========================================================================
  const JUICES = [
    {
      id: 1,
      name: 'Nagpur Orange Zest',
      category: 'cold-pressed',
      price: 159,
      mrp: 180,
      calories: 120,
      volume: '350ml',
      ingredients: 'Sweet Nagpur Oranges, Mosambi sweet lime, spearmint leaves, Himalayan pink salt.',
      tags: ['Citrus Immunity', 'Vitamin C Shield', 'low-cal'],
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
      tint: 'orange-tint',
      icon: '🍊',
      bestseller: true,
      ribbon: 'Top Pick',
      ribbonClass: 'ribbon-orange',
      rating: 4.9,
      reviewsCount: 142
    },
    {
      id: 2,
      name: 'Green Goddess Detox',
      category: 'cold-pressed',
      price: 189,
      mrp: 210,
      calories: 95,
      volume: '350ml',
      ingredients: 'Baby spinach, crisp celery, English cucumber, Himachal green apple, raw amla, ginger.',
      tags: ['Alkaline Detox', 'Deep Cleanse', 'low-cal', 'sugar-free'],
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
      tint: 'green-tint',
      icon: '🥬',
      bestseller: true,
      ribbon: 'Most Nutrient-Dense',
      ribbonClass: 'ribbon-green',
      rating: 5.0,
      reviewsCount: 210
    },
    {
      id: 3,
      name: 'Ruby Beet Stamina',
      category: 'cold-pressed',
      price: 179,
      mrp: 200,
      calories: 130,
      volume: '350ml',
      ingredients: 'Nashik beetroot, Kashmiri sweet apples, juicy carrots, fresh pomegranate, lime.',
      tags: ['Cardio Stamina', 'Nitric Oxide Boost', 'low-cal'],
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=600&q=80',
      tint: 'red-tint',
      icon: '🍎',
      bestseller: true,
      ribbon: 'Pre-Workout Fuel',
      ribbonClass: 'ribbon-red',
      rating: 4.8,
      reviewsCount: 98
    },
    {
      id: 4,
      name: 'Ratnagiri Mango Gold',
      category: 'smoothies',
      price: 219,
      mrp: 245,
      calories: 180,
      volume: '350ml',
      ingredients: 'Ratnagiri Alphonso mango pulp, tender coconut milk, passionfruit puree, soaked chia seeds.',
      tags: ['Tropical Treat', '100% Dairy Free'],
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
      tint: 'yellow-tint',
      icon: '🥭',
      bestseller: false,
      rating: 4.9,
      reviewsCount: 86
    },
    {
      id: 5,
      name: 'Wild Berry Antioxidant',
      category: 'smoothies',
      price: 239,
      mrp: 265,
      calories: 210,
      volume: '350ml',
      ingredients: 'Mahabaleshwar strawberries, wild blueberries, organic banana, creamy house almond milk.',
      tags: ['High Polyphenols', 'Plant Protein', 'high-protein'],
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
      tint: 'purple-tint',
      icon: '🫐',
      bestseller: false,
      rating: 4.9,
      reviewsCount: 114
    },
    {
      id: 6,
      name: 'Fiery Amla Immunity Shot',
      category: 'shots',
      price: 89,
      mrp: 105,
      calories: 25,
      volume: '60ml',
      ingredients: 'Wild Indian gooseberry (Amla), Wayanad ginger root, raw turmeric, black pepper.',
      tags: ['Instant Immunity', 'Bioavailable Surge', 'low-cal', 'sugar-free'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      tint: 'shot-tint',
      icon: '⚡',
      bestseller: false,
      rating: 5.0,
      reviewsCount: 320
    },
    {
      id: 7,
      name: '1-Day Quick Reset Pack',
      category: 'cleanses',
      price: 799,
      mrp: 890,
      calories: 720,
      volume: '6 Bottles + Shot',
      ingredients: '6 cold-pressed 350ml bottles (Greens, Citrus, Roots, and Nut Milk) + 1 morning ginger shot.',
      tags: ['Digestion Rest', 'Insulated Cooler Bag Included'],
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
      tint: 'cleanse-tint',
      icon: '🌱',
      bestseller: false,
      rating: 4.9,
      reviewsCount: 75
    },
    {
      id: 8,
      name: '3-Day Deep Reboot Cleanse',
      category: 'cleanses',
      price: 2199,
      mrp: 2450,
      calories: 2100,
      volume: '18 Bottles + 3 Shots',
      ingredients: '18 bottles cold-pressed juices + 3 booster shots + 1-on-1 nutritionist chat support on WhatsApp.',
      tags: ['Cellular Reset', 'Free Metro Delivery Included'],
      image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=600&q=80',
      tint: 'cleanse-tint',
      icon: '✨',
      bestseller: false,
      rating: 5.0,
      reviewsCount: 160
    }
  ];

  // Customer Reviews Database
  let reviewsData = [
    {
      author: 'Elena Morales (Indiranagar)',
      category: 'cleanse',
      stars: '★★★★★',
      text: 'I completed the 3-Day Reboot before my Half Marathon. Digestion felt light as air, mental fog disappeared by Day 2, and the insulated bag kept everything icy cold.',
      tag: 'Verified 3-Day Cleanse'
    },
    {
      author: 'David Kim (Koramangala)',
      category: 'daily',
      stars: '★★★★★',
      text: 'The Nagpur Orange Zest is pure sunshine in a bottle! No artificial syrups or sugary aftertaste. Completely substituted my morning espresso.',
      tag: 'Daily Subscriber'
    },
    {
      author: 'Dr. Sarah Jenkins (Whitefield)',
      category: 'energy',
      stars: '★★★★★',
      text: 'As an athlete, Ruby Beet Stamina has become my essential pre-workout fuel. Clean natural nitrates with an earthy-sweet carrot & pomegranate finish.',
      tag: 'Athletic Wellness'
    },
    {
      author: 'Vikram & Sneha (HAL 2nd Stage)',
      category: 'daily',
      stars: '★★★★★',
      text: 'Love the glass bottle return policy! We leave our empties on the porch and get instant credits. Plus, the Fiery Amla shot keeps our seasonal allergies away.',
      tag: 'Eco Return Champion'
    }
  ];

  // Promo Codes System
  const PROMO_CODES = {
    'FRESH15': { type: 'percent', value: 0.15, desc: '15% Off Your Order' },
    'CLEANSE50': { type: 'fixed', value: 50, desc: '₹50 Off Instant Discount' },
    'FIRSTSQUEEZE': { type: 'fixed', value: 40, desc: '₹40 Delivery Fee Waiver' }
  };

  const WHATSAPP_PHONE = '919876543210';
  const FREE_DELIVERY_THRESHOLD = 499;
  const STANDARD_DELIVERY_FEE = 40;

  // LocalStorage Cart Persistence
  const CART_STORAGE_KEY = 'puresqueeze_cart_v2';
  let cart = [];
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  const saveCart = () => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
  };

  // State Management
  let currentFilter = 'all';
  let searchQuery = '';
  let activeDietary = null;
  let currentSort = 'featured';
  let appliedPromo = null;
  let soundEnabled = true;

  // Customizer State
  let customizerActiveDrink = null;

  // Quiz State
  let quizAnswers = { goal: null, flavor: null, format: null };

  // =========================================================================
  // 2. NATIVE WEB AUDIO SYNTHESIZER
  // =========================================================================
  let audioCtx = null;
  const playChime = (type = 'success') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
      } else {
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(554.37, audioCtx.currentTime + 0.1);
      }

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  };

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIcon) soundIcon.textContent = soundEnabled ? '🔔' : '🔕';
      showToast(soundEnabled ? 'Sound effects enabled' : 'Sound effects muted', '🎵');
    });
  }

  // =========================================================================
  // 3. TOAST NOTIFICATION HELPER
  // =========================================================================
  const toastBox = document.getElementById('toastNotification');
  let toastTimer = null;

  const showToast = (message, icon = '🍊') => {
    if (!toastBox) return;
    toastBox.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastBox.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBox.classList.remove('active');
    }, 3200);
  };

  // =========================================================================
  // 4. DYNAMIC CATALOG & BESTSELLERS RENDERING
  // =========================================================================
  const productsGrid = document.getElementById('productsGrid');
  const bestsellersGrid = document.getElementById('bestsellersGrid');
  const noProductsFound = document.getElementById('noProductsFound');
  const menuCounterText = document.getElementById('menuCounterText');

  // Render Bestsellers (Home & Menu)
  const renderBestsellers = () => {
    if (!bestsellersGrid) return;
    const bestsellers = JUICES.filter(j => j.bestseller);

    bestsellersGrid.innerHTML = bestsellers.map(item => `
      <article class="bestseller-card">
        <span class="card-ribbon ${item.ribbonClass}">${item.ribbon}</span>
        <div class="card-img-box">
          <img 
            src="${item.image}" 
            alt="${item.name}"
            loading="lazy"
            onerror="this.onerror=null; this.parentElement.classList.add('fallback-active');"
          >
          <div class="card-fallback-box ${item.tint}">${item.icon}</div>
        </div>
        <div class="card-body">
          <div class="card-tags">
            <span class="pill-tag">${item.tags[0]}</span>
            <span class="pill-tag">${item.volume}</span>
          </div>
          <h3 class="card-name">${item.name}</h3>
          <p class="card-ingredients">${item.ingredients}</p>
          <div class="card-footer">
            <div class="price-group">
              <span class="price-current">₹${item.price}</span>
              <span class="price-mrp">₹${item.mrp}</span>
            </div>
            <div class="card-btn-group">
              <button class="btn btn-customize btn-open-customizer" data-id="${item.id}">
                ⚙️ Custom
              </button>
              <button class="btn btn-add-cart btn-quick-add" data-id="${item.id}">
                + Add
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  };

  // Filter & Sort Products Engine
  const getFilteredProducts = () => {
    return JUICES.filter(item => {
      if (currentFilter !== 'all' && item.category !== currentFilter) return false;
      if (activeDietary && !item.tags.includes(activeDietary)) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesIng = item.ingredients.toLowerCase().includes(query);
        const matchesTag = item.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesIng && !matchesTag) return false;
      }

      return true;
    }).sort((a, b) => {
      if (currentSort === 'price-asc') return a.price - b.price;
      if (currentSort === 'price-desc') return b.price - a.price;
      if (currentSort === 'calories-asc') return a.calories - b.calories;
      if (currentSort === 'name-asc') return a.name.localeCompare(b.name);
      return b.rating - a.rating;
    });
  };

  // Render Products Grid (Menu page)
  const renderProducts = () => {
    if (!productsGrid) return;
    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
      productsGrid.style.display = 'none';
      if (noProductsFound) noProductsFound.style.display = 'block';
    } else {
      productsGrid.style.display = 'grid';
      if (noProductsFound) noProductsFound.style.display = 'none';

      productsGrid.innerHTML = filtered.map(item => `
        <article class="product-card" data-category="${item.category}">
          <div class="product-thumb">
            <img 
              src="${item.image}" 
              alt="${item.name}"
              loading="lazy"
              onerror="this.onerror=null; this.parentElement.classList.add('fallback-active');"
            >
            <div class="thumb-fallback ${item.tint}">${item.icon}</div>
            <span class="category-badge">${item.category.toUpperCase().replace('-', ' ')}</span>
          </div>
          <div class="product-content">
            <div class="product-top">
              <h3 class="product-title">${item.name}</h3>
              <span class="product-price">₹${item.price}</span>
            </div>
            <p class="product-desc">${item.ingredients}</p>
            <div class="product-meta">
              <span>⚡ ${item.calories} kcal</span>
              <span>•</span>
              <span>${item.volume}</span>
              <span>•</span>
              <span>★ ${item.rating}</span>
            </div>
            <div class="product-cta-dynamic">
              <button class="btn btn-customize btn-open-customizer" data-id="${item.id}" title="Customize size and boosters">
                ⚙️ Customize
              </button>
              <button class="btn btn-add-cart btn-quick-add" data-id="${item.id}">
                + Add to Cart
              </button>
            </div>
            <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi PureSqueeze! I'd like to order ${item.name} (₹${item.price}).`)}" target="_blank" rel="noopener noreferrer" class="btn btn-wa-icon btn-wa-full-card">
              <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12.031 2C6.51 2 2.015 6.495 2.015 12.016c0 1.83.498 3.619 1.442 5.187L2 22l4.943-1.428a9.98 9.98 0 004.088 1.045h.004c5.52 0 10.015-4.495 10.015-10.016A10.02 10.02 0 0012.031 2z"/></svg>
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </article>
      `).join('');
    }

    if (menuCounterText) {
      if (searchQuery.trim() !== '') {
        menuCounterText.textContent = `Found ${filtered.length} drinks matching "${searchQuery}"`;
      } else if (currentFilter === 'all') {
        menuCounterText.textContent = `Showing all ${filtered.length} fresh beverages`;
      } else {
        menuCounterText.textContent = `Showing ${filtered.length} beverages in selected category`;
      }
    }

    attachProductActionListeners();
  };

  const updateCategoryPillCounts = () => {
    const elAll = document.getElementById('countAll');
    const elCP = document.getElementById('countColdPressed');
    const elSm = document.getElementById('countSmoothies');
    const elSh = document.getElementById('countShots');
    const elCl = document.getElementById('countCleanses');

    if (elAll) elAll.textContent = JUICES.length;
    if (elCP) elCP.textContent = JUICES.filter(j => j.category === 'cold-pressed').length;
    if (elSm) elSm.textContent = JUICES.filter(j => j.category === 'smoothies').length;
    if (elSh) elSh.textContent = JUICES.filter(j => j.category === 'shots').length;
    if (elCl) elCl.textContent = JUICES.filter(j => j.category === 'cleanses').length;
  };

  // Search & Filter Listeners (Menu Page)
  const juiceSearchInput = document.getElementById('juiceSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const juiceSortSelect = document.getElementById('juiceSortSelect');
  const filterPills = document.querySelectorAll('.filter-pill');
  const dietaryChips = document.querySelectorAll('.dietary-chip');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  if (juiceSearchInput) {
    juiceSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (juiceSearchInput) juiceSearchInput.value = '';
      searchQuery = '';
      renderProducts();
    });
  }

  if (juiceSortSelect) {
    juiceSortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      currentFilter = pill.getAttribute('data-filter');
      renderProducts();
    });
  });

  dietaryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const diet = chip.getAttribute('data-diet');
      if (activeDietary === diet) {
        activeDietary = null;
        chip.classList.remove('active');
      } else {
        dietaryChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeDietary = diet;
      }
      renderProducts();
    });
  });

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentFilter = 'all';
      searchQuery = '';
      activeDietary = null;
      currentSort = 'featured';
      if (juiceSearchInput) juiceSearchInput.value = '';
      if (juiceSortSelect) juiceSortSelect.value = 'featured';
      filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
      dietaryChips.forEach(c => c.classList.remove('active'));
      renderProducts();
    });
  }

  // =========================================================================
  // 5. DRINK CUSTOMIZER MODAL ("Customize Your Squeeze")
  // =========================================================================
  const customizerModal = document.getElementById('customizerModal');
  const customizerCloseBtn = document.getElementById('customizerCloseBtn');
  const customizerImg = document.getElementById('customizerImg');
  const customizerTag = document.getElementById('customizerTag');
  const customizerTitle = document.getElementById('customizerTitle');
  const customizerDesc = document.getElementById('customizerDesc');
  const customizerLiveTotal = document.getElementById('customizerLiveTotal');
  const addCustomizedToCartBtn = document.getElementById('addCustomizedToCartBtn');

  const openCustomizer = (drinkId) => {
    if (!customizerModal) return;
    const drink = JUICES.find(j => j.id === drinkId);
    if (!drink) return;
    customizerActiveDrink = drink;

    if (customizerImg) customizerImg.src = drink.image;
    if (customizerTag) customizerTag.textContent = drink.category.toUpperCase();
    if (customizerTitle) customizerTitle.textContent = drink.name;
    if (customizerDesc) customizerDesc.textContent = drink.ingredients;

    const defaultSize = document.querySelector('input[name="bottleSize"][value="350ml"]');
    if (defaultSize) defaultSize.checked = true;

    document.querySelectorAll('input[name="booster"]').forEach(b => b.checked = false);

    const defaultSweet = document.querySelector('input[name="sweetness"][value="Pure Raw (No Honey)"]');
    if (defaultSweet) defaultSweet.checked = true;

    calculateCustomizerPrice();

    customizerModal.classList.add('active');
    customizerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCustomizer = () => {
    if (!customizerModal) return;
    customizerModal.classList.remove('active');
    customizerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const calculateCustomizerPrice = () => {
    if (!customizerActiveDrink) return 0;
    let basePrice = customizerActiveDrink.price;

    const sizeRadio = document.querySelector('input[name="bottleSize"]:checked');
    const sizeAddon = sizeRadio ? parseInt(sizeRadio.getAttribute('data-addon'), 10) : 0;

    let boosterTotal = 0;
    document.querySelectorAll('input[name="booster"]:checked').forEach(b => {
      boosterTotal += parseInt(b.getAttribute('data-price'), 10);
    });

    const total = basePrice + sizeAddon + boosterTotal;
    if (customizerLiveTotal) {
      customizerLiveTotal.textContent = `₹${total}`;
    }
    return total;
  };

  document.querySelectorAll('input[name="bottleSize"], input[name="booster"]').forEach(input => {
    input.addEventListener('change', calculateCustomizerPrice);
  });

  if (customizerCloseBtn) customizerCloseBtn.addEventListener('click', closeCustomizer);
  if (customizerModal) {
    customizerModal.addEventListener('click', (e) => {
      if (e.target === customizerModal) closeCustomizer();
    });
  }

  if (addCustomizedToCartBtn) {
    addCustomizedToCartBtn.addEventListener('click', () => {
      if (!customizerActiveDrink) return;

      const size = document.querySelector('input[name="bottleSize"]:checked')?.value || '350ml';
      const boosters = Array.from(document.querySelectorAll('input[name="booster"]:checked')).map(b => b.value);
      const sweetness = document.querySelector('input[name="sweetness"]:checked')?.value || 'Pure Raw';

      const customNotes = [
        `Size: ${size}`,
        boosters.length > 0 ? `Boosters: ${boosters.join(', ')}` : null,
        `Sweetness: ${sweetness}`
      ].filter(Boolean).join(' • ');

      const calculatedPrice = calculateCustomizerPrice();

      addToCart({
        id: customizerActiveDrink.id + '-' + Date.now(),
        name: customizerActiveDrink.name,
        price: calculatedPrice,
        notes: customNotes
      });

      closeCustomizer();
    });
  }

  // =========================================================================
  // 6. ADVANCED CART & WHATSAPP CHECKOUT ENGINE (SHARED ACROSS PAGES)
  // =========================================================================
  const cartDrawer = document.getElementById('cartDrawer');
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotalText = document.getElementById('cartSubtotalText');
  const cartDiscountText = document.getElementById('cartDiscountText');
  const discountRow = document.getElementById('discountRow');
  const cartDeliveryFeeText = document.getElementById('cartDeliveryFeeText');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const deliveryProgressText = document.getElementById('deliveryProgressText');
  const deliveryProgressFill = document.getElementById('deliveryProgressFill');
  const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
  const floatingCartPill = document.getElementById('floatingCartPill');
  const floatingCartPillText = document.getElementById('floatingCartPillText');
  const floatingCartPillBtn = document.getElementById('floatingCartPillBtn');
  const promoCodeInput = document.getElementById('promoCodeInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoMessage = document.getElementById('promoMessage');

  const openCart = () => {
    if (!cartDrawer) return;
    cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
    if (cartOverlay) cartOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
    if (cartOverlay) cartOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (floatingCartPillBtn) floatingCartPillBtn.addEventListener('click', openCart);

  const addToCart = (itemData) => {
    if (!itemData.notes) {
      const existing = cart.find(item => item.id === itemData.id && !item.notes);
      if (existing) {
        existing.qty += 1;
        saveCart();
        updateCartUI();
        playChime('success');
        showToast(`Added another ${itemData.name} (Total: ${existing.qty})`, '🥤');
        return;
      }
    }

    cart.push({
      id: itemData.id,
      name: itemData.name,
      price: itemData.price,
      notes: itemData.notes || '',
      qty: 1
    });

    saveCart();
    updateCartUI();
    playChime('success');
    showToast(`Added ${itemData.name} to basket!`, '🛍️');
  };

  const modifyQty = (id, delta) => {
    const idx = cart.findIndex(item => item.id === id);
    if (idx > -1) {
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) {
        const removed = cart.splice(idx, 1);
        showToast(`Removed ${removed[0].name}`, '🗑️');
      }
      saveCart();
      updateCartUI();
    }
  };

  const updateCartUI = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartCount) cartCount.textContent = totalItems;

    if (floatingCartPill) {
      if (totalItems > 0) {
        floatingCartPill.classList.add('active');
        if (floatingCartPillText) {
          floatingCartPillText.textContent = `${totalItems} ${totalItems === 1 ? 'drink' : 'drinks'} in basket • ₹${subtotal.toLocaleString('en-IN')}`;
        }
      } else {
        floatingCartPill.classList.remove('active');
      }
    }

    if (deliveryProgressFill && deliveryProgressText) {
      if (subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0) {
        deliveryProgressFill.style.width = subtotal === 0 ? '0%' : '100%';
        deliveryProgressText.textContent = subtotal === 0 ? `Add ₹${FREE_DELIVERY_THRESHOLD} for Free Delivery!` : `🎉 You've unlocked FREE Chilled Delivery!`;
      } else {
        const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
        const pct = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
        deliveryProgressFill.style.width = `${pct}%`;
        deliveryProgressText.textContent = `Add ₹${remaining} more for FREE Delivery!`;
      }
    }

    const deliveryFee = (subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0) ? 0 : STANDARD_DELIVERY_FEE;

    let discountAmount = 0;
    if (appliedPromo && subtotal > 0) {
      if (appliedPromo.type === 'percent') {
        discountAmount = Math.round(subtotal * appliedPromo.value);
      } else if (appliedPromo.type === 'fixed') {
        discountAmount = appliedPromo.value;
      }
    }

    const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

    if (cartSubtotalText) cartSubtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (cartDeliveryFeeText) cartDeliveryFeeText.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;

    if (discountRow && cartDiscountText) {
      if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        cartDiscountText.textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (cartGrandTotal) cartGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    if (whatsappCheckoutBtn) {
      whatsappCheckoutBtn.disabled = cart.length === 0;
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <span class="empty-icon">🥤</span>
          <p>Your basket is currently empty.</p>
          <a href="menu.html" class="btn btn-secondary-sm" id="emptyCartBrowse">Explore Fresh Juices</a>
        </div>
      `;
      return;
    }

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-id="${item.id}">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          ${item.notes ? `<span class="cart-item-custom-notes">${item.notes}</span>` : ''}
          <span class="cart-item-price">₹${item.price} × ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn btn-qty-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn btn-qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `).join('');

    cartItemsList.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => modifyQty(btn.getAttribute('data-id'), -1));
    });
    cartItemsList.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => modifyQty(btn.getAttribute('data-id'), 1));
    });
  };

  // Promo Code Application
  if (applyPromoBtn && promoCodeInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (!code) return;

      if (PROMO_CODES[code]) {
        appliedPromo = PROMO_CODES[code];
        promoMessage.textContent = `✓ Applied: ${appliedPromo.desc}`;
        promoMessage.className = 'promo-msg success';
        showToast(`Promo ${code} applied!`, '🎉');
        updateCartUI();
      } else {
        promoMessage.textContent = `✕ Invalid code. Try FRESH15 or CLEANSE50`;
        promoMessage.className = 'promo-msg error';
      }
    });
  }

  // Consolidated WhatsApp Order Checkout
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let discountAmount = 0;
      if (appliedPromo) {
        discountAmount = appliedPromo.type === 'percent' ? Math.round(subtotal * appliedPromo.value) : appliedPromo.value;
      }
      const deliveryFee = (subtotal >= FREE_DELIVERY_THRESHOLD) ? 0 : STANDARD_DELIVERY_FEE;
      const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

      const slot = document.getElementById('deliverySlotSelect')?.value || 'Morning Delivery (7-9 AM)';

      let itemsText = cart.map(item => {
        let line = `• ${item.qty}x ${item.name} (₹${item.price * item.qty})`;
        if (item.notes) line += `\n   [${item.notes}]`;
        return line;
      }).join('\n');

      const message = `*🌿 PURESQUEEZE JUICE BAR ORDER*\n` +
        `-----------------------------------------\n` +
        `*Items Ordered:*\n${itemsText}\n\n` +
        `*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n` +
        (discountAmount > 0 ? `*Promo Discount:* -₹${discountAmount.toLocaleString('en-IN')}\n` : '') +
        `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n` +
        `*Grand Total:* ₹${grandTotal.toLocaleString('en-IN')}\n` +
        `*Preferred Slot:* ${slot}\n` +
        `-----------------------------------------\n` +
        `Please confirm order availability and share delivery address details. Thank you!`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      showToast('Opening WhatsApp with your order...', '💬');
    });
  }

  // =========================================================================
  // 7. INTERACTIVE JUICE FINDER QUIZ WIZARD (HOME & CLEANSES PAGES)
  // =========================================================================
  const stepPanes = [
    document.getElementById('quizStep1'),
    document.getElementById('quizStep2'),
    document.getElementById('quizStep3')
  ];
  const stepDots = document.querySelectorAll('.quiz-step-dot');
  const resultPane = document.getElementById('quizResultPane');
  const resultCard = document.getElementById('quizResultCard');
  const quizRestartBtn = document.getElementById('quizRestartBtn');

  const setQuizStep = (stepNumber) => {
    stepPanes.forEach((pane, idx) => {
      if (pane) pane.classList.toggle('active', idx === (stepNumber - 1));
    });
    if (resultPane) resultPane.classList.remove('active');

    stepDots.forEach(dot => {
      const s = parseInt(dot.getAttribute('data-step'), 10);
      dot.classList.toggle('active', s === stepNumber);
    });
  };

  document.querySelectorAll('#quizStep1 .quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers.goal = btn.getAttribute('data-goal');
      setQuizStep(2);
      playChime('chime');
    });
  });

  document.querySelectorAll('#quizStep2 .quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers.flavor = btn.getAttribute('data-flavor');
      setQuizStep(3);
      playChime('chime');
    });
  });

  document.querySelectorAll('#quizStep3 .quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers.format = btn.getAttribute('data-format');
      calculateQuizResult();
      playChime('success');
    });
  });

  document.querySelectorAll('.quiz-back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const backStep = parseInt(btn.getAttribute('data-back'), 10);
      setQuizStep(backStep);
    });
  });

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      quizAnswers = { goal: null, flavor: null, format: null };
      setQuizStep(1);
    });
  }

  const calculateQuizResult = () => {
    stepPanes.forEach(p => { if (p) p.classList.remove('active'); });
    if (resultPane) resultPane.classList.add('active');

    let recommendedDrink = JUICES[0];

    if (quizAnswers.format === 'cleanse') {
      recommendedDrink = JUICES.find(j => j.id === 8) || JUICES[6];
    } else if (quizAnswers.format === 'shot') {
      recommendedDrink = JUICES.find(j => j.category === 'shots') || JUICES[5];
    } else if (quizAnswers.goal === 'detox' || quizAnswers.flavor === 'earthy') {
      recommendedDrink = JUICES.find(j => j.id === 2);
    } else if (quizAnswers.goal === 'energy') {
      recommendedDrink = JUICES.find(j => j.id === 3);
    } else if (quizAnswers.goal === 'glow' || quizAnswers.flavor === 'tropical') {
      recommendedDrink = JUICES.find(j => j.id === 4) || JUICES[4];
    } else {
      recommendedDrink = JUICES.find(j => j.id === 1);
    }

    if (resultCard && recommendedDrink) {
      resultCard.innerHTML = `
        <img src="${recommendedDrink.image}" alt="${recommendedDrink.name}" class="quiz-result-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80';">
        <div>
          <span class="quiz-match-badge">🎯 98% Match For You</span>
          <h3 class="quiz-result-title">${recommendedDrink.name}</h3>
          <p class="quiz-result-desc">${recommendedDrink.ingredients}</p>
          <div class="product-meta" style="margin-top: 0.5rem;">
            <span>⚡ ${recommendedDrink.calories} kcal</span>
            <span>•</span>
            <span>${recommendedDrink.volume}</span>
          </div>
        </div>
        <div>
          <div class="quiz-result-price">₹${recommendedDrink.price}</div>
          <button class="btn btn-add-cart btn-quiz-add" data-id="${recommendedDrink.id}" style="width: 100%; margin-bottom: 0.5rem;">
            + Add to Basket
          </button>
          <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi PureSqueeze! I took your Juice Quiz and was recommended ${recommendedDrink.name} (₹${recommendedDrink.price}). I'd like to order it!`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-header" style="font-size: 0.8rem; width: 100%;">
            Order on WhatsApp
          </a>
        </div>
      `;

      const addBtn = resultCard.querySelector('.btn-quiz-add');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          addToCart({
            id: recommendedDrink.id,
            name: recommendedDrink.name,
            price: recommendedDrink.price
          });
        });
      }
    }
  };

  // =========================================================================
  // 8. DYNAMIC REVIEWS & SUBMISSION SIMULATOR (REVIEWS PAGE)
  // =========================================================================
  const reviewsGrid = document.getElementById('reviewsGrid');
  const reviewFilterBtns = document.querySelectorAll('.review-filter-btn');
  const reviewModal = document.getElementById('reviewModal');
  const openReviewModalBtn = document.getElementById('openReviewModalBtn');
  const reviewModalCloseBtn = document.getElementById('reviewModalCloseBtn');
  const newReviewForm = document.getElementById('newReviewForm');

  const renderReviews = (filter = 'all') => {
    if (!reviewsGrid) return;
    const filtered = reviewsData.filter(r => filter === 'all' || r.category === filter);

    reviewsGrid.innerHTML = filtered.map(rev => `
      <article class="review-card">
        <div class="review-stars">${rev.stars}</div>
        <p class="review-comment">"${rev.text}"</p>
        <div class="review-author-meta">
          <span class="author-name">${rev.author}</span>
          <span class="review-tag">${rev.tag}</span>
        </div>
      </article>
    `).join('');
  };

  reviewFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      reviewFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-review');
      renderReviews(cat);
    });
  });

  if (openReviewModalBtn) {
    openReviewModalBtn.addEventListener('click', () => {
      if (!reviewModal) return;
      reviewModal.classList.add('active');
      reviewModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeReviewModal = () => {
    if (reviewModal) {
      reviewModal.classList.remove('active');
      reviewModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (reviewModalCloseBtn) reviewModalCloseBtn.addEventListener('click', closeReviewModal);

  if (newReviewForm) {
    newReviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('reviewAuthor')?.value.trim() || 'Anonymous Juice Lover';
      const category = document.getElementById('reviewCategory')?.value || 'daily';
      const starsNum = parseInt(document.getElementById('reviewStars')?.value || '5', 10);
      const text = document.getElementById('reviewComment')?.value.trim() || 'Incredible freshness and clean energy.';

      const stars = '★'.repeat(starsNum) + '☆'.repeat(5 - starsNum);

      reviewsData.unshift({
        author: `${author} (Bengaluru)`,
        category: category,
        stars: stars,
        text: text,
        tag: 'Just Submitted'
      });

      renderReviews('all');
      closeReviewModal();
      playChime('success');
      showToast('Thank you! Your review was shared.', '✍️');
      newReviewForm.reset();
    });
  }

  // =========================================================================
  // 9. REAL-TIME BATCH COUNTDOWN TIMER & HUB STATUS
  // =========================================================================
  const batchCountdownTimer = document.getElementById('batchCountdownTimer');
  const storeStatusText = document.getElementById('storeStatusText');

  const startBatchCountdown = () => {
    if (!batchCountdownTimer) return;
    let secondsRemaining = (2 * 3600) + (45 * 60) + 18;

    setInterval(() => {
      secondsRemaining--;
      if (secondsRemaining <= 0) secondsRemaining = 3 * 3600;

      const h = String(Math.floor(secondsRemaining / 3600)).padStart(2, '0');
      const m = String(Math.floor((secondsRemaining % 3600) / 60)).padStart(2, '0');
      const s = String(secondsRemaining % 60).padStart(2, '0');

      batchCountdownTimer.textContent = `${h}h ${m}m ${s}s`;
    }, 1000);
  };

  const updateStoreStatus = () => {
    if (!storeStatusText) return;
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 21) {
      storeStatusText.textContent = '🟢 Open Now • Express Delivery (35-45m)';
    } else {
      storeStatusText.textContent = '🌙 Pre-orders Active • Morning 7:00 AM Press';
    }
  };

  // =========================================================================
  // 10. ATTACH CARD ACTION LISTENERS
  // =========================================================================
  const attachProductActionListeners = () => {
    document.querySelectorAll('.btn-quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const drink = JUICES.find(j => j.id === id);
        if (drink) {
          addToCart({
            id: drink.id,
            name: drink.name,
            price: drink.price
          });
        }
      });
    });

    document.querySelectorAll('.btn-open-customizer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        openCustomizer(id);
      });
    });
  };

  // =========================================================================
  // 11. STICKY HEADER & MOBILE NAVIGATION DRAWER
  // =========================================================================
  const header = document.getElementById('header');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const openMobileNav = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (drawerOverlay) drawerOverlay.setAttribute('aria-hidden', 'false');
    if (mobileNavToggle) mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (drawerOverlay) drawerOverlay.setAttribute('aria-hidden', 'true');
    if (mobileNavToggle) mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileNavToggle) mobileNavToggle.addEventListener('click', openMobileNav);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileNav);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => closeMobileNav());
  });

  // =========================================================================
  // 12. QUICK DELIVERY INQUIRY FORM (WHATSAPP REDIRECT)
  // =========================================================================
  const quickOrderForm = document.getElementById('quickOrderForm');
  if (quickOrderForm) {
    quickOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('userName')?.value.trim() || 'Customer';
      const userLocation = document.getElementById('userLocation')?.value.trim() || 'Nearby';
      const userDrink = document.getElementById('userDrinkSelect')?.value || 'Fresh Juice';

      const message = `Hi PureSqueeze! 🥤\nMy Name: ${userName}\nDelivery Area: ${userLocation}\nInterested In: ${userDrink}\n\nPlease let me know the fastest delivery slot today!`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      showToast(`Thanks ${userName}! Redirecting to WhatsApp...`, '⚡');
      quickOrderForm.reset();
    });
  }

  // =========================================================================
  // 13. NEWSLETTER SUBSCRIPTION
  // =========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value) {
        showToast('Subscribed! Welcome to the morning juice circle.', '🌱');
        newsletterForm.reset();
      }
    });
  }

  // =========================================================================
  // 14. INITIALIZATION
  // =========================================================================
  renderBestsellers();
  renderProducts();
  updateCategoryPillCounts();
  renderReviews();
  startBatchCountdown();
  updateStoreStatus();
  updateCartUI();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeCustomizer();
      closeReviewModal();
      closeMobileNav();
    }
  });

});
