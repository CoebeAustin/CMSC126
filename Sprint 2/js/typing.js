const text = ['Coebe,', 'Coebe Austin,', 'Coebe Austin Lupac,'];

var word_index = 0; // word selector
var indiv_letter = 0; // the every letter for each word
var currentText = '';
var letter = '';

(function type(){
  if (word_index == text.length ){ // makes the alternation for the words in the array 
    word_index = 0; // resets the word_index (e.g., after Coebe Austin Lupac, Coebe will be printed again)
  }  
  currentText = text[word_index]; // selects the specific word / text to appear 
  letter = currentText.slice(0, indiv_letter++); // prints the letters of each word 1 by 1

  document.querySelector('#second_id').textContent = letter; /* selects and alters 
                                                            the element with id #second_id*/
  if (letter.length == currentText.length){ // if the letters in the word are already printed
    word_index++; // proceeds to the next word and prints it 
    indiv_letter = 0; // stops the printing if the number of letters in a word are reached
  }
  setTimeout(type, 500); // time between the appearances of letters for each letter
}())