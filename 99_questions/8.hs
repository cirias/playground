compress :: (Eq a) => [a] -> [a]
compress [] = []
compress (x:xs)
  | null xs = [x]
  | x == (head xs) = compress(xs)
  | otherwise = [x] ++ compress(xs)
