pack :: (Eq a) => [a] -> [[a]]
pack [] = []
pack (x:xs) = let (reps, rest) = span (==x) xs
              in (x:reps) : pack rest

data Elem a = Multiple Int a
            | Single a deriving (Show)

encodeModified :: (Eq a) => [a] -> [Elem a]
encodeModified xs =
    map singleOrNot $ pack xs
  where
    singleOrNot reps
        | length reps == 1 = Single (head reps)
        | otherwise = Multiple (length reps) (head reps)

