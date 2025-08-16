// Counter App JavaScript - Enhanced Version
let decrementBtn = document.querySelector(".decrement");
let input = document.querySelector("input");
let incrementBtn = document.querySelector(".increment");
let resetBtn = document.querySelector(".reset");

// Initialize counter variable
let count = 0;

// Set initial display value
input.value = count;

// Decrement button functionality
decrementBtn.addEventListener("click", function () {
    count--;

    // Prevent negative numbers
    if (count < 0) {
        alert("Cannot go below zero! Click + to increment");
        count = 0;
    }

    // Update display
    input.value = count;
});

// Increment button functionality
incrementBtn.addEventListener("click", function () {
    count++;
    input.value = count;
});

// Reset button functionality
resetBtn.addEventListener("click", function () {
    // Ask for confirmation on reset
    if (count > 0) {
        if (confirm("Are you sure you want to reset the counter?")) {
            count = 0;
            input.value = count;
        }
    } 
});


let counter = 22;