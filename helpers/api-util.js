const API_BASE_URL = "https://ecommerce.routemisr.com/api/v1";

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
}

export async function getAllProducts() {
  const products = await fetchJson(`${API_BASE_URL}/products`);

  return products.data;
}
export async function getAllCategories() {
  const categories = await fetchJson(`${API_BASE_URL}/categories`);
  return categories.data;
}

export async function getTopSellingProducts() {
  const allProducts = await getAllProducts();
  const topSellingProducts = allProducts
    .filter((product) => {
      return product.sold > 2000;
    })
    .slice(1, 5);
  return topSellingProducts;
}

export async function getNewArrivalsProducts() {
  const allProducts = await getAllProducts();
  const newArrivalsProducts = allProducts
    .filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate;
    })
    .slice(8, 12)
    .sort();

  return newArrivalsProducts;
}

export async function getSpecificProduct(id) {
  const specificProduct = await fetchJson(`${API_BASE_URL}/products/${id}`);
  return specificProduct.data;
}

export async function getSimilarProducts(brandId) {
  const allProducts = await getAllProducts();
  const similarProducts = allProducts
    .filter((product) => {
      return product.brand._id === brandId;
    })
    .slice(0, 4);
  return similarProducts;
}
