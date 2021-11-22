function myFunk() {
  let son = +prompt("Son: ");
  let b = 0;
  for (let i = 1; i < son; i++) {
    if (son % i == 0) {
      b += i;
    }
  }
  if (b == son) {
    alert("Mukammal son");
  } else if (b != son) {
    alert("Mukammal emas!")
  }
}