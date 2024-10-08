
function laCajaDePandora(numero) {
  if (typeof numero !== "number" || !Number.isInteger(numero)) {
    console.log("No es un numero entero");
  }
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

console.log(laCajaDePandora(8));
console.log(laCajaDePandora(20));
console.log(laCajaDePandora(12));
console.log(laCajaDePandora(11));

const rosario = () => {
  return {
    nombre: "Rosario",
    edad: 32,
    nacionalidad: "Argentina",
  };
};

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

