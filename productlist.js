const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

{
  /* <template id="productTemplate">
  <article class="product">
    <a href="product.html">
      <img src="assets/1526.webp" />
    </a>

    <h3>Big Cat Backpack Black</h3>
    <p>Backpacks I Unisex</p>
    <p class="price">DKK 1299</p>
  </article>
</template> */
}

function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    ".subtitle"
  ).textContent = `${product.articletype} | ${product.gender}`;
  //grab parent
  const parent = document.querySelector("section");
  //append
  parent.appendChild(copy);
}
