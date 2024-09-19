document.getElementById("cashIn").addEventListener("click", function () {
  const cashIn = document.getElementById("cashIn");
  const btnText = cashIn.innerText;
  //   console.log(btnText);
  // hidden stop
  const forms = document.getElementById("form");
  forms.classList.remove("hidden");
  // cash in btn bottom
  const cashAdd = document.getElementById("cash-btn");
  cashAdd.innerText = btnText;
});
