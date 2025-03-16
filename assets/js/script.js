/* 
js/script.js
A. Chen
Created: 2025-03-05
Updated: 2025-03-05

Contains script of additional interaction and animation.
*/


// The filter function
document.addEventListener("DOMContentLoaded", function() { // Wait for the DOM to fully load
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
      }); // End of event listener for click
  }); //End of for each btn function
});

// Dynamically create email to avoid bots and scams
document.addEventListener("DOMContentLoaded", () => {
  const emailUser = "a.chen1140110";
  const emailDomain = "gmail.com";
  const fullEmail = `${emailUser}@${emailDomain}`;

  // email- plain text in about me modal
  document.getElementById("email-placeholder").innerHTML = `<span class="fw-bold">${fullEmail}</span>`;

  // email button inside the About me modal
  const emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.href = `mailto:${fullEmail}`;
  emailMeButton.target = "_blank"; // Open in a new tab

  // Prevent default behavior if Email me button is clicked without setting email
  emailMeButton.addEventListener("click", (event) => {
    if (!emailMeButton.href.includes("mailto:")) {
      event.preventDefault();
    }
  });

  // Set email content in the popover dynamically (contact btn section)
  const emailButton = document.getElementById("emailButton");
  const popover = new bootstrap.Popover(emailButton, {
    content: `
      <div>
        <p>${fullEmail}</p>
        <a class="btn btn-sm btn-outline-success" href="mailto:${fullEmail}" target="_blank">Send Email</a>
      </div>
    `,
    html: true // Enable HTML content in the popover
  });

  // Prevent default behavior of the main button (the btn in contact section)
  emailButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent link navigation
  });
});

// Initialize bootstrap tooltip
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});