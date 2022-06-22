def bmi(weight, height):
    count = weight / height**2
    if count <= 18.5:
        return "Underweight"
    if count <= 25.0:
        return "Normal"
    if count <= 30.0:
        return "Overweight"
    if count > 30:
        return "Obese"
