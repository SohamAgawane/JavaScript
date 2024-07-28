// Object Destructuring :

const band = {
    bandName: "Led Zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};

let {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(restProps);