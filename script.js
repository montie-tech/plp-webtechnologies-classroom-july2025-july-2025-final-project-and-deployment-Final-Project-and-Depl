// Handle booking form
const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  // Simple validation
  if (!name || !email || !service || !date) {
    confirmation.textContent = "⚠️ Please fill all fields!";
    confirmation.style.color = "red";
    confirmation.classList.remove("hidden");
    return;
  }

  // Show confirmation message
  confirmation.textContent = `✅ Thank you, ${name}! Your ${service} photography session has been booked for ${date}. We'll contact you at ${email}.`;
  confirmation.style.color = "#27ae60";
  confirmation.classList.remove("hidden");

  // Reset form
  form.reset();
});
