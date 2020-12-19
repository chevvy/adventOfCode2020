dataList = document.getElementsByTagName('pre')[0].innerText;
dataList = dataList.split("\n");
dataList.pop(); // as to remove the last element of the array resulting from the split with "\n"

function getNbOfTreesHitChallenge1(map, horizontalIndex = 3, verticalIndex = 1){
    let nbOfTrees = 0;
    let treeIndex = horizontalIndex;
    let mapLength = map[0].length;
    
    for(i = 0; i < map.length;){
        if(!map[i+verticalIndex]) return nbOfTrees;
        // to adjust the index as to not copy array or else
        adjustedIndex = treeIndex - (Math.floor(treeIndex/ mapLength) * mapLength);
        map[i + verticalIndex].charAt(adjustedIndex) == "#" ? nbOfTrees++ : nbOfTrees;
        
        treeIndex = treeIndex + horizontalIndex;
        i = i + verticalIndex;
    }
    return nbOfTrees;
}

function getChallenge2Nb(map){
    let result;
    result = getNbOfTreesHitChallenge1(map, 1, 1);
    result *= getNbOfTreesHitChallenge1(map, 3, 1);
    result *= getNbOfTreesHitChallenge1(map, 5, 1);
    result *= getNbOfTreesHitChallenge1(map, 7, 1);
    result *= getNbOfTreesHitChallenge1(map, 1, 2);
    return result;
}

