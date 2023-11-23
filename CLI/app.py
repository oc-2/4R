import os
from random import randint

def clear_screen():
    if os.name == 'nt':
        _ = os.system('cls')
    else:
        _ = os.system('clear')

def set_password():
    global password
    is_valid_password = False
    print("$4R >> Enter Your 8-Char Password (Type 'exit' to Cancel): ")
    while not is_valid_password:
        temp = input("$UR >>> ")
        if len(temp) == 8:
            is_valid_password = True
            break
        elif temp.lower() == 'exit':
            break
        else:
            print("$4R >> WRONG! Please enter an 8-character password or type 'exit' to cancel.")

    if is_valid_password:
        password = temp
        print("$4R >> Password Set Successfully\n")

def run_program():
    global isIn
    if not isIn:
        if password:
            while True:
                random_indexes = [randint(1, 8) for _ in range(4)]
                password_com = ''.join(password[i - 1] for i in random_indexes)
                print("\n\n    X-X-X-X")
                print("    ", random_indexes[0], '-', random_indexes[1], '-', random_indexes[2], '-', random_indexes[3], "\n\n", sep='')
                temp_com = ''
                temp_com += input(f"    X[{random_indexes[0]}] : ")
                temp_com += input(f"    X[{random_indexes[1]}] : ")
                temp_com += input(f"    X[{random_indexes[2]}] : ")
                temp_com += input(f"    X[{random_indexes[3]}] : ")

                if temp_com == password_com:
                    print("\n$4R >> Good Job, You're In\n")
                    isIn = True
                    break
                else:
                    print("\n$4R >> WRONG! Try Again")
        else:
            print("$4R >> Please Set Password First (Type 'set pass')\n")
    else:
        print("$4R >> You're Already In!\n")

if __name__ == "__main__":
    clear_screen()
    print("Hello And Welcome To 4R Sign In Way :)\nThis Is The Way How It Works...")  # Add more information here if needed

    # Variable Management
    password = ''
    isIn = False

    # Main Loop
    while True:
        user_input = input("$UR >>> ")
        if user_input.lower() == "exit":
            break
        elif user_input.lower() == "set pass":
            set_password()
        elif user_input.lower() == "run":
            run_program()
        else:
            print("$4R >> Unknown Command\n")