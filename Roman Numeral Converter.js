function convertToRoman(num) {
  let valR = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
  let len = num.toString().length;
  if (len === 1 && valR.hasOwnProperty(num)) {
    return valR[num];
  }
  let firstD, remD, roman = [];
  rome(num);
  function rome(num) {
    len = num.toString().length;
    switch (len) {
      case 1:

        if (valR.hasOwnProperty(num)) { roman.push(valR[num]); }
        else if (num <= 3) {
          roman.push(valR[1].repeat(num));
        }
        else if (num - 5 >= 4) {
          roman.push(valR[1]);
          roman.push(valR[10]);
        }
        else if (num - 5 < 4) {
          if (num - 5 > 0) {
            roman.push(valR[5]);
            roman.push(valR[1].repeat(Math.abs(num - 5)))
          }
          else {
            roman.push(valR[1].repeat(Math.abs(num - 5)));
            roman.push(valR[5]);
          }
        }

        break;

      case 2:
        firstD = parseInt(num / 10);  //9
        remD = num % 10;  //7
        if (firstD <= 3) {
          roman.push(valR[10].repeat(firstD));
          rome(remD);
        }
        else if (firstD - 5 >= 4) {
          roman.push(valR[10].repeat(10 - firstD));
          roman.push(valR[100]);
          rome(remD);
        }
        else if (firstD - 5 < 4) {
          if (firstD - 5 > 0) {
            roman.push(valR[50]);
            roman.push(valR[10].repeat(Math.abs(firstD - 5)))
          }
          else {
            roman.push(valR[10].repeat(Math.abs(firstD - 5)));
            roman.push(valR[50]);
          }
          rome(remD);
        }


        break;

      case 3:
        firstD = parseInt(num / 100);//6
        remD = num % 100; //49
        if (firstD <= 3) {
          roman.push(valR[100].repeat(firstD));
          rome(remD);
        }
        else if (firstD - 5 >= 4) {
          roman.push(valR[100].repeat(10 - firstD));
          roman.push(valR[1000]);
          rome(remD);
        }
        else if (firstD - 5 < 4) {
          if (firstD - 5 > 0) {
            roman.push(valR[500]);
            roman.push(valR[100].repeat(Math.abs(firstD - 5)))
          }
          else {
            roman.push(valR[100].repeat(Math.abs(firstD - 5)));
            roman.push(valR[500]);
          }
          rome(remD);
        }

        break;

      case 4:
        firstD = parseInt(num / 1000);
        if (firstD <= 3) {
          roman.push(valR[1000].repeat(firstD));
        }
        remD = num % 1000;
        rome(remD);
        break;
    }
  }

  roman = roman.join("");
  console.log(roman);



  return roman;
}
convertToRoman(3999);
