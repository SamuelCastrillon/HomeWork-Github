function laCajaDePandora(numero){
   if(numero % 2 == 0){
    const binario = numero.toString(2);
    return binario;
   }else{
    //numero hexadecimal
    const hexadecimal = numero.toString(16);
    return hexadecimal;
   }
}

const esteban = ()=>{
    return {
        nombre: 'Esteban',
        edad: 31,
        nacionalidad: 'Uruguayo'
    }
}