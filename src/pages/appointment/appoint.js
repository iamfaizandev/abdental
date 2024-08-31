function generateReceiptId() {
  return "RCPT-" + Math.floor(Math.random() * 1000000);
}
function sendMail() {
  const username = document.getElementById("username").value.trim();
  const useremail = document.getElementById("useremail").value;
  const userphone = document.getElementById("userphone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;
  const receiptId = generateReceiptId();

  const today = new Date().toISOString().split("T")[0];

  if (!username || !useremail || !userphone || time === "-1" || !date) {
    alert("Please fill in all required fields.");
    return;
  }

  if (date < today) {
    alert("Please select a future date.");
    return;
  }
  // Populate the modal with details
  document.getElementById("receiptId").innerText = receiptId;
  document.getElementById("modalUserName").innerText = username;
  document.getElementById("modalUserEmail").innerText = useremail;
  document.getElementById("modalUserPhone").innerText = userphone;
  document.getElementById("modalAppointDate").innerText = date;
  document.getElementById("modalAppointTime").innerText = time;
  document.getElementById("modalMessage").innerText = message;

  // Display the modal
  document.getElementById("receiptModal").style.display = "block";

  // Send email using EmailJS
  emailjs
    .send("service_n58kwjr", "template_7tdt8mc", {
      receiptid: receiptId,
      name: username,
      email: useremail,
      message: message,
      phonenumber: userphone,
      date: date,
      time: time,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

// Modal close button
document.querySelector(".close").onclick = function () {
  document.getElementById("receiptModal").style.display = "none";
};

// Print the receipt
document.getElementById("printButton").onclick = function () {
  const modalContent = document.querySelector(".modal-content").innerHTML;
  const printWindow = window.open("", "", "height=600,width=800");
  printWindow.document.write("<html><head><title>Print Receipt</title>");
  printWindow.document.write(
    "<style>@media print { .modal-content { display: block; } }</style>"
  );
  printWindow.document.write("</head><body >");
  printWindow.document.write(modalContent);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

// Save as PDF (requires jsPDF library)
document.getElementById("saveAsPdfButton").onclick = function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Appointment Receipt", 10, 10);
  doc.text(
    "Receipt ID: " + document.getElementById("receiptId").innerText,
    10,
    20
  );
  doc.text(
    "Name: " + document.getElementById("modalUserName").innerText,
    10,
    30
  );
  doc.text(
    "Email: " + document.getElementById("modalUserEmail").innerText,
    10,
    40
  );
  doc.text(
    "Phone: " + document.getElementById("modalUserPhone").innerText,
    10,
    50
  );
  doc.text(
    "Appointment Date: " +
      document.getElementById("modalAppointDate").innerText,
    10,
    60
  );
  doc.text(
    "Appointment Time: " +
      document.getElementById("modalAppointTime").innerText,
    10,
    70
  );
  doc.text(
    "Message: " + document.getElementById("modalMessage").innerText,
    10,
    80
  );
  doc.save("appointment_receipt.pdf");

  // Redirect to main page after saving PDF
  setTimeout(() => {
    window.location.href = "./appoint.html"; // Adjust URL as needed
  }, 1000);
};
