module.exports = function toReadable(number) {
    const numbersUpto20 = [
        "zero",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    const dozens = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];

    const hundred = " hundred";
    let humanReadableNumber = (humanReadableNumberDozens = "");

    function humanReadableDozens(number) {
        number % 10 === 0
            ? (humanReadableNumber = dozens[~~(number / 10)])
            : (humanReadableNumber =
                  dozens[~~(number / 10)] + numbersUpto20[number % 10]);
        return humanReadableNumber;
    }

    function humanReadableUpto100(number) {
        number < 20
            ? (humanReadableNumber = numbersUpto20[number])
            : (humanReadableNumber = humanReadableDozens(number));
        return humanReadableNumber;
    }

    if (number < 100) {
        humanReadableUpto100(number);
    } else if (number < 1000) {
        number % 100 === 0
            ? (humanReadableNumber = numbersUpto20[~~(number / 100)] + hundred)
            : (humanReadableNumber =
                  numbersUpto20[~~(number / 100)] +
                  hundred +
                  humanReadableUpto100(number % 100));
    } else return "Please, give a number in the range 0-999.";
    return humanReadableNumber.trim();
};
