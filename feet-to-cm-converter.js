document.getElementById("calculate-btn").addEventListener("click", function() {
  var ftInput = parseFloat(document.getElementById("ft").value);
  var cmResult = ftInput * 30.48;
  document.getElementById("cm").value = cmResult;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("ft").value = "";
  document.getElementById("cm").value = "";
});
