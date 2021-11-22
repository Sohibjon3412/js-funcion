function myFunk() {
  let son = 1000;
  let b = 0;
  for (let i = 1; i <= son; i++) {
    if (son % i == 0) {
      b += i;
    }
  }
  if (b == son) {
    console.log(b);
  }
}
myFunk();