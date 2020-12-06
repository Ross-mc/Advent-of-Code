// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the 
// lowest and highest number of times a given letter must appear for the password to be valid. 
// For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; 
// it contains no instances of b, but needs at least 1. The first and third passwords are valid: 
// they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?


//grabs the test input from a text area, splitting on newlines

const passwords = document.querySelector("textarea").value.split("\n");

//removes the last element which is just empty space

passwords.pop();

const formattedPasswords = []

passwords.forEach(element => {
    formattedPasswords.push(element.trim().split(" "))
    //trims whitespace from each element and splits on the space, so we have an array of 3 elements, the test numbers, target letter and password
});

let count = 0;

formattedPasswords.forEach(element => {
    var targetLetter = element[1];
    targetLetter = targetLetter.replace(":", "")
    var tests = element[0].split("-");
    var firstNum = parseInt(tests[0]);
    var secondNum = parseInt(tests[1]);
    var letters = element[2].split("");
    // formatting the data so we have a target letter as a string, we have the upper and lower bounds and we have an array of letters



    var localCount = 0;

    for (let i = 0; i<letters.length; i++){
        if (letters[i] === targetLetter){
            localCount++
        }
    }

    if (localCount >= firstNum && localCount <= secondNum){
        count++
    }

    


})

console.log('this is the final count', count);

console.log('part 2')

//part two 

// The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from
// his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

// Each policy actually describes two positions in the password, where 1 means the first character, 
// 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) 
// Exactly one of these positions must contain the given letter. 
// Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

// Given the same example list from above:

// 1-3 a: abcde is valid: position 1 contains a and position 3 does not.
// 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
// 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
// How many passwords are valid according to the new interpretation of the policies?

let partTwoCount = 0;

formattedPasswords.forEach(element => {
    var targetLetter = element[1];
    targetLetter = targetLetter.replace(":", "")
    var tests = element[0].split("-");
    var firstNum = parseInt(tests[0]);
    var secondNum = parseInt(tests[1]);
    var letters = element[2].split("");
    // formatting the data so we have a target letter as a string, we have the upper and lower bounds and we have an array of letters

    if ((letters[firstNum-1] === targetLetter && letters[secondNum-1] !== targetLetter) || (letters[firstNum-1] !== targetLetter && letters[secondNum-1] === targetLetter)){
        partTwoCount++
    }



})

console.log('Part 2 count is ', partTwoCount)