#https://github.com/athede-v/4R

import os
from random import randint

def clear():
    if os.name == 'nt':
        _ = os.system('cls')
    else:
        _ = os.system('clear')

clear()
print("Hello And Welcome To 4R Sing In Way :)\nThis The Way How it Works \nYou Can Be More Creative (I Mean You Can Change Code And Add It Some Protect Protocol To It And Make A Strong And Very Safe 4R)\n\n  X-X-X-X\n  1-5-8-1\n\nThis Is Template Of The CLI So At First Enter Your 8-Char Password By \n'$UR >>> set pass'\nCommand , Type In The Console And Press Enter\n\nAnd Then You Can Test 4R Sign In Way BY\n'$UR >>> run'\nCommand , Just Type In The Console And Press Enter Bro \n\n-Some Options Are Active At The Moment For More Security (You Can Remove And Replace Your Code Or Change Any Thing You Want , It Just A Very Simple Code)\n\nType 'exit' To Exit \nSo Have Fun :) (@athede-v)")

#Varibale Managment
password = ''
isIn = False

#Function Managment
#    you can add some function for security
#    like hash code or shuffle the password 
#    MFA - Rate Limiting - avoid monitoring
#    i don't know just do it

while(True):
    inpt = input("$UR >>> ")
    if inpt == "exit" :
        break
    elif inpt == "set pass":
        perm = False
        print("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel) : ")
        while(True):
            temp = input("$UR >>> ")
            if (len(temp) == 8) :
                perm = True
                break
            elif (temp == 'x'):
                break
            else:
                print("$4R >> WRONG ! 8-Char Password (Type 'exit' for Cancel) : ")
        if perm :
            password = temp
            print("$4R >> Password Setted\n")
    elif inpt == "run":
        if isIn == False :
            if password != '' :
                while True :
                    random_indexes = [randint(1,8),randint(1,8),randint(1,8),randint(1,8)]
                    password_com = password[random_indexes[0]-1]+password[random_indexes[1]-1]+password[random_indexes[2]-1]+password[random_indexes[3]-1]
                    print("\n\n    X-X-X-X")
                    print("    ",random_indexes[0],'-',random_indexes[1],'-',random_indexes[2],'-',random_indexes[3],"\n\n",sep='')
                    temp_com = ''
                    temp_com += input("    X["+str(random_indexes[0])+"] : ")
                    temp_com += input("    X["+str(random_indexes[1])+"] : ")
                    temp_com += input("    X["+str(random_indexes[2])+"] : ")
                    temp_com += input("    X["+str(random_indexes[3])+"] : ")
                    if temp_com == password_com :
                        print("\n$4R >> Good Job , You're In\n")
                        isIn=True
                        break
                    else:
                        print("\n$4R >> WRONG ! Try Again")
            else:
                print("$4R >> Please Set Password First (Type 'set pass')\n")
        else:
            print("$4R >> You're Already In .!\n")
    else : 
        print("$4R >> Unknown Command\n")