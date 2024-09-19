document.getElementById("cash-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const btn = document.getElementById("cash-btn");
  //   balance
  const balance = document.getElementById("balance").innerText;
  const balanceNumber = Number(balance);
  //   console.log(balanceNumber);
  //   amount
  const amount = document.getElementById("input-nums").value;
  const number = parseFloat(amount);
  //   console.log(number);
  // pin
  const pin = document.getElementById("input-pin").value;
  const pinNumber = parseFloat(pin);
  //   console.log(pinNumber);
  // condition

  if (pinNumber === 11223 && btn.innerText === "Cash Out") {
    const total = balanceNumber - number;
    document.getElementById("balance").innerText = total;
  } else {
    alert("Invalid Input");
  }
});

// ---code thik ache amar cash-add & cash-less 2 ta function aksathe call hocche o condition aksathe pacche aktar sotto hocche onnoter mittha hocche...ai problem solve korte hole 2 ta from use korte hobe...
