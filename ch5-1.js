let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

let output = arrays.reduce((x, y) => {
    return x.concat(y)
}, []);

console.log(output)