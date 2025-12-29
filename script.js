document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertMsg = document.getElementById("alertMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Get existing messages from localStorage or initialize empty array
      let messages = JSON.parse(localStorage.getItem("messages")) || [];

      // Add new message
      const newMessage = {
        name,
        email,
        message,
        date: new Date().toLocaleString()
      };
      messages.push(newMessage);

      // Save back to localStorage
      localStorage.setItem("messages", JSON.stringify(messages));

      // Clear form fields
      form.reset();

      // Show success alert
      alertMsg.classList.remove("d-none");
      setTimeout(() => {
        alertMsg.classList.add("d-none");
      }, 2500);
    }
  });
});
