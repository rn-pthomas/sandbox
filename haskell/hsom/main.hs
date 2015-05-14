type Octave = Int
type Dur = Rational
data PitchClass = Cff | Cf | C | Dff | Cs | Df | Css | D | Eff | Ds
                | Ef | Fff | Dss | E | Ff | Es | F | Gff | Ess | Fs
                | Gf | Fss | G | Aff | Gs | Af | Gss | A | Bff | As
                | Bf | Ass | B | Bs | Bss
type Pitch = (PitchClass, Octave)
data Primitive a = Note Dur a
                 | Rest Dur

Note :: Dur -> a -> Primitive a
Rest :: Dur -> Primitive a

data Music a =
  Prim (Primitive a)
  | Music a :+: Music a
  | Music a :=: a
  | Modify Control (Music a)

Prim   :: Primitive a ->        Music a
(:+:)  :: Music a -> Music a -> Music a
(:=:)  :: Music a -> Music a -> Music a
Modify :: Control -> Music a -> Music a

main :: IO()
main = putStrLn "haskell school of music"
