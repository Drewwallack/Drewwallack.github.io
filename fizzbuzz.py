# fizzbuzz


def fizzbuzz(num):
    if num % 3 == 0 and not num % 5 == 0:
        return 'fizz'
    elif num % 3 != 0 and num % 5 == 0:
        return 'buzz'
    elif num % 3 == 0 and num % 5 == 0:
        return 'fizzbuzz'
    return num


while True:
    x = (int(input('number: ')))
    print(fizzbuzz(x))
    if x == 12345:
        break
