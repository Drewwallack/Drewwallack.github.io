import pygame
import random

# Initialize Pygame
pygame.init()

# Set up the screen
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Space Invaders")

# Define colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Define particle class
class Particle:
    def __init__(self, x, y, size, color, speed):
        self.x = x
        self.y = y
        self.size = size
        self.color = color
        self.speed = speed

    def update(self):
        self.y += self.speed

    def draw(self):
        pygame.draw.circle(screen, self.color, (self.x, self.y), self.size)

# Define particle manager class
class ParticleManager:
    def __init__(self):
        self.particles = []
        self.spawn_rate = 1
        self.spawn_timer = 0
        self.max_spawn_rate = 60

    def createParticles(self):
        x = random.randint(0, screen_width)
        y = random.randint(0, screen_height // 2)
        size = random.randint(5, 20)
        color = random.choice([WHITE, (255, 0, 0), (0, 255, 0), (0, 0, 255)])
        speed = random.uniform(0.1, 1)
        particle = Particle(x, y, size, color, speed)
        self.particles.append(particle)

    def updateParticles(self):
        for particle in self.particles:
            particle.update()

    def drawParticles(self):
        for particle in self.particles:
            particle.draw()

    def increaseSpawnRate(self):
        if self.spawn_rate < self.max_spawn_rate:
            self.spawn_rate += 1

# Define shooter class
class Shooter:
    def __init__(self, x, y, width, height, color, speed):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.color = color
        self.speed = speed
        self.direction = None

    def move_left(self):
        self.x -= self.speed

    def move_right(self):
        self.x += self.speed

    def update(self):
        if self.direction == "left":
            self.move_left()
        elif self.direction == "right":
            self.move_right()

    def draw(self):
        pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))

    def shoot(self):
        return Bullet(self.x + self.width // 2, self.y)

# Define bullet class
class Bullet:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.radius = 5
        self.color = WHITE
        self.speed = 5

    def update(self):
        self.y -= self.speed

    def draw(self):
        pygame.draw.circle(screen, self.color, (self.x, self.y), self.radius)

# Create particle manager
particle_manager = ParticleManager()

# Game loop
shooter = Shooter(screen_width // 2 - 25, screen_height - 50, 50, 30, WHITE, 5)
bullets = []
score = 0
running = True
clock = pygame.time.Clock()

key_states = {}

while running:
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            key_states[event.key] = True
            if event.key == pygame.K_SPACE:
                bullet = shooter.shoot()
                bullets.append(bullet)
        elif event.type == pygame.KEYUP:
            key_states[event.key] = False

    if key_states.get(pygame.K_LEFT):
        shooter.direction = "left"
    elif key_states.get(pygame.K_RIGHT):
        shooter.direction = "right"
    else:
        shooter.direction = None

    shooter.update()

    for bullet in bullets:
        bullet.update()
        if bullet.y < 0:
            bullets.remove(bullet)

    for particle in particle_manager.particles:
        for bullet in bullets:
            if abs(particle.x - bullet.x) < particle.size and abs(particle.y - bullet.y) < particle.size:
                particle_manager.particles.remove(particle)
                bullets.remove(bullet)
                score += 1

    particle_manager.updateParticles()
    particle_manager.drawParticles()
    shooter.draw()

    for bullet in bullets:
        bullet.draw()

    score_text = f"Score: {score}"
    font = pygame.font.Font(None, 36)
    text = font.render(score_text, True, WHITE)
    screen.blit(text, (10, 10))

    # Spawn particles
    particle_manager.spawn_timer += 1
    if particle_manager.spawn_timer >= particle_manager.spawn_rate:
        particle_manager.createParticles()
        particle_manager.spawn_timer = 0

    # Check for particles reaching the bottom
    for particle in particle_manager.particles:
        if particle.y > screen_height:
            running = False

    particle_manager.increaseSpawnRate()

    pygame.display.flip()
    clock.tick(60)

# Quit the game
pygame.quit()
