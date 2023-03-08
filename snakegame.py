## Use the arrow keys to move the snake around the screen
## The goal is to eat as many fruits as possible without running into the walls or the snake's own body
## Every time you eat a fruit, your score will increase and the snake will grow longer
## If you run into the walls or the snake's own body, it's game over
## To restart the game after losing, press the "R" key
## Note that the functionality for sound effects is present, but it requries a special audio file

## Credit to https://youtu.be/QFvqStqPCRU for an introductory tutorial.


import sys
import pygame
import random
from pygame.math import Vector2

BG_COLOR = (255, 243, 230)
FRUIT_COLOR = (240, 84, 84)
SNAKE_COLOR = (41, 39, 40)
TEXT_COLOR = (41, 39, 40)

class Main:
    def __init__(self):
        self.snake = Snake()
        self.fruit = Fruit()
        self.score = 0
        self.fruits_eaten = 0

    def update(self):
        self.snake.move_snake()
        self.check_collision()
        self.check_fail()

    def draw_elements(self):
        screen.fill(BG_COLOR)
        self.fruit.draw_fruit()
        self.snake.draw_snake()
        self.draw_score()

    def check_collision(self):
        if self.fruit.pos == self.snake.body[0]:
            self.fruit.randomize()
            self.snake.add_block()
            self.score += 1
            self.fruits_eaten += 1
            self.snake.increase_speed()

    def check_fail(self):
        if not 0 <= self.snake.body[0].x < cell_number or not 0 <= self.snake.body[0].y < cell_number:
            self.game_over()
        for block in self.snake.body[1:]:
            if block == self.snake.body[0]:
                self.game_over()

    def game_over(self):
        # Stop the game loop and wait for user input
        pygame.time.set_timer(screen_update, 0)
        game_over_text = game_font.render("You Lose", True, (255, 0, 0))
        game_over_rect = game_over_text.get_rect(center=(cell_number*cell_size//2, cell_number*cell_size//2 - 50))
        restart_text = game_font.render("Press R to restart", True, (0, 0, 0))
        restart_rect = restart_text.get_rect(center=(cell_number*cell_size//2, cell_number*cell_size//2 + 50))
        while True:
            screen.blit(game_over_text, game_over_rect)
            screen.blit(restart_text, restart_rect)
            pygame.display.update()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                elif event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                    # Restart the game
                    main_game.__init__()
                    pygame.time.set_timer(screen_update, 130)
                    return

    def draw_score(self):
        score_text = 'Score: ' + str(self.score)
        score_surface = game_font.render(score_text, True, TEXT_COLOR)
        score_x = int(cell_size * 1.5)
        score_y = int(cell_size * 0.5)
        score_rect = score_surface.get_rect(center=(score_x, score_y))
        screen.blit(score_surface, score_rect)


class Snake:
    def __init__(self):
        self.body = [Vector2(5, 10), Vector2(4, 10), Vector2(3, 10)]
        self.direction = Vector2(1, 0)
        self.new_block = False
        self.speed = 9

    def draw_snake(self):
        for block in self.body:
            rect = pygame.Rect(int(block.x * cell_size),
                               int(block.y * cell_size), cell_size, cell_size)
            pygame.draw.rect(screen, (183, 191, 122), rect)

    def move_snake(self):
        if self.new_block == True:
            body_copy = self.body[:]
            body_copy.insert(0, body_copy[0] + self.direction)
            self.body = body_copy[:]
            self.new_block = False
        body_copy = self.body[:-1]
        body_copy.insert(0, body_copy[0] + self.direction)
        self.body = body_copy[:]
        pygame.time.delay(int(1000/self.speed))

    def add_block(self):
        self.new_block = True

    def increase_speed(self):
        self.speed = self.speed * 1.5

class Fruit:
    def __init__(self):
        self.randomize()

    def draw_fruit(self):
        fruit_rect = pygame.Rect(
            int(self.pos.x * cell_size), int(self.pos.y * cell_size), cell_size, cell_size)
        pygame.draw.rect(screen, (126, 166, 140), fruit_rect)

    def randomize(self):
        self.x = random.randint(0, cell_number - 1)
        self.y = random.randint(0, cell_number - 1)
        self.pos = Vector2(self.x, self.y)

pygame.init()
pygame.mixer.init()
eat_sound = pygame.mixer.Sound('Sound_crunch.wav')
cell_size = 40
cell_number = 20
screen = pygame.display.set_mode(
    (cell_number * cell_size, cell_number * cell_size))
clock = pygame
clock = pygame.time.Clock()
screen_update = pygame.USEREVENT
game_font = pygame.font.SysFont('Arial', 25)
pygame.time.set_timer(screen_update, 130)
main_game = Main()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == screen_update:
            main_game.update()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                if main_game.snake.direction.y != 1:
                    main_game.snake.direction = Vector2(0, -1)
            if event.key == pygame.K_LEFT:
                if main_game.snake.direction.x != 1:
                    main_game.snake.direction = Vector2(-1, 0)
            if event.key == pygame.K_RIGHT:
                if main_game.snake.direction.x != -1:
                    main_game.snake.direction = Vector2(1, 0)
            if event.key == pygame.K_DOWN:
                if main_game.snake.direction.y != -1:
                    main_game.snake.direction = Vector2(0, 1)
    pygame.display.set_caption('snake game')
    screen.fill(pygame.Color('white'))
    main_game.draw_elements()
    pygame.display.update()
    clock.tick(120)
