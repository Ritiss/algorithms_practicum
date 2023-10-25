function fib(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    const next = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = next;
  }

  return fibCurrent;
}

// Примеры использования:
console.log(fib(3)); // Выводит 2
console.log(fib(20)); // Выводит 6765
