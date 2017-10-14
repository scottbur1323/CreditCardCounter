var start, placeLetter, totalLetters, userWord, backWord;

userWord = prompt("Please Enter a Word, and this will check to see if it's a Palindrome.");
userWord = userWord.toUpperCase();

totalLetters = userWord.length - 1;

placeLetter = totalLetters;
backWord = "";

for (start = 1; placeLetter > (-1); placeLetter = (placeLetter - 1)) {
    backWord = backWord + userWord.charAt(placeLetter);
    if (placeLetter === 0) {
        alert("Your Original Word is:  " + userWord + ".  Your original word backwards is: " + backWord + ".  Is your word a Palidrome?");
        if (userWord === backWord) {
            alert("Yes!  It is a Palindrome!");
        }else if (userWord !== backWord) {
            alert("No!  It is not the same backwards and forewards!");
        }

        alert("Thanks for Playing!");
    }
}


