export const tileData = (numoftiles) => {
    const unshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    
    let shuffled = [];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        } 
        shuffled = array;
    }

    shuffle(unshuffled);
    
    let result = [];
    for (let i = 0; i < numoftiles; i++) {
        result.push({ id: i, number: shuffled[i] })
    }
    return result;
   
};
