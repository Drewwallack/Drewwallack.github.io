from pyautogui import hotkey, typewrite
import time
time_needed = 0
time.sleep(5)
for i in range(10): typewrite('spam ')
for i in range(13):
    hotkey('command', 'a')
    hotkey('command', 'c')
    time_needed += 0.3
    for _ in range(2):
        hotkey('command', 'v')
        time.sleep(time_needed)
time.sleep(15)
hotkey('command', 'a')
hotkey('command', 'option', '3')