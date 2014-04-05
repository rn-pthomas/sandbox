addThree :: Int -> Int -> Int -> Int
addThree x y z = x + y + z

factorial :: Integer -> Integer
factorial n = product [1..n]

------------

lucky :: (Integral a) => a -> String
lucky 7 = "LUCKY NUMBER SEVEN!!!"
lucky x = "Sorry, you're out of luck, pal!"

myFactorial :: (Integral a) => a -> a
myFactorial 0 = 1
myFactorial n = n * myFactorial (n - 1)

first :: (a, b, c) -> a
first (x, _, _) = x

second :: (a, b, c) -> b
second (_, y, _) = y

third :: (a, b, c) -> c
third (_, _, z) = z

------------
capital :: String -> String
capital "" = "Empty string, whoops"
capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x]
