// 두 배열 합치기
//sort 함수를 사용하면 시간복잡도가 nlogn
//투 포인터를 활용 하여 시간 복잡도를 n+m으로 만들 수 있음
function solution(a, b) {
  let answer = [];
  let n = a.length,
    m = b.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < n && p2 < m) {
    if (a[p1] < b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (p1 < n) answer.push(a[p1++]);

  while (p2 < m) answer.push(b[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
