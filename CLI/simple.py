import os
from random import randint

class FourRSignIn:
    PASSWORD_LENGTH = 8

    def __init__(self):
        self.password = ''
        self.is_in = False

    def clear_screen(self):
        os.system('cls' if os.name == 'nt' else 'clear')

    def set_password(self):
        while True:
            password = input("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ")
            if password.lower() == 'exit':
                break
            elif len(password) == self.PASSWORD_LENGTH:
                self.password = password
                print("$4R >> Password Set.")
                break
            else:
                print("$4R >> WRONG! Password must be 8 characters long.")

    def print_pattern(self, random_indexes):
        print("\n\n    X-X-X-X")
        print(f"    {random_indexes[0]}-{random_indexes[1]}-{random_indexes[2]}-{random_indexes[3]}\n\n")

    def run_sign_in(self):
        if self.is_in:
            print("$4R >> You're Already In!")
            return

        if not self.password:
            print("$4R >> Please Set Password First (Type 'set pass').")
            return

        while True:
            random_indexes = [randint(1, self.PASSWORD_LENGTH) for _ in range(4)]
            self.print_pattern(random_indexes)

            temp_com = ''.join([input(f"    X[{i}] : ") for i in random_indexes])

            if temp_com == ''.join([self.password[i - 1] for i in random_indexes]):
                print("\n$4R >> Good Job, You're In!")
                self.is_in = True
                break
            else:
                print("\n$4R >> WRONG! Try Again.")

if __name__ == "__main__":
    four_r_sign_in = FourRSignIn()
    four_r_sign_in.clear_screen()

    while True:
        user_input = input("$UR >>> ").lower()
        
        if user_input == "exit":
            break
        elif user_input == "set pass":
            four_r_sign_in.set_password()
        elif user_input == "run":
            four_r_sign_in.run_sign_in()
        else:
            print("$4R >> Unknown Command")

    print("Goodbye!")