type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

type User = { name: string; age: number };

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion:ConversionDescriptor
) {
    let result;
    if ( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;

/*    if(resultConversion === 'as-number'){
        return + result;
    }else {
        return result.toString();
    }*/
}

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);


const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('max', 'anna', 'as-text');
console.log(combinedNames);