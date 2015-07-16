elementAt :: (Num b, Enum b, Eq b) => [a] -> b -> a
elementAt (x:_) 1 = x
elementAt (_:xs) n = elementAt xs (n - 1)
