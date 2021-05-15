const wordValues = {
  "null": 0,
  "ein": 1,
  "zwei": 2,
  "drei": 3,
  "vier": 4,
  "fünf": 5,
  "sechs": 6,
  "sieben": 7,
  "acht": 8,
  "neun": 9,
  "zehn": 10,
  "elf": 11,
  "zwölf": 12,
  "sechzehn": 16,
  "siebzehn": 17,
  "zwanzig": 20,
  "sechzig": 60,
  "siebzig": 70,
  "hundert": 100,
  "tausend": 10**3,
  "million": 10**6,
  "milliard": 10**9,
  "billion": 10**12,
  "billiard": 10**15,
  }
  
function test(integerInWords) {
  let outputNumber = 0
  let partialValue = 0;
  while (integerInWords.length > 0) {
    console.log(`start of do-while loop`)
    let currentNumber = []
      for (let i = 1; i <= Math.min(integerInWords.length, 8); i++) {
        console.log(integerInWords.substring(0, i + 3).padEnd(i + 3," "))
        currentNumber = processWord(integerInWords.substring(0, i + 3).padEnd(i + 3," "));

        if (currentNumber) break;
      }
    const [value, wordLength, action, endPartial] = currentNumber;
    console.log({value});
    console.log({wordLength});
    console.log({action});
    console.log({endPartial});

    switch (action) {
      case "add":
        partialValue += value;
        break;
      case "multiply":
        if (!partialValue) partialValue ++;
        partialValue *= value;
        break;
    }
  //   remove word just processed from integerInWords
    integerInWords = integerInWords.substring(wordLength)

    if (endPartial){
      outputNumber += partialValue;
      partialValue = 0;
    }
    console.log({partialValue})
    console.log({outputNumber})

} // end while
  return outputNumber += partialValue;
}


  
// ======================================================= 
// processWord function returns an array:
// [
//   value of the word (integer), 
//   number of letters to be removed from integerInWords (integer),
//   action to be taken with the number (string)
//   whether partial value should be consolidated (boolean)
// ]

function processWord (word) {
  let wordValue = 0;
  let len = word.length - 3;
  let shortenNumberInWordsBy = word.length

  switch (word.substring(0,word.length - 3)) {
  
    case " ":
    case "und":
      return [
        0,
        word.length - 3, 
        "", 
        false
      ];
      break;
    
    case "ein":
      if (word.charAt(3) === "s" || word.charAt(3) === "e") len++;
      return [
        wordValues[word.substring(0,word.length - 3)],
        len,
        "add",
        false
      ]
      break;;
      
      
    case "zwei":
    case "sechs":
    case "sieben":
    case "zehn":
    case "elf":
    case "zwölf":
    case "sechzehn":
    case "zwanzig":
    case "sechzig":
    case "siebzig":
      return [
        wordValues[word.substring(0,word.length - 3)],
        word.length - 3,
        "add",
        false
      ]
      break;;
      
    case "drei":
    case "vier":
    case "fünf":
    case "acht":
    case "neun":
      let value = wordValues[word.substring(0,word.length - 3)]
      if (word.substring(word.length - 3) === "zig"){
        len = word.length;
        value *= 10
      } 
      return [
        value,
        len,
        "add",
        false
      ]
      break;; 
            
    case "hundert":
      return [
        wordValues[word.substring(0, word.length - 3)],
        word.length - 3,
        "multiply",
        false
      ];
      break;

            
    case "tausend":
    case "million":
    case "milliard":
    case "billion":
    case "billiard":
      if (word.substring(word.length - 3, word.length - 1) === "en") { 
        console.log('hello')
        len = word.length - 1;
      } else {
        if (word.charAt(word.length - 3) === "e") len = word.length - 2;
      }
      return [
        wordValues[word.substring(0, word.length - 3)],
        len,
        "multiply",
        true
      ];
      break;
        
    default:
      return;         
  }
}

console.log(test(`viertausend eins`))