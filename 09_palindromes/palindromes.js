const palindromes = function (msg) {
  msg = msg.toLowerCase().replace(/[\s.,!]/g, '');
  let flippedMsg = msg.split('').reverse().join('');

  if(flippedMsg == msg) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
