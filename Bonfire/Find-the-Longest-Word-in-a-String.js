function findLongestWord(str) {
  str = str.split(' ');
  var len = 0;
  for (i = 0; i < str.length; i++)
    if (str[i].length > len)
      len = str[i].length;
  return len;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
