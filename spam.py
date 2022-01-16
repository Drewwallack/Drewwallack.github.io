import pyautogui, time
time.sleep(10)
stuff = 'I would love to connect with you! My email is suckmyballs@hotmail.com'
for x in range(100):
    pyautogui.typewrite(stuff)
    pyautogui.press('enter')