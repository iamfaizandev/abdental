function sendToWhatsapp() {
  let name = document.getElementById("username").value.trim();
  let email = document.getElementById("userEmail").value.trim();
  let message = document.getElementById("message").value.trim();
  let date = document.getElementById("date").value.trim();
  let phoneno = document.getElementById("userphone").value.trim();
  let time = document.getElementById("time").value.trim();

  if (!name || !email || !message || !date || !phoneno || !time) {
    alert("Please fill in all the fields.");
    return;
  }

  var url =
    "https://wa.me/917563092029?text=" +
    encodeURIComponent(
      "Full Name: " +
        name +
        "\nDate: " +
        date +
        "\nPhoneNo: " +
        phoneno +
        "\nTime: " +
        time +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message
    );

  console.log(url);
  window.open(url, "_blank").focus();
}
