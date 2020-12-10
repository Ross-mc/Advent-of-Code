// You start on the open square (.) in the top-left corner and need to reach the bottom (below the bottom-most row on your map).

// The toboggan can only follow a few specific slopes (you opted for a cheaper model that prefers rational numbers); 
// start by counting all the trees you would encounter for the slope right 3, down 1:

// From your starting position at the top-left, check the position that is right 3 and down 1. 

// Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.

// . is open # is a tree. how many trees?


//grabs the test input from a text area, splitting on newlines

const forest = document.querySelector("textarea").value.split("\n");

//removes the last element which is just empty space

forest.pop();

//  each element in the array will look like this .###.#........#.##......#.#...#

let treeCount = 0;


function pathFinder(position, moveDown, moveRight){

    let treeCount = 0;

    for (let i = 0; i<forest.length-1; i+=moveDown){
        var currentRow = forest[i].split("");

        var nextRow = forest[i+moveDown].split("")
        //logic to move back to the start of the row if the row is ended
        if (position+moveRight >= currentRow.length){
            position = moveRight-(currentRow.length-position)
        } else {
            position = position+moveRight
        };
    
        if (nextRow[position] === "#"){
            treeCount++
        };
    }

    //if we are are on the last row, return the count of trees
    return treeCount


    



};

var result1 = pathFinder(0, 1, 3);

console.log(result1)


// Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
// In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

// What do you get if you multiply together the number of trees encountered on each of the listed slopes?

function findMultiply(){
    var ans1 = pathFinder(0,1,1);
    var ans2 = pathFinder(0,1,3);
    var ans3 = pathFinder(0,1,5);
    var ans4 = pathFinder(0,1,7);
    var ans5 = pathFinder(0,2,1);
    return ans1 * ans2 * ans3 * ans4 * ans5
}

console.log(findMultiply())
