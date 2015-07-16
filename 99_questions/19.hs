split :: [a] -> Int -> ([a], [a])
split [] _ = ([], [])
split xs 0 = ([], xs)
split (x:xs) n = let (fst, snd) = split xs (n - 1)
                 in (x:fst, snd)

rotate :: [a] -> Int -> [a]
rotate [] _ = []
rotate xs n
    | n >= 0 = let (fst, snd) = split xs n
               in snd ++ fst
    | n < 0 = rotate xs ((length xs) + n)
