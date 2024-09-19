document.getElementById("cashOut").addEventListener("click", function () {
  const cashOut = document.getElementById("cashOut");
  const btnText = cashOut.innerText;
  //   console.log(btnText);
  // hidden stop
  const forms = document.getElementById("form");
  forms.classList.remove("hidden");
  // cash in btn bottom
  const cashless = document.getElementById("cash-btn");
  cashless.innerText = btnText;
});
