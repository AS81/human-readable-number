module.exports = function toReadable(number) {
    const numbersUpto20 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundred = "hundred";
    let humanReadableNumber = "Please, input number in range from 0 up to 999";

    function humanReadableDozens(number) {
        number % 10 === 0
            ? (humanReadableNumber = dozens[number / 10])
            : (humanReadableNumber =
                  dozens[number / 10] + " " + numbersUpto20[number % 10]);
    }
    console.log(`Before switch`);
    switch (true) {
        case 0 <= number <= 19: //switch(number) -> case 0-19: --- does not work...
            console.log(`start switch`);
            humanReadableNumber = numbersUpto20[number];
            break;
        case 20 <= number <= 99:
            humanReadableDozens(number);
            break;
        case 100 <= number <= 999:
            console.log(`start switch`);
            number % 100 === 0
                ? (humanReadableNumber = dozens[number / 100] + " " + hundred)
                : (humanReadableNumber =
                      dozens[number / 100] +
                      " " +
                      hundred +
                      " " +
                      humanReadableDozens(number % 100));
            console.log(`nRN-1: ${humanReadableNumber}`);
    }
    console.log(`nRN: ${humanReadableNumber}`);
    return humanReadableNumber;
};
