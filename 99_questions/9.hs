pack :: (Eq a) => [a] -> [[a]]
pack [] = []
pack (x:xs) = let (reps, rest) = span (==x) xs
              in (x:reps) : pack rest
