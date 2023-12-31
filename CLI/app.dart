import 'dart:io';
import 'dart:math';

void clearScreen() {
  // Assuming this function clears the console screen in Dart
  // You may need to customize this based on your environment
  if (Platform.isWindows) {
    print(Process.runSync('cls', [], runInShell: true).stdout);
  } else {
    print(Process.runSync('clear', [], runInShell: true).stdout);
  }
}

void setPassword(List<int> password) {
  var input = '';
  while (true) {
    stdout.write('$4R >> Enter Your 8-Char Password (Type \'exit\' for Cancel): ');
    input = stdin.readLineSync()!;

    if (input == 'exit') {
      print('$4R >> Password not set.');
      break;
    } else if (input.length != 8) {
      print('$4R >> WRONG! Password must be 8 characters long.');
    } else {
      for (var i = 0; i < input.length; i++) {
        password[i] = int.parse(input[i]);
      }
      print('$4R >> Password Set.');
      break;
    }
  }
}

void runSignIn(List<int> password) {
  var isIn = false;
  if (password.isEmpty) {
    print('$4R >> Please Set Password First (Type \'set pass\').');
    return;
  }

  while (!isIn) {
    var randomIndexes = List.generate(4, (index) => Random().nextInt(8) + 1);

    clearScreen();
    print('\n\n    X-X-X-X\n');
    print('    ${randomIndexes.join("-")}\n\n');

    var passwordCom = '';
    for (var index in randomIndexes) {
      passwordCom += password[index - 1].toString();
    }

    var tempCom = List<int>.generate(4, (i) {
      stdout.write('    X[${randomIndexes[i]}] : ');
      return int.parse(stdin.readLineSync()!);
    });

    if (tempCom.toString() == passwordCom) {
      print('\n$4R >> Good Job, You\'re In!\n');
      isIn = true;
    } else {
      print('\n$4R >> WRONG! Try Again.\n');
    }
  }
}

void main() {
  var password = List<int>.filled(8, 0);
  var isExit = false;

  while (!isExit) {
    clearScreen();
    stdout.write('$UR >>> ');
    var input = stdin.readLineSync()!;

    switch (input) {
      case 'exit':
        isExit = true;
        break;
      case 'set':
        setPassword(password);
        break;
      case 'run':
        runSignIn(password);
        break;
      default:
        print('$4R >> Unknown Command');
    }
  }

  print('Goodbye!');
}