module Main where

allEven :: [Integer] -> Bool
allEven [] = True
allEven (h:t) = if odd h then False else allEven t

squareAll list = map square list
  where square x = x * x

f :: (Num a) => a -> a -> a
f x y = x + y

-----------------------------------------------------
lazyByThrees :: Integer -> [Integer]
lazyByThrees x = x:lazyByThrees(x+3)

lazyByFives :: Integer -> [Integer]
lazyByFives x = x:lazyByFives(x+5)

lazyByEights :: Integer -> [Integer]
lazyByEights x = [(y,z) | y <- lazyByThrees(x), z <- lazyByFives(x)]
