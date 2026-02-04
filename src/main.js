// Import the active theme (change in theme-config.js to switch themes)
// Design 1: './themes/theme-1-maroon-gold.css' (Dark Maroon & Gold)
// Design 2: './themes/theme-2-cream-terracotta.css' (Light Cream & Terracotta)
import './themes/theme-2-cream-terracotta.css'

// ===== Products Data - Based on Sri Lakshmi Venkateshwara's offerings =====
// Image URLs will be updated with imgbb links later
const products = [
  // Raw Materials
  {
    id: 1,
    name: "Premium Teak Wood",
    description: "High-quality Indian Teak wood for furniture and doors",
    price: "Contact for Price",
    category: "raw-materials",
    emoji: "🪵",
    image: null // Will be replaced with imgbb URL
  },
  {
    id: 2,
    name: "Neem Wood",
    description: "Durable neem wood for traditional furniture making",
    price: "Contact for Price",
    category: "raw-materials",
    emoji: "🌳",
    image: null
  },
  {
    id: 3,
    name: "Plywood Sheets",
    description: "Quality plywood in various thicknesses for all applications",
    price: "Contact for Price",
    category: "raw-materials",
    emoji: "📋",
    image: null
  },
  {
    id: 4,
    name: "Glass Panels",
    description: "Clear and decorative glass for windows, doors & interiors",
    price: "Contact for Price",
    category: "raw-materials",
    emoji: "🪟",
    image: null
  },

  // Furniture
  {
    id: 5,
    name: "Wooden Cots",
    description: "Solid wood cots in single and double sizes",
    price: "Starting ₹15,000",
    category: "furniture",
    emoji: "🛏️",
    image: null
  },
  {
    id: 6,
    name: "Dining Tables",
    description: "Beautiful dining tables for 4 to 8 seaters",
    price: "Starting ₹12,000",
    category: "furniture",
    emoji: "🪑",
    image: null
  },
  {
    id: 7,
    name: "TV Cabinets",
    description: "Modern TV units with storage compartments",
    price: "Starting ₹8,000",
    category: "furniture",
    emoji: "📺",
    image: null
  },
  {
    id: 8,
    name: "Sofas & Chairs",
    description: "Comfortable seating with wooden frames",
    price: "Contact for Price",
    category: "furniture",
    emoji: "🛋️",
    image: null
  },
  {
    id: 9,
    name: "Wooden Benches",
    description: "Traditional wooden benches for home & outdoors",
    price: "Starting ₹5,000",
    category: "furniture",
    emoji: "🪑",
    image: null
  },

  // Interior Design (Doors, Windows, Pooja)
  {
    id: 10,
    name: "Teak Doors",
    description: "Premium teak wood doors with beautiful designs",
    price: "Starting ₹20,000",
    category: "interior",
    emoji: "🚪",
    image: null
  },
  {
    id: 11,
    name: "Wooden Windows",
    description: "Traditional and modern window frames",
    price: "Contact for Price",
    category: "interior",
    emoji: "🪟",
    image: null
  },
  {
    id: 12,
    name: "Pooja Mandir",
    description: "Beautifully crafted wooden pooja mandirs",
    price: "Starting ₹10,000",
    category: "interior",
    emoji: "🙏",
    image: null
  },
  {
    id: 13,
    name: "Pooja Room Doors",
    description: "Decorative doors for pooja rooms with traditional designs",
    price: "Contact for Price",
    category: "interior",
    emoji: "🚪",
    image: null
  },
  {
    id: 14,
    name: "Wooden Frames",
    description: "Door frames and window frames in various sizes",
    price: "Contact for Price",
    category: "interior",
    emoji: "🖼️",
    image: null
  },
  {
    id: 15,
    name: "Cupboard Works",
    description: "Built-in and standalone cupboards for storage",
    price: "Contact for Price",
    category: "interior",
    emoji: "🗄️",
    image: null
  },

  // Hardware
  {
    id: 16,
    name: "Door Locks & Handles",
    description: "Quality locks and handles for doors",
    price: "Various Prices",
    category: "hardware",
    emoji: "🔐",
    image: null
  },
  {
    id: 17,
    name: "Hinges & Fittings",
    description: "Durable hinges and cabinet fittings",
    price: "Various Prices",
    category: "hardware",
    emoji: "🔩",
    image: null
  },
  {
    id: 18,
    name: "Screws & Nails",
    description: "All sizes of screws, nails, and fasteners",
    price: "Various Prices",
    category: "hardware",
    emoji: "🔧",
    image: null
  },
  {
    id: 19,
    name: "Ready Made Doors",
    description: "Pre-made doors ready for installation",
    price: "Starting ₹5,000",
    category: "hardware",
    emoji: "🚪",
    image: null
  }
];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const enquiryForm = document.getElementById('enquiry-form');
const toast = document.getElementById('toast');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  initScrollEffects();
  initNavigation();
  initFilters();
  initForm();
});

// ===== Render Products =====
function renderProducts(productsToRender) {
  productsGrid.innerHTML = productsToRender.map(product => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-image placeholder-img" data-placeholder="${product.id}">
        <span class="product-category">${getCategoryLabel(product.category)}</span>
        ${product.image
      ? `<img src="${product.image}" alt="${product.name}">`
      : `<span>${product.emoji}</span><p>Photo Coming Soon</p>`
    }
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <button class="product-btn" onclick="enquireProduct('${product.name}')">Enquire</button>
        </div>
      </div>
    </article>
  `).join('');

  // Add reveal animation
  const cards = productsGrid.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

function getCategoryLabel(category) {
  const labels = {
    'raw-materials': 'Raw Materials',
    'furniture': 'Furniture',
    'interior': 'Interior Design',
    'hardware': 'Hardware'
  };
  return labels[category] || category;
}

// ===== Product Enquiry =====
window.enquireProduct = function (productName) {
  const messageField = document.getElementById('message');
  const subjectField = document.getElementById('subject');

  // Set form values based on product
  if (productName.toLowerCase().includes('wood') || productName.toLowerCase().includes('plywood') || productName.toLowerCase().includes('glass')) {
    subjectField.value = 'raw-materials';
  } else if (productName.toLowerCase().includes('cot') || productName.toLowerCase().includes('table') || productName.toLowerCase().includes('sofa') || productName.toLowerCase().includes('bench') || productName.toLowerCase().includes('cabinet') || productName.toLowerCase().includes('chair')) {
    subjectField.value = 'furniture';
  } else if (productName.toLowerCase().includes('door') || productName.toLowerCase().includes('window') || productName.toLowerCase().includes('pooja') || productName.toLowerCase().includes('frame') || productName.toLowerCase().includes('cupboard')) {
    subjectField.value = 'interior';
  } else {
    subjectField.value = 'hardware';
  }

  messageField.value = `Namaste! I am interested in "${productName}". 

Please share:
- Availability
- Pricing details
- Any customization options

Thank you! 🙏`;

  // Scroll to enquiry section
  document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' });

  // Focus on name field
  setTimeout(() => {
    document.getElementById('name').focus();
  }, 500);
};

// ===== Scroll Effects =====
function initScrollEffects() {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });
}

// ===== Navigation =====
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ===== Filter Products =====
function initFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter products
      const filter = btn.dataset.filter;
      const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

      renderProducts(filteredProducts);
    });
  });
}

// ===== Form Handling - WhatsApp Integration =====
function initForm() {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(enquiryForm);
    const data = Object.fromEntries(formData);

    // Create WhatsApp message
    const message = `🙏 *New Enquiry - Sri Lakshmi Venkateshwara*
━━━━━━━━━━━━━━━━━
*Name:* ${data.name}
*Phone:* ${data.phone}
*Location:* ${data.location || 'Not specified'}
*Category:* ${getSubjectLabel(data.subject)}
━━━━━━━━━━━━━━━━━
*Message:*
${data.message}
━━━━━━━━━━━━━━━━━
_Sent from website_`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '917995331747'; // Primary WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Show toast notification
    showToast('Opening WhatsApp to send your enquiry...');

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);

    // Reset form
    enquiryForm.reset();
  });
}

function getSubjectLabel(subject) {
  const labels = {
    'raw-materials': 'Raw Materials (Wood, Plywood, Glass)',
    'furniture': 'Furniture Order',
    'interior': 'Interior Work / Doors / Windows',
    'hardware': 'Hardware Items',
    'service': 'Service / Repair Work',
    'quote': 'Get a Quote',
    'other': 'Other'
  };
  return labels[subject] || 'General Enquiry';
}

// ===== Toast Notification =====
function showToast(message) {
  const toastMessage = toast.querySelector('.toast-message');
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
