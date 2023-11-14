# Update Values in Dictionaries and Lists

x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15

students[0]['last_name'] = 'Bryant'

sports_directory['soccer'][0] = 'Andres'


z[0]['y'] = 30

#Iterate Through a List of Dictionaries

def iterateDictionary(students):
    for student in students:
        output = ""
        for key, value in student.items():


# Get Values From a List of Dictionaries


def iterateDictionary2(first_name, students):
    for dictionary in students:
        if first_name in dictionary:
            print(dictionary[first_name])


#Iterate Through a Dictionary with List Values

def printInfo(some_dict):
    for x in values:
            print(x)            



















