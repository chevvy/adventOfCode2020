dataList = document.getElementsByTagName('pre')[0].innerText;
dataList = dataList.split("\n");


// Solution for part 1
// As we have to cover the whole array, they're might not be that much more optimization to the loop itself
// But probably some more optimization to the rest of the process
function getNbOfValidPasswords(passwordList){
    return passwordList.map(x => {
        if(!x){
            return;
        }
        let min, max, letter, password, regularExp, totalCount;
        min = x.split("-")[0];
        max = x.split("-")[1].split(' ')[0];
        letter = x.split(' ')[1].split(':')[0];
        password = x.split(':')[1].slice(1);
        regularExp = new RegExp(letter, "g") 
        totalCount = password.match(regularExp);
        if(!totalCount){
            return false;
        }
        totalCount = totalCount.length;
        if(totalCount >= min && totalCount <= max){
            return true;
        }
        return false;
    }).filter(Boolean).length;
}

// Solution for part 2
// Same comment regarding optimization. 
function getNbOfValidPasswordsForTobogan(passwordList){
    return passwordList.map(x => {
        if(!x){
            return;
        }
        pos1 = x.split("-")[0] - 1; // dont use 0-index ಠ_ಠ
        pos2 = x.split("-")[1].split(' ')[0] - 1;
        letter = x.split(' ')[1].split(':')[0];
        password = x.split(':')[1].slice(1);
        totalCount = 0;
        password.charAt(pos1) == letter ? totalCount++ : totalCount--;
        password.charAt(pos2) == letter ? totalCount++ : totalCount--;
        
        if(totalCount == 0){
            return true;
        }
        return false;
    }).filter(Boolean).length;
}
