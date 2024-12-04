function getGrade() {
    // Prompt the user for marks
    let marks = prompt("Enter the student's marks (0-100):");
  
    // Convert the input to a number
    marks = Number(marks);
  
    // Validate input to ensure it's between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Please enter a valid number between 0 and 100.");
      return;
    }
  
    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    // Display the grade
    alert("The student's grade is: " + grade);
  }
  
  // Call the function to prompt for input and display the grade
  getGrade();