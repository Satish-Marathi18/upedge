document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "flex";
  });
  
  document.getElementById("closeOverlay").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
  });


document.getElementById("submitBtn").addEventListener("click", function () {
    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Prepare email content
    const subject = `New Form Submission: ${name}`;
    const body = `
        Name: ${name}%0D%0A
        Age: ${age}%0D%0A
        Gender: ${gender}%0D%0A
        Course: ${course}%0D%0A
        Address: ${address}%0D%0A
        Phone Number: ${phone}%0D%0A
    `;

    // Redirect to mailto with email content
    const adminEmail = "satishmarathi444@gmail.com"; // Replace with admin email
    window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

