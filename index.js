const ordenamiento = (numeros) => {
    let temp;
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] < numeros[j]) {
                temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }

    return numeros;
};

const sumatoria = (num1, num2) => {
    if (num1 > 0 && num2 > 0 && num1 !== num2) {
        let i = 0;
        let suma = 0;
        if (num1 < num2) {
            while (num1 + i <= num2) {
                suma += num1 + i;
                i++;
            }
        } else {
            while (num2 + i <= num1) {
                suma += num2 + i;
                i++;
            }
        }

        return suma;
    }
};

const k_esimo = (arreglo, k) => {
    arreglo = arreglo.sort().reverse();
    return arreglo[k - 1];
};

const duplicidad = (arreglo) => {
    return new Set(arreglo);
};

const parentesis = (pares) => {
    let par = pares.split('');
    let i = 0;
};

const horarios = (clases) => {
    /*const hora = n
    ew Date().to;
    const inicio = new Date().setUTCHours(12, 00, 00, 00);
    return inicio;*/
};

module.exports = {
    ordenamiento,
    sumatoria,
    k_esimo,
    duplicidad,
    parentesis,
    horarios,
};
