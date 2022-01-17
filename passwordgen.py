from random import randint

def scramble(workingpass):
    workingpass = list(workingpass)
    passletlist = []
    for char in workingpass:
        workingpass.remove(char)
        workingpass.insert(randint(0, len(workingpass) - 1), char)
    return ''.join(workingpass)

while True:
    imput = input('Enter your password: ')
    if imput == 'no': break
    print(scramble(imput))