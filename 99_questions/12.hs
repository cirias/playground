data Elem a = Multiple Int a
            | Single a deriving (Show)

decodeModified :: (Eq a) => [Elem a] -> [a]
decodeModified xs =
    concatMap expand xs
  where
    expand (Single x) = [x]
    expand (Multiple n x) = replicate n x
