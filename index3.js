function calculateNetSalary() {
    // Get user inputs for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter any benefits:"));
  
    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      alert("Please enter valid positive numbers for salary and benefits.");
      return;
    }
  
    // Calculate the gross salary
    let grossSalary = basicSalary + benefits;
  
    // --------------------------
    // 1. Calculate PAYE (Tax)
    // Example Tax Brackets from the KRA
    let tax = 0;
  
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1; // 10% tax
    } else if (grossSalary <= 40000) {
      tax = 2400 + (grossSalary - 24000) * 0.15; // 15% for excess
    } else if (grossSalary <= 80000) {
      tax = 4800 + (grossSalary - 40000) * 0.2; // 20% for excess
    } else if (grossSalary <= 120000) {
      tax = 12800 + (grossSalary - 80000) * 0.25; // 25% for excess
    } else {
      tax = 22800 + (grossSalary - 120000) * 0.3; // 30% for excess
    }
  
    // --------------------------
    // 2. Calculate NHIF Deductions
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1050;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else {
      nhifDeduction = 1600;
    }
  
    // --------------------------
    // 3. Calculate NSSF Deductions
    // Example: NSSF deduction as a fixed percentage or value
    let nssfDeduction = grossSalary * 0.06; // Example 6% of the gross salary
  
    // --------------------------
    // Calculate the net salary
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
    // Display the results
    alert(`Gross Salary: KSh ${grossSalary.toFixed(2)}\n` +
          `PAYE (Tax): KSh ${tax.toFixed(2)}\n` +
          `NHIF Deduction: KSh ${nhifDeduction.toFixed(2)}\n` +
          `NSSF Deduction: KSh ${nssfDeduction.toFixed(2)}\n` +
          `Net Salary: KSh ${netSalary.toFixed(2)}`);
  }
  
  // Call the function to calculate the salary
  calculateNetSalary();
  