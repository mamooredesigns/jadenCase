function jadenCase(text) {
  var text = document.getElementById('original').value;
  //getting the text from the input field, set it equal to variable text

  var jadenCase = "";
  //creates a string variable to hold the end result for display
  
  var splitText = text.split(" ");
  //takes the text the user enters and splits the words, creating an array with each word indexed individually
  
      for (var i = 0; i < splitText.length; i++) {
        //created a for loop to iterate through each word in the array
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
        //on each iteration, takes an item in splitText array and takes the first character - position 0 - and changes to upper then concatenates from letter position 1 back on
        jadenCase += splitText[i] + " ";
        //takes each iteration or word of array and concatenates it all back together with a space between the words
      }
      
  document.getElementById("editedText").textContent = jadenCase;
  //displays the words of the array in sequence on site
}