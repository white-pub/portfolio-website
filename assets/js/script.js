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

  // Email - plain text (class instead of id, since it's used more then once)
  const emailPlaceholders = document.querySelectorAll(".plain-text-email"); // Select all elements with the class

  // Insert the email content into each placeholder
  emailPlaceholders.forEach((placeholder) => {
    placeholder.innerHTML = `<span>${fullEmail}</span>`;
  });

  // emailMeButton: click to open new page and send email (a class cause used more then once)
  // Select all buttons with the class "emailMeButton"
  const emailMeButtons = document.querySelectorAll(".emailMeButton");

  // Apply behavior to each button
  emailMeButtons.forEach((button) => {
    // Set the "href" attribute for the mailto link
    button.href = `mailto:${fullEmail}`;
    button.target = "_blank"; // Open in a new tab

    // Prevent default behavior if the email is not set
    button.addEventListener("click", (event) => {
      if (!button.href.includes("mailto:")) {
        event.preventDefault();
      }
    });
  });


  // Set email content in the popover dynamically (contact btn section)
  const popoverEmailButton = document.getElementById("popoverEmailButton");
  const popover = new bootstrap.Popover(popoverEmailButton, {
    content: `
      <div>
        <p>${fullEmail}</p>
        <a class="btn btn-sm btn-outline-success" href="mailto:${fullEmail}" target="_blank">Send Email</a>
      </div>
    `,
    html: true // Enable HTML content in the popover
  });

  // Prevent default behavior of the main button (the btn in contact section)
  popoverEmailButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent link navigation
  });
});


// fine tune the behavior of the email btn section in profile modal
document.addEventListener("DOMContentLoaded", function () {

  const emailSection = document.getElementById("profile-modal-email-section");

  // Email content
  const emailUser = "a.chen1140110";
  const emailDomain = "gmail.com";
  const fullEmail = `${emailUser}@${emailDomain}`;

  // Function to update layout based on screen size
  function updateEmailLayout() {
    const screenWidth = window.innerWidth;

    // Clear the existing content
    emailSection.innerHTML = "";

    if (screenWidth <= 350) {
      // Smaller screens: Button with text (takes the whole row)
      emailSection.innerHTML = `
        <div class="row mt-2">
          <a href="mailto:${fullEmail}" class="btn btn-light contact-icon email-icon my-2 fw-medium" target="_blank">
          <img src="assets/icons/gmail-icon.svg" alt="email icon" class="bg-white px-1 rounded-1 me-2">
          Email
        </a>
        </div>

      `;
    } else {
      // Larger screens: button only have icon, show whole email in separate plain text
      emailSection.innerHTML = `
        <div class="row ps-2 mt-2 pt-0 rounded-2 align-items-center" style="background-color: rgb(255, 249, 241);">
          <div class="col-1 p-0">
            <a href="mailto:${fullEmail}" class="btn btn-light contact-icon email-icon my-2" target="_blank">
              <img src="assets/icons/gmail-icon.svg" alt="email icon" class="bg-white px-1 rounded-1">
            </a>
          </div>
          <div class="col-10 ps-4 text-center">
            <span class="plain-text-email fw-medium">${fullEmail}</span>
          </div>
        </div>
      `;


      // Adjust text size based on screen width (using `rem`)
      const plainTextEmail = emailSection.querySelector(".plain-text-email");
      // if (screenWidth >= 576) {
      //   plainTextEmail.style.fontSize = "1.2rem";
      // }
      if (screenWidth < 500) {
        plainTextEmail.style.fontSize = "1rem";
      }
      if (screenWidth >= 500) {
        plainTextEmail.style.fontSize = "1.2rem";
      }
    }
  }

  // Run the layout update function on page load and when the screen is resized
  updateEmailLayout();
  window.addEventListener("resize", updateEmailLayout);
});

// Initialize bootstrap tooltip
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});