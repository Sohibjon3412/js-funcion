let num = 15;
let yigindi = 0;

function func1(num){
  for(let i = 0; i <= num; i++){
    if(num % i == 0){
      yigindi += i; 
    }
  }
  console.log(yigindi);
}
func1(num);