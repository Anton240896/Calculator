const operations = {
    sum: '+',
    substarct: '-',
    multiply: '*',
    division: '/'
};

function calculate ( { a, b, operation }) {
    let result;

switch (operation) {
    case operations.sum :
        result = sum(a, b);
break;

case operations.substarct :
        result = substract(a, b);
break;

case operations.multiply :
        result = multiply(a, b);
break;

case operations.division :
        result = division(a, b);
break;

default:
    break;

}

return result;
}
