// Dữ liệu sản phẩm mẫu (Array of Objects)
const products = [
  {
    id: 1,
    name: "Điện thoại Xiaomi Redmi Note 15 Pro+",
    category: "phone",
    price: 9490000,
    image: "images/phone1.jpg",
    description: "Màn hình AMOLED 120Hz, khung viền titan cao cấp, sạc siêu nhanh 120W."
  },
  {
    id: 2,
    name: "Sò lạnh tản nhiệt từ tính Memo DLA6",
    category: "accessory",
    price: 350000,
    image: "images/cooler.jpg",
    description: "Công nghệ sò peltier làm lạnh nhanh, đèn LED RGB, ngàm kẹp linh hoạt."
  },
  {
    id: 3,
    name: "Chuột không dây Gaming Free Wolf X8",
    category: "gear",
    price: 280000,
    image: "images/mouse.jpg",
    description: "Cảm biến quang học 3 mức DPI, pin sạc độ trễ thấp, switch bấm êm."
  },
  {
    id: 4,
    name: "Bàn phím cơ Aula F75 Không dây",
    category: "gear",
    price: 1250000,
    image: "images/keyboard.jpg",
    description: "Gasket mount êm ái, hotswap 5 pin, kết nối 3 chế độ mượt mà."
  },
  {
    id: 5,
    name: "Củ sạc nhanh GaN 100W 3 cổng",
    category: "accessory",
    price: 690000,
    image: "images/charger.jpg",
    description: "Công nghệ GaN III thu nhỏ kích thước, hỗ trợ sạc nhanh laptop và điện thoại."
  },
  {
    id: 6,
    name: "Máy tính bảng iPad Gen 10 64GB",
    category: "phone",
    price: 9890000,
    image: "images/ipad.jpg",
    description: "Chip A14 Bionic mạnh mẽ, màn hình Liquid Retina 10.9 inch sắc nét."
  },
  {
    id: 7,
    name: "iPhone 18 Pro Max 256GB",
    category: "phone",
    price: 41990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-18-pro-01_2.jpg",
    description: "Thiết kế titan thế hệ mới, camera tiềm vọng nâng cấp, hiệu năng đỉnh cao."
  },
  {
    id: 8,
    name: "iPhone Duo 256GB",
    category: "phone",
    price: 64990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-duo-01.jpg",
    description: "Điện thoại màn hình gập cao cấp đầu tiên từ Apple, công nghệ bản lề tàng hình."
  },

  // --- Ảnh 3: Phụ kiện & Gear Apple ---
  {
    id: 9,
    name: "Ốp lưng iPhone 18 Pro Apple Silicone With Magsafe",
    category: "accessory",
    price: 1499000,
    image: "https://tse3.mm.bing.net/th/id/OIP.5UB0Eey1nsXM-fxnaObFNgHaHa?r=0&pid=Api&h=220&P=0",
    description: "Chất liệu silicone mềm mại, nam châm MagSafe hít chắc chắn, chống sốc tốt."
  },
  {
    id: 10,
    name: "Ốp lưng iPhone 18 Pro Max Apple With Magsafe Clear",
    category: "accessory",
    price: 1499000,
    image: "https://tse1.mm.bing.net/th/id/OIP.e6Dw3zfysYAQy5GC1Q8wXAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Nhựa trong suốt chống ố vàng, khoe trọn màu máy sang trọng, hỗ trợ MagSafe."
  },
  {
    id: 11,
    name: "Bàn phím iPad Pro 11 M4/M5 Apple Magic Keyboard",
    category: "gear",
    price: 8190000,
    image: "https://tse4.mm.bing.net/th/id/OIP.7IJin2pLUiYBixL9cGDOmwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế lơ lửng độc đáo, trackpad tích hợp hỗ trợ đa điểm, gõ êm ái."
  },
  {
    id: 12,
    name: "Chuột Apple Magic Mouse 3 2024 (MXK53)",
    category: "gear",
    price: 1690000,
    image: "https://tse4.mm.bing.net/th/id/OIP.X4q8XO7PY0mUKOGe8PqwVgHaHa?r=0&pid=Api&h=220&P=0",
    description: "Bề mặt cảm ứng Multi-Touch mượt mà, kết nối Bluetooth ổn định, sạc Type-C."
  },
  {
    id: 13,
    name: "Cáp USB-C to Type-C Apple 60W dây dù 1m",
    category: "accessory",
    price: 540000,
    image: "https://tse2.mm.bing.net/th/id/OIP.rIllASnU_NvMAhHokBtqEgHaFl?r=0&pid=Api&h=220&P=0",
    description: "Dây bện dù siêu bền, hỗ trợ sạc nhanh công suất tối đa 60W và truyền dữ liệu."
  },

  // --- Ảnh 4: Gimbal & Phụ kiện quay chụp DJI ---
  {
    id: 14,
    name: "Tay cầm chống rung DJI OM 7 (Osmo Mobile 7)",
    category: "accessory",
    price: 1320000,
    image: "https://tse4.mm.bing.net/th/id/OIP.VBfdjDGXLGQDSrURGTYQbAAAAA?r=0&pid=Api&h=220&P=0",
    description: "Chống rung 3 trục, thuật toán ActiveTrack 7.0 theo dõi chủ thể thông minh."
  },
  {
    id: 15,
    name: "Tay cầm chống rung máy ảnh DJI Ronin-RS4 Pro",
    category: "gear",
    price: 20190000,
    image: "https://tse1.mm.bing.net/th/id/OIP.Q07EQMsZ1P7GijPPadU2mgAAAA?r=0&pid=Api&h=220&P=0",
    description: "Tải trọng lên tới 4.5kg, cánh tay trục bằng sợi carbon, khóa trục tự động thế hệ 2."
  },
  {
    id: 16,
    name: "Tay cầm chống rung DJI OM 8",
    category: "accessory",
    price: 2360000,
    image: "https://tse2.mm.bing.net/th/id/OIP.3vWOWFhwXA249zbqGP73CQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Gậy kéo dài tích hợp, thời lượng pin 10 giờ, thiết kế gấp gọn tiện dụng."
  },
  {
    id: 17,
    name: "Tay cầm chống rung máy ảnh DJI Ronin RS4 mini",
    category: "gear",
    price: 5790000,
    image: "https://tse4.mm.bing.net/th/id/OIP.3agBKle1DwadBpPFplBg3QHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế siêu nhẹ chỉ nặng vài lạng, hỗ trợ quay khung dọc tự nhiên không cần phụ kiện."
  },
  {
    id: 18,
    name: "Tay cầm chống rung máy ảnh DJI Ronin-RS4 Combo",
    category: "gear",
    price: 14290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_558_3_.png",
    description: "Phiên bản Combo đi kèm Focus Pro Motor, truyền hình ảnh mượt mà cho quay phim chuyên nghiệp."
  },

  // --- Ảnh 5: Gaming Console & Máy chơi game cầm tay ---
  {
    id: 19,
    name: "Máy chơi game MSI Claw A8 BZ2EM",
    category: "gear",
    price: 25990000,
    image: "https://tse2.mm.bing.net/th/id/OIP.J-gAfQiHrr4BjtTvkNhY1wHaHa?r=0&pid=Api&h=220&P=0",
    description: "Vi xử lý AMD Ryzen Z2 Extreme, 24GB RAM LPDDR5x 8000MHz, màn hình sắc nét."
  },
  {
    id: 20,
    name: "Máy chơi game MSI Claw 8 AI+ A2VM",
    category: "gear",
    price: 33990000,
    image: "https://tse3.mm.bing.net/th/id/OIP.MjPb84JN8eJow5sYd6WuYQHaFR?r=0&pid=Api&h=220&P=0",
    description: "Chip Intel Core Ultra 7 258V tích hợp NPU AI, RAM 32GB, tản nhiệt Cooler Boost HyperFlow."
  },
  {
    id: 21,
    name: "Tai nghe chụp tai Gaming Sony Inzone H3",
    category: "gear",
    price: 1090000,
    image: "https://tse2.mm.bing.net/th/id/OIP.Whv4nptA9nm2dAKDFrx7mAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Công nghệ không gian 360 Spatial Sound cho game thủ, driver 40mm, đệm tai thoáng khí."
  },
  {
    id: 22,
    name: "Máy cầm tay chơi game ROG Xbox Ally",
    category: "gear",
    price: 14690000,
    image: "https://tse1.mm.bing.net/th/id/OIP.hkubuZZOAEK-gYfa4PBsAAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế công thái học cao cấp, tích hợp hệ sinh thái Xbox mượt mà, màn hình 120Hz."
  },
  {
    id: 23,
    name: "Máy chơi game Sony Playstation 5 Slim ASIA",
    category: "gear",
    price: 18590000,
    image: "https://tse1.mm.bing.net/th/id/OIP.RraBHBuc11OcRrOmjTNMvwHaEI?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế mỏng nhẹ hơn 30%, ổ cứng 1TB SSD tốc độ cực cao, hỗ trợ Ray Tracing chân thực."
  },

  // --- Ảnh 6: Tablet giá rẻ & tầm trung ---
  {
    id: 24,
    name: "Máy tính bảng iPad A16 WiFi 128GB",
    category: "phone",
    price: 12090000,
    image: "https://tse1.mm.bing.net/th/id/OIP.min_JvCH_hG-cOXzLfrCZQHaEI?r=0&pid=Api&h=220&P=0",
    description: "Chip A16 Bionic siêu nhanh, màn hình Liquid Retina hỗ trợ quay video 4K/120fps."
  },
  {
    id: 25,
    name: "Honor Pad X7 WiFi 4GB 128GB",
    category: "phone",
    price: 3590000,
    image: "https://tse2.mm.bing.net/th/id/OIP.rAJtqSL4YlnHVBtI9z3UTwHaEZ?r=0&pid=Api&h=220&P=0",
    description: "Pin 7020 mAh, Snapdragon 680 ổn định, màn hình bảo vệ mắt đạt chứng nhận TÜV Rheinland."
  },
  {
    id: 26,
    name: "Honor Pad X9a WiFi 6GB 128GB - Kèm bao da bàn phím",
    category: "phone",
    price: 6990000,
    image: "https://tse1.mm.bing.net/th/id/OIP.riLBgFhx1Md-W_txSJf36wHaHa?r=0&pid=Api&h=220&P=0",
    description: "Màn hình 11.5 inch 120Hz độ phân giải 2.5K, pin 8300 mAh, tặng kèm phụ kiện bàn phím tiện lợi."
  },
  {
    id: 27,
    name: "Samsung Galaxy Tab S10 Lite WiFi 6GB 128GB",
    category: "phone",
    price: 8390000,
    image: "https://tse4.mm.bing.net/th/id/OIP.ZkRJHvw6P8Aw2rztWcS4QQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Chip Exynos 1380, pin 8000 mAh, bộ công cụ Galaxy AI thông minh hỗ trợ học tập và vẽ vời."
  },


  {
    id: 28,
    name: "iPad Pro 11 M5 2025 WiFi 12GB 256GB",
    category: "phone",
    price: 33990000,
    image: "https://tse3.mm.bing.net/th/id/OIP.zxFUFUQxy2p-O8sRtoEF4gAAAA?r=0&pid=Api&h=220&P=0",
    description: "Chip M5 AI siêu tốc, màn hình Ultra Retina XDR siêu mỏng 5.3mm sắc sảo."
  },
  {
    id: 29,
    name: "Xiaomi POCO C81 Pro 4GB 128GB",
    category: "phone",
    price: 3890000,
    image: "https://tse4.mm.bing.net/th/id/OIP.pPb1DE8nq3R1F6TytNeIrwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Màn hình 6.9 inch tần số quét 120Hz, pin khủng 6000 mAh hỗ trợ sạc nhanh 33W."
  },
  {
    id: 30,
    name: "Xiaomi Poco M8 Pro 5G 8GB 256GB",
    category: "phone",
    price: 8490000,
    image: "https://tse2.mm.bing.net/th/id/OIP.OtElxhaEoDsr9tMQM7So5wHaIj?r=0&pid=Api&h=220&P=0",
    description: "Snapdragon 7s Gen 4 mạnh mẽ, pin 6500 mAh, chuẩn kháng nước bụi siêu bền IP69k."
  }
];

// Định dạng tiền tệ VND
function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Hàm render danh sách sản phẩm ra DOM
function renderProducts(items) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ef4444; font-size: 1.1rem;">Không tìm thấy sản phẩm phù hợp!</p>`;
    return;
  }

  grid.innerHTML = items.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://placehold.co/400x300?text=Kaimora Tech'">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <button class="btn-add-cart" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      </div>
    </div>
  `).join("");
}

// Xử lý bộ lọc tìm kiếm động (không reload trang)
function handleFilter() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const maxPriceInput = document.getElementById("max-price");
  const priceVal = document.getElementById("price-val");

  if (!searchInput || !categorySelect || !maxPriceInput) return;

  const keyword = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;
  const maxPrice = Number(maxPriceInput.value);

  // Hiển thị giá trị thanh kéo giá
  priceVal.textContent = formatCurrency(maxPrice);

  // Lọc mảng
  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(keyword);
    const matchCategory = (selectedCategory === "all") || (product.category === selectedCategory);
    const matchPrice = product.price <= maxPrice;
    return matchName && matchCategory && matchPrice;
  });

  renderProducts(filtered);
}

// Quản lý giỏ hàng với localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function addToCart(productId) {
  const cart = getCart();
  const targetProduct = products.find(p => p.id === productId);
  if (!targetProduct) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...targetProduct, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm "${targetProduct.name}" vào giỏ hàng!`);
}

// Khởi chạy khi load trang
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  updateCartCount();

  // Đăng ký các sự kiện tương tác
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const maxPriceInput = document.getElementById("max-price");

  if (searchInput) searchInput.addEventListener("input", handleFilter);
  if (categorySelect) categorySelect.addEventListener("change", handleFilter);
  if (maxPriceInput) maxPriceInput.addEventListener("input", handleFilter);
});
// Render chi tiết giỏ hàng trên trang cart.html
function renderCartPage() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("subtotal-price");
  const totalEl = document.getElementById("total-price");

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="background: #fff; padding: 2rem; border-radius: 8px; text-align: center;">
        <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 1rem;">Giỏ hàng của bạn đang trống!</p>
        <a href="products.html" style="color: #0284c7; text-decoration: none; font-weight: 600;">Khám phá sản phẩm ngay</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "0đ";
    if (totalEl) totalEl.textContent = "0đ";
    return;
  }

  let totalMoney = 0;

  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    totalMoney += itemTotal;

    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://placehold.co/100x100?text=Kaimora Tech'">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">${formatCurrency(item.price)}</p>
        </div>
        <div class="cart-qty-control">
          <button class="btn-qty" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="btn-qty" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-total">${formatCurrency(itemTotal)}</div>
        <button class="btn-delete-item" onclick="removeFromCart(${item.id})">Xóa</button>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = formatCurrency(totalMoney);
  if (totalEl) totalEl.textContent = formatCurrency(totalMoney);
}

// Tăng / giảm số lượng sản phẩm trong giỏ
function changeQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartPage();
}

// Xóa hẳn 1 sản phẩm khỏi giỏ
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartPage();
}
// Render 3 sản phẩm nổi bật cho trang index.html
function renderFeaturedProducts() {
  const featGrid = document.getElementById("home-featured-grid");
  if (!featGrid) return;

  // Lấy 3 sản phẩm đầu tiên làm nổi bật
  const featured = products.slice(0, 3);
  featGrid.innerHTML = featured.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://placehold.co/400x300?text=Kaimora Tech'">
      <div class="product-info">
        <h3 class="product-name"><a href="detail.html?id=${product.id}" style="text-decoration:none; color:inherit;">${product.name}</a></h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div style="display:flex; gap:0.5rem;">
          <a href="detail.html?id=${product.id}" class="btn-add-cart" style="background:#475569; text-decoration:none; text-align:center; flex:1;">Chi tiết</a>
          <button class="btn-add-cart" style="flex:1;" onclick="addToCart(${product.id})">Thêm giỏ</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Render chi tiết sản phẩm trên trang detail.html
function renderDetailPage() {
  const detailContainer = document.getElementById("product-detail-container");
  if (!detailContainer) return;

  // Lấy ID từ tham số URL (?id=...)
  const params = new URLSearchParams(window.location.search);
  const prodId = parseInt(params.get("id")) || 1; // Mặc định là id 1 nếu không truyền
  const product = products.find(p => p.id === prodId);

  if (!product) {
    detailContainer.innerHTML = `<p style="color:#ef4444;">Không tìm thấy thông tin sản phẩm này!</p>`;
    return;
  }

  // Cập nhật tên trên breadcrumb
  const breadcrumbEl = document.getElementById("breadcrumb-current");
  if (breadcrumbEl) breadcrumbEl.textContent = product.name;

  detailContainer.innerHTML = `
    <div class="detail-card">
      <div class="detail-img-box">
        <img src="${product.image}" alt="${product.name}" class="detail-img" onerror="this.src='https://placehold.co/500x400?text=Kaimora Tech'">
      </div>
      <div class="detail-content">
        <h2 class="detail-title">${product.name}</h2>
        <div class="detail-price">${formatCurrency(product.price)}</div>
        <p class="detail-desc">${product.description}</p>
        
        <div class="detail-actions">
          <div class="qty-select">
            <label for="detail-qty">Số lượng:</label>
            <input type="number" id="detail-qty" value="1" min="1" max="99" style="width: 60px; padding: 0.4rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;">
          </div>
          <button class="btn-add-cart" style="padding: 0.8rem 1.5rem;" onclick="addDetailToCart(${product.id})">Thêm Vào Giỏ Hàng</button>
        </div>

        <div class="detail-policy">
          <p>✔ Bảo hành chính hãng 12 tháng</p>
          <p>✔ Giao hàng nhanh toàn quốc</p>
          <p>✔ Đổi trả trong 7 ngày nếu lỗi phần cứng</p>
        </div>
      </div>
    </div>
  `;
}

// Xử lý thêm vào giỏ từ trang detail với số lượng tùy chọn
function addDetailToCart(productId) {
  const qtyInput = document.getElementById("detail-qty");
  const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
  const targetProduct = products.find(p => p.id === productId);
  if (!targetProduct) return;

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ ...targetProduct, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm ${qty} x "${targetProduct.name}" vào giỏ hàng!`);
}