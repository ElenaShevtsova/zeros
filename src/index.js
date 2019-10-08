module.exports = function zeros(expression) {
  // your solution
  let factorial = expression.split('*');
    let result = [];
    let count = 0;
    for (let i = 0; i < factorial.length; i++) {
        if (factorial[i].includes('!!')) {
            let numbers = factorial[i].split('!!').join('');
            for (let i = parseFloat(numbers); i >= 1; i -= 2) {
                result.push(i);
            }
        } else if (factorial[i].includes('!')) {
            let everyNumber = factorial[i].split('!').join('');
            for (let i = parseFloat(everyNumber); i >= 1; i--) {
                result.push(i);
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] % 5 === 0 && result[i] != 25 && result[i] != 75 && result[i] != 50 && result[i] != 100) {
          count++;
      } else if (result[i] === 25 || result[i] === 75 || result[i] === 50 || result[i] === 100) {
          count+=2;
      } 
  }
   return count;

}
