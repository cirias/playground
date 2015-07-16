pack :: (Eq a) => [a] -> [[a]]
pack [] = []
pack (x:xs) = let (reps, rest) = span (==x) xs
              in (x:reps) : pack rest

encode :: (Num b, Enum b, Eq a) => [a] -> [(b, a)]
encode xs = map (\reps -> (fromIntegral $ length reps, head reps)) $ pack xs
