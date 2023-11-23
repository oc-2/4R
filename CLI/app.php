<?php

function clearScreen() {
    // Assuming this function clears the console screen in PHP
    // You may need to customize this based on your environment
    system("clear");
}

function setPassword(&$password) {
    $input = "";
    while (true) {
        echo("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ");
        fscanf(STDIN, "%s", $input);

        if ($input === "exit") {
            echo("$4R >> Password not set.\n");
            break;
        } elseif (strlen($input) !== 8) {
            echo("$4R >> WRONG! Password must be 8 characters long.\n");
        } else {
            $password = $input;
            echo("$4R >> Password Set.\n");
            break;
        }
    }
}

function runSignIn($password) {
    $isIn = false;
    if (empty($password)) {
        echo("$4R >> Please Set Password First (Type 'set pass').\n");
        return;
    }

    while (!$isIn) {
        $randomIndexes = [];
        for ($i = 0; $i < 4; $i++) {
            $randomIndexes[$i] = rand(1, 8);
        }

        clearScreen();
        echo("\n\n    X-X-X-X\n");
        echo("    " . implode("-", $randomIndexes) . "\n\n");

        $passwordCom = "";
        foreach ($randomIndexes as $index) {
            $passwordCom .= $password[$index - 1];
        }

        $tempCom = "";
        for ($i = 0; $i < 4; $i++) {
            echo("    X[$randomIndexes[$i]] : ");
            fscanf(STDIN, "%s", $tempCom[$i]);
        }

        if ($tempCom === $passwordCom) {
            echo("\n$4R >> Good Job, You're In!\n");
            $isIn = true;
        } else {
            echo("\n$4R >> WRONG! Try Again.\n");
        }
    }
}

srand(time());

$password = "";
$isExit = false;

while (!$isExit) {
    clearScreen();
    echo("$UR >>> ");
    fscanf(STDIN, "%s", $input);

    switch ($input) {
        case "exit":
            $isExit = true;
            break;
        case "set":
            setPassword($password);
            break;
        case "run":
            runSignIn($password);
            break;
        default:
            echo("$4R >> Unknown Command\n");
    }
}

echo("Goodbye!\n");

?>