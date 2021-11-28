# fizzbuzz


def fizzbuzz(num):
    if num % 3 == 0 and not num % 5 == 0:
        return 'fizz'
    elif num % 3 != 0 and num % 5 == 0:
        return 'buzz'
    elif num % 3 == 0 and num % 5 == 0:
        return 'fizzbuzz'
    return num
    

print(fizzbuzz(int(input('number: '))))
