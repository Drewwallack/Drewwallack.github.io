import pyautogui, time, random
# time.sleep(3000)
time.sleep(5)


for x in range(20):
    pyautogui.keyDown('command')
    pyautogui.keyDown('n')
    pyautogui.keyUp('command')
    pyautogui.keyUp('n')
    time.sleep(1)
    pyautogui.typewrite('Arjun_Kalbag@dalton.org')
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.press('enter')
    pyautogui.typewrite('L + Ratio + 242 East 19th Street, Apt 13F, New York, NY 10003, H: 212-396-2615')
    pyautogui.press('enter')
    pyautogui.typewrite(';)')
    pyautogui.hotkey('shift', 'command', 'd')
