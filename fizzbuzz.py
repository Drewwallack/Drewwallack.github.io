# fizzbuzz
from _typeshed import Self


def fizzbuzz(num):
    if num % 3 == 0 and not num % 5 == 0:
        return 'fizz'
    elif num % 3 != 0 and num % 5 == 0:
        return 'buzz'
    elif num % 3 == 0 and num % 5 == 0:
        return 'fizzbuzz'
    return num


y = True
while y:
    x = (int(input('number: ')))
    print(fizzbuzz(x))
    if x == 12345:
        y = False
        
