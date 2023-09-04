// https://github.com/athede-v/4R
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <string>

// Function to clear the console screen
void clearScreen() {
    system("clear");
}

// Function to set the 8-char password
std::string setPassword() {
    std::string password;
    while (true) {
        std::cout << "$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ";
        std::cin >> password;

        if (password == "exit") {
            std::cout << "$4R >> Password not set." << std::endl;
            break;
        } else if (password.length() != 8) {
            std::cout << "$4R >> WRONG! Password must be 8 characters long." << std::endl;
        } else {
            std::cout << "$4R >> Password Set." << std::endl;
            return password;
        }
    }
    return "";
}

// Function to run the 4R Sign In Way
void runSignIn(const std::string& password) {
    bool isIn = false;
    if (password.empty()) {
        std::cout << "$4R >> Please Set Password First (Type 'set pass')." << std::endl;
        return;
    }

    while (!isIn) {
        std::vector<int> randomIndexes;
        for (int i = 0; i < 4; ++i) {
            randomIndexes.push_back(rand() % 8 + 1);
        }

        std::string passwordCom;
        for (int index : randomIndexes) {
            passwordCom += password[index - 1];
        }

        clearScreen();
        std::cout << "\n\n    X-X-X-X\n";
        std::cout << "    " << randomIndexes[0] << "-" << randomIndexes[1] << "-" << randomIndexes[2] << "-" << randomIndexes[3] << "\n\n";

        std::string tempCom;
        for (int i = 0; i < 4; ++i) {
            int index = randomIndexes[i];
            std::cout << "    X[" << index << "] : ";
            std::string input;
            std::cin >> input;
            tempCom += input;
        }

        if (tempCom == passwordCom) {
            std::cout << "\n$4R >> Good Job, You're In!" << std::endl;
            isIn = true;
        } else {
            std::cout << "\n$4R >> WRONG! Try Again." << std::endl;
        }
    }
}

int main() {
    srand(static_cast<unsigned>(time(nullptr)));

    std::string password;
    bool isExit = false;

    while (!isExit) {
        clearScreen();
        std::cout << "$UR >>> ";
        std::string input;
        std::cin >> input;

        if (input == "exit") {
            isExit = true;
        } else if (input == "set pass") {
            password = setPassword();
        } else if (input == "run") {
            runSignIn(password);
        } else {
            std::cout << "$4R >> Unknown Command" << std::endl;
        }
    }

    std::cout << "Goodbye!" << std::endl;
    return 0;
}

//    Hello And Welcome To 4R Sing In Way :) 
//    This The Way How it Works 
//    You Can Be More Creative (I Mean You Can Change Code And Add It Some Protect Protocol To It And Make A Strong And Very Safe 4R)
   
//      X-X-X-X
//      1-5-8-1
   
//    This Is Template Of The CLI So At First Enter Your 8-Char Password By 
//     `$UR >>> set pass`
//    Command , Type In The Console And Press Enter
   
//    And Then You Can Test 4R Sign In Way BY
//     `$UR >>> run`
//    Command , Just Type In The Console And Press Enter Bro 
   
//    -Some Options Are Active At The Moment For More Security (You Can Remove And Replace Your Code Or Change Any Thing You Want , It Just A Very Simple Code)
   
//    Type `exit` To Exit 
//    So Have Fun :) (@athede-v)