data Position = Position
    !Int  -- ^ X coordinate
    !Int  -- ^ Y coordinate
    deriving (Eq, Show)

data Cost a = Cost a
            | NotAvaliable
            deriving (Ord, Show)
instance (Eq a) => Eq (Cost a) where
    Cost x == Cost y = x == y
    NotAvaliable == NotAvaliable = True
    _ == _ = False
instance Functor Cost where
    fmap f (Cost x) = Cost (f x)
    fmap f NotAvaliable = NotAvaliable

findCost :: (Num a, Ord a)
    => [Position]       -- ^ visited position
    -> Position         -- ^ end position
    -> [[a]]            -- ^ the map
    -> Cost a           -- ^ result

findCost (position:_) end _
    | position == end = Cost 0  -- ^ Arrive the end
findCost visited@(position:_) end theMap
    | null nextPositions = NotAvaliable
    | otherwise = minimum . map costAt $ nextPositions
  where
    nextPositions =
        filter avaliable . map (\moveFrom -> moveFrom position) $ movements
      where
        movements =
            [ \(Position x y) -> Position (x+1) y   -- ^ Right
            , \(Position x y) -> Position x (y+1)   -- ^ Down
            , \(Position x y) -> Position (x-1) y   -- ^ Left
            , \(Position x y) -> Position x (y-1)]  -- ^ Up
        avaliable position@(Position x y) =
            and constrains
          where
            xSize = fromIntegral . length $ theMap
            ySize = fromIntegral . length . head $ theMap
            constrains =
                [ x >= 0
                , y >= 0
                , x < xSize
                , y < ySize
                , not (position `elem` visited)]
    costAt nextPosition =
        fmap (+ currentCost) futureCost
      where
        currentCost =
            costing (height position) (height nextPosition)
          where
            height (Position x y) = theMap !! x !! y
            costing from to
                | from >= to = 100               -- ^ Cost 100
                | otherwise = (to - from) * 300  -- ^ Cost 300 per unit
        futureCost = findCost (nextPosition:visited) end theMap

v = [Position 0 0]
m = [[1, 2, 3],
     [3, 2, 4],
     [1, 2, 4],
     [1, 2, 6]]
e = Position 2 0
