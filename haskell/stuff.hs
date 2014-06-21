module Main where

allEven :: [Integer] -> Bool
allEven [] = True
allEven (h:t) = if odd h then False else allEven t

squareAll list = map square list
  where square x = x * x

f :: (Num a) => a -> a -> a
f x y = x + y

-----------------------------------------------------
circumference :: Float -> Float
circumference r = 2 * pi * r

data List a = Empty | Cons a (List a) deriving (Show, Read, Eq, Ord)
