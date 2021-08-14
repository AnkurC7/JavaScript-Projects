function checkCashRegister(price, cash, cid) {
  let moneyDeno = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let drawer = { status: "", change: [] };
  let change = cash - price;
  let change2 = change;
  let changeArr = [];
  let cashBackNum = 0;
  let j = 0;
  let moneyinDrawer = cid.reduce((sum, a) => sum + a[1], 0);
  if (change < moneyinDrawer) {
    for (let i = cid.length - 1; i >= 0; i--) {
      cashBackNum = 0;
      if (moneyDeno[i] <= change && cid[i][1] >= moneyDeno[i]) {
        changeArr.push([...cid[i]]);
        while (moneyDeno[i] <= change && cid[i][1] >= moneyDeno[i]) {
          cashBackNum += moneyDeno[i];
          change = (change - moneyDeno[i]).toFixed(2);
          changeArr[j][1] = cashBackNum;
          cid[i][1] -= moneyDeno[i];
        }
        j += 1;
      }
    }
    drawer.change = changeArr;
    if (change2 < moneyinDrawer && change == 0) {
      drawer.status = "OPEN";
      return drawer;
    }
    if (change != 0) {
      drawer.status = "INSUFFICIENT_FUNDS";
      drawer.change = [];
      return drawer;
    }
  }
  else if (change2 === moneyinDrawer) {
    drawer.status = "CLOSED";
    drawer.change = cid;
    return drawer;
  }
  else if (change > moneyinDrawer) {
    drawer.status = "INSUFFICIENT_FUNDS"
    drawer.change = [];
    return drawer;
  }
}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
