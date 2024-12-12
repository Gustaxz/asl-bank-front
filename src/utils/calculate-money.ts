
const moneyTypes = [1, 5, 10, 20, 50, 100, 200];
const maxOptions = 3;

function calculateMoneyWithOneType(price: number, moneyType: number) {
    const moneyQtd = new Map<number, number>();
    let rest = price;

    if (moneyType > price) {
        moneyQtd.set(moneyType, 0);
        return moneyQtd;
    }

    const qtd = Math.floor(price / moneyType);
    rest = price % moneyType;
    moneyQtd.set(moneyType, qtd);

    const otherMoneyTypes = moneyTypes.filter((type) => type < moneyType).reverse();

    for (let i = 0; i < otherMoneyTypes.length; i++) {
        const otherMoneyType = otherMoneyTypes[i];
        const qtd = Math.floor(rest / otherMoneyType);
        rest = rest % otherMoneyType;
        moneyQtd.set(otherMoneyType, qtd);
    }


    return moneyQtd;
}

function calculateMoneyOptions(price: number) {
    const moneyQtdOptions: Map<number, number>[] = []

    for (let i = 0; i < moneyTypes.length; i++) {
        const moneyType = moneyTypes[i];
        const moneyQtd = calculateMoneyWithOneType(price, moneyType);
        moneyQtdOptions.push(moneyQtd);
    }

    return moneyQtdOptions;
}

export function calculateMoney(price: number) {
    const totalOptions = calculateMoneyOptions(price);
    console.log({ totalOptions });

    totalOptions.sort((a, b) => {
        let aTotal = 0;
        let bTotal = 0;

        a.forEach((value) => {
            aTotal += value;
        });

        b.forEach((value) => {
            bTotal += value;
        });

        console.log(aTotal, bTotal, a, b);

        return aTotal - bTotal;
    })
    console.log({ totalOptions });

    return totalOptions.reverse().slice(0, maxOptions);
}