//부분 수열의 합 2
//대표적인 투 포인터
//for문이 한번 쭉 돌게 해야함

function solution(m, arr) {
  let answer = 0,
    sum = 0,
    start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum > m) {
      sum -= arr[start++];
    }

    answer += end - start + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

/*
(start,end)
(0,0)  (0,1)  (0,2)  (2,3)  (3,4)  
1      3      1      2      3 
       1,3    3,1    1,2    2,3     
              1,3,1          

=>각 end 마다 end-start+1을 더하면 됨. 
*/
