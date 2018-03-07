// 1. User can create a product - Done
// 2. User can create no more than 3 products - Done
// 3. Products are added to an array - Done
// 4. Products are displayed on the page - Done
// 5. User can input quantity
// 6. User can add a product to their cart
// 7. User can view the total cost in their cart
// 8. If a user's total order is more than $50, shipping is free

let allProducts = [];
let printedProducts = ""
let orderTotal = 0;

// Event Listeners
let submitButton = document.getElementById("submit-button").addEventListener("click", addProduct) // Creates product

let add = document.getElementById("add-to-cart").addEventListener("click", addToCart) // Adds product to cart


// Creates new product and pushes to allProducts array 
function addProduct() {
    let productNameEl = document.getElementById("name")
    let productCostEl = document.getElementById("cost")

    let product = {
        name: productNameEl.value,
        cost: parseInt(productCostEl.value)
    }
    allProducts.push(product)
    productCount()
    printProduct(product)
    resetFields(productNameEl, productCostEl)
    addToCart(product)
    console.log(allProducts)
}

// Resets fields once form is submitted
function resetFields(f1, f2) {
    f1.value = ""
    f2.value = ""
}

// Disables button when user has submitted 3 products
function productCount() {
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
        <p class="product-cost">Amount: $${product.cost}</p>
        <input type="text" id="quantity" placeholder="Enter quantity">
        <button id="add-to-cart">Add to cart</button>
        </div>`
    }
    document.getElementById("printed-products").innerHTML = printedProducts
}

// Adds product to cart
function addToCart(product) {
    console.log(${product.cost})
}

// function cartTotal(product) {
//     orderTotal += product.cost
//     console.log(cartTotal)
// }