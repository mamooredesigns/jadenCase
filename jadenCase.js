function jadenCase(text) {
  var text = document.getElementById('original').value;
  //getting the text from the input field, set it equal to variable text

  var newText = text.split(" ").map(capitalizeFirstLetter);
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  document.getElementById("editedText").textContent = newText.join(" ");
}