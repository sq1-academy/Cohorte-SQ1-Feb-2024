import { addShoppingCartListenerToProducts, updateUIAfterReloaded } from "./shoppingCart.js";

export const getProducts = async() => {
  const res = await fetch("./data/products.json");
  const data = await res.json();
  return data;
}

async function renderProducts() {
  const products = await getProducts();
  const productsContainer = document.querySelector("#products-container");

  products.tshirts.forEach((product) => {
    const elementHTML = createProductHTML(product);
    const element = document.createElement("div");
    element.innerHTML = elementHTML;
    productsContainer.appendChild(element);
  });

  addShoppingCartListenerToProducts();
  updateUIAfterReloaded();
}

const createProductHTML = (product) => {
  return `
  <div class="product" data-product-id="${product.id}">
    <div class="group relative">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <div>
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${product.name}
            </div>
          </h3>
          <p class="mt-1 text-sm text-gray-500 capitalize">${product.color}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">$${product.price}</p>
      </div>
    </div>
    <button class="add-to-shopping-cart bg-teal-500 text-center text-white w-full h-auto px-4 py-2 rounded-md mt-4 hover:bg-teal-600 hover:cursor-pointer">
      Agregar al carro de compras
    </button>
  </div>
  `;
};

renderProducts();

