module.exports = function reverse(n) {
  const string = String(Math.abs(n));
  const reversedString = string.split('').reverse().join('');
  return Number(reversedString);
}
