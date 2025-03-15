/* 
js/script.js
A. Chen
Created: 2025-03-05
Updated: 2025-03-05

Contains script of additional interaction and animation.
*/


// The filter function

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select all filter buttons and project cards
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".card[data-tags]");
    



    // Add event listeners to all filter buttons
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          const filter = button.getAttribute("data-filter");
  
          // Remove "active" class from all buttons and add to the clicked button
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
  
          // Loop through project cards and show/hide based on filter
          projectCards.forEach(card => {
              const tags = card.getAttribute("data-tags").split(" ");
              if (filter === "all" || tags.includes(filter)) {
                card.style.display = "block";
              } else {
                card.style.display = "none";
              }
        });
      });
    });
  });
  