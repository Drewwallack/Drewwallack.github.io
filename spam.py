import pyautogui, time, random
# time.sleep(3000)
time.sleep(5)


for x in range(10):
    pyautogui.keyDown('command')
    pyautogui.keyDown('n')
    pyautogui.keyUp('command')
    pyautogui.keyUp('n')
    time.sleep(1)
    pyautogui.typewrite('')
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.typewrite(';)')
    pyautogui.press('enter')
    pyautogui.typewrite('happy birthday')
    pyautogui.hotkey('shift', 'command', 'd')
