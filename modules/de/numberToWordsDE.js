function numberToWordsDE(number) {
  let numberAsText = ""
  let integer = parseInt(number.toString().split(",")[0]);
  let decimal = number.toString().split(",")[1];

  numberAsText = integerToWordsDE(integer)
  if (decimal) {
    numberAsText += " Komma";
    for (let i = 0; i < decimal.length; i++) {
      if (decimal.charAt(i) === "0") {
          numberAsText += " null"
          } else { 
      numberAsText += " " + integerToWordsDE(decimal.charAt(i));
      }
    } // end for loop
  }

  return numberAsText[0] + numberAsText.substring(1).trim();
} // End decimalToWordsDE

// **********************************************

function currencyToWordsDE(value, currency) {
  return `currencyToWords DE`;

} // End currencyToWordsDE

// ********************************************DE
function integerToWordsDE(integer) {

  let integerAsText = "";
  const partials = [];
  const thousands = [
    ["", ""],
    ["tausend", "tausend"],
    ["e Million ", " Millionen "],
    ["e Milliarde ", " Milliarden "],
    ["e Billion ", " Billionen "],
    ["e Billiarde ", " Billiarden "],
    ["e Trillion ", " Trillionen "],
    ["e Trilliarde ", " Trilliarden "]
  ];
  if (!integer) return "Null"
  if (integer == 1) return "eins"
  integer = integer.toString();

  while (integer.length > 3) {
    let partial = integer.substr(integer.length - 3);
    integer = integer.slice(0, -3);
    partials.push(partial);
  }
  partials.push(integer);

  for (i = partials.length -1; i >= 0; i--) {
    let partialAsText = numbersUnderThousandToWordsDE(partials[i]).trim();
    if (partialAsText.length > 0) {
      if (parseInt(partials[i]) === 1) {
      partialAsText = partialAsText + thousands[i][0];
      }
      if (parseInt(partials[i]) > 1) {
      partialAsText = partialAsText + thousands[i][1];
      }
      integerAsText +=  partialAsText;
    }
  }

  integerAsText = integerAsText.trim()

  if (integerAsText.substring(integerAsText.length - 3) === "ein") integerAsText += "s"

  return integerAsText
} // End integerToWordsDE

// *******************************************
function numbersUnderThousandToWordsDE(number) {
  const zero2Nineteen = ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];
  const tens = ["", "", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechszig", "siebzig", "achtzig", "neunzig"];
  let txt = "";
  if (number.length == 3 && number.charAt(0) != "0") {
    txt += zero2Nineteen[number.charAt(0)] + "hundert";
    number = number.substring(1)
    if (parseInt(number)== 0) {
      return txt
    }
  } // End if
  
  if (number < 20) txt +=zero2Nineteen[parseInt(number)];
  if (number >= 20){
    txt += zero2Nineteen[Math.floor(parseInt(number) % 10)];
    if (!Number.isInteger(number / 10)) txt += "und";
    txt += tens[Math.floor(parseInt(number) / 10)];
  } // End if

  return txt;
} // End numbersUnderThousandToWordsDE



export { numberToWordsDE, currencyToWordsDE };