
//Ejercicio 1
function piramide (num){
    for (let a = 1; a <= num; a++){
      let f = '';
      for(let b = 1; b <= a; b++){
        f += b;
      };
      console.log(f);                                      
    };
};
const num = ("Ingrese un número: ")
piramide (num)
