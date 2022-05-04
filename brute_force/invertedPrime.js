//뒤집은 소수
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let reverseNum = +x.toString().split("").reverse().join("");
    if (reverseNum === 1) continue;
    let isPrime = true;
    for (let i = 2; i <= parseInt(Math.sqrt(reverseNum)); i++) {
      if (reverseNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) answer.push(reverseNum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
