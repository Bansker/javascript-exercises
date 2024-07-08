const add = function(a, b) {
	return a + b;
};


const subtract = function(a, b) {
	return a - b;
};


const sum = function(nums) {
  let retVal;
  if(nums.length === 0) {
    retVal = 0;

  } else if (nums.length === 1) {
    retVal = nums[0];

  } else {
    retVal = nums.reduce((accumulator, nextNum) => {
      return accumulator + nextNum;
    });
  }

  return retVal;
};


const multiply = function(nums) {
  return nums.reduce((accumulator, nextNum) => accumulator * nextNum);
};


const power = function(a, b) {
	return a ** b;
};


const factorial = function(x) {
  let retVal;
	if(x < 2) {
    retVal = 1; // 0! and 1! = 1

  } else {
    let factorized = 1;

    for(let i = 1; i <= x; i++) {
      factorized *= i;
    }
    retVal = factorized;
  }

  return retVal;
};




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
