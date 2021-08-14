function palindrome(str) {
  str = str.toLowerCase()
           .split("")
           .filter(a => (/[a-z\d]/).test(a));
  let rev = []
  console.log(str);
  str.filter(a => (rev.unshift(a)));
  str = str.join("");
  rev = rev.join("");
  return str === rev;
}

palindrome("0_0 (: /-\ :) 0-0");
