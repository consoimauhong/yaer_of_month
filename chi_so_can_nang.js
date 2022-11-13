function kiemm_tra() {
    let kg = document.getElementById("kg").value;
    let m = document.getElementById("m").value;
    let bmi = m / (Math.pow(kg, 2));
    let reult = "";

    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");
    document.getElementById("reult").innerHTML = "Chi so BMI la: " +bmi+ "" + reult;
}