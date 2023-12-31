import os
from random import randint

class FourRSignIn:
    def __init__(self):
        self.password = ''
        self.is_in = False

    def clear_screen(self):
        if os.name == 'nt':
            _ = os.system('cls')
        else:
            _ = os.system('clear')

    def set_password(self):
        is_valid_password = False
        print("$4R >> Enter Your 8-Char Password (Type 'exit' to Cancel): ")
        while not is_valid_password:
            temp = input("$UR >>> ")
            if len(temp) == 8:
                is_valid_password = True
                self.password = temp
                print("$4R >> Password Set Successfully\n")
            elif temp.lower() == 'exit':
                break
            else:
                print("$4R >> WRONG! Please enter an 8-character password or type 'exit' to cancel.")

    def run_program(self):
        if not self.is_in:
            if self.password:
                while True:
                    random_indexes = [randint(1, 8) for _ in range(4)]
                    password_com = ''.join(self.password[i - 1] for i in random_indexes)
                    print("\n\n    X-X-X-X")
                    print(f"    {random_indexes[0]}-{random_indexes[1]}-{random_indexes[2]}-{random_indexes[3]}\n\n")

                    temp_com = ''.join(input(f"    X[{i}] : ") for i in random_indexes)

                    if temp_com == password_com:
                        print("\n$4R >> Good Job, You're In\n")
                        self.is_in = True
                        break
                    elif temp_com.lower() == 'exit':
                        break
                    else:
                        print("\n$4R >> WRONG! Try Again")
            else:
                print("$4R >> Please Set Password First (Type 'set pass')\n")
        else:
            print("$4R >> You're Already In!\n")

    def main_loop(self):
        self.clear_screen()
        print("Hello And Welcome To 4R Sign In Way :)\nThis Is The Way How It Works...")  # Add more information here if needed

        # Main Loop
        while True:
            user_input = input("$UR >>> ")
            if user_input.lower() == "exit":
                break
            elif user_input.lower() == "set pass":
                self.set_password()
            elif user_input.lower() == "run":
                self.run_program()
            else:
                print("$4R >> Unknown Command\n")

if __name__ == "__main__":
    four_r_sign_in = FourRSignIn()
    four_r_sign_in.main_loop()