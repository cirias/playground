removeAt :: Int -> [a] -> (a, [a])
removeAt _ [] = error "Can't remove from []"
removeAt 1 (x:xs) = (x, xs)
removeAt n (x:xs) = let (d, rst) = removeAt (n - 1) xs
                    in (d, x:rst)
