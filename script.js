// Show welcome message on page load
window.addEventListener("load", function () {
    console.log("Welcome to Swiggy Clone!");
    alert("Welcome to Swiggy Clone 🍽️\nOrder food & groceries now!");
});

// Grab both input boxes
const locationInput = document.querySelector('input[placeholder="Enter your delivery location"]');
const searchInput = document.querySelector('input[placeholder="Search for restaurant, item or more"]');

// Listen for Enter key on location input
locationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        alert("Searching for delivery in: " + locationInput.value);
    }
});

// Listen for Enter key on search input
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        alert("Searching for: " + searchInput.value);
    }
});
