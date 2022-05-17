//최대 매출
//for문이 한번 쭉 돌게 해야함,처음 3개의 값을 활용해야함
function solution(k, arr) {
  let answer = 0,
    sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; //window가 한칸 밀림, arr[i]를 추가하고 arr[i-k]를 뺌
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
