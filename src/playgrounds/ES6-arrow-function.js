function square(x) {
    return x * x;
}

//or

const sqr = function (x) {
    return x * x;
}

console.log(square(8));

console.log(sqr(3));


//Arrow functions, return implicit

const sqrArrow = x => x*x;

console.log(sqrArrow(5));

const fullname = 'Antonio Casero';

const firstName1 = x => {
    return x.split()[0]
}

const firstName2 = x => x.split(' ')[0];

console.log(firstName2(fullname));


//More examples 
// arguments objects and this keyword no longer bound

