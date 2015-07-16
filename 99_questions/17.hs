split :: (Num b, Enum b, Eq b) => [a] -> b -> ([a], [a])
split [] _ = ([], [])
split xs 0 = ([], xs)
split (x:xs) n = let (fst, snd) = split xs (n - 1)
                 in (x:fst, snd)
