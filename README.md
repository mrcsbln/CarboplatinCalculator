# Carboplatin-AUC Dosage Calculator

## Overview

This project is a web application designed to calculate the Carboplatin AUC (Area Under the Curve) dosage based on the Calvert formula. It is particularly useful for healthcare professionals to determine the correct dosage for patients.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0

## Features

- Input fields for Age, Weight, Serum Creatinine, Target AUC, and Gender.
- Unit conversion for Serum Creatinine (mg/dL and µmol/L).
- Calculation of the absolute dosage in mg.

## Installation

1. Clone the repository or download it.
2. Open `index.html` in a web browser of your choice.

## Usage

1. Fill out all the input fields.
2. Click on "Calculate."
3. The calculated dosage will be displayed in the result field.

## Calvert Formula

The dosage calculation is based on the Calvert formula, which is commonly used for calculating Carboplatin dosage.

## Code Snippets

### HTML

The main form for inputting patient data.

\`\`\`html
<form id="carboplatinForm">
    <!-- Input fields here -->
</form>
\`\`\`

### JavaScript

The main function for dosage calculation.

\`\`\`javascript
function calculateDosage() {
    // Dosage calculation logic here
}
\`\`\`

## License and Disclaimer

This project is under the MIT License.

### Disclaimer

This software is intended for portfolio demonstration and educational purposes only. It should not be used for medical decision-making or as a substitute for professional medical advice. Always consult with healthcare professionals for medical advice and treatment.

