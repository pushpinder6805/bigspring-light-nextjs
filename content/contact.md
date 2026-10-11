---
title: "Contact Us"
layout: "contact"
draft: false
info: 
  title: Let’s find the right way forward.
  description: >
    Whether you are starting from scratch or improving an existing product, share your goals with us. We can explore the design, development, and integration work your project needs, then agree on a clear scope together.
  contacts: 
    - "phone: +88 125 256 452"
    - "Mail: info@bigspring.com"
    - "Address: 360 Main rd, Rio, Brazil"
---

<form
  action="https://wa.me/919999999999"
  method="get"
  target="_blank"
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = `Hello, my name is ${name} and my email is ${email}.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
  }}
>
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <button type="submit">Start WhatsApp Chat</button>
</form>
