let a = 11;
let b = 22;
let c = 33;
let d = 44;
let min = 0;
let max = 0;

function minMax() {
  if (a == b && b == c && c == d) {
    console.log("Sonlar teng!");
  } else if (a <= b && a <= c && a <= d) {
    min += a;
  } else if (b <= a && b <= c && b <= d) {
    min += b;
  } else if (c <= a && c <= b && c <= d) {
    min += c;
  } else if (d <= a && d <= b && d <= c) {
    min += d;
  }
  
  
  if (a >= b && a >= c && a >= d) {
    max += a;
  } else if (b >= a && b >= c && b >= d) {
    max += b;
  } else if (c >= a && c >= b && c >= d) {
    max += c;
  } else if (d >= a && d >= b && d >= c) {
    max += d;
  }
}
minMax();
console.log(`Eng kichigi ${min} eng kattasi ${max}`);