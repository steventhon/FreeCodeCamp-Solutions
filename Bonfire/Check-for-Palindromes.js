function palindrome(str) {
  // Good luck!
  str = str.replace(/[\W]/g, "");
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

palindrome("eye");
