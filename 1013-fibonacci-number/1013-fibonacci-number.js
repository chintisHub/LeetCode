var fib = function (n) {
  if (n == 0) return 0;

  let prev = 0,
    cur = 1,
    temp;

  for (let i = 1; i < n; i++) {
    temp = cur;
    cur = cur + prev;
    prev = temp;
  }

  return cur;
};