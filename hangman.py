import random


def hangman(wordlist, wordlen, guesscount):
    hangmanguess = wordlist[random.randint(0, len(wordlist)-1)]
    while len(hangmanguess) > wordlen:
        hangmanguess = wordlist[random.randint(0, len(wordlist)-1)]
    wrongletlist = ''
    rightletlist = []
    for x in range(wordlen):
        rightletlist.append('-')
    guesscountdis = guesscount
    for x in range(guesscount):
        guess = input(f'Guess a letter. The word is {wordlen} letters long. ')
        guess = guess.lower()
        guesscountdis -= 1
        if guess in rightletlist or guess in wrongletlist:
            print("You can't say the same letter")
            continue
        if guess not in hangmanguess:
            wrongletlist += guess
            print(
                f'{guess} is not in the word. Wrong letters: {wrongletlist}. {guesscountdis} guesses remaining')
        if guess in hangmanguess:
            rightletlistcop = rightletlist.copy()
            wordlocation = hangmanguess.index(guess) + 1
            rightletlist.insert(hangmanguess.index(guess), guess)
            rightletlist.pop(wordlocation)
            print(
                f'{guess} is in the word. Right letters: {rightletlist}. {guesscountdis} guesses remaining')
        if ''.join(rightletlist) == hangmanguess:
            print(f'You won! The word was {hangmanguess}')
            break
    else:
        print(f'You lost! The word was {hangmanguess}')


hangman(["awful", "banjo", "blank", "words", "shady", "quick", "quiet", "field", "fused", "quirk", "jokes", "jerks", "pager", "froze", "quilt", "bored", "couch", "child", "doubt", "delay", "exact", "enjoy", "fraud", "forty", "grace", "guard", "house", "human", "index", "ideal", "judge", "joint", "logic", "links", "lunch", "kicks", "khaki",
         "known", "moral", "magic", "mayor", "march", "might", "newly", "novel", "ought", "ocean", "older", "pitch", "prize", "party", "radio", "royal", "rough", "rapid", "salty", "shown", "score", "sugar", "thank", "tower", "threw", "unity", "urban", "usage", "vital", "virus", "waste", "watch", "whose", "yeild", "youth", "zoned", "zebra", "xylem"], 5, 10)
