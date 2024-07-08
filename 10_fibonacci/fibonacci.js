const fibonacci = function(memberNum) {
  if(memberNum < 0) return "OOPS";

  let fibonacciSeq = [0];
  let fibNext = 1;
  for(let i = 1; i <= memberNum; i++) {
    fibonacciSeq.push(fibonacciSeq[i - 1] + fibNext);
    fibNext = fibonacciSeq[i - 1];
  }
  return fibonacciSeq[fibonacciSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
