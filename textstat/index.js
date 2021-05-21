
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

function getConsonants(str) {
  var countConsonants = 0;

  for (var i = 0; i < str.length; i++) {

    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" &&
      str[i] !== "o" && str[i] !== "u" && str[i] !== " ") {
      countConsonants++;
    }
  }
  return (countConsonants);
}

function getWords(str) {
  return str.trim().split(/\s+/).length;
}

function getNewTxt(str) {
	var arr = str.trim.split(/\s+/);
	var newarr = [];
	
	for (var i=0; i<arr.length; i+=2){
		newarr.push(arr[i]);
	}
	return newarr.join(' ');
}

/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    //TODO: Implement this function
    console.log('onStatisticsClicked called');
	
	document.getElementById('valCharCount').value = txt.length.toString();
	
	var spaces = txt.split(" ").length - 1
	document.getElementById('valSpacesCount').value = spaces.toString();
	
	var vowels = getVowels(txt)
	document.getElementById('valVowelsCount').value = vowels.toString();
	
	var cons = getConsonants(txt)
	document.getElementById('valConsonantsCount').value = cons.toString();
	
	var words = getWords(txt)
	document.getElementById('valWordsCount').value = words.toString();
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');
	
	document.getElementById('valOddWords').value = getNewTxt(txt);
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
