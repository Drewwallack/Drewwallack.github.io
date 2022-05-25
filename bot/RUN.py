from Booking.booking import Booking
import threading
import time

date = '2022-05-25'
seats = '4'
email = 'dwallack123@gmail.com'
password = 'Wisconsin1'
restaurant = 'quality-eats-ues'
location = 'Indoor Dining'
prefered_times = ['19:30:00', '20:00:00', '18:00:00', '18:30:00', '17:00:00', '16:00:00', '20:30:00', '21:00:00']
restaurant_code = 'rgs://resy/1334/1058869/2/'
teardown = True
book = Booking(teardown, date, seats, email, password, restaurant, location, prefered_times, restaurant_code)
book.land_homepage(restaurant, date, seats)
book.login(email, password)
book.book(location, prefered_times, restaurant_code, date, seats)
time.sleep(10)
book.__exit__()

#STEPS TO RUN: 1. Navigate to bot directory. 2. pyinstaller --onefile RUN.py 3. Use Cron to administer (crontab -e, i, enter in stuff, esc, :, wq, enter)


#gtfo = self.find_element_by_class_name('AnnouncementModal__icon-close') gtfo.click()