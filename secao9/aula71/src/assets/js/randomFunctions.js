export function randomChar (min, max) {
    let hexCode =  Math.floor(Math.random() * (max - min) + min)
    return String.fromCharCode(hexCode)
  }

export default function randomString (quantity, has_upper, has_lower, has_number, has_symbol) {
  const stringArray = []

  for (let i = 1; i <= quantity; i++) {
    has_lower && stringArray.push(randomChar(97, 123))
    has_upper && stringArray.push(randomChar(65, 91))
    has_number && stringArray.push(randomChar(48, 58))
    has_symbol && stringArray.push(randomChar(33, 48))
  }

  /**
   * .sort receives a function that defines the sort order.
   * The return value should be a number whose sign indicates the relative
   * order of the two elements:
   * negative if a is less than b,
   * positive if a is greater than b,
   * and zero if they are equal. NaN is treated as 0
   * So random - 0.5 gives negative or positive randomly to sort
   */
  stringArray.sort(() => Math.random() - 0.5)

  return stringArray.join('').slice(0, quantity)
}
