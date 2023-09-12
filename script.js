// Function to get the current year
function getCurrentYear() {
  var date = new Date();
  return date.getFullYear();
}

// Set the option in the select list based on the current year
function setOptionByCurrentYear() {
  var currentYear = getCurrentYear();
  var percentageSelect = document.getElementById("percentage");

  // Check if the current year matches one of the options and select it
  var options = percentageSelect.options;
  for (var i = 0; i < options.length; i++) {
      var optionText = options[i].text;
      if (optionText.includes(currentYear)) {
          percentageSelect.value = options[i].value;
          break;
      }
  }
}

// Call the function to set the option based on the current year when the page loads
setOptionByCurrentYear();

function calculate() {
  var amount = parseFloat(document.getElementById("amount").value);
  var percentageElement = document.getElementById("percentage");
  var customPercentageElement = document.getElementById("customPercentage");
  var percentage;

  if (percentageElement.value === "custom") {
      percentage = parseFloat(customPercentageElement.value);
  } else {
      percentage = parseFloat(percentageElement.value);
  }

  var result = (amount * percentage) / 100;
  document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2) + " Total com a taxa: " + (amount + result).toFixed(2);
}

// Show or hide the custom percentage input field
document.getElementById("percentage").addEventListener("change", function() {
  var percentageElement = document.getElementById("percentage");
  var customPercentageElement = document.getElementById("customPercentageBlock");

  if (percentageElement.value === "custom") {
      customPercentageElement.style.display = "block";
  } else {
      customPercentageElement.style.display = "none";
  }
});