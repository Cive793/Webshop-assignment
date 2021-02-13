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
              <p class="sold-out">Sold out</p>
              <img src="assets/1526.webp" />
            </a>

            <h3>Big Cat Backpack Black</h3>
            <p class="subtitle">Backpacks | Unisex</p>
            <p class="price"><span>Prev:</span> 1299 DKK</p>
            <div class="discount">
              <p>Now: <span>1250 DKK</span></p>
            </div>
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

  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".discount p").textContent =
    "Now: " + product.price * (1 - product.discount / 100) + " DKK";

  if (product.soldout == false) {
    copy.querySelector(".sold-out").remove();
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("on-sale");
  }

  if (product.soldout) {
    copy.querySelector("img").classList.add("soldout-img");
  }

  //grab parent
  const parent = document.querySelector("section");
  //append
  parent.appendChild(copy);
}
