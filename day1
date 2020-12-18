// To run in the page with the list of numbers 
// Otherwise, simply use any array of numbers
dataList = document.getElementsByTagName('pre')[0].innerText;
dataList = dataList.split("\n").map(x => parseInt(x));

// Simple solution Worst case O(n^2)
// As we might not have to loop all over the array, it's better to use forEach as it will result in a faster execution
    // BUT: if we do a face to face of each method that iterates over all elements, map() will be faster
function getProduct2NumbersEZ(list, desiredNb) {
    winningNb = 0;
    list.forEach(x => {
        list.forEach(y => {
            if (x+y == desiredNb){
                winningNb = x * y;
                return;
            }
        })
    })
    return winningNb;
}

// slightly faster (around 22%) because of the usage of find
function getProduct2NumbersEZFind(list, desiredNb){
    let winning = 0;
    list.forEach(element => {
        let found = list.find(el => el == (desiredNb - element))
        if(found){
            winning = found * element;
            return;
        }
    })
    return winning;
}

// Simple solution Worst case O(n^3) oof 
function getProduct3NumbersEZ(list, desiredNb){
    winningNb = 0;
    list.forEach(x => {
        list.forEach(y => {
            list.forEach(z => {
                if (x+y+z == desiredNb){
                    winningNb = x * y * z;
                    return;
                }
            })
        })
    })
    return winningNb;
}
