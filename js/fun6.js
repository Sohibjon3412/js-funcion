let tub = 12;

function tubson() {
  for (let i = 2; i < tub; i++) {
    if (tub % i == 0) {
      console.log(`${tub} tub son emas`);
      break;
    } else if (tub % i != 0) {
      console.log(`${tub} tub son`);
      break;
    }
  }
}
tubson();