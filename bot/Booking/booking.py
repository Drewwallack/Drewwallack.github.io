from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import time

class Booking(webdriver.Chrome):
    def __init__(self, teardown, date, seats, email, password, restaurant, location, prefered_times, restaurant_code, driver_path='/Users/student/Desktop/SeleniumDrivers'):
        self.driver_path = driver_path
        self.teardown = teardown
        super(Booking, self).__init__()
        self.maximize_window()
        self.date = date
        self.seats = seats
        self.email = email
        self.password = password
        self.restaurant = restaurant
        self.location = location
        self.prefered_times = prefered_times
        self.restaurant_code = restaurant_code
    def __exit__(self, *args):
        if self.teardown:
            return super().__exit__(*args)
            self.quit()
    def land_homepage(self, restaurant, date, seats):
        self.get('https://www.resy.com/cities/ny/' + self.restaurant + '?date=' + self.date + '&seats=' + self.seats)
    def login(self, email, password):
        log_in_button = self.find_element_by_class_name('Button--login')
        log_in_button.click()
        WebDriverWait(self, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div[5]/div/div/div/div[2]/div[5]/button')))
        email_option = self.find_element_by_xpath('/html/body/div[5]/div/div/div/div[2]/div[5]/button').click()
        email_input = self.find_element_by_id('email')
        email_input.send_keys(email)
        password_input = self.find_element_by_id('password')
        password_input.send_keys(password)
        submit = self.find_element_by_css_selector('button[type="submit"]')
        submit.click()
    def book(self, location, prefered_times, restaurant_code, date, seats):
        WebDriverWait(self, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, 'ReservationButton')))
        for self.time in prefered_times:
            try:
                option = self.find_element_by_id(f'{self.restaurant_code}{self.date}/{self.date}/{self.time}/{self.seats}/{self.location}')
                self.execute_script("arguments[0].click();", option)
                break
            except NoSuchElementException:
                continue
        WebDriverWait(self, 10).until(EC.frame_to_be_available_and_switch_to_it((By.CSS_SELECTOR, 'iframe[aria-label="Book with Resy"]')))
        print('in frame')
        WebDriverWait(self, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'button[data-test-id="order_summary_page-button-book"]')))
        book_button = self.find_element_by_css_selector('button[data-test-id="order_summary_page-button-book"]')
        self.execute_script("arguments[0].click();", book_button)
        print('booked!')