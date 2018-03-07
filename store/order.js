// 1. User can create a product
// 2. User can create no more than 3 products
// 3. Products are added to an array
// 4. Products are displayed on the page
// 5. User can input quantity
// 6. User can add a product to their cart
// 7. User can view the total cost in their cart
// 8. If a user's total order is more than $50, shipping is free

let allProducts = [];

let submitButton = document.getElementById("submit-button").addEventListener("click", addProduct)

function addProduct() {
    let productName = document.getElementById("name").value
    let productCost = document.getElementById("cost").value

    let product = {
        name: productName,
        cost: productCost
    }
    allProducts.push(product)
    productCount()
    console.log(allProducts)
}

function productCount() {
    if (allProducts.length === 3) {
        document.getElementById("submit-button").disabled = true
        document.getElementById("submit-button").classList.add('disabled');
    }
}