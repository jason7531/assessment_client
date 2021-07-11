const DOMAIN = "https://jasonassessment.herokuapp.com/api/v1";

export async function getAllProducts() {
  const response = await fetch(`${DOMAIN}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }
  console.log(data);

  return data;
}

export async function getCategory(category) {
  const response = await fetch(`${DOMAIN}/products/category`, {
    method: "GET",
    body: JSON.stringify({ category: category }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  console.log(data);

  return data;
}

export async function getSingleProduct(productId) {
  const response = await fetch(`${DOMAIN}/products/${productId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  console.log(data);

  return data;
}

export async function getCart() {
  const response = await fetch(`${DOMAIN}/cart`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add product.");
  }

  return data;
}

export async function addToCart(productId) {
  const response = await fetch(`${DOMAIN}/cart/add`, {
    method: "PUT",
    body: JSON.stringify({ id: productId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add product.");
  }

  return null;
}

export async function removeFromCart(productId) {
  const response = await fetch(`${DOMAIN}/cart/remove`, {
    method: "PUT",
    body: JSON.stringify({ id: productId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add product.");
  }

  return null;
}
