# is it a palindrome?
paliin = input('Enter a random word: ')


def checkpalindrome():
    palicheck = []
    palireverse = []
    for x in paliin.lower():
        palicheck.append(x)
    for y in palicheck:
        palireverse.insert(0, y)
    if palicheck == palireverse:
        print(f'{paliin} is a palindrome!')
    else:
        print(f'{paliin} is not a palindrome.')


checkpalindrome()
