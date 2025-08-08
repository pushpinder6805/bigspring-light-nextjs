---
title: "Contact Us"
layout: "contact"
draft: false
info: 
  title: Why you should contact us!
  description: We are here to help you with Discourse development, customization, and multilingual solutions. Fill in your details and start a WhatsApp chat instantly — no waiting for email replies.
  contacts: 
    - "phone: +91 9876543210"
    - "Mail: [info@yourdomain.com](mailto:info@yourdomain.com)"
    - "Address: Your Office Address"
---

<form onsubmit="sendToWhatsApp(event)" style="max-width:400px;">
  <label>Name:</label><br/>
  <input type="text" id="name" required style="width:100%;padding:8px;margin-bottom:10px;"><br/>

  <label>Email:</label><br/>
  <input type="email" id="email" required style="width:100%;padding:8px;margin-bottom:10px;"><br/>

  <button type="submit" style="padding:10px 20px;background:#25D366;color:white;border:none;border-radius:5px;">
    Start WhatsApp Chat
  </button>
</form>

<script>
function sendToWhatsApp(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = "919876543210"; // Your WhatsApp number (no + or spaces)

  let message = `Hello, my name is ${name} and my email is ${email}. I want to know more about your services.`;
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}
</script>
