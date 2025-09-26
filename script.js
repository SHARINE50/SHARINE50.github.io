// Simple form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    let response = document.getElementById("formResponse");
  
    if (name && email && message) {
      response.textContent = `Thank you, ${name}! Your message has been sent.`;
      response.style.color = "green";
      this.reset();
    } else {
      response.textContent = "Please fill in all fields.";
      response.style.color = "red";
    }
  });
  