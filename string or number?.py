initial_imput = input('> ')
IT = 0
while True:
    num = []
    char = ''
    for x in initial_imput:
        try:
            num.append(int(x))
        except ValueError:
            char += x
    question = input('Do you want to see the strings or numbers? ')
    if question == 'string':
        print(char)
    elif question == 'number':
        finalprint1 = ''
        for y in num:
            y = str(y)
            finalprint1 += y
        print(finalprint1)
    else:
        print('please enter either "string" or "number"')
        continue
    if input('do you want to quit? ') == 'yes':
        break
    else:
        initial_imput = input('> ')
