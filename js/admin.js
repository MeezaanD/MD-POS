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

var form = 
`<div>
<div class="form-group">
<label for="id">ID:</label>
<input type="name" class="form-control" id="id" >
</div>
  <div class="form-group">
    <label for="product">Product Name:</label>
    <input type="name" class="form-control" id="name" >
  </div>
  <div class="form-group">
    <label for="product">Product Price:</label>
    <input type="number" class="form-control" id="price" >
  </div>
  <div class="form-group">
    <label for="product">Year:</label>
    <input type="number" class="form-control" id="year" >
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Add new product</button>
</div>`;

function sort() {
    let sort = document.getElementById('sort')
    sort.innerHTML = 

    `
    
//     <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//     Dropdown button
//   </button>
//   <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Action</a></li>
//     <li><a class="dropdown-item" href="#">Another action</a></li>
//     <li><a class="dropdown-item" href="#">Something else here</a></li>
//   </ul>
// </div>
    `
}

function table() {
    let table = 
    `<table class="table">
  <thead>
    <tr class="tr text-light">
      <th>ID</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Year</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>`;
  Object.keys(products).forEach((item)=> {
    if(products.length){
        console.log(`${item}: ${products[item]}`);
        `
        <tr>
             <td>${products[item].id}</td>
             <td>${products[item].productName}</td>
             <td>${products[item].price}</td>
             <td>${products[item].year}</td>
        </tr>
        `
    }
  });
  
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${details[i].id}</td>
      <td>${details[i].name}</td>
      <td>R${details[i].price}</td>
      <td>${details[i].year}</td>
      <td><button type="button" class="btn btn-info" text-dark onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger text-dark" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let id = document.getElementById("id");
    let name = document.getElementById("name");
    let price = document.getElementById("price");
    let year = document.getElementById("year");

    if (name.value == 0) {
        alert("Product details are empty");
        return
    }
    let data = {
        id: id.value,
        name: name.value,
        price: price.value,
        year: year.value
    };
    details.push(data);
    setData();

    table();
    id.value = "";
    name.value = "";
    price.value = "";
    year.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    alert('Are you sure you want to delete this product');
    setData();
    table();

};

function edit(index) {
    let editForm = 
    `<div>
  <div class="form-group">
    <label for="ID">Update ID</label>
    <input type="text" value="${details[index].id}" class="form-control" id="newId"  placeholder="Update Product ID">
  </div>
  <div class="form-group mt-3">
    <label for="name">Update Product Name</label>
    <input type="text" value="${details[index].name}" class="form-control" id="newName" placeholder="Update Product Name">
  </div>
  <div class="form-group mt-3">
    <label for="price">Update Product Price</label>
    <input type="number" value="${details[index].price}" class="form-control" id="newPrice" placeholder="Update Product Price">
  </div>
  <div class="form-group mt-3">
    <label for="year">Update Year</label>
    <input type="number" value="${details[index].year}" class="form-control" id="newYear" placeholder="Update Year">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update Product</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
  
};
function update(index) {
    let newID = document.getElementById('newID');
    let newName = document.getElementById('newName');
    let newPrice = document.getElementById('newPrice');
    let newYear = document.getElementById('newYear');

    details[index] = {
        id: newId.value,
        name: newName.value,
        price: newPrice.value,
        year: newYear.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;

}




