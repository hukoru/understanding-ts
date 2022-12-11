let userInput: unknown;
let username: string;

userInput = 5;
userInput = '맥주왕';

if (typeof userInput === 'string') {
    username = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('에러가발생하였습니다!', 500);

console.log(result);