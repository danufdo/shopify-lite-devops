const API_URL = process.env.NEXT_PUBLIC_API_URL;

// GET PRODUCTS
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

// ADD TO CART
export async function addToCart(productId: number) {
  await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
      quantity: 1,
    }),
  });
}

// GET CART
export async function getCart() {
  const res = await fetch(`${API_URL}/cart`);
  return res.json();
}

// REMOVE FROM CART
export async function removeFromCart(id: number) {
  await fetch(`${API_URL}/cart/${id}`, {
    method: "DELETE",
  });
}