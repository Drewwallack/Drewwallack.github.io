import pygame
import random

pygame.init()

WIDTH = 1000
HEIGHT = 1000

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Whack-a-Mole")

clock = pygame.time.Clock()

class Target:
    def __init__(self):
        self.x = random.randint(0, WIDTH - 50)
        self.y = random.randint(0, HEIGHT - 50)
        self.image = pygame.image.load("target.png")

    def draw(self):
        screen.blit(self.image, (self.x, self.y))

target = Target()

game_over = False

while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        if event.type == pygame.MOUSEBUTTONUP:
            mouse_pos = pygame.mouse.get_pos()
            if (mouse_pos[0] >= target.x and mouse_pos[0] <= target.x + 50) and \
               (mouse_pos[1] >= target.y and mouse_pos[1] <= target.y + 50):
                game_over = True

    screen.fill((255, 255, 255))
    target.draw()
    pygame.display.update()
    clock.tick(60)

pygame.quit()
