/* =============================================
   KUWAIT COUNTRY PROFILE, External JavaScript
   ============================================= */

/* Places Data */
const placesData = [
  {
    title: "Kuwait Towers",
    badge: "Landmark",
    location: "Arabian Gulf Street",
    img: "https://t3.ftcdn.net/jpg/02/45/64/98/360_F_245649823_IfHt7N8BRdzUsL6M20324iY2ep3TVWde.jpg",
    desc: "The Kuwait Towers are the most iconic symbol of the modern Kuwaiti state. Completed in 1979, these three slender towers rise dramatically from the shoreline and remain the most recognized landmark in the country."
  },
  {
    title: "Grand Mosque",
    badge: "Culture",
    location: "Kuwait City",
    img: "https://susandalzell.com/wp-content/uploads/2024/06/img_8838.jpeg",
    desc: "The largest mosque in Kuwait, spanning 45,000 square meters. It is renowned for its Islamic architecture, featuring a massive central dome and exquisite geometric carvings."
  },
  {
    title: "Failaka Island",
    badge: "Leisure",
    location: "Al Rai",
    img: "https://hussainhk.com/wp-content/uploads/2024/12/28_big.jpg",
    desc: "A short ferry ride reveals Bronze Age ruins and a Greek settlement from Alexander the Great's era, alongside pristine sandy Gulf beaches."
  },
  {
    title: "Souq Al-Mubarakiya",
    badge: "Heritage",
    location: "Old Kuwait City",
    img: "https://image-tc.galaxy.tf/wijpeg-858d3664kmbr9ods0yp433ks/souq-al-mubarakiya-2_standard.jpg?crop=101%2C0%2C1600%2C1200",
    desc: "One of the oldest markets in Kuwait, preserved to maintain its historic charm. It remains a bustling trading hub for spices, perfumes, and local goods."
  },
  {
    title: "Al Hamra Tower",
    badge: "Architecture",
    location: "Old Kuwait City",
    img: "https://images.squarespace-cdn.com/content/v1/5a05744df9a61edf3ca242a2/1561900542568-FLNX3WNG6TATYRC4CDO9/DSC_4025.jpg",
    desc: "The world's tallest sculpted skyscraper at 413 meters, its carved twisting facade inspired by traditional Arab geometric design patterns."
  },
  {
    title: "National Museum of Kuwait",
    badge: "Museum",
    location: "Old Kuwait City",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/7b/6b/9a/caption.jpg?w=1200&h=-1&s=1",
    desc: "Home to the legendary Al-Sabah Collection, with thousands of Islamic artifacts, rare manuscripts, ancient jewelry spanning 5,000 years of Gulf history."
  }
];

/* Food Data */
const foodData = [
  {
    title: "Machboos",
    badge: "National Dish",
    location: "Found in every Kuwaiti home and restaurant",
    img: "https://www.remitly.com/blog/wp-content/uploads/2023/09/kuwait-machboos-scaled.jpg?wpId=24328",
    imgFallback: "https://www.remitly.com/blog/wp-content/uploads/2023/09/kuwait-machboos-scaled.jpg?wpId=24328",
    desc: "Machboos is the undisputed national dish of Kuwait and the crown jewel of Gulf cuisine. This magnificent one-pot meal consists of long-grain basmati rice slow-cooked in a richly spiced broth with tender pieces of lamb, chicken, or fresh Gulf fish. The aroma alone is extraordinary, an intoxicating blend of dried black limes (loomi), cumin, turmeric, cinnamon, cardamom, coriander, and rose water that fills every Kuwaiti home. The dish is finished with fried onions and a handful of toasted pine nuts scattered across the top. It is always served as a centerpiece at family meals and celebrations, placed on a large communal platter and shared directly. Eating Machboos is not just a meal, it is a social act, a cultural ritual, and a declaration of Kuwaiti identity all at once."
  },
  {
    title: "Murabyan",
    badge: "Seafood Classic",
    location: "Coastal restaurants and family kitchens",
    img: "https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cache/e7/52/e75202f1504e447e5197960a701a0686.jpg",
    imgFallback: "https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cache/e7/52/e75202f1504e447e5197960a701a0686.jpg",
    desc: "Murabyan is Kuwait's beloved seafood counterpart to Machboos, reflecting the country's deep and ancient connection to the Persian Gulf and the sea that has sustained its people for centuries. The dish is built on a foundation of fragrant rice cooked in a golden broth seasoned with turmeric, cinnamon, dried limes, and a distinctive Gulf spice blend, then layered with generous quantities of fresh local shrimp or whole fish. It is the taste of Kuwait's pearl diving heritage and its coastal past made edible, the kind of dish that instantly transports you to a seaside evening with the sound of waves in the background. Murabyan is almost always prepared for Friday family lunches, the most important meal of the Kuwaiti week, when extended families gather together to share food, conversation, and gratitude."
  },
  {
    title: "Gabout",
    badge: "Comfort Food",
    location: "Traditional Kuwaiti family cooking",
    img: "https://i.ytimg.com/vi/_PuoWxozqpE/maxresdefault.jpg",
    imgFallback: "https://i.ytimg.com/vi/_PuoWxozqpE/maxresdefault.jpg",
    desc: "Gabout is the ultimate Kuwaiti comfort food, a humble, deeply satisfying dish that traces its roots to the traditional kitchens of Bedouin and seafaring families who needed nourishing, filling meals that could be prepared from simple pantry staples. The dish consists of small hand-rolled dough dumplings made from flour, butter, and a pinch of spice, then gently simmered directly in a rich, long-cooked broth of slow-braised lamb or chicken alongside soft-cooked onions and root vegetables. The dumplings absorb the broth's deep flavors as they cook, becoming pillowy, tender, and extraordinarily comforting. Gabout is the dish that Kuwaiti grandmothers are legendary for, the kind of recipe passed down through whispered instruction in the kitchen, never written down, simply felt and tasted."
  },
  {
    title: "Kuwait Dates & Gahwa",
    badge: "Hospitality Ritual",
    location: "Every Kuwaiti home, dewaniya, and gathering",
    img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/07/26/7d.jpg",
    imgFallback: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/07/26/7d.jpg",
    desc: "Gahwa and Medjool dates are the heart of Kuwaiti hospitality. Unlike Western coffee, Gahwa is a pale, fragrant brew made from green beans, cardamom, and saffron. It is served from an ornate dallah into small cups called finjan. More than just a drink, accepting a cup is a vital sign of respect and friendship; refusing it is considered a significant social slight. Together with the caramel-sweet dates, this ritual serves as Kuwait’s ultimate symbol of welcome and connection. It is the first gesture offered to any guest who enters a home. This tradition bridges the gap between strangers and turns them into friends. It remains a timeless practice that defines the warmth of the local culture. Even in a fast-paced world, this slow and deliberate ritual keeps people grounded in their shared values."
  },
  {
    title: "Dewaniyas",
    badge: "Social Institution",
    location: "A uniquely Kuwaiti cultural tradition",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f9ba9532172003.5671da241611e.jpg",
    imgFallback: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f9ba9532172003.5671da241611e.jpg",
    desc: "the Dewaniya is the living soul of Kuwait. It is a unique reception space where people gather for coffee and conversation. These rooms form the backbone of society. The space is egalitarian. Royals and laborers sit together on the same floor. It is a vital hub for politics and business deals. People also use the space to arrange marriages and debate national issues. This institution defines Kuwaiti civic life. No other place in the world is quite like it. It remains the true pulse of the nation. Generations pass down these traditions to keep the community tight. Every guest finds a warm welcome here. These gatherings occur several times a week to ensure that the social fabric remains strong. Even in a modern world, this tradition keeps history alive through shared stories and communal meals. It is the one place where every voice has a chance to be heard."
  }
];

/* Facts Data */
const cards = [
  { type: 'fact', icon: 'fa-star-and-crescent', text: "Kuwait has the world's most valuable currency unit. The Kuwaiti Dinar (KWD) is worth approximately 3.25 US dollars." },
  { type: 'fact', icon: 'fa-oil-well', text: "Kuwait holds approximately 6% of the world's total proven oil reserves, making it one of the most petroleum-rich nations on Earth relative to its size." },
  { type: 'fact', icon: 'fa-landmark', text: "Kuwait City's Al Hamra Tower is the tallest sculpted (carved) skyscraper in the entire world, standing at 413 meters above the Kuwait City skyline." },
  { type: 'fact', icon: 'fa-person-swimming', text: "Pearl diving was Kuwait's primary industry and cultural identity for centuries before the discovery of oil in 1938 completely transformed the nation's economy." },
  { type: 'fact', icon: 'fa-building', text: "Kuwait was the very first Arab country in the Gulf to establish a written constitution and an elected parliament, both achieved in 1962." },
  { type: 'fact', icon: 'fa-globe', text: "Approximately 70% of Kuwait's total population consists of expatriate workers, drawn from over 100 different countries around the world." },
  { type: 'fact', icon: 'fa-piggy-bank', text: "The Kuwait Investment Authority (KIA), established in 1953, is the oldest sovereign wealth fund in the entire world, now managing hundreds of billions in global assets." },
  { type: 'fact', icon: 'fa-calendar', text: "Kuwait was liberated from Iraqi occupation on February 26, 1991, following the Gulf War. This date is celebrated every year as Kuwait's Liberation Day." },
  { type: 'fact', icon: 'fa-droplet', text: "Kuwait has virtually no natural freshwater sources at all. Nearly all of the nation's fresh water supply comes from industrial seawater desalination plants." },
  { type: 'fact', icon: 'fa-thermometer-full', text: "During summer, temperatures in Kuwait regularly exceed 50 degrees Celsius, ranking it among the hottest consistently inhabited places anywhere on the planet." },
];

/* Fact Generator */
let currentCard = 0;

const factText     = document.getElementById('factText');
const factCount    = document.getElementById('factCount');
const factTotal    = document.getElementById('factTotal');
const nextFactBtn  = document.getElementById('nextFact');
const factTypeBadge = document.getElementById('factTypeBadge');
const factIconEl   = document.getElementById('factIcon');

if (factTotal) factTotal.textContent = cards.length;

function showCard(index) {
  const card = cards[index];
  if (!factText) return;

  factText.style.opacity = '0';
  setTimeout(() => {
    factText.textContent = card.text;
    if (factCount) factCount.textContent = index + 1;

    /* Update badge */
    if (factTypeBadge) {
      factTypeBadge.textContent = 'FACT';
      factTypeBadge.className = 'fact-type-badge';
    }

    /* Update icon */
    if (factIconEl) {
      factIconEl.innerHTML = `<i class="fa-solid ${card.icon}"></i>`;
      factIconEl.classList.add('bounce');
      setTimeout(() => factIconEl.classList.remove('bounce'), 400);
    }

    factText.style.opacity = '1';
  }, 220);
}

/* Next Fact Button */
if (nextFactBtn) {
  nextFactBtn.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  });
}

/* Tabs */
const tabBtns     = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === 'tab-' + btn.dataset.tab) panel.classList.add('active');
    });
  });
});

/* Dark Mode */
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

if (localStorage.getItem('kuwaitTheme') === 'dark') {
  body.classList.add('dark-mode');
  if (darkToggle) darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    darkToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('kuwaitTheme', isDark ? 'dark' : 'light');
  });
}

/* Modal / Lightbox */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalImg     = document.getElementById('modalImg');
const modalBadge   = document.getElementById('modalBadge');
const modalTitle   = document.getElementById('modalTitle');
const modalLoc     = document.getElementById('modalLocation');
const modalDesc    = document.getElementById('modalDesc');

function openModal(data) {
  modalImg.src        = data.img;
  modalImg.alt        = data.title;
  modalImg.onerror    = () => { if (data.imgFallback) modalImg.src = data.imgFallback; };
  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.title;
  modalLoc.textContent   = data.location;
  modalDesc.textContent  = data.desc;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* Place Cards */
document.querySelectorAll('.place-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.place);
    openModal(placesData[idx]);
  });
});

/* Food Cards */
document.querySelectorAll('.food-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.food);
    openModal(foodData[idx]);
  });
});

if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* Hero Flag Interaction */
const heroFlag = document.getElementById('heroFlag');
if (heroFlag) {
  heroFlag.addEventListener('click', () => {
    heroFlag.classList.remove('clicked');
    void heroFlag.offsetWidth;
    heroFlag.classList.add('clicked');
    setTimeout(() => heroFlag.classList.remove('clicked'), 650);
  });
}

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Scroll Reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll(
  '.overview-card, .why-card, .place-card, .food-card, .fact-box, .extra-interactive, .quick-facts'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* Navbar Shrink on Scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* Image Fallback */
document.querySelectorAll('img[onerror]').forEach(() => {}); // handled inline

console.log('🇰🇼 Kuwait Country Profile, Loaded. Made by Christian Joseph Ingan & Ryan Valencia');