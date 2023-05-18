const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];




function logicaEvento(e){
  e.preventDefault()
  // Convierto el valor del valor del input a Int ya que por defecto me lo deja en string

  idConvertido = parseInt(inputBusqueda.value);

//  Uso el metodo find para que me devuelva todas las pizzas que se encuentran en el array
//  luego le pongo la condicion de que me devuelva solo la que tenga el valor de  IdPizzaRender(que contiene lo que puse en el input)

  let pizzaEncontrada = pizzas.find((posicionPizza)=>{
    return posicionPizza.id === idConvertido;
  })
  
 
  let cardContainer = document.querySelector('.card')


  // Si el idConvertido tiene un valor true o tiene un valor 0 (inclui el valor 0 porque es considerado falsy en principio), entrar al bucle

   if(idConvertido || idConvertido === 0){
    if (pizzaEncontrada){
      return cardContainer.innerHTML =
      `<img src=${pizzaEncontrada.imagen}>
      <h3>Nombre de Pizza elegida: <br> ${pizzaEncontrada.nombre}</h3>
      <h3>Precio:${pizzaEncontrada.precio}</h6>
      <p>${pizzaEncontrada.ingredientes}</p>
      `
    }
    else{
      cardContainer.innerHTML = "ID NO ENCONTRADO"
    }

  }

  else{
    cardContainer.innerHTML = "SIN ID"
  }


}


let form = document.querySelector('.searchWrapper')
let inputBusqueda = document.querySelector('#pizza')
let botonSubmit = document.querySelector('#submit')
let imgelement = document.createElement("img")

let idConvertido

form.addEventListener("submit",logicaEvento)

