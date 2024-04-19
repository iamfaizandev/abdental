function sendToWhatsapp() {
  // let number = +917549692029;
  let name = document.getElementById("flName").value;
  let email = document.getElementById("UserEmail").value;
  let message = document.getElementById("Message").value;

  var url =
    "https://wa.me/917549692029?text=" +
    "Full Name :" +
    name +
    "%0a" +
    "Email:" +
    email +
    "%0a" +
    "Message:" +
    message;

  console.log(url);
  window.open(url, "_blank").focus();
}
