import random
player_score = 0
computer_score = 0
while True:
    game_board = []
    playerinput = input('Choose Rock, Paper, or Scissors: ')
    playerinput = playerinput.title()
    if playerinput == 'Quit':
        break
    print(f'You have chosen: {playerinput}')
    if player_score == 9:
        print('Make a good play, it is game point!')
    if computer_score == 9:
        print('You better win this! Game point!')
    if playerinput == 'Rock' or playerinput == 'Paper' or playerinput == 'Scissors':
        game_board.append(playerinput)
    else:
        print('please enter a valid answer. Either Rock, Paper, or Scissors')
        continue
    computer_choices = ['Rock', 'Paper', 'Scissors']
    computerinput = computer_choices[random.randint(0, 2)]
    print(f'The computer has chosen: {str(computerinput)}')
    game_board.append(computerinput)
    if game_board == ['Rock', 'Scissors'] or game_board == ['Scissors', 'Paper'] or game_board == ['Paper', 'Rock']:
        print(f'{playerinput} beats {computerinput}. You win!')
        player_score += 1
    if game_board == ['Rock', 'Rock'] or game_board == ['Paper', 'Paper'] or game_board == ['Scissors', 'Scissors']:
        print(f'It is a tie between {playerinput} and {computerinput}')
    if game_board == ['Rock', 'Paper'] or game_board == ['Scissors', 'Rock'] or game_board == ['Paper', 'Scissors']:
        print(f'{playerinput} loses to {computerinput}')
        computer_score += 1
    print(
        f'Your score is now {player_score} and the computer score is now {computer_score}')
    if player_score == 10:
        print('You Win!')
        break
    if computer_score == 10:
        print('You Lose!')
        break
