export function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export const handleCurrency = (value: string) => {
    const onlyDigits = value.replace("R$", "").replace(",", ".").trim();

    let newValue = onlyDigits
        .replace(/\D/g, "")
        .replace(/(\d{2})$/, ".$1")
        .replace(/(?=(\d{3})+(\D))\B/g, "");

    const array = newValue.split(".");

    if (array.length > 2) {
        newValue =
            newValue.substring(0, newValue.length - 3) +
            "" +
            newValue.substring(newValue.length - 2);
    }

    return newValue;
};
