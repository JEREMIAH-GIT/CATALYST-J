function checkSpeed() {
    // Prompt the user for the speed of the car
    let speed = prompt("Enter the speed of the car (km/h):");
  
    // Convert the input to a number
    speed = Number(speed);
  
    // Check if the input is valid
    if (isNaN(speed) || speed < 0) {
      alert("Please enter a valid positive number for the speed.");
      return;
    }
  
    // Speed limit
    const speedLimit = 70;
  
    // If the speed is less than or equal to the speed limit
    if (speed < speedLimit) {
      alert("Ok");
    } else {
      // Calculate the number of demerit points
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / 5); // 1 point for every 5 km/h above the limit
  
      // If the demerit points are greater than 12, suspend the license
      if (demeritPoints > 12) {
        alert("License suspended");
      } else {
        // Otherwise, print the total number of demerit points
        alert("Points: " + demeritPoints);
      }
    }
  }
  
  // Call the function to prompt the user for the speed
  checkSpeed();
  