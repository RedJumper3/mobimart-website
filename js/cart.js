const cartGrid = document.querySelector(".cart-grid");

let cartArr = JSON.parse(localStorage.cart);

for (let i = cartArr.length - 1; i >= 0; i--) {
  let container = document.createElement("div");
  container.style.position = "relative";
  container.style.display = "inline-block";
  container.style.width = "100%";

  let cartElement = document.createElement("img");
  cartElement.src = cartArr[i].img;
  cartElement.style.width = "100%";
  /* Lines 16-34 were made with assistance from Grok Code Fast 1 */
  /* This code utilizes JavaScript to create a clickable image which sits at the top right of each product, and when clicked updates localStorage and removes the container */
  container.appendChild(cartElement);

  let removeBtn = document.createElement("img");
  removeBtn.src = "img/redx.png";
  removeBtn.style.position = "absolute";
  removeBtn.style.top = "0";
  removeBtn.style.right = "0";
  removeBtn.style.width = "70px";
  removeBtn.style.height = "70px";
  removeBtn.style.cursor = "pointer";
  removeBtn.addEventListener("click", function () {
    cartArr.splice(i, 1);
    localStorage.cart = JSON.stringify(cartArr);
    container.remove();
  });
  container.appendChild(removeBtn);

  cartGrid.appendChild(container);
}
