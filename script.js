const btn = document.querySelector("#btn");
btn.addEventListener("click", calculate);

function calculate() {
  let berat = parseInt(document.querySelector("#berat").value);
  let tinggi = parseInt(document.querySelector("#tinggi").value);
  let result = document.querySelector("#result");
  result.innerHTML = " ";

  let bmi = berat / (tinggi / 100) ** 2;
  bmi = bmi.toFixed(1);
  let keterangan;

  if (bmi >= 30) {
    keterangan = "Obesity";
  } else if (bmi >= 25 && bmi <= 29.9) {
    keterangan = "Overweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    keterangan = "Normal weight";
  } else {
    keterangan = "Underweight";
  }

  const response = `BMI Anda adalah <strong>${bmi}</strong> kategori <strong>${keterangan}</strong>`;
  result.innerHTML = response;
}
