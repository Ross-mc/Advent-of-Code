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