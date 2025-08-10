function wordCounter(text){
    const lowerText = text.toLowerCase()
    const map = {}
    const texts = lowerText.split(/\s+/)

    for (const text of texts){
        if(text in map){
             map[text] ++;
        }else{
            map[text] = 1;
        }
    }
    return map;
}

const text = "Hello hello my my name is bibek thapa"
console.log(wordCounter(text))
