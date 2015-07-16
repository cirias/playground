data Elem a = Multiple Int a
            | Single a deriving (Show)

encodeDirect :: (Eq a) => [a] -> [Elem a]
encodeDirect xs =
    reverse $ foldl reduce [] xs
  where
    reduce [] x = [Single x]
    reduce l@(fst:rest) x = case fst of
                     Single y
                         | y == x -> Multiple 2 x : rest
                         | otherwise -> Single x : l
                     Multiple n y
                         | y == x -> Multiple (n + 1) x : rest
                         | otherwise -> Single x : l
