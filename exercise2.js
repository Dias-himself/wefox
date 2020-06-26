const str = 'Race car';

const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();

    return inStr === inStr.split('').reverse().joib(' ');
    
}

console.log(isPalindrome(str));