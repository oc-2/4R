import os
from random import randint

# Function to clear the console screen
def clear():
    if os.name == 'nt':
        _ = os.system('cls')
    else:
        _ = os.system('clear')

# Function to set the 8-char password
def set_password():
    global password
    password = input("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ")
    if len(password) != 8:
        print("$4R >> WRONG! Password must be 8 characters long.")
        password = ''
    else:
        print("$4R >> Password Set.")

# Function to run the 4R Sign In Way
def run_sign_in():
    global isIn
    if isIn:
        print("$4R >> You're Already In!")
        return

    if not password:
        print("$4R >> Please Set Password First (Type 'set pass').")
        return

    while True:
        random_indexes = [randint(1, 8) for _ in range(4)]
        password_com = "".join([password[i - 1] for i in random_indexes])

        print("\n\n    X-X-X-X")
        print("    ", random_indexes[0], '-', random_indexes[1], '-', random_indexes[2], '-', random_indexes[3], "\n\n", sep='')

        temp_com = ''
        for i in random_indexes:
            temp_com += input(f"    X[{i}] : ")

        if temp_com == password_com:
            print("\n$4R >> Good Job, You're In!")
            isIn = True
            break
        else:
            print("\n$4R >> WRONG! Try Again.")

# Clear the console screen on startup
clear()

# Initialize variables
password = ''
isIn = False

# Main loop for user interactions
while True:
    user_input = input("$UR >>> ")
    
    if user_input == "exit":
        break
    elif user_input == "set pass":
        set_password()
    elif user_input == "run":
        run_sign_in()
    else:
        print("$4R >> Unknown Command")

# Exit message
print("Goodbye!")
