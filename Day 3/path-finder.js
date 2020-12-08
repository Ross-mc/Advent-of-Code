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


function pathFinder(row, position){

    //if we are are on the last row, return the count of trees
    if (row === forest.length-1){
        return console.log('the tree count is: ', treeCount);
    };

    var currentRow = forest[row].split("");

    //we need to move 'right' by 3 and 'down' by 1, check the current position to see if it is a tree

    var nextRowIndex = row+1;
    var nextRow = forest[nextRowIndex].split("")
    var newPosition = 0;
    //logic to move back to the start of the row if the row is ended
    if (position+3 >= currentRow.length){
        newPosition = 3-(currentRow.length-position)
    } else {
        newPosition = position+3
    };

    console.log(nextRow);
    console.log(newPosition);


    if (nextRow[newPosition] === "#"){
        console.log('Found a tree!')
        treeCount++
    };
    

    pathFinder(nextRowIndex, newPosition)


};

pathFinder(0,0)