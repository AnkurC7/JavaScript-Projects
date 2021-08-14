function telephoneCheck(str) {
  let newStr = str.split("");
  newStr = newStr.filter(a => /\d/.test(a));
  let regEx = /^(?!-)1*\s*?(\(\d{3}\)|\d{3})-?\s?\d{3}\s?-?\d{4}(?!(\))$)/;

  if (regEx.test(str) && (newStr.length === 10 || (newStr.length === 11) && newStr[0] === '1')) { return true; }

  return false;
}

console.log(telephoneCheck("1 (555) 555-5555"));
