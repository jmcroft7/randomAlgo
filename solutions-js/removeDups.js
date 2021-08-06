//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    let newString = "";

    //loop right to left through str
    for(let i = str.length - 1; i >= 0 ; --i){
        //loop from i to the end of the str
        let foundMatch = false;
        for(let j = i + 1; j < str.length; ++j){
            if(str[j] === str[i]){
                foundMatch = true;
                break;
            }
        }
        if(!foundMatch){
            newString = str[i] + newString;
        }
    }
    return newString;
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));