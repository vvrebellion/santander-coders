let calculator = (() => {

    const operators = {
        '+': (n1, n2) => +n1 + +n2,
        '-': (n1, n2) => +n1 - +n2,
        '*': (n1, n2) => +n1 * +n2,
        '/': (n1, n2) => +n1 / +n2
    }

    let entries = [];

    const enter = (input) => {
        if (typeof input === 'number' || input === '+' || input === '-' || input === '*' || input === '/') {
            entries = [...entries, input];
            return input;
        } else {
            return 'Input not valid!';
        }
    };

    const result = () => {
        if (entries.length < 3) {
            return 'Not enough entries!';
        }

        const n1 = entries[entries.length - 3];
        const op = entries[entries.length - 2];
        const n2 = entries[entries.length - 1];

        for (let operation in op) {
            if (operation === op) {
                result = op[operation](n1, n2);
                break;
            }
        }

        entries = [...entries, result];

        return result;
    };

    const list = () => {
        return entries;
    };

    const reset = () => {
        entries = [];
        return 'cleared';
    };

    return { enter, result, list, reset };
})();

// console.log(calculator.enter(5));
// console.log(calculator.enter('*'));
// console.log(calculator.enter(10));
// console.log(calculator.result());
// console.log(calculator.list());
// console.log(calculator.reset());