/*  1. See the first cake's details, including its **name, image, description, and
reviews **, when the page loads.You will need to make a GET request to the
   following endpoint to retrieve the cake data, along with its associated
reviews: */
//Needing to see the first cake details which it wants name, image,description, and reviews when it loads so we will need to do a get.

// Challenge 1
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
const cakeApi = "http://localhost:3000/cakes/1";
// Challenge 2



document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    getCakeDetails(); //challenge 1
    getAllCakes(); // challenge 2
});

// Fetch the first cake's details from the server 
function getCakeDetails() {
    console.log("Fetching cake details...");
    fetch(cakeApi)
        .then((response) => response.json())
        .then((cake) => {
            console.log("Cake details have been Gotten: ", cake);
            renderCake(cake);
        })
}

// Render the details of the cake (singular) to the DOM
function renderCake(cake) {
    console.log("Rendering cake details but cake being pulled in is:", cake);

    // here we are assigning the values to the properties of the DOM elements
    // requirement to show the cake's name on load
    document.getElementById("cake-name").textContent = cake.name;
    // req to show the cake's image on load
    document.getElementById("cake-image").src = cake.image_url;
    // display the cake's description, the req to show the cake's description on load is complete
    document.getElementById("cake-description").textContent = cake.description;

    // Get the review list element and clear its content. check why TextContent was not working
    const cakeReviews = document.getElementById("review-list");
    cakeReviews.innerHTML = "";

    // Check if there are reviews and append them. Req to show the cake's reviews on load done
    cake.reviews.forEach(reviewText => {
        const reviewItem = document.createElement("li");
        reviewItem.textContent = reviewText;
        cakeReviews.append(reviewItem);
    });

    console.log("Cake details rendered", review);
}

// 2. See a menu of all cakes in the `<nav>` element on the left side of the page
//    when the page loads.You will need to make a GET request to the following
//    endpoint to retrieve the cake data:

function getAllCakes() {

}

