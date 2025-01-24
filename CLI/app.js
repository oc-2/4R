// https://github.com/athede-v/4R
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let passwordHash = '';
let isIn = false;

// Function to hash the password
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Function to set the 8-char password
function setPassword() {
  rl.question("$4R >> Enter Your 8-Char Password (Type 'exit' for Cancel): ", (input) => {
    if (input === 'exit') {
      console.log("$4R >> Password not set.");
      rl.prompt();
    } else if (input.length !== 8) {
      console.log("$4R >> WRONG! Password must be 8 characters long.");
      setPassword();
    } else {
      passwordHash = hashPassword(input);
      console.log("$4R >> Password Set.");
      rl.prompt();
    }
  });
}

// Function to generate unique random indexes
function generateRandomIndexes(length, count) {
  const indexes = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * length) + 1;
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

// Function to run the 4R Sign In Way
function runSignIn() {
  if (isIn) {
    console.log("$4R >> You're Already In!");
    rl.question("$4R >> Would you like to log out or reset the session? (Type 'logout' or 'reset'): ", (input) => {
      if (input.trim() === 'logout') {
        isIn = false;
        console.log("$4R >> You have been logged out.");
      } else if (input.trim() === 'reset') {
        passwordHash = '';
        isIn = false;
        console.log("$4R >> Session has been reset. Please set a new password.");
      } else {
        console.log("$4R >> Invalid option. Continuing current session.");
      }
      rl.prompt();
    });
    return;
  }

  if (!passwordHash) {
    console.log("$4R >> Please Set Password First (Type 'set pass').");
    rl.prompt();
    return;
  }

  const randomIndexes = generateRandomIndexes(8, 4);

  console.log("\n\n    X-X-X-X");
  console.log("    Please enter the characters from your password corresponding to the positions shown below.");
  console.log(`    ${randomIndexes.join('-')}\n\n`);

  const inputs = [];

  function askForInput(index) {
    rl.question(`    X[${randomIndexes[index]}] : `, (input) => {
      if (input.length !== 1 || /[^a-zA-Z0-9]/.test(input)) {
        console.log("$4R >> Input must be a single alphanumeric character. Try again.");
        askForInput(index);
        return;
      }
      inputs.push(input);
      if (inputs.length === 4) {
        verifySignIn(randomIndexes, inputs);
      } else {
        askForInput(index + 1);
      }
    });
  }

  askForInput(0);
}

// Function to verify sign-in
function verifySignIn(randomIndexes, inputs) {
  const passwordChars = inputs.join('');

  if (hashPassword(passwordChars) === passwordHash) {
    console.log("\n$4R >> Good Job, You're In!");
    isIn = true;
  } else {
    console.log("\n$4R >> WRONG! Try Again.");
  }
  rl.prompt();
}

// Initial prompt
rl.prompt();

rl.on('line', (input) => {
  switch (input.trim()) {
    case 'exit':
      rl.close();
      break;
    case 'set pass':
      setPassword();
      break;
    case 'run':
      runSignIn();
      break;
    default:
      console.log("$4R >> Unknown Command");
      rl.prompt();
      break;
  }
});

rl.on('close', () => {
  console.log("Goodbye!");
  process.exit(0);
});

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