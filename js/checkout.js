let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "iPhone 14",
        price: "R30000",
        year: 2022,
        image: "https://i.postimg.cc/y8tHBQ7G/iphone-14-pro-max-deep-purple-6-1.webp"
    },
    {
        id: 2,
        productName: "iPhone 13",
        price: "R20000",
        year: 2021,
        image: "https://i.postimg.cc/JhZ98R6y/iphone-13-pro-green-pdp-image-position-1a-wwen-jpg-8.webp"
    },
    {
        id: 3,
        productName: "iPhone 12",
        price: "R15000",
        year: 2019,
        image:"https://i.postimg.cc/k4wYMGx5/refurb-iphone-12-pro-graphite-2020.jpg"
    },
    {
        id: 4,
        productName: "Macbook Pro 16",
        price: "R50000",
        year: 2021,
        image: "https://i.postimg.cc/DyKmvvPq/macbook-pro-space-grey-1-2.webp"
    },
    {
        id: 5,
        productName: "Macbook Air",
        price: "R25000",
        year: 2019,
        image: "https://i.postimg.cc/hGn0VRnx/macbook-air-midnight-select-20220606.jpg"
    },
    {
        id: 6,
        productName: "Macbook Pro 13",
        price: "R20000",
        year: 2016,
        image: "https://i.postimg.cc/9QRkLhsn/10282546-3-ecommerce-68f3.png"
    },
    {
        id: 7,
        productName: "Apple Smartwatch series SE",
        price: "R8000",
        year: 2016,
        image: "https://i.postimg.cc/qvcGXPTB/Apple-Watch-SE-44mm-Space-Gray-Aluminum-Black-Sport-Band-MYDT2-LL-A-Refurbished.jpg" , 
    },
    {
        id: 8,
        productName: "Apple Smartwatch series 7",
        price: "R9000",
        year: 2019,
        image: "https://i.postimg.cc/26dwTgv7/Apple-Watch-Series-7-GPS-41mm.jpg"
    },
    {
        id: 9,
        productName: "Apple Smartwatch series 8 ",
        price: "R12000",
        year: 2021,
        image: "https://i.postimg.cc/G247QXKM/Apple-Watch-Series-8-GPS-Cellular-45mm-Graphite-Stainless-Steel-Case-with-Midnight-Sport-Band-S.jpg"
    },
    {
        id: 10,
        productName: "Airpods 1st Gen",
        price: "R2000",
        year: 2016,
        image: "https://i.postimg.cc/YqRv9c9j/1st-gen.jpg"
    },
    {
        id: 11,
        productName: "Airpods 2nd Gen",
        price: "R3000",
        year: 2019,
        image: "https://i.postimg.cc/bY3PSqxX/2nd-gen.webp"
    },
    {
        id: 12,
        productName: "Airpods 3rd Gen",
        price: "R4000",
        year: 2021,
        image: "https://i.postimg.cc/7LMdvNXv/3rd-gen.webp"
    },
];
function displayProducts() {
    let card = document.querySelector('#card-row');
    Object.keys(products).forEach( (item)=> {
        if(products.length){
            console.log((`${item}: ${products[item]}`));
            card.innerHTML +=
            `
            <div class="card col-4 gap-2 bg-dark p-5">
            <img src="${products[item].image}" class="card-img-top" alt="cards">
            <div class="card-body">
            <p class="card-text text-light">${products[item].productName}</p>
            <a href="#" class="btn btn-primary">Add to checkout</a>
            <button class="btn btn-danger">${products[item].price}</button>
            </div>
            </div>
    
            `
        }
    })
}
displayProducts()

localStorage.setItem('products', JSON.stringify(products));