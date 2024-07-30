// Nested Function -
//      You may nest a function within another function.
//      The nested(inner) function is private to its containing(outer) function.

function addSquare(a, b) {

    const sqa = square(a);
    const sqb = square(b);

    function square(num) {
        return num * num;
    }

    console.log(squareOfTwo = sqa + sqb);
    
    return squareOfTwo;
}
addSquare(2, 3);