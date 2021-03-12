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
        console.log(`start function human witn number   ${number}`);
        number % 10 === 0
            ? (humanReadableNumberDozens = dozens[~~(number / 10)])
            : (humanReadableNumberDozens =
                  dozens[~~(number / 10)] + numbersUpto20[number % 10]);
        console.log(
            `end func human with number    ${number} :    ${humanReadableNumberDozens}`
        );
        return humanReadableNumberDozens;
    }

    if (number < 20) {
        //switch(number) -> case 0-19: --- does not work...
        console.log(` ${number}  less then 20`);
        humanReadableNumber = numbersUpto20[number];
    } else if (number < 100) {
        console.log(` ${number}  less then 100`);

        humanReadableNumber = humanReadableDozens(number);
    } else if (number < 1000) {
        console.log(` ${number}  less then 1000`);

        // console.log(`start switch`);
        number % 100 === 0
            ? (humanReadableNumber = numbersUpto20[~~(number / 100)] + hundred)
            : (humanReadableNumber =
                  numbersUpto20[~~(number / 100)] +
                  hundred +
                  humanReadableDozens(number % 100));
        console.log(`nRN-1: ${humanReadableNumber}`);
    }
    console.log(`nRN: ${humanReadableNumber}`);
    return humanReadableNumber.trim();
};
