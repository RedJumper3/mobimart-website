const cartGrid = document.querySelector(".cart-grid");

let cartArr = JSON.parse(localStorage.cart);

for (let i = 0; i < cartArr.length; i++) {
  let cartElement = document.createElement("img");
  cartElement.src = cartArr[i].img;
  cartElement.style.width = "100%";
  cartGrid.appendChild(cartElement);
}
