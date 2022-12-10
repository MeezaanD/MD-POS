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
function displayProducts() {
    let tbody = document.querySelector('#tbody-admin');
    Object.keys(products).forEach( (item)=> {
        if(products.length){
            console.log((`${item}: ${products[item]}`));
            tbody.innerHTML +=
            `
            <tr>
               <td>${products[item].id}</td>
               <td>${products[item].productName}</td>
               <td>${products[item].price}</td>
               <td>${products[item].year}</td>
               <td><button class="btn text-dark bg-info border-dark">Edit</button><button class="btn text-dark bg-danger border-dark" onClick="onDelete(this)">Delete</button></td>
               
            </tr>
    
            `
        }
    })
}
displayProducts()

localStorage.setItem('products', JSON.stringify(products));

var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        // var formData = displayProducts();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["pName"] = document.getElementById("pName").value;
    formData["pPrice"] = document.getElementById("pPrice").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pPrice;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a ><button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button></a>`;
}
function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("pName").value = "";
    document.getElementById("pPrice").value = "";
    document.getElementById("year").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.pName;
    selectedRow.cells[2].innerHTML = formData.pPrice;
    selectedRow.cells[3].innerHTML = formData.year;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this product ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}