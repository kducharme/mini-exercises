// INSTRUCTIONS:
// 1. User can submit a review with their: first name, last name, review (1-5 stars)
// 2. User can search for whether or not they have a review in the system
// 3. User can change their review
// 4. Average review of product is shown (and changes based on submission)
var reviewDiv = "";
var allReviews = [];
let id = 0;
document.getElementById("average-rating").innerHTML = `<h5>Current average rating: </h5>`
document.getElementById("submit-button").addEventListener("click", submit);

// Validating whether or not fields are empty to activate button

function checkFields() {
    var userName = document.getElementById("userName").value
    var userRating = document.getElementById("userRating").value
    var userReview = document.getElementById("userReview").value

    if (userName != "" && userReview != "" && userRating != "") {
        document.getElementById("submit-button").classList.remove("disabled")
    }
}

document.addEventListener('keyup', checkFields);

// Submitting review

function submit() {

    console.log("id before", id)
    document.getElementById("full-review").innerHTML = ""

    var userName = document.getElementById("userName").value
    var userRating = document.getElementById("userRating").value
    var userReview = document.getElementById("userReview").value

    var review = {
        id: id,
        name: userName,
        rating: userRating,
        review: userReview
    };

    writeToDom(review)
    allReviews.push(review)
    console.log(allReviews)

    document.getElementById("average-rating").innerHTML = `<h5>Current average rating: ${getAverage()}</h5>`

    document.getElementById("userName").value = ""
    document.getElementById("userRating").value = ""
    document.getElementById("userReview").value = ""

    id +=1

}

// Calculating average review

function getAverage() {
    var total = 0;
    for (var i = 0; i < allReviews.length; i++) {
        total += parseInt(allReviews[i].rating)
    }
    return ((total / allReviews.length)).toFixed(1);
}

// Posting individual review to DOM

function writeToDom(review) {
    reviewDiv += `<div class="review-block">`
    reviewDiv += `<h5 class="review-name">${review.name}<span class="date">${getDate()}</span></h5> 
    <p class="postReview"><span class="review">${review.rating} stars: </span>${review.review}</p>`
    reviewDiv += `<span id="delete-${review.id}"<i class="material-icons">delete</i></span>`
    reviewDiv += `</div>`

    document.getElementById("full-review").innerHTML = reviewDiv
}

// Getting date of review

function getDate() {
    let date = new Date();
    let dayOfWeek = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let reviewDay = dayNames[dayOfWeek]
    let reviewMonth = monthNames[month]

    dateReviewed = reviewDay + " " + reviewMonth + " " + day + ", " + year

    return dateReviewed;
}

// // Deleting individual review

document.addEventListener('click', function (e) {
    let eventId = e.target.id

    if (eventId.startsWith('delete-')) {
        let id = eventId.split("delete-")[1]
        console.log("id", id)

        let reviewToDelete = allReviews.find(function (review) {
            return review.id === id
        })

        let index = allReviews.indexOf(reviewToDelete)
        allReviews.splice(index, 1)
        console.log(allReviews)

        document.getElementById("full-review").innerHTML = ""
        review = ""

        for (var i = 0; i > allReviews.length; i++) {
            writeToDom(allReviews[i])
        }

        document.getElementById("full-review").innerHTML = review
    }
})