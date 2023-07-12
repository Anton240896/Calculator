const operations = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/'
};

function calculate ( { a, b, operation }) {
let result;


switch (operation) {

    case sum:
    result = sum(a, b);
    break;

    case substract:
    result = substract(a, b);
    break;

        case multiply:
        result= multiply(a, b);
        break;

        case division:
        result = division(a, b);
        break;

    default:
    break;
}


return result;

}


