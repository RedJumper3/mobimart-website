let cartIcons = document.getElementsByClassName("cart");

let cartArr;

if (localStorage.cart) {
  cartArr = JSON.parse(localStorage.cart);
} else {
  cartArr = [];
}

for (let i = 0; i < cartIcons.length; i++) {
  for (let j = 0; j < cartArr.length; j++) {
    if (cartIcons[i].dataset.id === cartArr[j].id) {
      cartIcons[i].src = "img/cart-in.png";
    }
  }
}

for (let i = 0; i < cartIcons.length; i++) {
  cartIcons[i].addEventListener("click", saveToCart);
}

function saveToCart() {
  let cart = {
    id: this.dataset.id,
    img: this.dataset.img,
  };

  for (let i = 0; i < cartArr.length; i++) {
    if (this.dataset.id === cartArr[i].id) {
      cartArr.splice(i, 1);
    }
  }

  if (this.src.includes("outline")) {
    this.src = "img/cart-in.png";

    cartArr.push(cart);
  } else {
    this.src = "img/cart.png";
  }

  localStorage.cart = JSON.stringify(cartArr);
}
