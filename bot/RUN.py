from Booking.booking import Booking
import time
from selenium import webdriver

# STEPS TO RUNr 1. Fill in this information. Get restaurant code by inspecting booking button for restaurant in your desired location
# and finding the first part of the ID
# 2. run PATH=$PATH:/Users/student/Library/Python/3.9/bin
# 3. navigate to bot directory, run pyinstaller --onefile RUN.py
# 4. go to native mac terminal, run crontab -e, press i, enter in date and time, followed by /usr/bin/open /Users/student/Desktop/repositories/Drewwallack.github.io/bot/dist/RUN
# 4.5 remember to set the job to ONE MINUTE EARLY. the script has built in wait times
# 5. press esc, then :, then wq, then enter
# 6. wait for the job to be executed
# 7. use crontab -r to prevent further jobs from being executed

date = '2022-12-07'
seats = '4'
email = 'dwallack123@gmail.com'
password = 'IloveAryTampi1!'
restaurant = '4-charles-prime-rib'
location = 'Dining Room'
prefered_times = ['19:30:00', '20:00:00', '18:00:00', '18:30:00', '17:00:00', '16:00:00', '20:30:00', '21:00:00', '21:30:00']
restaurant_code = 'rgs://resy/834/1623798/2/'
reload_amount = 5
teardown = True



# RUN program
time.sleep(1)
book = Booking(teardown, date, seats, email, password, restaurant, location, prefered_times, restaurant_code, reload_amount)
book.land_homepage(restaurant, date, seats)
book.login(email, password)
book.book(restaurant, location, prefered_times, restaurant_code, date, seats, reload_amount)
time.sleep(10)
book.__exit__()

#gtfo = self.find_element_by_class_name('AnnouncementModal__icon-close') gtfo.click()
# rgs://resy/834/1623787/2/
