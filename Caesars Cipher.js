function rot13(str) {
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(alphabets[25])
  str = str.split("");
  function shiftLetters(a) {
    let letterIndex = alphabets.indexOf(a);
    if (letterIndex == -1) { return a; }
    else {
      letterIndex = letterIndex - 13;
      if (letterIndex < 0) { letterIndex = letterIndex + 26; }
      return alphabets[letterIndex];
    };
  }
  return str.map(a => shiftLetters(a)).join("");;
}

rot13("SERR PBQR PNZC");
