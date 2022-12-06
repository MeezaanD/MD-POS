// let products = JSON.parse(localStorage.getItem('products')) ?
// JSON.parse(localStorage.getItem('products')) : [
//     {
//     id: 1,
//     Image: "../assets/phonesss.jpg",
//     productName: "iphone 14",
//     price : R30000
//     },
//     {
//     id: 2,
//     productName: "iphone 13",
//     price : R20000
//     },
//     {
//     id: 3,
//     productName: "iphone 12",
//     price : R15000
//     },
//     {
//     id: 4,
//     Image: "../assets/macbook.jpg",
//     productName: "macbook pro 16",
//     price : R50000
//     },
//     {
//     id: 5,
//     productName: "macbook air",
//     price : R25000
//     },
//     {
//     id: 6,
//     productName: "macbook pro 13",
//     price : R20000
//     },
//     {
//     id: 7,
//     Image: "../assets/watch1.png",
//     productName: "smartwatch series 4",
//     price : R8000
//     },
//     {
//     id: 8,
//     productName: "smartwatch series 5",
//     price : R7000
//     },
//     {
//     id: 9,
//     productName: "smartwatch series 6",
//     price : R5000
//     },
//     {
//     id: 10,
//     Image : "../assets/airpods.webp",
//     productName: "airpods 1st gen",
//     price : R5000
//     },
//     {
//     id: 11,
//     productName: "airpods 2nd gen",
//     price : R3000
//     },
//     {
//     id: 12,
//     productName: "airpods 3rd gen",
//     price : R2000
//     },  
// ];

//  function displayData() {
//     products.forEach((products)=> {
//     document.querySelector('#products').innerHTML += `
//     <div class="card m-4" style="width: 18rem;">
//     <img src="${products.Image}" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">${products.productName}</h5>
//     <p class="card-text"> Name : ${products.productName}</p>
//     <p class="card-text"> Price : ${products.price}</p>
//     <a href="#" class="btn btn-primary">Add to checkout</a>
//   </div>
//    </div>`
//      })
// };
// displayData()


// Admin Page

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        productName: "iPhone 14",
        price: 30000,
        year: 2022
    },
    {
        id: 2,
        productName: "iPhone 13",
        price: 20000,
        year: 2021
    },
    {
        id: 3,
        productName: "Iphone 12",
        price: 15000,
        year: 2019
    },
    {
        id: 4,
        productName: "Macbook Pro 16",
        price: 50000,
        year: 2021
    },
    {
        id: 5,
        productName: "Macbook Air",
        price: 25000,
        year: 2019
    },
    {
        id: 6,
        productName: "Macbook Pro 13",
        price: 20000,
        year: 2016
    },
    {
        id: 7,
        productName: "Apple Smartwatch series 4",
        price: 8000,
        year: 2016
    },
    {
        id: 8,
        productName: "Apple Smartwatch series 5",
        price: 9000,
        year: 2019
    },
    {
        id: 9,
        productName: "Apple Smartwatch series 6",
        price: 10000,
        year: 2021
    },
    {
        id: 10,
        productName: "Airpods 1st Gen",
        price: 2000,
        year: 2016
    },
    {
        id: 11,
        productName: "Airpods 2nd Gen",
        price: 3000,
        year: 2019
    },
    {
        id: 12,
        productName: "Airpods 3rd Gen",
        price: 4000,
        year: 2021
    },
];

function displayProducts() {
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach( (item)=> {
        if(products.length){
            console.log((`${item}: ${products[item]}`));
            tbody.innerHTML += 
            `
            <tr>
               <td>${products[item].id}</td>
               <td>${products[item].productName}</td>
               <td>${products[item].year}</td>
               <td>${products[item].price}</td>
            </tr>   
            `
        }
    })
}
displayProducts()
