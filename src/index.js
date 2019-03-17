/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    //[2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4]

    let countTriangles = 0;
    for (let i = 0; i < preferences.length; i++) {
        if ((i + 1) === preferences[preferences[preferences[i] - 1] - 1]) {
            countTriangles++;
        }
    }
    console.log(countTriangles);
    return Math.floor(countTriangles/3);
};

