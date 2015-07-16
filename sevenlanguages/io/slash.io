origDiv := Number getSlot("/")
Number / := method(i,
  if (i != 0, self origDiv(i), 0)
)

1/0 println
1/2 println
