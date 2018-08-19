import json
import copy
import random
import sys

config = json.loads(open("config.json").read())
instruments = config["instruments"]

def gcd(a, b):
    """Return greatest common divisor using Euclid's Algorithm."""
    while b:
        a, b = b, a % b
    return a

def lcm_impl(a, b):
    """Return lowest common multiple."""
    return a * b // gcd(a, b)

def lcm(*args):
    return reduce(lcm_impl, args)

def swap_random(seq):
    seq_copy = copy.copy(seq)
    idx = range(len(seq_copy))
    i1, i2 = random.sample(idx, 2)
    seq_copy[i1], seq_copy[i2] = seq_copy[i2], seq_copy[i1]
    return seq_copy

def apply_change(inst, pattern):
    pattern_copy = copy.copy(pattern)
    """Applies a change to one measure for one instrument"""
    variance = instruments[inst]["variance"]
    for _ in range(variance):
        pattern_copy = swap_random(pattern_copy)
    return pattern_copy

def repeat(acc, el):
    next_measure = {}
    for k in instruments.keys():
        next_measure[k] = apply_change(k, acc[-1][k])
    acc.append(next_measure)
    return acc

def evolve(convergence):
    initial = {}
    for k in instruments.keys():
        initial[k] = instruments[k]["pattern"]
    return reduce((lambda acc, el: repeat(acc, el)), range(convergence-1), [initial])

def calc_convergence():
    """Returns the mininum number of times measures will have to repeat before all measures vary at the same time.
    Based on the 'repetitions' parameters in config.json"""
    all_repetitions = map(lambda k: instruments[k]["repetitions"], instruments.keys())
    return apply(lcm, all_repetitions)

def main():
    inst = None
    if (len(sys.argv) > 1):
        inst = sys.argv[1]

    convergence = calc_convergence()
    patterns = evolve(convergence)
    if inst is not None:
        print json.dumps(map(lambda item: item[inst], patterns))
        return
    print (json.dumps(patterns))

if __name__ == "__main__":
    main()
