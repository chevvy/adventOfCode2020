dataList = document.getElementsByTagName('pre')[0].innerText.split('\n\n');

function getNbOfValidPassport(data){
    let nbOfValidPassport = 0;
    let northPolePassport = /byr|iyr|eyr|hgt|hcl|ecl|pid/g; //baby's first regex ! 
    data.map(passport => {
        let result = true;
        passport.match(northPolePassport).length == 7 ? nbOfValidPassport++ : result = false;
        return result;
    })
    return nbOfValidPassport;
}

// never really worked with regex, so that was a great learning experience! Any feedback is appreciated :) 
function getNbOfValidPassportFancy(data){
    let nbOfValidPassport = 0;
    let northPolePassport = /byr|iyr|eyr|hgt|hcl|ecl|pid/g;
    let birthYearCheck = /(\bbyr:(19[2-9]\d|200[0-2]))\b/; //I've marked the word boundaries, but that may have been overkill
    let issueCheck = /(\biyr:(201[0-9]|2020))\b/;
    let expirationYear = /\beyr:(202[0-9]|2030)\b/;
    let heightCheck = /\bhgt:((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)\b/;
    let hairColorCheck = /\bhcl:#([0-9]|[a-f]){6,6}\b/;
    let eyeColorCheck = /\becl:(amb|blu|brn|gry|grn|hzl|oth)\b/;
    let passportIdCheck = /\bpid:[0-9]{9}\b/;
    let checks = [northPolePassport, birthYearCheck, issueCheck, expirationYear, heightCheck, 
        hairColorCheck, eyeColorCheck, passportIdCheck];
    data.map(passport => {
        let result = true;
        // Felt cute like that, might change later
        checks.some(check => !passport.match(check)) ? result = false : nbOfValidPassport++;
        return result;
    })
    return nbOfValidPassport;
}
