const wordValues = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19,
  "twenty": 20,
  "thirty": 30,
  "fourty": 40,
  "fifty": 50,
  "sixty": 60,
  "seventy": 70,
  "eighty": 80,
  "ninety": 90,
  "hundred": 100,
  "thousand": 1000,
  "million": 1000000,
  "billion": 1000000000,
  "trillion": 1000000000000
}
function wordsToDecimalEN(decimalInWords) {

};

function wordsToCurrencyEN(currencyInWords) {
  return `wordsToCurrency EN`
};

function wordsToNumberEN (numberInWords) {
return `wordsToNumber EN`
};



function wordsToIntegerEN(integerInWords) {

  console.log(`wordsToInteger EN`); //*********************
  
  const words = cleanIntegerInWords(integerInWords);
  if (words[0] === 'error') {
    return (`The following words are not valid:` + words[1]);
  }
  const value = buildInteger(words);
  return value;
}



function cleanIntegerInWords(integerInWords) {
  integerInWords = integerInWords.replace(/-/g, " "); // replace'-' with space
  integerInWords = integerInWords.replace(/[^a-zA-Z ]/g, ""); // remove non-letters
  integerInWords = integerInWords.replace(/( and )/g, " "); // remove 'and'
  integerInWords = integerInWords.replace(/( And )/g, " "); // remove 'And'
  const words = integerInWords.split(" ");

  let errorWords = "";
  words.forEach(function (word) {
    if (!wordValues.hasOwnProperty(word.toLowerCase())) errorWords += " " + word;
  });  // end words.forEach loop
  if (errorWords) return ["error", errorWords];

  const output = words.map(function (word) {
    return word.toLowerCase()
  });
  return output;
}



function buildInteger(words) {
  const values = words.map(word => wordValues[word]);

  let output = 0;
  let partialSum = 0;
  let partialMultiplier = 1

  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] < 100) {
      partialSum += values[i]
    }

    if (values[i] == 100) {
      partialSum += values[i - 1] * 100;
      console.log(`partialSum 100: ${partialSum}`);
      output += partialSum * partialMultiplier;
      partialMultiplier = 1;
      partialSum = 0;
      i--;
    }

    if (values[i] > 100) {
      if (partialSum > 0) {
        output += partialSum * partialMultiplier;
        partialSum = 0;
      }
      partialMultiplier = values[i];
    }
  }
  output += partialSum * partialMultiplier;
  return output;
}
export { wordsToNumberEN, wordsToCurrencyEN, wordsToIntegerEN };