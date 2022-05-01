function solution(n, arr) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let order = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] < arr[j]) order += 1;
    }
    ans.push(order);
  }
  return ans;
}

console.log(solution(5, [87, 89, 92, 100, 76]));
