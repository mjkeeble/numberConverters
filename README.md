# Number Converters

This repo now contains the numbersToText file previously included in the [IronSnippets](https://github.com/mjkeeble/IronSnippets). My intention is to expand this into a stand-alone web site and API with various number conversion functions. Why? Because I can!
* numbers to text conversion
  * English
  * German
  * French
  * contributions for other languages welcome!
* text to numbers conversion (maybe!)
* numbers to roman numerals (and back)
* base conversions

# numberToWords
(numberToWords.js)
Set of functions to convert integers, decimals and currencies to words.
This may not be the most elegant approach to converting numbers, so improvement suggestions are welcome!

### decimal2Words
Returns the amount entered as a text string in words.

Parameters:
1. num - the number to be converted.

*The code expects a decimal point.* If a comma is used replace the '.' in the split method in line 7 with a comma.

*Dependencies:* Calls integer2Words and hundreds2Words functions.

### currency2Words
Returns a monetary value as a text string in words. 

Parameters:
1. num - the value to be converted
1. 'currency' (optional) - three-letter currency code

The currency list includes dollar, euro and pounds - additional currencies can be added to the currency object after line 23.

Uses the US numbering system for billions.

*Dependencies:* Calls integer2Words and hundreds2Words functions. 

### integer2Words
Returns an integer as a text string in words.

Parameters:
1. num - the value to be converted
1. 'sys' (optional) - enter 'us' to use the American numbering system where 10^9 = 1 billion, otherwise 10^12 = 1 billion

*Dependencies:* calls hundreds2Words function.

### hundreds2Words
Returns an integer value below 1000 as a text string in words.

Can be used on a stand-alone basis, but is concieved as a subordinated function to the others.

This function can be used on a stand-alone basis where appropriate, but was concieved as a subordinate function to integer2Words.

