module.exports = function getZerosCount(number) {
  // your implementation
  let res = 0;
  let fives = 5;
  while( fives <= number){
    res += Math.floor(number/fives)
    fives *= 5
  }
  return res;
}
