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

const balanceo = (pares) => {
    const pila = [];

    for (let unico of pares) {
        if (unico === '(' || unico === '[' || unico === '{') {
            pila.push(unico);
        } else if (unico === ')') {
            if (pila.length === 0) {
                return false;
            }

            if (pila[pila.length - 1] === '(') pila.pop();
        } else if (unico === ']') {
            if (pila.length === 0) {
                return false;
            }

            if (pila[pila.length - 1] === '[') pila.pop();
        } else if (unico === '}') {
            if (pila.length === 0) {
                return false;
            }

            if (pila[pila.length - 1] === '{') pila.pop();
        }
    }

    return pila.length === 0;
};

const horarios = (clases) => {
    let salones = 0;

    const periodo = [
        { inicio: '11:00', final: '14:00' },
        { inicio: '12:00', final: '15:00' },
        { inicio: '14:30', final: '16:00' },
    ];
};

//console.log(parentesis('(([))'));

module.exports = {
    ordenamiento,
    sumatoria,
    k_esimo,
    duplicidad,
    balanceo,
    horarios,
};
