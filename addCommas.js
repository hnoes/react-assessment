function addCommas(number) {
    // Convert the number to a string
    const numString = number.toString();
  
    // Split the string into integer and decimal parts (if any)
    const parts = numString.split(".");
  
    // Format the integer part with commas
    const integerPartWithCommas = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // If there is a decimal part, combine it with the integer part
    if (parts.length === 2) {
      return `${integerPartWithCommas}.${parts[1]}`;
    } else {
      return integerPartWithCommas;
    }
  }
  
  module.exports = addCommas;
  