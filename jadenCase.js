function jadenCase(text) {
  var text = document.getElementById('original').value;
  //getting the text from the input field, set it equal to variable text

  var newText = text.split(" ").map(capitalizeFirstLetter);
  //this variable takes the text the user entered and splits it according to where user put spaces and then uses the map method which calls the capitalizeFirstLetter function
  
  //so now we need to define the function capitalizeFirstLetter...
  function capitalizeFirstLetter(str) {
    //function, give it the name of what it does and let it know it will receive str data
    return str.charAt(0).toUpperCase() + str.slice(1);
    //then return the string data (from the split text from user) after changing the 0 position of each word to a cap and putting all the rest of the word back on to the cap
  }
  
  document.getElementById("editedText").textContent = newText.join(" ");
  //then send the altered words back to the part of the html file reserved for the results by joining all the split words back together with a space in between them
}