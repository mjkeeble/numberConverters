// Please refer to the IronSnippets ReadMe for information on these functions
// This file is part of IronSnippets by Mark J. Keeble
// https://github.com/mjkeeble/IronSnippets

function decimalToWordsEN(decimal) {
  let decimalInText = "";
  let decimal = decimal.toString().split(".")[1];
  if (Math.floor(decimal) == 0) {
      decimalInText = "Zero point"
  } else {
      decimalInText = integerToWordsEN(Math.floor(decimal)) + " point";
  } // End if
  console.log(decimal); //===========================
  for (let i = 0; i < decimal.length; i++) {
      decimalInText += " " + integerToWordsEN(decimal.charAt(i));
  } // end for loop
  return decimalInText.trim();
} //End To

// **********************************************

function currencyToWordsEN(value, currency) {
  let currencyInText = integerToWordsEN(Math.floor(value), "us");
  const currencies = {
      //["Currency code", "currency unit", "subdivision plural", "subdivision singular"]
      "USD": ["dollar", "cents", "cent"],
      "EUR": ["euros", "cents", "cent"],
      "GBP": ["pounds", "pence", "pence"]
  };
  console.log(currency); //===========================
  console.log(Math.floor((value % 1) * 100)); //===========================

  let unit = currencies[currency.toUpperCase()][0];
  let subunit = Math.floor((value % 1) * 100) < 2 ? currencies[currency.toUpperCase()][2] : currencies[currency.toUpperCase()][1];
  if (Math.floor(value) >= 1) currencyInText += " " + unit
  if (Math.floor(value) != value) {
      if (Math.floor(value) > 1) currencyInText += " and "
      currencyInText += integerToWordsEN(Math.floor((value % 1) * 100))
          + " "
          + subunit;
  } // end if
  return (currencyInText.charAt(0).toUpperCase() + currencyInText.slice(1)).trim()
} // End currencyToWordsEN

// **********************************************

function integerToWordsEN(integer, sys = "") {
  let integerInText = ""
  console.log(integer); //===========================
  
  integer = parseInt(integer);
  const thousands = ["", "thousand", "million", "thousand", "billion", "thousand", "trillion", "quadrillion", "quintillion", "sextillion"];

  if (sys.toLowerCase() == "us") {
      thousands.splice(5, 1);
      thousands.splice(3, 1);
  } // end if
  integer = integer.toString();
  let i = 1;
  while (i < (integer.length / 3)) {
      integerInText = (numbersUpTo99EN(integer.substring(integer.length - (i * 3), integer.length - (i - 1) * 3)))
          + " "
          + thousands[i - 1]
          + " "
          + integerInText;
      i++
  } //end while
  integerInText = (numbersUpTo99EN((integer.substring(0, integer.length - ((i - 1) * 3)))))
      + " "
      + thousands[i - 1]
      + " "
      + integerInText;
  console.log(integerInText); //===========================

  return (integerInText.charAt(0).toUpperCase() + integerInText.slice(1)).trim();

} // End integerToWordsEN

// **********************************************

function numbersUpTo99EN(number) {
  const zero2Nineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let txt = "";
  if (number.length == 3) {
      txt += zero2Nineteen[number.charAt(0)] + " hundred";
      number = number.substring(1)
      if (number > 0) {
          txt += " and"
      } else {
          return txt;
      } // End if
  } // End if
  if (number < 20) {
      txt += " " + zero2Nineteen[parseInt(number)];
  } else {
      txt += " " + tens[Math.floor(parseInt(number) / 10)];
      if (parseInt(number) % 10 > 0) txt += "-";
      txt += zero2Nineteen[Math.floor(parseInt(number) % 10)];
  } // End if
  return txt;
} // End numbersUpTo99EN


