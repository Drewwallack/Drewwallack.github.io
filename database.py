class Person():
    def __init__(self, age, ftheight, weight, has_cov):
        self.age = age
        self.height = ftheight
        self.weight = weight
        self.has_cov = has_cov
    def detirmine(self):
        person_merit = 0
        if self.age <= 100 and self.age >= 1: person_merit += 1
        if self.height <= 8 and self.height >= 1: person_merit += 1
        if self.weight <= 1000 and self.weight >= 3: person_merit += 1
        if self.has_cov == True: person_merit += 1
        if person_merit == 4:
            return True
        else:
            return False

while True:
    ageinput = int(input('age:')) 
    if ageinput == 1234: break
    heightinput = int(input('height (in feet): '))
    weightinput = int(input('weight: '))
    has_cov = input('Do you have COVID (T or F): ')
    if has_cov == 'T': has_cov = True
    elif has_cov == 'F': has_cov = False
    person = Person(ageinput, heightinput, weightinput, has_cov)
    finalval = person.detirmine()
    if finalval:
        print('You are a person')
    if not finalval:
        print('Fuck you. You are not a person')