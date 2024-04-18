import { getProducts } from "./products.js";

const localStorageKey = "shoppingCart";
let deliveryCost = 30;

const getShoppingCart = () => {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};

const addProductToShoppingCart = (productId) => {
  const shoppingCart = getShoppingCart();
  shoppingCart.push({ productId, quantity: 1 });
  localStorage.setItem(localStorageKey, JSON.stringify(shoppingCart));
};

const removeProductFromShoppingCart = (productId) => {
  const shoppingCart = getShoppingCart();
  const newShoppingCart = shoppingCart.filter(
    (product) => product.productId !== productId
  );
  localStorage.setItem(localStorageKey, JSON.stringify(newShoppingCart));
};

const updateProductQuantity = (productId, quantity) => {
  const shoppingCart = getShoppingCart();
  const productIndex = shoppingCart.findIndex(
    (product) => product.productId === productId
  );
  shoppingCart[productIndex].quantity = quantity;
  localStorage.setItem(localStorageKey, JSON.stringify(shoppingCart));
};

const clearShoppingCart = async() => {
  localStorage.removeItem(localStorageKey);
  await renderShoppingCartList();
  await getFinalValues()
  alert("Shopping cart cleared");
};

const handleAddToShoppingCart = (productId, operation) => {
  const shoppingCart = getShoppingCart();
  const productInShoppingCart = shoppingCart.find(
    (product) => product.productId === productId
  );

  if (operation === "add") {
    if (productInShoppingCart) {
      const newQuantity = productInShoppingCart.quantity + 1;
      updateProductQuantity(productId, newQuantity);
      updateProductQuantityHTML(productId, newQuantity);
    } else {
      addProductToShoppingCart(productId);
      addUpdateFormHTML(productId);
    }
  }

  if (operation === "remove") {
    if (productInShoppingCart.quantity > 1) {
      const newQuantity = productInShoppingCart.quantity - 1;
      updateProductQuantity(productId, newQuantity);
      updateProductQuantityHTML(productId, newQuantity);
    } else {
      removeProductFromShoppingCart(productId);
      removeUpdateFormHTML(productId);
    }
  }

  shoppingCartTotalBadge();
};

export const addShoppingCartListenerToProducts = () => {
  const productsContainer = document.querySelector("#products-container");
  const products = productsContainer.querySelectorAll(".product");

  products.forEach((product) => {
    const productId = product.getAttribute("data-product-id");
    const addToShoppingCartButton = product.querySelector(
      ".add-to-shopping-cart"
    );
    addToShoppingCartButton.addEventListener("click", async () =>
      handleAddToShoppingCart(productId, "add")
    );
  });
};

const addUpdateFormHTML = (productId) => {
  const productElement = document.querySelector(
    `[data-product-id="${productId}"]`
  );
  const productAddButton = productElement.querySelector(
    ".add-to-shopping-cart"
  );
  productAddButton.remove();

  const product = getShoppingCart().find(
    (product) => product.productId === productId
  );
  const productQuantity = product ? product.quantity : 1;

  const elementHTML = `
        <button type="button" class="remove-btn py-1.5 px-4 box-border border flex justify-center items-center text-xl hover:bg-gray-200 transition-all duration-200" aria-label="Remove quantity">-</button>
        <input type="number" class="quantity w-full flex-1 border border-gray-200" value="${productQuantity}" min="1" disabled read-only />
        <button type="button" class="add-btn py-1.5 px-4 box-border border flex justify-center items-center text-xl hover:bg-gray-200 transition-all duration-200" aria-label="Add quantity">+</button>
    `;

  const element = document.createElement("form");
  element.classList.add(
    "update-product-quantity",
    "w-full",
    "flex",
    "justify-between",
    "items-center",
    "gap-2",
    "mt-4"
  );
  element.innerHTML = elementHTML;
  productElement.appendChild(element);

  productElement
    .querySelector(".remove-btn")
    .addEventListener("click", async () =>
      handleAddToShoppingCart(productId, "remove")
    );
  productElement
    .querySelector(".add-btn")
    .addEventListener("click", async () =>
      handleAddToShoppingCart(productId, "add")
    );
};

const updateProductQuantityHTML = (productId, quantity) => {
  const productElement = document.querySelector(
    `[data-product-id="${productId}"]`
  );
  const quantityInput = productElement.querySelector(".quantity");
  quantityInput.value = quantity;
};

const removeUpdateFormHTML = (productId) => {
  const productElement = document.querySelector(
    `[data-product-id="${productId}"]`
  );
  const productForm = productElement.querySelector(".update-product-quantity");
  productForm.remove();

  const elementHTML = "Agregar al carro de compras";

  const element = document.createElement("button");
  element.textContent = "Agregar al carro de compras";
  element.classList.add(
    "add-to-shopping-cart",
    "bg-teal-500",
    "text-center",
    "text-white",
    "w-full",
    "h-auto",
    "px-4",
    "py-2",
    "rounded-md",
    "mt-4",
    "hover:bg-teal-600",
    "hover:cursor-pointer"
  );
  element.innerHTML = elementHTML;
  productElement.appendChild(element);

  productElement
    .querySelector(".add-to-shopping-cart")
    .addEventListener("click", async () =>
      handleAddToShoppingCart(productId, "add")
    );
};

const shoppingCartTotalBadge = () => {
  const shoppingCart = getShoppingCart();
  const total = shoppingCart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const badges = document.querySelectorAll(".shopping-cart-badge");
  badges.forEach((badge) => (badge.textContent = `${total}`.padStart(2, "0")));
};

export const updateUIAfterReloaded = () => {
  const shoppingCart = getShoppingCart();

  shoppingCart.forEach((product) => {
    addUpdateFormHTML(product.productId);
  });
};

shoppingCartTotalBadge();

/* ---- Shopping cart component ---- */

const renderShoppingCartList = async () => {
  const shoppingCartModal = document.getElementById("shopping-cart-modal");
  const shoppingCartListContent = shoppingCartModal.querySelector(
    "#shopping-cart-list-content"
  );
  const shoppingCart = getShoppingCart();
  let products = await getProducts();
  products = products.tshirts;
  shoppingCartListContent.innerHTML = "";
  shoppingCart.forEach((product) => {
    const productData = products.find((p) => product.productId == p.id);
    if (!productData) return;
    const elementHTML = createShoppingCartProductHTML(
      productData,
      product.quantity
    );
    const element = document.createElement("div");
    element.innerHTML = elementHTML;
    shoppingCartListContent.appendChild(element);
  });

  const removeButtons = shoppingCartListContent.querySelectorAll(".remove-btn");

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", async () => {
      handleAddToShoppingCart(product.productId, "remove");
    });
  });
};

const createShoppingCartProductHTML = (product, quantity) => {
  return `
        <div class="flex justify-between items-center border-b border-gray-200 py-2">
            <div class="flex items-center gap-4">
                <img src="${product.image}" alt="${
    product.name
  }" class="w-16 h-16 object-cover object-center" />
                <div>
                    <h3 class="text-sm text-gray-700">${product.name}</h3>
                    <p class="text-sm text-gray-500 capitalize">${
                      product.color
                    }</p>
                </div>
            </div>
            <div class="flex flex-col justify-start items-end">
                <p class="text-sm text-gray-500 text-end">${quantity} x $${
    product.price
  }</p>
                <p class="font-bold text-gray-700 text-end">$${
                  quantity * product.price
                }</p>
            </div>
        </div>
    `;
};

const toggleShoppingCartModal = () => {
  const shoppingCartModal = document.querySelector("#shopping-cart-modal");

  const closeButton = shoppingCartModal.querySelector(".close-btn");
  const openButton = document.querySelector("#open-shopping-cart-modal");

  closeButton.addEventListener("click", () => {
    shoppingCartModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    shoppingCartModal.setAttribute("aria-hidden", "true");
  });

  openButton.addEventListener("click", async () => {
    await renderShoppingCartList();
    await getFinalValues();
    shoppingCartModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    shoppingCartModal.setAttribute("aria-hidden", "false");
  });
};

toggleShoppingCartModal();

const getFinalValues = async () => {
  const shoppingCart = getShoppingCart();
  let products = await getProducts();
  products = products.tshirts;

  let subtotalAmount = 0;

  shoppingCart.forEach((product) => {
    const productData = products.find((p) => product.productId == p.id);
    if (!productData) return;
    subtotalAmount += productData.price * product.quantity;
  });

  if (subtotalAmount >= 400) {
    deliveryCost = 0;
  }

  const totalAmount = subtotalAmount + deliveryCost;
  const subtotalElement = document.getElementById("subtotal");
  const deliveryElement = document.getElementById("delivery");
  const totalElement = document.getElementById("total");

  subtotalElement.textContent = `$${subtotalAmount}`;
  deliveryElement.textContent = `$${deliveryCost}`;
  totalElement.textContent = `$${totalAmount}`;
};

document
  .querySelector("#clean-shopping-cart")
  .addEventListener("click", async() => await clearShoppingCart());
