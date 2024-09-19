document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumbers = document.getElementById("input-nums").value;
    // const phoneNumber = parseFloat(phoneNumbers);
    const pinNumbers = document.getElementById("input-pin").value;
    const pinNumber = parseFloat(pinNumbers);
    if (pinNumber === 11223 && phoneNumbers === "017") {
      window.location.href = "./money.html";
    } else {
      alert("Invalid Nunber or PIN");
    }
  });
