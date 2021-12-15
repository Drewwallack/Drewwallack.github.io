import sys
import pygame
import random
from pygame.math import Vector2


class Main:
    def __init__(self):
        self.snake = Snake()
        self.fruit = Fruit()

    def update(self):
        self.snake.move_snake()
        self.check_colision()
        self.check_fail()

    def draw_elements(self):
        self.fruit.draw_fruit()
        self.snake.draw_snake()

    def check_colision(self):
        if self.fruit.pos == self.snake.body[0]:
            self.fruit.randomize()
            self.snake.add_block()

    def check_fail(self):
        if not 0 <= self.snake.body[0].x < cell_number or not 0 <= self.snake.body[0].y < cell_number:
            self.game_over()
        for block in self.snake.body[1:]:
            if block == self.snake.body[0]:
                game_over()

    def game_over(self):
        pygame.quit()
        sys.exit()

    def draw_score(self):
        score_text = str(len(self.snake.body) - 3)


class Snake:
    def __init__(self):
        self.body = [Vector2(5, 10), Vector2(4, 10), Vector2(3, 10)]
        self.direction = Vector2(1, 0)
        self.new_block = False

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

    def add_block(self):
        self.new_block = True


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


def game_over():
    pygame.quit()
    sys.exit()


pygame.init()
cell_size = 40
cell_number = 20
screen = pygame.display.set_mode(
    (cell_number * cell_size, cell_number * cell_size))
clock = pygame.time.Clock()
screen_update = pygame.USEREVENT
game_font = pygame.font.Font(None, 25)
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
    clock.tick(60)
