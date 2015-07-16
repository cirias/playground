fib := method(n,
  if(n == 0) then(return 0) elseif(n == 1) then(return 1) else(return fib(n - 1) + fib(n - 2)))

fib := method(n,
  i := 1;
  a := 0;
  b := 1;
  while(i < n,
    t := b;
    b = a + b;
    a = t;
    i = i + 1);
  b
)
fib(4) println
