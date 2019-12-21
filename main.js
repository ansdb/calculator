const input = document.querySelector("#input-output-area");

// Function to display input
(function inputDisplay() {

    document.querySelector("#container").addEventListener("click", e => {
      const value = e.target.value;
      const targetClass = e.target.className;
  
      //  Check the class name of the clicked button
      switch (targetClass) {
        case "reset-btn":
          input.innerHTML = value;
          break;
  
        case "delete-btn":
          // Delete the last input
          input.innerHTML = input.innerHTML.slice(0, -1);
          break;
  
        default:
          // Clear the first "0" value that is initially displayed
          input.innerHTML.charAt(0) == 0
            ? (input.innerHTML = "")
            : input.innerHTML;
  
          // Concatenate the values of the clicked button
          input.innerHTML += value;
          break;
      }
    });
    
  })();