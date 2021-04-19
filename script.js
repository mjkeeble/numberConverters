import { wordsToNumberEN, wordsToCurrencyEN, wordsToIntegerEN } from "./modules/en/wordsToNumberEN.js";
import { numberToWordsEN, currencyToWordsEN }from "./modules/en/numberToWordsEN.js";
import { wordsToNumberDE, wordsToCurrencyDE} from "./modules/de/wordsToNumberDE.js";
import { numberToWordsDE, currencyToWordsDE} from "./modules/de/numberToWordsDE.js";
import numeralToNumber from './modules/numerals/numeralToNumber.js';
import numberToNumeral from "./modules/numerals/numberToNumeral.js"



let x = wordsToIntegerEN(`one trillion and twenty-one`)
console.log({x}); //*********************
let xText = numberToWordsEN(x.toString())
console.log({xText});

console.log(wordsToNumberEN(`ten thousand`)); //*********************
console.log(wordsToCurrencyEN(`five Euros`)); //*********************
console.log(wordsToIntegerEN("seven million")); //*********************
console.log(currencyToWordsEN("472.0694", "EUR")); //*********************
console.log(wordsToNumberDE("sechs")); //*********************
console.log(wordsToCurrencyDE(`five Euros`)); //*********************
console.log(numberToWordsDE("7")); //*********************
console.log(currencyToWordsDE("472.0694", "EUR")); //*********************
console.log(numeralToNumber("MCMLXVI")); //*********************
console.log(numberToNumeral(1921)); //*********************

