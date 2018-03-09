// 1. User can create a product - Done
// 2. User can create no more than 1 product - Done
// 3. Products are added to an array - Done
// 4. Products are displayed on the page - Done
// 5. User can input quantity - Done
// 6. User can add a product to their cart - Done
// 7. User can view the total cost in their cart
// 8. If a user's total order is more than $50, shipping is free

// Global variables & arrays
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
function Order(cost, quantity) {
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
    if (allProducts.length === 1) {
        document.getElementById("submit-button").disabled = true
        document.getElementById("submit-button").classList.add('disabled');
    }
}

// Prints products to the DOM
function printProduct(product) {
    for (var i = 0; i < 1; i++) {
        printedProducts += `<div class="product-container">
        <p class="name-product">${product.name}</p>
        <p class="product-cost" value="${product.cost}" id="product-cost">Price: $${product.cost}</p>
        <input type="text" id="quantity" placeholder="Enter quantity">
        <button id="add-to-cart">Add to cart</button>
        </div>`
    }
    document.getElementById("printed-products").innerHTML = printedProducts
}

// Collects quantity and cost of product and sends to createOrder function
document.addEventListener("click", function (e) {
    let orderQuantity = e.target.id;
    
    if (orderQuantity.startsWith('add-')) {
        let quantity = parseInt(document.getElementById("quantity").value)
        let cost = parseInt(document.getElementById("product-cost").getAttribute("value"))
        
        newOrder = new Order()
        createOrder(quantity, cost)
    }
})

// Creates new order when user hits 'add to cart'
function createOrder(quantity, cost) {
        let newOrder = new Order(cost, quantity)
        let orderTotal = cost * quantity
        allOrders.push(newOrder)
        document.getElementById("total-products").innerHTML = "$" + orderTotal
        calcShipping(orderTotal)
        calcTax(orderTotal)
        totalOrder(orderTotal)
}

// Calculates shipping cost based on order size
function calcShipping(orderTotal){ 
    let shipping = "";
    if (orderTotal <= 50) {
        shipping = 10
    }
    else {
        shipping = 0;
    }
    return shipping;
}

// Calculates tax cost based on order size
function calcTax(orderTotal){
    let tax = orderTotal * .05;
    return tax;
}

function totalOrder(orderTotal){
    let shipping = calcShipping();
    let tax = calcTax();
    console.log(shipping)
}

