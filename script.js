// BMI FUNCTION
function calculateBMI() {
  let h = document.getElementById("height").value / 100;
  let w = document.getElementById("weight").value;

  let bmi = w / (h * h);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else category = "Overweight";

  document.getElementById("bmiResult").innerText =
    `BMI: ${bmi.toFixed(2)} (${category})`;
}