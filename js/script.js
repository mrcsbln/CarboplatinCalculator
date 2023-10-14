"use strict";

function calculateDosage() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const serumCreatinine = document.getElementById('serumCreatinine').value;
    const serumCreatinineUnit = document.querySelector('input[name="serumCreatinineUnit"]:checked').value;
    const targetAUC = document.getElementById('targetAUC').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    let serumCreatinineMgdL;
    if (serumCreatinineUnit === 'umolL') {
        serumCreatinineMgdL = serumCreatinine / 88.4;
    } else {
        serumCreatinineMgdL = serumCreatinine;
    }

    const GFR = ((140 - age) * weight * (gender === 'male' ? 1 : 0.85)) / (72 * serumCreatinineMgdL);
    const dosage = targetAUC * (GFR + 25);

    document.getElementById('result').value = 'Absolute Dosis: ' + dosage.toFixed(1) + ' mg';
}

document.getElementById('carboplatinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateDosage();
});