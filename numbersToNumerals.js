const values = [1, 4 ,5 ,9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
const numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]

function numberToNumerals (number) {
  if (number < 1 || number > 3999 || !Number.isInteger(number)) {
    return "Out of range. Please enter a whole number above zero and below 4000"
  }
  let output = "";
  while (number > 0) {
    let numeralsBelowNumber = values.filter(value => number >= value)
    output += numerals[numeralsBelowNumber.indexOf(Math.max(...numeralsBelowNumber))]
    number -= Math.max(...numeralsBelowNumber)
  console.log({number})
  }
  return output
}