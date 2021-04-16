# Number Converters

This repo now contains the numbersToText file previously included in the [IronSnippets](https://github.com/mjkeeble/IronSnippets). My intention is to expand this into a stand-alone web site and API with various number conversion functions. Why? Because I can!
* numbers to text conversion
  * English (*done*)
  * German
  * French
  * contributions for other languages welcome!
* text to numbers conversion (maybe!)
* decimal to roman numerals conversion (*done*)
* base conversions

## I offer no guarantee of accuracy in the results.Use at your own risk!

# numberToWords
(numbersToWordsEN.js)
Set of functions to convert integers, decimals and currencies to words.
Short-scale numbering is used for large numbers so 1 billion = 1000 x 1 million

This may not be the most elegant approach to converting numbers, so improvement suggestions are welcome!

### number2WordsEN()
Returns the value entered in words.

Parameters:
1. number (string) - the number to be converted .

*The code expects a decimal point.* If a comma is used replace the '.' in the split methods in lines 8 and 9 with a comma and " point" with " comma" in line 12.

*Dependencies:* Calls integerToWordsEN() and (indirectly) numbersUnderThousandToWordsEN() functions.

### integerToWordsEN()
Returns an integer in words.

Parameters:
1. number (string) - the integer to be converted

*Dependencies:* calls numbersUnderThousandToWordsEN() function.

### numbersUnderThousandToWordsEN()
Returns an integer value below 1000 in words.

Parameters:
1. number (string) - the integer to be converted

Can be used on a stand-alone basis, but is concieved to be called by the other functions.

### currencyToWordsEN()
Returns a monetary value as a text string in words. 

Parameters:
1. num (string) - the value to be converted
1. 'currency' (optional string) - three-letter currency code. default value is 'EUR'

The currency list includes dollar, euro and pounds - additional currencies can be added to the currency object after line 23.

*Dependencies:* Calls integerToWordsEN and (indirectly) numbersUnderThousandToWordsEN functions. 

# Decimal to Roman Numerals
(numeralsToNumbers.js and numbersToNumerals.js)

Convert between decimal and Roman Numerals.

Since Roman Numerals are generally accepted to cover the range 1 - 3999, this convention has been retained here.

