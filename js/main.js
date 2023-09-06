/*
for(var i = 5; i <= 20; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
}

for(var num = 0; num <= 30; num++) {
  if(num % 2 != 0)
    console.log(num);
}

for (var num = 50; num >= 1; num--) {
  if (num % 10 == 0) {
    console.log(num + ' - multiplo de 10')
  } else if (num % 2 != 0) {
    console.log(num + ' - impar')
  } else {
    console.log(num + ' - par')
  }

}*/

// function listarPerroPajaro(num, animal)

//   // const constante = 'hola';
  
//   // var palabra = 'patri';
  
//   // var animales = ['perro', 'gato', 'pajaro'];
  
//   // for (var i = 0; i < animales.length; i++){
//   //   if(animales[i][0] == 'p') {
//   //      console.log(animales[i]);
//   //   }
//   // }
//   return animales[i];
// }


// function sumar(num1, num2) {
//   return num1 + num2;
// }

// function sumar(num1, num2) {
//   resultado = num1 + num2;

//   return resultado;
// }

// resultado = sumar(5, 3);

// console.log(resultado);


// function alreves(nombre){
//   var tamano = nombre.length - 1;
//   var res = "";

//   while(tamano >= 0) {
//     res += nombre[tamano];
//     tamano--;
//   }
//   return res;
// }

// var resultado = alreves("polloshermanos")

// console.log(resultado)


// function alreves(nombre){
//   var tamano=nombre.length -1;
//   var res="";
//   while(tamano >=0){
//     res += nombre[tamano];
//     tamano--;
//   }

//   return res; 
// }

// var resultado=alreves("Heisenberg");
// console.log(resultado);



// function paresalreves(num1, num2){
//   var res = "";
//   while(num1 <= num2){
//     if(num1 % 2 == 0){
//       res += num1 + ", ";
//     }
//     num1++;
//   }

//   var ultposicion = res.length -1;
//   var resu = "";
//   while(ultposicion >= 0){
//     resu += res[ultposicion];
//     ultposicion--
//   }

//   return resu
// } 

// var resultado = paresalreves(5, 20);
// console.log(resultado);



function ordenar(){
  var animes = ["Death note", "Naruto", "Overlord", "Boku no hero", "Gantz"];

  for(var i = 0; i <= animes.length-2; i++){
    for(var j = 0; j <= animes.length-2; j++){
      if(animes[j][0] > animes[j+1][0]){
        var aux = animes[j]
        animes[j] = animes[j+1]
        animes[j+1] = aux;
      }
    }
  }

  return animes;
}
var res = ordenar();
console.log(res)