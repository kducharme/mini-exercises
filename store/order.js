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
let addedProducts = ""
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

// Disables button when user has submitted 1 product
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
        <p class="name-product" value="${product.name}" id="prod-name">${product.name}</p>
        <p class="product-cost" value="${product.cost}" id="product-cost">Price: $${product.cost}</p>
        <input type="text" id="quantity" placeholder="Enter quantity">
        <button id="add-to-cart">Add to cart</button>
        </div>`
    }
    document.getElementById("printed-products").innerHTML = printedProducts
}

// Shows product in cart area
function addProductToCart(amount) {
    let quantity = amount
    let product = document.getElementById("prod-name").getAttribute("value")

    addedProducts = `<div class="added-product">
    <p class="cart-name">${product}</p>
    <p class="cart-quantity">(${amount} units)</p>`

    document.getElementById("added-product").innerHTML = addedProducts
}

// Collects quantity and cost of product and sends to createOrder function
document.addEventListener("click", function (e) {
    let orderQuantity = e.target.id;

    if (orderQuantity.startsWith('add-')) {
        let quantity = parseInt(document.getElementById("quantity").value)
        let cost = parseInt(document.getElementById("product-cost").getAttribute("value"))

        createOrder(cost, quantity)
        clearQuantity(quantity)

        newOrder = new Order()
    }
})

// Clears quantity field after added to cart
function clearQuantity(quantity) {
    quantity = document.getElementById("quantity").value = ""
}

// Creates new order when user hits 'add to cart'
function createOrder(cost, quantity) {
    let newOrder = new Order(cost, quantity)
    let total = cost * quantity

    if (allOrders.length === 0) {
        allOrders.push(newOrder)
        document.getElementById("total-products").innerHTML = "$" + total
        calcShipping(total);
        addProductToCart(quantity)
        calcTax(total);
    }
    else {
        let update = prompt("This item is already in your cart. Would you like to update the quantity?")
        upate = update.toUpperCase
        console.log(update)
        if (update === "yes") {

        }

    }
}

// Calculates shipping cost based on order size
function calcShipping(total) {
    let orderTotal = total
    let shipping = 0;

    if (orderTotal <= 50) {
        shipping = 10
    }
    else {
        shipping = 0;
    }
    document.getElementById("total-shipping").innerHTML = "$" + shipping
}

// Calculates tax cost based on order size
function calcTax(total) {
    let tax = total * .05;
    document.getElementById("total-tax").innerHTML = "$" + tax
}

function totalOrder() {
    let tax = document.getElementById("total-tax").textContent
    console.log(tax)
    let shipping = calcShipping();
    let tax = calcTax();
}