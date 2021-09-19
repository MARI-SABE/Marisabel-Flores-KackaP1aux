const Ricks1=[96, 108,89];
const Ricks2=[97, 112, 101]; 
const Ricks3=[97, 112 ,101]; 
const Mortys1=[88, 91, 110];
const Mortys2=[109, 95, 123];
const Mortys3=[109, 95, 106] ;
const prom1 =0;
const prom2=0;
 
//1. Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
//proporcionados al final del enunciado.
function promedio(arr1, arr2, arr3){
    let suma = 0;
    for (let i =0; i<arr1.length; i++)
    suma += arr1[i]+ arr2[i]+ arr3[i];
    return suma/9;
}
console.log("el promedio de Rickis es: "+ promedio(Ricks1,Ricks2,Ricks3));
console.log("el promedio de Mortys es: "+ promedio(Mortys1,Mortys2,Mortys3));

//2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.
function ganador(punt1, punt2){
if(punt1>punt2){
    console.log("el ganador es Rickis");
    return punt1;
    }
    if(punt2==punt1){
       console.log("empatados")
    }
    else{
    console.log("el ganador es Mortys");
    return punt2;
}
}
console.log(ganador(promedio(Ricks1,Ricks2,Ricks3),promedio(Mortys1,Mortys2,Mortys3) ));

//3. Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos.
function requisito(con){
       if(con>100){
        console.log("el equipo ganador cumple con el requisito");
        return con;
    }
}
console.log(requisito(ganador(promedio(Ricks1,Ricks2,Ricks3),promedio(Mortys1,Mortys2,Mortys3))));

//. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.
function empate(emp1, emp2){
    if(emp1==emp2){
        return "empatados";
        }
        
        if(emp2>=100 && emp1>=100){
            console.log("empates "+emp2+" " + emp1);
        }
}
console.log(empate (promedio(Ricks1,Ricks2,Ricks3),promedio(Mortys1,Mortys2,Mortys3)));

//5. Cree una arrow function 'calcAverage' para calcular el promedio de 3
//puntuaciones
 //función para calcular el promedio de ambos equipos.
const r = promedio(Ricks1,Ricks2,Ricks3);
const m = promedio(Mortys1,Mortys2,Mortys3)
 const calcAverage = ()=> {
     const resultado = `los ${
         ganador(r, m)=== r ?
         "Ricks" : "Mortys"
     } ganaron los ${
     ganador(r, m)=== r? 
            "Ricks" : "Mortys"
     } con un promedio de (${
         ganador(r, m)===r?
         r : m
     } a ${
         ganador(r, m)=== r ?
         m : r
     })`;
     return resultado;
 }
 console.log(calcAverage());

 //PREGUNTA2
 //1. Calcule la propina, dependiendo del valor de la factura. Cree una variable
//llamada ‘tip' para esto. No está permitido usar una declaración if / else 

function calcularPropina(fac){
      var tip = 0;
      switch(true){
          
          case(fac<50 && fac >10):
          tip = fac*0.10;
       
          case(fac>50 && fac<300):
          tip =fac* 0.20;
 }
 return tip;

}      
console.log(calcularPropina(30));
