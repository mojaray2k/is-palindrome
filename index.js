function isPalindrome(string){
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false

  // return true or false
}

isPalindrome("Madam I'm Adam")
