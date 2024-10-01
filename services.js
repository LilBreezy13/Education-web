// JavaScript for handling dynamic changes on box click
document.getElementById('box1').addEventListener('click', function() {
    document.getElementById('screen-content').innerHTML = `
      <div class="message seller">
        <p>Hello, kindly text your location for delivery.</p>
        <span class="time">10:15 AM</span>
      </div>
      <div class="message buyer">
        <p>Alright, I'm at Brenya Ave, Apenkwa Achimota.</p>
        <span class="time">10:16 AM</span>
      </div>
    `;
  });
  
  document.getElementById('box2').addEventListener('click', function() {
    // Change the phone screen content to show a delivery image
    document.getElementById('user-image').innerHTML = `
 <img src="./assets/images/delivery_-_parcel-removebg-preview.png" alt="Delivery in progress" style="width:70%; height:100%; border-radius: 15px;">
    `;
  });
  
  document.getElementById('box3').addEventListener('click', function() {
    // Change the phone screen content to show a payment screen
    document.getElementById('user-image').innerHTML = `
      <img src="./assets/images/Payment.jpg" alt="Payment screen" style="width:70%; height:100%; border-radius: 15px;">
    `;
  });
  