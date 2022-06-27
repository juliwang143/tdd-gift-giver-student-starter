class GiftExchange {
    constructor() {
        this.namessuper();
    }

    static pairs(names) {
        if (names.length % 2 != 0) {
            throw new Error('The number of names cannot cannot be even.')
        } else {
            const namedPairs = [];
            // while there are still names to process
            while (names.length) {
                // create a placeholder to store the pairs
                const currentPair = [];
                // while there is not a current pair
                while (currentPair.length < 2) {
                    // generate random index
                    const index = Math.floor(Math.random() * names.length);
                    // add random index to the current pair
                    currentPair.push(names[index]);
                    // remove that item from the names array
                    names.splice(index, 1);
                }
                namedPairs.push(currentPair);
            }
            return namedPairs;
        }
    }

    static traditional(names) {
        const pairs = this.pairs(names);

        return pairs.reduce((prev, item, index) => {
            if (index + 1 === pairs.length) {
                return [...prev, `${item[0]} is giving a gift to ${item[1]}`, `${item[1]} is giving a gift to ${pairs[0][0]}`]
            } else {
                return [...prev, `${item[0]} is giving a gift to ${item[1]}`, `${item[1]} is giving a gift to ${pairs[index+1][0]}`]
            }
       }, []);
        // const traditionalPairs = pairs.map(pair => `${pair[0]} is giving a gift to ${pair[1]}`);
        // return traditionalPairs;
    }
}

module.exports = GiftExchange;