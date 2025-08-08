---
title: "Contact Us"
layout: "contact"
draft: false
info: 
  title: Why you should contact us!
  description: >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
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
