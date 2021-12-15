namelist = []
agelist = []
heightlist = []
weightlist = []
automationbaby = [namelist, agelist, heightlist, weightlist]

class Person:
    def __init__(self, name, age, height, weight):
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def store_information(self):
        x = 0
        datastore = [self.name, self.age, self.height, self.weight]
        for data in datastore:
            automationbaby[x].append(data)
            x += 1
        print(
            f'namelist: {namelist} agelist: {agelist} heightlist: {heightlist} weightlist: {weightlist}')


while True:
    strings = input('Please enter your information here: ')
    if strings == 'close database':
        namelist.clear()
        agelist.clear()
        heightlist.clear()
        weightlist.clear()
        print(
            f'database successfuly closed. ({namelist}{agelist}{heightlist}{weightlist})')
        break
    strings = strings.split(', ')
    answer = []
    iteration = 0
    for string in strings:
        if iteration == 1 or iteration == 2 or iteration == 3:
            string = int(string)
        answer.append(string)
        iteration += 1
    iteration = 0
    for datapoint in answer:
        if iteration == 0:
            x = datapoint
        elif iteration == 1:
            y = datapoint
        elif iteration == 2:
            z = datapoint
        elif iteration == 3:
            d = datapoint
        iteration += 1
    person = Person(x, y, z, d)
    person.store_information()
