let tub = 12;

function tubson() {
  for (let i = 2; i < tub; i++) {
    if (tub % i == 0) {
      continue;
    } else if (tub % i != 0) {
      console.log(i);
    }
  }
}
tubson();