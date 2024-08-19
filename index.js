function laCajaDePandora(numero){
    if(numero % 2 == 0) {
        let almacenador = []
        while (numero!== 0){
            let residuo = parseInt(numero%2)
            almacenador.push(residuo);
        }
        return almacenador
    }
    return String(numero)
    }

laCajaDePandora(8)