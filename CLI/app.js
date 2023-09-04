// https://github.com/athede-v/4R
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let password = '';
let isIn = false;

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
      password = input;
      console.log("$4R >> Password Set.");
      rl.prompt();
    }
  });
}

// Function to run the 4R Sign In Way
function runSignIn() {
  if (isIn) {
    console.log("$4R >> You're Already In!");
    rl.prompt();
    return;
  }

  if (!password) {
    console.log("$4R >> Please Set Password First (Type 'set pass').");
    rl.prompt();
    return;
  }

  const randomIndexes = Array.from({ length: 4 }, () => Math.floor(Math.random() * 8) + 1);
  const passwordCom = randomIndexes.map(index => password[index - 1]).join('');

  console.log("\n\n    X-X-X-X");
  console.log(`    ${randomIndexes[0]}-${randomIndexes[1]}-${randomIndexes[2]}-${randomIndexes[3]}\n\n`);

  rl.question(`    X[${randomIndexes[0]}] : `, (input1) => {
    rl.question(`    X[${randomIndexes[1]}] : `, (input2) => {
      rl.question(`    X[${randomIndexes[2]}] : `, (input3) => {
        rl.question(`    X[${randomIndexes[3]}] : `, (input4) => {
          const tempCom = input1 + input2 + input3 + input4;
          if (tempCom === passwordCom) {
            console.log("\n$4R >> Good Job, You're In!");
            isIn = true;
          } else {
            console.log("\n$4R >> WRONG! Try Again.");
          }
          rl.prompt();
        });
      });
    });
  });
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