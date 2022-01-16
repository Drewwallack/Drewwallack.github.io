import random
def generate(prepassword):
    workingpassword = list(prepassword)
    letlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
    capletlist = [x.upper() for x in letlist]
    numlist = [1,2,3,4,5,6,7,8,9]
    adition_approval = random.randint(0, 1)
    if adition_approval == 1: adition_approval = True
    else: adition_approval = False
    adition_type = random.randint(1, 3)
    adition_options = [capletlist, numlist, letlist]
    for char in workingpassword:
        while adition_approval:
            


generate('hello')