const url = "https://kea-alt-del.dk/t7/api/products/2801";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".productname").textContent =
    product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".colour").textContent = product.basecolour;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
