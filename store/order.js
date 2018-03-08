// 1. User can create a product - Done
// 2. User can create no more than 3 products - Done
// 3. Products are added to an array - Done
// 4. Products are displayed on the page - Done
// 5. User can input quantity
// 6. User can add a product to their cart
// 7. User can view the total cost in their cart
// 8. If a user's total order is more than $50, shipping is free

let allProducts = [];
let allOrders = [];
let printedProducts = ""
let orderTotal = 0;

// Starts process of creating new product after form submitted
let submitButton = document.getElementById("submit-button").addEventListener("click", addProduct)


// Product template
function Product(name, cost) {
    this.name = name;
    this.cost = cost;
}

// Order template
function Order(name, cost, quantity) {
    this.name = name;
    this.cost = cost;
    this.quantity = quantity;
}

// Creates new product and pushes to allProducts array 
function addProduct() {
    let productNameEl = document.getElementById("name")
    let productCostEl = document.getElementById("cost")

    newProduct = new Product(productNameEl.value, productCostEl.value)
    allProducts.push(newProduct)

    maxProducts()
    printProduct(newProduct)
    resetFields(productNameEl, productCostEl)
}

// Resets fields once form is submitted
function resetFields(f1, f2) {
    f1.value = ""
    f2.value = ""
}

// Disables button when user has submitted 3 products
function maxProducts() {
    if (allProducts.length === 3) {
        document.getElementById("submit-button").disabled = true
        document.getElementById("submit-button").classList.add('disabled');
    }
}

// Prints products to the DOM
function printProduct(product) {
    for (var i = 0; i < 1; i++) {
        printedProducts += `<div class="product-container">
        <p class="product-name">${product.name}</p>
        <p class="product-cost" value="${product.cost}" id="product-cost">Amount: $${product.cost}</p>
        <input type="text" id="quantity" placeholder="Enter quantity">
        <button id="add-to-cart">Add to cart</button>
        </div>`
    }
    document.getElementById("printed-products").innerHTML = printedProducts
    allProducts[0]
}

document.addEventListener("click", function (e) {
    let orderQuantity = e.target.id;
    
    if (orderQuantity.startsWith('add-')) {
        let quantity = document.getElementById("quantity").value
        console.log(quantity)
        createOrder(quantity)
    }
})

function createOrder(quantity) {
        newOrder = new Order(quantity)
        allProducts.push(newProduct)
    console.log(Order)
}

