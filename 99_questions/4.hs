myLength :: (Num b, Enum b) => [a] -> b
myLength [] = 0
myLength (_:xs) = 1 + myLength xs
