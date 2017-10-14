var start, placeLetter, totalLetters, userWord, backWord;

userWord = prompt("Please Enter a Word, and this will reverse it.");

totalLetters = userWord.length - 1;

placeLetter = totalLetters;
backWord = "";

for (start = 1; placeLetter > (-1); placeLetter = (placeLetter - 1)) {
    backWord = backWord + userWord.charAt(placeLetter);
}

alert("Your Reversed Word Is: " + backWord);




