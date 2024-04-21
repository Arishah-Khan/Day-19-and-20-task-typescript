// Question no 55
// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var originalNumbers = [5, 10, 15, 20, 25];
var doubleNumbers = originalNumbers.map(function (number) { return number * 2; });
console.log("Original Numbers: ", originalNumbers);
console.log("Double Numbers: ", doubleNumbers);
// Question no 56
// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArray = ["Apple", "Orange", 4, "Banana", 6, 9, "Grapes", true, "Strawberry", false];
var onlyWords = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log("Mixed Array: ", mixedArray);
console.log("Only Words: ", onlyWords);
// Question no 57
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [90, 80, 70, 60, 50, 40, 30, 20, 10];
var sumOfGrades = 0;
for (var i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
}
;
var averageGrade = sumOfGrades / grades.length;
console.log("Average Grade: ", averageGrade);
// Question no 58
// Q58 - Write a simple program that can take lots of scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var sumOfScores = 0;
    for (var i = 0; i < scores.length; i++) {
        sumOfScores += scores[i];
    }
    ;
    return sumOfScores / scores.length;
}
console.log("Average Score: ", averageScore(60, 34, 89, 10, 30, 40));
// Question no 59
// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function createAdder(SpecialNumber) {
    return function (numberToAdd) { return numberToAdd + SpecialNumber; };
}
var adder1 = createAdder(5);
console.log(adder1(10));
// Question no 60
// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var userName = "Hammmad";
    var userAge = 12;
    return {
        information: function () {
            console.log("Name: ".concat(userName, " , Age: ").concat(userAge));
        }
    };
})();
userProfile.information();
