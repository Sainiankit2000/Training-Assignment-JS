const wordsArray = ["i",	"enjoy",	"coding",	"and",	"writing",	"code",	"is",	"a",	"lot",	"of",	
"fun"];

const filteredArray = wordsArray.filter(word => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e') {
            return true;
        }
    }
    return false;
});

console.log(filteredArray);
