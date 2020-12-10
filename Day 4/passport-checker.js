// The automatic passport scanners are slow because they're having trouble detecting which passports have
//  all required fields. The expected fields are as follows:

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)
// Passport data is validated in batch files (your puzzle input). Each passport is represented as 
// a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines.

//Missing cid is fine, but missing any other field is not,

//determine the number of valid passports


var passportList = document.querySelector("textarea").value.split("\n");

let arrayOfBlankIndices = []

for (let i = 0; i<passportList.length; i++){
    if (passportList[i] === ""){
        arrayOfBlankIndices.push(i)
    }
};

let formattedArray = []

for (let i = 1; i<arrayOfBlankIndices.length; i++){
    let formattedArrayObj = []
    for (let j = arrayOfBlankIndices[i-1]+1; j<arrayOfBlankIndices[i]; j++){
        formattedArrayObj.push(passportList[j]);
    }
    formattedArray.push(formattedArrayObj)
};

let doublyFormattedArray = [];

formattedArray.forEach(element => {
    doublyFormattedArray.push(element.join(" "));
});

let triplyFormattedArr = [];

doublyFormattedArray.forEach(element => {
    var tempArr = element.split(" ");
    triplyFormattedArr.push(tempArr);
});

triplyFormattedArr.unshift("ecl:hzl byr:1926 iyr:2010 pid:221225902 cid:61 hgt:186cm eyr:2021 hcl:#7d3b0c".split(" "))

console.log(triplyFormattedArr);

let validPassportCount = 0;

const containsCid = (element) => element.startsWith("cid:")

triplyFormattedArr.forEach(passport => {
    if (passport.length === 8){
        validPassportCount++
    } else if (passport.length === 7){
        if (!passport.some(containsCid)){
            validPassportCount++
        }
    }
});

console.log(validPassportCount)