// function sendToWhatsapp() {
//   let name = document.getElementById("username").value.trim();
//   let email = document.getElementById("userEmail").value.trim();
//   let message = document.getElementById("message").value.trim();
//   let date = document.getElementById("date").value.trim();
//   let phoneno = document.getElementById("userphone").value.trim();
//   let time = document.getElementById("time").value.trim();

//   if (!name || !email || !message || !date || !phoneno || !time) {
//     alert("Please fill in all the fields.");
//     return;
//   }

//   var url =
//     "https://wa.me/917563092029?text=" +
//     encodeURIComponent(
//       "Full Name: " +
//         name +
//         "\nDate: " +
//         date +
//         "\nPhoneNo: " +
//         phoneno +
//         "\nTime: " +
//         time +
//         "\nEmail: " +
//         email +
//         "\nMessage: " +
//         message
//     );

//   console.log(url);
//   window.open(url, "_blank").focus();
// }

/////////////////////////////////////////////////////////////////////////////
///// Sending Appoint to Mail

function sendMail() {
  var username = document.getElementById("username").value;
  var useremail = document.getElementById("useremail").value;
  var message = document.getElementById("message").value;
  var userphone = document.getElementById("userphone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Proceed with sending email
  let templateParams = {
    name: username,
    email: useremail,
    message: message,
    phonenumber: userphone,
    date: date,
    time: time,
  };

  console.log(templateParams);
  const serviceID = "service_n58kwjr";
  const templateID = "template_7tdt8mc";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((res) => {
      // Clear input fields after successful submission
      document.getElementById("username").value = "";
      document.getElementById("useremail").value = "";
      document.getElementById("message").value = "";
      document.getElementById("userphone").value = "";
      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
      alert("Email sent successfully!");
      console.log(res);
    })
    .catch((err) => console.log(err));
}

////////////////////////////////////////////////////////////////////////////////
//////////////////// Pop Up Modal
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("myModal");
//   const openModalBtn = document.getElementById("openModalBtn");
//   const closeButton = modal.querySelector(".close");

//   // Open modal on button click
//   openModalBtn.addEventListener("click", function () {
//     modal.style.display = "block";

//     // Close modal after 2 seconds
//     setTimeout(function () {
//       modal.style.display = "none";
//     }, 2000);
//   });

//   // Close modal on close button click
//   closeButton.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   // Close modal when clicking outside of it
//   window.addEventListener("click", function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   });
// });
