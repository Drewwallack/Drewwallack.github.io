import pyautogui, time, random
# time.sleep(3000)
time.sleep(5)
email_list = ['dwallack123@gmail.com', 'swallack123@gmail.com', 'kenneth_epstein@hotmail.com']

for x in email_list:
    pyautogui.keyDown('command')
    pyautogui.keyDown('n')
    pyautogui.keyUp('command')
    pyautogui.keyUp('n')
    time.sleep(1)
    pyautogui.typewrite(x)
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.typewrite(';)')
    pyautogui.press('enter')
    pyautogui.typewrite('balls')
    pyautogui.hotkey('shift', 'command', 'd')
