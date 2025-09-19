//Select all accordion headers (the clickable buttons)
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Loop through each header and attach a click event listener
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    
    // Find the parent accordion item of the clicked header
    const item = header.parentElement;

    // Close any other open accordion items
    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active"); // collapse others
      }
    });

    // Toggle the clicked accordion item
    item.classList.toggle("active");
  });
});

