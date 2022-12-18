function checkPalindrome() {

    var string = document.getElementById('pass').value;
    if(string.length > 10){
        document.getElementById("demo").innerHTML = "Kindly Enter only 10 characters";
    }else{
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
  if(string == reverseString) {
   
      document.getElementById("demo").innerHTML = "It is a palindrome";
    }
  else {

  document.getElementById("demo").innerHTML = "It is not a palindrome";
  }
}
}

