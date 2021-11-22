let num = 15;

function func1(num){
  for(let i = 0; i <= num; i++){
    if(num % i == 0){
      console.log(i);
    }
  }
}
func1(num);