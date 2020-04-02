export const tileData = (numoftiles) => {
    
    const unshuffled = () => {
        let result = [];
        for (let i = 1; i < numoftiles/2 +1; i++) {
            result.push(i);
            result.push(i);
        }
        return result
    } 
    
    let shuffled = [];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        } 
        shuffled = array;
    }

    shuffle(unshuffled());
    
    let result = [];
    for (let i = 0; i < numoftiles; i++) {
        result.push({ id: i, number: shuffled[i] })
    }
    return result;
   
};
