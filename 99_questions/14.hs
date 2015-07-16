dupli :: [a] -> [a]
dupli xs = concatMap (\x -> replicate 2 x) xs
