function mergeString(word1, word2) {

    let merged = '';
    let count = 0
    
    if(word1.length > word2.length) {
        count = word1.length
    } else {
        count = word2.length
    }
    
    for(let i=0;i< count; i++) {

        if(i < word1.length) {
            merged += word1[i];
        }

        if(i < word2.length) {
            merged += word2[i];
        }
    }

    return console.log(merged);
 }

 mergeString('abc','pqr')