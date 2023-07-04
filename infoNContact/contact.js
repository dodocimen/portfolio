function sendEmail() {
  Email.send({
    SecureToken: "886fc710-3fa5-4da1-b363-708a87fbacb0",
    Host: "smtp.elasticemail.com",
    Username: "info@aetherdesign.co",
    Password: "2A80418A6D64823EAFAA5BF191869E1AD0D1",
    To: "info@aetherdesign.co",
    From: document.getElementById("email").value,
    Subject: "Design Inquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
