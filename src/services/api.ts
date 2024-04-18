export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return response;
}
