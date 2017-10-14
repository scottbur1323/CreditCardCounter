var start, placeLetter, totalLetters, userWord, backWord;
var chance = 0;
if (chance === 1) {
    userWord1 = prompt("Please Enter 16 numbers 4 times, and this will check to see which has the highest added numbers");
    userWord2 = prompt("Enter the second set of 16 numbers");
    userWord3 = prompt("Enter the third set of 16 numbers");
    userWord4 = prompt("Enter the fourth set of 16 numbers");
}
if (chance === 0) {
    var userWord1 = "1234567890123456";
    var userWord2 = "2345678901234567";
    var userWord3 = "3456789012345678";
    var userWord4 = "4567890123456789";
}

totalLetters = (userWord1.length);
placeLetter = 0;
var word1Total = 0;

for (start = 1; placeLetter < totalLetters; placeLetter = (placeLetter +1)) {
    word1Total = word1Total + parseInt(userWord1.charAt(placeLetter));
}

alert("Credit Card 1 Total is: " + word1Total);

totalLetters = (userWord2.length);
placeLetter = 0;
var word2Total = 0;

for (start = 1; placeLetter < totalLetters; placeLetter = (placeLetter +1)) {
    word2Total = word2Total + parseInt(userWord2.charAt(placeLetter));
}

alert("Credit Card 2 Total is: " + word2Total);

totalLetters = (userWord3.length);
placeLetter = 0;
var word3Total = 0;

for (start = 1; placeLetter < totalLetters; placeLetter = (placeLetter +1)) {
    word3Total = word3Total + parseInt(userWord3.charAt(placeLetter));
}

alert("Credit Card 3 Total is: " + word3Total);

totalLetters = (userWord4.length);
placeLetter = 0;
var word4Total = 0;

for (start = 1; placeLetter < totalLetters; placeLetter = (placeLetter +1)) {
    word4Total = word4Total + parseInt(userWord4.charAt(placeLetter));
}

alert("Credit Card 4 Total is: " + word4Total);

//  first check of which is the largest number

var word1TotalCounter = 0;

if (word1Total > word2Total) { word1TotalCounter += 1}
if (word1Total > word3Total) { word1TotalCounter += 1}
if (word1Total > word4Total) { word1TotalCounter += 1}
if (word1TotalCounter === 3){
    var firstPlace = "Credit Card 1: " + userWord1 + " with a total of: " + word1Total;
}
if (word1TotalCounter === 2){
    var secondPlace = "Credit Card 1: " + userWord1 + " with a total of: " + word1Total;
}
if (word1TotalCounter === 1){
    var thirdPlace = "Credit Card 1: " + userWord1 + " with a total of: " + word1Total;
}
if (word1TotalCounter === 0){
    var fourthPlace = "Credit Card 1: " + userWord1 + " with a total of: " + word1Total;
}

var word2TotalCounter = 0

if (word2Total > word1Total) { word2TotalCounter += 1}
if (word2Total > word3Total) { word2TotalCounter += 1}
if (word2Total > word4Total) { word2TotalCounter += 1}
if (word2TotalCounter === 3){
    firstPlace = "Credit Card 2: " + userWord2 + " with a total of: " + word2Total;
}
if (word2TotalCounter === 2){
    secondPlace = "Credit Card 2: " + userWord2 + " with a total of: " + word2Total;
}
if (word2TotalCounter === 1){
    thirdPlace = "Credit Card 2: " + userWord2 + " with a total of: " + word2Total;
}
if (word2TotalCounter === 0){
    fourthPlace = "Credit Card 2: " + userWord2 + " with a total of: " + word2Total;
}

var word3TotalCounter = 0

if (word3Total > word1Total) { word3TotalCounter += 1}
if (word3Total > word2Total) { word3TotalCounter += 1}
if (word3Total > word4Total) { word3TotalCounter += 1}
if (word3TotalCounter === 3){
    firstPlace = "Credit Card 3: " + userWord3 + " with a total of: " + word3Total;
}
if (word3TotalCounter === 2){
    secondPlace = "Credit Card 3: " + userWord3 + " with a total of: " + word3Total;;
}
if (word3TotalCounter === 1){
    thirdPlace = "Credit Card 3: " + userWord3 + " with a total of: " + word3Total;;
}
if (word3TotalCounter === 0){
    fourthPlace = "Credit Card 3: " + userWord3 + " with a total of: " + word3Total;;
}

var word4TotalCounter = 0

if (word4Total > word1Total) { word4TotalCounter += 1}
if (word4Total > word2Total) { word4TotalCounter += 1}
if (word4Total > word3Total) { word4TotalCounter += 1}
if (word4TotalCounter === 3){
    firstPlace = "Credit Card 4: " + userWord4 + " with a total of: " + word4Total;
}
if (word4TotalCounter === 2){
    secondPlace = "Credit Card 4: " + userWord4 + " with a total of: " + word4Total;
}
if (word4TotalCounter === 1){
    thirdPlace = "Credit Card 4: " + userWord4 + " with a total of: " + word4Total;
}
if (word4TotalCounter === 0){
    fourthPlace = "Credit Card 4: " + userWord4 + " with a total of: " + word4Total;
}

alert("The Credit Card that adds up to the most is " + firstPlace);
alert("The Credit Card that adds up to the second most is " + secondPlace);
alert("The Credit Card that adds up to the third most is " + thirdPlace);
alert("The Credit Card that adds up to the fourth most is " + fourthPlace);




