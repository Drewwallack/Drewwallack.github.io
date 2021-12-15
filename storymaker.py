from random import randint as ri
while True:
    imput = input('How long should the story be? ')
    if imput == 'quit':
        print('yes daddyyyy')
        break
    if imput.isdigit() != True:
        print('Please enter a number.')
        continue
    wordn = int(imput)
    wordlist = ["awful", "banjo", "blank", "words", "shady", "quick", "quiet", "field", "fused", "quirk", "jokes", "jerks", "pager", "froze", "quilt", "bored", "couch", "child", "doubt", "delay", "exact", "enjoy", "fraud", "forty", "grace", "guard", "house", "human", "index", "ideal", "judge", "joint", "logic", "links", "lunch", "kicks", "khaki",
                "known", "moral", "magic", "mayor", "march", "might", "newly", "novel", "ought", "ocean", "older", "pitch", "prize", "party", "radio", "royal", "rough", "rapid", "salty", "shown", "score", "sugar", "thank", "tower", "threw", "unity", "urban", "usage", "vital", "virus", "waste", "watch", "whose", "yeild", "youth", "zoned", "zebra", "xylem"]
    finalstory = ''
    for i in range(wordn):
        finalstory = finalstory + wordlist[ri(0, len(wordlist)-1)] + ' '
    print(finalstory)
