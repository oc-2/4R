// https://github.com/athede-v/4R
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// Function to clear the console screen
void clearScreen() {
    system("clear"); // Use "cls" for Windows systems
}

// Function to set the 8-character password
void setPassword(char *password) {
    char input[10];
    while (1) {
        printf("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ");
        scanf("%s", input);

        if (strcmp(input, "exit") == 0) {
            printf("$4R >> Password not set.\n");
            break;
        } else if (strlen(input) != 8) {
            printf("$4R >> WRONG! Password must be 8 characters long.\n");
        } else {
            // Copy the valid password
            strcpy(password, input);
            printf("$4R >> Password Set.\n");
            break;
        }
    }
}

// Function to generate unique random indexes
void generateRandomIndexes(int *randomIndexes, int count) {
    for (int i = 0; i < count; i++) {
        int isUnique;
        do {
            isUnique = 1;
            randomIndexes[i] = rand() % 8 + 1; // Generate a number between 1 and 8
            for (int j = 0; j < i; j++) {
                if (randomIndexes[i] == randomIndexes[j]) {
                    isUnique = 0; // Check for duplicates
                    break;
                }
            }
        } while (!isUnique);
    }
}

// Function to run the 4R Sign In Way
void runSignIn(const char *password) {
    int isIn = 0;

    // Ensure password is set before proceeding
    if (password[0] == '\0') {
        printf("$4R >> Please Set Password First (Type 'set pass').\n");
        return;
    }

    while (!isIn) {
        int randomIndexes[4];
        generateRandomIndexes(randomIndexes, 4);

        clearScreen();
        printf("\n\n    X-X-X-X\n");
        printf("    %d-%d-%d-%d\n\n", randomIndexes[0], randomIndexes[1], randomIndexes[2], randomIndexes[3]);

        char passwordCom[5]; // Stores the characters from the password
        for (int i = 0; i < 4; i++) {
            passwordCom[i] = password[randomIndexes[i] - 1];
        }
        passwordCom[4] = '\0';

        char tempCom[5]; // Stores user input
        for (int i = 0; i < 4; i++) {
            printf("    X[%d] : ", randomIndexes[i]);
            char input[2]; // Input must be a single character
            scanf("%1s", input);

            // Validate input
            if (strlen(input) != 1 || (input[0] < '0' || input[0] > 'z')) {
                printf("$4R >> Input must be a single alphanumeric character. Try again.\n");
                i--; // Retry the same index
                continue;
            }
            tempCom[i] = input[0];
        }
        tempCom[4] = '\0';

        // Compare user input with the expected password characters
        if (strcmp(tempCom, passwordCom) == 0) {
            printf("\n$4R >> Good Job, You're In!\n");
            isIn = 1;
        } else {
            printf("\n$4R >> WRONG! Try Again.\n");
        }
    }
}

int main() {
    srand(time(NULL)); // Seed the random number generator

    char password[9] = ""; // Stores the 8-character password
    int isExit = 0;

    while (!isExit) {
        clearScreen();
        printf("$UR >>> ");
        char input[10];
        scanf("%s", input);

        if (strcmp(input, "exit") == 0) {
            isExit = 1;
        } else if (strcmp(input, "set") == 0) {
            setPassword(password);
        } else if (strcmp(input, "run") == 0) {
            runSignIn(password);
        } else {
            printf("$4R >> Unknown Command\n");
        }
    }

    printf("Goodbye!\n");
    return 0;
}

//   Hello And Welcome To 4R Sign In Way :) 
//   This The Way How it Works 
//   You can customize the code and add additional security protocols to strengthen 4R. The template for the CLI is as follows:
   
//      X-X-X-X
//      1-5-8-1
   
//   This Is Template Of The CLI So At First Enter Your 8-Char Password By 
//    `$UR >>> set pass`
//   Command , Type In The Console And Press Enter
   
//   To test the 4R Sign-In Method, use the
//    `$UR >>> run`
//   Command , Just Type In The Console And Press Enter Bro 
   
//   Some options are currently active for enhanced security. You can modify or replace the code as needed; it's a straightforward implementation.
   
//    Type `exit` To Exit 
//    So Have Fun :) (@athede-v)