let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
  {
    id: 1,
    productName: "iPhone 14",
    price: "R30000",
    year: 2022,
    image: "https://i.postimg.cc/y8tHBQ7G/iphone-14-pro-max-deep-purple-6-1.webp",
    type: "phone"
},
{
    id: 2,
    productName: "iPhone 13",
    price: "R20000",
    year: 2021,
    image: "https://i.postimg.cc/JhZ98R6y/iphone-13-pro-green-pdp-image-position-1a-wwen-jpg-8.webp",
    type: "phone"
},
{
    id: 3,
    productName: "iPhone 12",
    price: "R15000",
    year: 2019,
    image:"https://i.postimg.cc/k4wYMGx5/refurb-iphone-12-pro-graphite-2020.jpg",
    type: "phone"
},
{
    id: 4,
    productName: "Macbook Pro 16",
    price: "R50000",
    year: 2021,
    image: "https://i.postimg.cc/DyKmvvPq/macbook-pro-space-grey-1-2.webp",
    type: "macbook"
},
{
    id: 5,
    productName: "Macbook Air",
    price: "R25000",
    year: 2019,
    image: "https://i.postimg.cc/hGn0VRnx/macbook-air-midnight-select-20220606.jpg",
    type: "macbook"
},
{
    id: 6,
    productName: "Macbook Pro 13",
    price: "R20000",
    year: 2016,
    image: "https://i.postimg.cc/9QRkLhsn/10282546-3-ecommerce-68f3.png",
    type: "macbook"
},
{
    id: 7,
    productName: "Apple Smartwatch series SE",
    price: "R8000",
    year: 2016,
    image: "https://i.postimg.cc/qvcGXPTB/Apple-Watch-SE-44mm-Space-Gray-Aluminum-Black-Sport-Band-MYDT2-LL-A-Refurbished.jpg",
    type: "watch" 
},
{
    id: 8,
    productName: "Apple Smartwatch series 7",
    price: "R9000",
    year: 2019,
    image: "https://i.postimg.cc/26dwTgv7/Apple-Watch-Series-7-GPS-41mm.jpg",
    type: "watch" 
},
{
    id: 9,
    productName: "Apple Smartwatch series 8 ",
    price: "R12000",
    year: 2021,
    image: "https://i.postimg.cc/G247QXKM/Apple-Watch-Series-8-GPS-Cellular-45mm-Graphite-Stainless-Steel-Case-with-Midnight-Sport-Band-S.jpg",
    type: "watch" 
},
{
    id: 10,
    productName: "Airpods 1st Gen",
    price: "R2000",
    year: 2016,
    image: "https://i.postimg.cc/YqRv9c9j/1st-gen.jpg",
    type: "airpod" 
},
{
    id: 11,
    productName: "Airpods 2nd Gen",
    price: "R3000",
    year: 2019,
    image: "https://i.postimg.cc/bY3PSqxX/2nd-gen.webp",
    type: "airpod"
},
{
    id: 12,
    productName: "Airpods 3rd Gen",
    price: "R4000",
    year: 2021,
    image: "https://i.postimg.cc/7LMdvNXv/3rd-gen.webp",
    type: "airpod"
},
];

localStorage.setItem('products', JSON.stringify(products));

// / open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal
// close cart modal
const closeBtn = document.querySelector ('#close-btn');
closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});
cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal
// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');
for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}
function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}
function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart
// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}
function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}
// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];
for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}
function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input
// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('R', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
  }
  document.getElementsByClassName('total-price')[0].innerText =  'R' + total
document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price
// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');
const closeCartModal = document.querySelector('.cart-modal');
purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
 }
  updateCartPrice()
}
// end of purchase items
//alert user if cart is empty
