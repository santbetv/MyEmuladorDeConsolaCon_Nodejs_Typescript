import { sumarFn } from "./Ejercicios";

let getArgs = (cmd: any): Array<string> => {
    let lastLn = cmd.value.substr(cmd.value.lastIndexOf('\n') + 1);
    let arreglo = lastLn.split(' ');
    return arreglo;
};

let cmdSumar = (arreglo: Array<string>): number => {
    let nro1 = parseFloat(arreglo[1]);
    let nro2 = parseFloat(arreglo[2]);
    let result = sumarFn(nro1, nro2);
    return result;
}

let cmdNumerosAscendentemente = (arreglo: Array<string>): string => {
    let nume = "";
    /* let datos: Array<number> = new Array();
    let numeroX = parseFloat(arreglo[1]);
    
    for (let i = 2; i < arreglo.length; i++) {
        if (parseFloat(arreglo[i]) < numeroX) {
            numeroX = parseFloat(arreglo[i]);
            datos[0] = numeroX;
        }
    }
    let cont = 0;
    for (let i = 0; i < datos.length; i++) {
        for (let j = 1; j < arreglo.length; j++) {
            if (datos[i] < parseFloat(arreglo[j])) {
                cont++;
                datos[cont] = parseFloat(arreglo[j]);
            }
        }
        break;
    }
    for (let i = 1; i < datos.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            if (datos[i] > parseFloat(arreglo[j])) {
                datos[j] = parseFloat(arreglo[j]);
            }
            break;
        }
    }
    for (let i = 0; i < datos.length; i++) {
        nume += datos[i] + ",";
    } */

    //iteramos sobre los elementos del arreglo
    for (let i = 1; i < arreglo.length - 1; i++) {
        let min = i;

        //buscamos el menor número
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[j] < arreglo[min]) {
                min = j;    //encontramos el menor número
            }
        }

        if (i != min) {
            //permutamos los valores
            let aux = arreglo[i];
            arreglo[i] = arreglo[min];
            arreglo[min] = aux;
        }
    }

    for (let i = 1; i < arreglo.length; i++) {
        nume += arreglo[i] + ",";
    }

    return "" + nume;
}

let cmdNumeroMayor = (arreglo: Array<string>): number => {
    let numeroX = parseInt(arreglo[1]);

    for (let i = 2; i < arreglo.length; i++) {
        if (parseInt(arreglo[i]) > numeroX) {
            numeroX = parseInt(arreglo[i]);
        }
    }

    return numeroX;
}

let cmdNumeroIgual = (arreglo: Array<string>): string => {
    let numero1 = arreglo[1].charAt(0);
    //let numero2 = arreglo[1].charAt(2);
    let numero2 = 0;
    let mensaje = "";
    let numeroX = arreglo[1];
    for (let i = 0; i < numeroX.length; i++) {
        numero2 = parseInt(numeroX[i]);
    }
    if (parseInt(numero1) != numero2) {
        mensaje = "Numeros diferentes";
    } else {
        mensaje = "Numeros iguales";
    }

    return mensaje;
}

let cmdNumeroConSumaIgual = (arreglo: Array<string>): string => {
    let numero = arreglo[1];
    let mensaje = "";
    for (let i = 0; i < numero.length; i++) {
        if ((parseInt(numero[1]) + parseInt(numero[2])) == parseInt(numero[i])) {
            mensaje = "Numero: " + parseInt(numero[i]) + " " + " en suma";
        } else if ((parseInt(numero[0]) + parseInt(numero[2])) == parseInt(numero[i])) {
            mensaje = "Numero: " + parseInt(numero[i]) + " " + " en suma";
        } else if ((parseInt(numero[0]) + parseInt(numero[1])) == parseInt(numero[i])) {
            mensaje = "Numero: " + parseInt(numero[i]) + " " + " en suma";
        }
    }
    return mensaje;
}

let cmdNumeroPrimo = (arreglo: Array<string>): number => {
    let datos: Array<number> = new Array();
    let cnt = 0;
    let numero = 0;
    let numeroX = arreglo[1];


    for (let i = 0; i < numeroX.length; i++) {
        numero = parseInt(numeroX[i]);
        datos[i] = numero;
    }

    for (let i = 0; i < datos.length; i++) {
        cnt += cmdIndicarPrimo(datos[i]);
    }
    /* cnt = cmdIndicarPrimo(5); */

    /* for (let i = 1; i <= parseInt(numeroX); i++) {
        if ((parseInt(numeroX) % i) == 0) {
            contador++;
        }
    } */

    /* if (contador <= 2) {
        mensaje = "El numero es primo";
    } else {
        mensaje = "El numero no es primo";
    } */

    return cnt;
}

let cmdNumeroPar = (arreglo: Array<string>): number => {
    let datos: Array<number> = new Array();
    let cnt = 0;
    let numero = 0;
    let numeroX = arreglo[1];


    for (let i = 0; i < numeroX.length; i++) {
        numero = parseInt(numeroX[i]);
        datos[i] = numero;
    }

    for (let i = 0; i < datos.length; i++) {
        cnt += cmdEsPar(datos[i]);
    }
    return cnt;
}

let cmdIndicarPrimo = (numero: number): number => {
    let contador = 0;
    let contadorFinal = 0;
    for (let i = 1; i <= numero; i++) {
        if ((numero % i) == 0) {
            contador++;
        }
    }
    if (contador <= 2) {
        contadorFinal = 1;
    }

    return contadorFinal;
}

let cmdEsPar = (numero: number): number => {
    let contador = 0;
    if ((numero % 2) == 0) {
        contador = 1;
    }
    return contador;
}

let cmdCls = (cmd: any) => {
    return cmd.value = '';
}

let cmdHelp = (arreglo: Array<string>, cmd: any) => {
    let commandName = arreglo[1];
    switch (commandName) {
        case 'sumar':
            cmd.value += '\nEl comando suma\n y suma estos [nro1] + [nro2] '
            break;
    }

}

document.addEventListener('DOMContentLoaded', () => {

    let cmd = document.getElementById('cmd') as any;

    cmd.onkeypress = (event: any) => {
        if (event.keyCode == 13) {

            let arreglo = getArgs(cmd);
            if (arreglo[0] == 'sumar') {
                let result = cmdSumar(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'cls') {
                cmdCls(cmd);
            }
            else if (arreglo[0] == 'help') {
                cmdHelp(arreglo, cmd);
            }
            else if (arreglo[0] == 'ascen') {
                let result = cmdNumerosAscendentemente(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'mayor') {
                let result = cmdNumeroMayor(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'igual') {
                let result = cmdNumeroIgual(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'primo') {
                let result = cmdNumeroPrimo(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'par') {
                let result = cmdNumeroPar(arreglo);
                cmd.value += '\n' + result;
            }
            else if (arreglo[0] == 'sumaigual') {
                let result = cmdNumeroConSumaIgual(arreglo);
                cmd.value += '\n' + result;
            }
            else {
                cmd.value += "\ncomando no reconocido";
            }
        }
    };
});