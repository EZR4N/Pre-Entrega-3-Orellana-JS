

/* VARIABLES */

let usuario;
let contrasena;
let intentosRestantes = 3;
let eleccion = 0;
let listaRestaurantes = []
let carritoLista = [];
let listaNombresUsuarios = []
let listaContrasenasUsuarios = []
let contoladorStorage = false
let carritoStorage = []
let i = 0



/* CLASES */

class Menu {
  constructor(id, nombre, categoria, precio){
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
  }
}

class Restaurante {
  constructor(id, nombre, menu, categoria) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.menu = menu;
    this.categoria = categoria
  }
}

class ItemCarrito {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

let menu1 = new Menu (1, "grande de muzza", "pizza", 20000)
let menu2 = new Menu (2, "grande napolitana", "pizza", 22000)
let menu3 = new Menu (3, "fugazzetta rellena", "pizza", 26000)
let menu4 = new Menu (1, "whopper", "hamburguesa", 15000)
let menu5 = new Menu (2, "whopper con queso", "hamburguesa", 18000)
let menu6 = new Menu (3, "whopper extreme", "hamburguesa", 20000)

const restaurante1 = new Restaurante(1, "Joe´s Pizza", [
  menu1,
  menu2,
  menu3],
  ["pizza"]
);


const restaurante2 = new Restaurante(2, "Burger King", [
  menu4,
  menu5,
  menu6],
  ["hamburguesa"]
);

listaRestaurantes.push(restaurante1)
listaRestaurantes.push(restaurante2)

/* FUNCIONES */

/* LOGIN Y SIGN UP */
function login() {
  let usuarioIngresado;
  let contrasenaIngresada;

  while (intentosRestantes > 0) {
    usuarioIngresado = prompt("LOGIN: ingrese el nombre de usuario").toLowerCase();
    
    contrasenaIngresada = prompt("LOGIN: ingrese la contraseña");
    

    let busquedaListaUsuarios = listaNombresUsuarios.find((nombreUsuario) => nombreUsuario == usuarioIngresado)
    busquedaUsuario = busquedaListaUsuarios
  
    
  if(busquedaListaUsuarios =! undefined){

    let indexBusquedaUsuario = listaNombresUsuarios.indexOf(usuarioIngresado)
    let busquedaContrasena = listaContrasenasUsuarios.find((contrasenaUsuario) => contrasenaUsuario == contrasenaIngresada )
    let indexBusquedaContrasena = listaContrasenasUsuarios.indexOf(contrasenaIngresada)

    if (usuarioIngresado == busquedaUsuario && contrasenaIngresada == busquedaContrasena && indexBusquedaUsuario == indexBusquedaContrasena) {
      alert("Sesión iniciada con éxito!");
      controladorIngreso = 1;
      menuPrincipal();
      break;
    } else {
      alert(
        "Usuario o contraseña erróneos. Intentos restantes: " +
          (intentosRestantes - 1)
      );
      intentosRestantes--;
    }
  }
  if (intentosRestantes == 0) {
    alert("Usted ha realizado demasiados intentos, intente en otro momento");
  }
}
}

function LoginRegistro() {
  while (eleccion == 0) {
    eleccion = prompt("Registrarse: ingrese 1 Iniciar sesión: ingrese 2");
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
    } else {
      if (eleccion == 2) {
        login();
      } else {
        if (eleccion == 1) {
          registro();
          eleccion = 0;
          continue;
        }
      }
    }
  }
}

function registro() {
  usuario = prompt("REGISTRO: Ingrese el nombre de usuario").toLowerCase();
  contrasena = prompt("REGISTRO: Ingrese la contraseña");
  
  listaNombresUsuarios.push(usuario)
  listaContrasenasUsuarios.push(contrasena)
  
  alert("usuario creado con éxito!");
  
}

/* MENU  */

function menuPrincipal() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija una opcion:\n \n-1- Elegir restaurante\n-2- Buscar por tipo de comida\n-3- Carrito de compras\n-4- Cambiar contraseña\n-5- Cerrar sesión"
    );
    if (
      isNaN(eleccion) ||
      (eleccion != 1 &&
        eleccion != 2 &&
        eleccion != 3 &&
        eleccion != 4 &&
        eleccion != 5)
    ) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirRestaurante();
        eleccion = 0
        continue
      } else {
        if (eleccion == 2) {
          buscarPorTipoDeComida()
          eleccion = 0
          continue
        }else{
          if (eleccion == 3) {
            carrito(carritoLista);
            eleccion = 0
            continue
          }else{
            if(eleccion == 4){
                cambiarContrasena()
                eleccion = 0
                continue
            }else{
              if(eleccion == 5){
                alert('sesión cerrada')
                break
              }
            }
          }
          }
      }
    }
  }
}

function cambiarContrasena(){
  contrasenaIngresada = undefined
  let acumuladorDeIntentos = 0
  
  while (acumuladorDeIntentos <3 && contrasenaIngresada == undefined ){
  contrasenaIngresada = prompt("ingrese la contraseña actual:");
  let busquedaContrasena = listaContrasenasUsuarios.find((contrasenaUsuario) => contrasenaUsuario == contrasenaIngresada )
  let indexBusquedaContrasena = listaContrasenasUsuarios.indexOf(contrasenaIngresada)
  if(contrasenaIngresada == busquedaContrasena){
    let nuevaContrasena = prompt('Ingrese su nueva contraseña:')
    listaContrasenasUsuarios.splice(indexBusquedaContrasena, 1, nuevaContrasena)
    
    continue
  }else{
    alert('la contraseña ingresada es erronea')
    contrasenaIngresada = undefined
    acumuladorDeIntentos++
  }
  
  }
  }
  


function elegirRestaurante() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un restaurante para realizar su pedido:\n-1- " +
        restaurante1.nombre +
        "\n-2- " +
        restaurante2.nombre
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 2) {
        menuVisualBurger();
      } else {
        if (eleccion == 1) {
          menuVisualJoespizza();
        }
      }
    }
  }
}

function elegirCantidadPlatos(plato, precio) {
  let cantidadDePlatos = 1;

  eleccion = 0;
  while (eleccion == 0) {
    eleccion = prompt("¿Cuantos " + plato + " desea llevar?");
    if (isNaN(eleccion) || eleccion < 1) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      cantidadDePlatos = eleccion;
      alert("usted va a llevar: " + cantidadDePlatos + " " + plato);
      let itemCarrito = new ItemCarrito(plato, cantidadDePlatos, (precio*cantidadDePlatos));
      carritoLista.push(itemCarrito);
      return cantidadDePlatos;
    }
  }
}


/* MENUS DE RESTAURANTES */

function menuVisualBurger() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un plato para llevar:\n-1- " +
        restaurante2.menu[0].nombre + '- $' + restaurante2.menu[0].precio+
        "\n-2- " +
        restaurante2.menu[1].nombre + '- $' + restaurante2.menu[1].precio+
        "\n-3- " +
        restaurante2.menu[2].nombre + '- $' + restaurante2.menu[2].precio
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2 && eleccion != 3)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirCantidadPlatos(restaurante2.menu[0].nombre, restaurante2.menu[0].precio);
      } else {
        if (eleccion == 2) {
          elegirCantidadPlatos(restaurante2.menu[1].nombre, restaurante2.menu[1].precio);
        } else {
          if (eleccion == 3) {
            elegirCantidadPlatos(restaurante2.menu[2].nombre, restaurante2.menu[2].precio);
          }
        }
      }
    }
  }
}

function menuVisualJoespizza() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un plato para llevar:\n-1- " +
        restaurante1.menu[0].nombre + '- $'+restaurante1.menu[0].precio+ 
        "\n-2- " +
        restaurante1.menu[1].nombre + '- $'+restaurante1.menu[1].precio+ 
        "\n-3- " +
        restaurante1.menu[2].nombre+ '- $'+restaurante1.menu[2].precio
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2 && eleccion != 3)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirCantidadPlatos(restaurante1.menu[0].nombre, restaurante1.menu[0].precio);
      } else {
        if (eleccion == 2) {
          elegirCantidadPlatos(restaurante1.menu[1].nombre, restaurante1.menu[1].precio);
        } else {
          if (eleccion == 3) {
            elegirCantidadPlatos(restaurante1.menu[2].nombre, restaurante1.menu[2].precio);
          }
        }
      }
    }
  }
}

function buscarPorTipoDeComida(){
  eleccion = 0;
  while (eleccion == 0) {
    eleccion = prompt("Que tipo de comida busca?\n -1- Pizzas\n-2-Hamburguesas");
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1){
        let restaurantesPizza = listaRestaurantes.filter(restaurante => restaurante.categoria=="pizza")
        if(restaurantesPizza.length>0){
          let menuPizzas = []
          let acumulador = 0
          for (let i = 0; i < restaurantesPizza.length; i++) {
            menuPizzas.push(restaurantesPizza[i].menu)
            acumulador++
          }
          let menuPizzasReducido = []
          for (let i = 0; i < restaurantesPizza.length; i++) {
            for (let it = 0; it < menuPizzas[i].length; it++) {
              menuPizzasReducido.push(menuPizzas[i][it])
            }
            let menuPizzasReducidoString = ""
            for (let i = 0; i < menuPizzasReducido.length; i++) {
              menuPizzasReducidoString = menuPizzasReducidoString+ "\n-"+ (i+1) + "- "+  menuPizzasReducido[i].nombre+ '- $'+ menuPizzasReducido[i].precio
              
            }
            
            let eleccionPlato = 0


            while (eleccionPlato == 0){
              eleccionPlato = prompt('las opciones de pizzas:'+ menuPizzasReducidoString)
              if(isNaN(eleccionPlato)||(eleccionPlato<1 || eleccionPlato>menuPizzasReducido.length)){
                alert("Por favor ingrese una opcion correcta");
                eleccionPlato = 0
                continue
              }else{
                elegirCantidadPlatos(menuPizzasReducido[(eleccionPlato-1)].nombre, menuPizzasReducido[(eleccionPlato-1)].precio)
                continue
              }
            }
            
          }
          
        }
      }else{
        if (eleccion==2){
          let restaurantesHamburguesa = listaRestaurantes.filter(restaurante => restaurante.categoria=="hamburguesa")
        if(restaurantesHamburguesa.length>0){
          let menuHamburguesas = []
          let acumulador = 0
          for (let i = 0; i < restaurantesHamburguesa.length; i++) {
            menuHamburguesas.push(restaurantesHamburguesa[i].menu)
            acumulador++
          }
          let menuHamburguesasReducido = []
          for (let i = 0; i < restaurantesHamburguesa.length; i++) {
            for (let it = 0; it < menuHamburguesas[i].length; it++) {
              menuHamburguesasReducido.push(menuHamburguesas[i][it])
            }
            let menuHamburguesasReducidoString = ""
            for (let i = 0; i < menuHamburguesasReducido.length; i++) {
              menuHamburguesasReducidoString = menuHamburguesasReducidoString+ "\n-"+ (i+1) + "- "+  menuHamburguesasReducido[i].nombre+ '- $'+ menuHamburguesasReducido[i].precio
              
            }
            
            let eleccionPlato = 0


            while (eleccionPlato == 0){
              eleccionPlato = prompt('las opciones de hamburguesas:'+ menuHamburguesasReducidoString)
              if(isNaN(eleccionPlato)||(eleccionPlato<1 || eleccionPlato>menuHamburguesasReducido.length)){
                alert("Por favor ingrese una opcion correcta");
                eleccionPlato = 0
                continue
              }else{
                elegirCantidadPlatos(menuHamburguesasReducido[(eleccionPlato-1)].nombre, menuHamburguesasReducido[(eleccionPlato-1)].precio)
                continue
              }
            }


            
          }
          
        }
        }
      }
      
      
    }
  }
}

/* CARRITO */

function carrito(carritoLista) {
  
    let carritoListaMapNombre = carritoLista.map((itemNombre) => itemNombre.nombre)
    let carritoListaMapCantidad = carritoLista.map((itemCantidad) => itemCantidad.cantidad)
    let carritoListaMapPrecio = carritoLista.map((itemPrecio) => itemPrecio.precio)
    let nombreCantidadItemCarrito = []
    let precioTotal = 0
    for (let i = 0; i < carritoListaMapNombre.length; i++) {
      let nombreItemCarrito = carritoListaMapNombre[i]
      let cantidadItemCarrito = carritoListaMapCantidad[i]
      let precioItemCarrito = carritoListaMapPrecio[i]
      
      precioTotal =(precioTotal +  precioItemCarrito)
      alert (precioTotal)
      nombreCantidadItemCarrito.push(nombreItemCarrito+ ': '+cantidadItemCarrito+ ' ---   $'+ precioItemCarrito)  
    }
    alert('Usted va a llevar los siguientes platos: \n'+ nombreCantidadItemCarrito.join('\n')+ '\n\nEl total es de: $'+ precioTotal)
}

/*  DOM  - Eventos - JSON */

  function crearTarjetaRestaurant (listaRestaurantes) {
    let btnVolver = document.getElementById("btnVolver")
    let contenedor = document.getElementById("contenedorProductos")
    let contenedorMenus = document.getElementById("contenedorMenus")
    

    contenedor.classList.toggle("oculta")
    btnVolver.classList.toggle("oculta")
    btnCarrito = document.getElementById("btnCarrito")
    
    
    btnCarrito.addEventListener("click", (e) => renderizarCarrito(e))

    contenedorMenus.classList.toggle("oculta")
    listaRestaurantes.forEach(restaurante => {
      let tarjetaRestaurante = document.createElement("div")
      tarjetaRestaurante.className = "restaurante"
      tarjetaRestaurante.innerHTML = `
      <img src="" />
      <h2> ${restaurante.nombre} </h2>
      <button class="btnTarjeta" id="${restaurante.id}"> Ver menú </button>
    `

    contenedor.appendChild(tarjetaRestaurante)

    let btnRestaurante = document.getElementById(restaurante.id)
    btnRestaurante.addEventListener("click", (e) => filtrarPorRestaurante(e, restaurante.id))
    });
    }

  function filtrarPorRestaurante(event, restaurante){
      let btnVolver = document.getElementById("btnVolver")
      let contenedor = document.getElementById("contenedorMenus")
      let btnCarrito = document.getElementById("btnCarrito")


      btnCarrito.classList.toggle("oculta")
      contenedor.classList.toggle("oculta")
      btnVolver.classList.toggle("oculta")
      btnVolver.addEventListener("click", recargarPagina)
      
    

      btnCarrito.addEventListener("click", actualizarCarrito)
      restaurante = listaRestaurantes[restaurante-1]
      let {id, menu, nombre, categoria} = restaurante
      let contenedorRestaurantes = document.getElementById("contenedorProductos")
      contenedorRestaurantes.classList.toggle("oculta")
      
      
      menu.forEach(menu => {
      let tarjetaMenu = document.createElement("div")
      tarjetaMenu.className = "tarjetaMenu"
      tarjetaMenu.innerHTML = `
      <img src="" />
      <h2> ${menu.nombre.toUpperCase()} </h2>
      <h3> $ ${menu.precio} </h3>
      <button class="btnAgregarAlCarrito" id="${menu.id}"> Agregar al carrito </button>
      `    
      
      contenedor.appendChild(tarjetaMenu)
      contenedor.classList.toggle("oculta")
      

      
      // let btnMenu = document.getElementById(menu[arrayIndex].id)
      // btnMenu.addEventListener("click", (e) => filtrarPorRestaurante(e, restaurante.id))

    })
    let botonesAgregarProductos = document.getElementsByClassName("btnAgregarAlCarrito")
      for (const boton of botonesAgregarProductos) {
        boton.addEventListener("click", (e) => agregarAlCarrito(e, restaurante))
    }
    }

    function recargarPagina(){
      location.reload()
    }

    
  

    function agregarAlCarrito(e, restaurante){

      

      let btnAgregarAlCarrito = e.target.id
      let { menu } = restaurante
      let itemCarrito = menu[btnAgregarAlCarrito-1]
    
      let {nombre, precio, categoria} = itemCarrito
      

      carritoItemNombre = carritoLista.find((item)=> item.nombre==nombre )
      if (carritoItemNombre){
        mapCarritoNombre = carritoLista.map((item) => item.nombre)
        indexCarritoRepetido = mapCarritoNombre.indexOf(nombre)
        carritoLista[indexCarritoRepetido].cantidad++
        alert("Agregado al carrito!")
      }else{
      itemCarrito = new ItemCarrito(nombre, 1,precio)
      carritoLista.push(itemCarrito)
      alert("Agregado al carrito!")
      
    }
    guardarEnStorage("carrito", carritoLista)
  }

    
    
    function actualizarCarrito(){
      carritoStorage.forEach(item=>{
        carritoLista.push(item)
      })

      

      contenedorCarrito = document.getElementById("contenedorCarrito")
      eliminarItemsCarrito()
      let contenedorRestaurantes = document.getElementById("contenedorProductos") 
      contenedorRestaurantes.classList.toggle("oculta")

      let iterador = 0
      carritoLista.forEach(item =>{
        let tarjetaItemCarrito = document.createElement("div")
        tarjetaItemCarrito.className="tarjetaItemCarrito"
        tarjetaItemCarrito.innerHTML=`
        <h2> ${carritoLista[iterador].nombre} </h2>
        <h2> $ ${carritoLista[iterador].precio} </h2>
        <h2> Cantidad: ${carritoLista[iterador].cantidad} </h2>
        <button id="${carritoLista[iterador].nombre}" class="btnEliminarItemCarrito" > ELIMINAR </button>
        `
        iterador ++
        contenedorCarrito.appendChild(tarjetaItemCarrito)
      })
      let acumuladorPrecio = 0
      carritoLista.forEach(item=>{
        subtotalItem = item.precio * item.cantidad
        acumuladorPrecio = acumuladorPrecio + subtotalItem
      })
      
      let tarjetaTotalCarrito = document.createElement("div")
      tarjetaTotalCarrito.className="tarjetaTotalCarrito"
      tarjetaTotalCarrito.innerHTML=`
      <h2>Total: $ ${acumuladorPrecio}</h2>
      `  
      if(acumuladorPrecio>0){
      let botonPagar = document.createElement("button")
      botonPagar.id="btnPagar"
      botonPagar.innerHTML=`
      PAGAR
      `
      botonPagar.addEventListener("click", pagar)
      tarjetaTotalCarrito.appendChild(botonPagar)
      }
      contenedorCarrito.appendChild(tarjetaTotalCarrito)
    }




    function eliminarItemsCarrito(){
      carrito = document.getElementById("contenedorCarrito")
      while (carrito.firstChild){
        carrito.removeChild(carrito.firstChild)
      }
    }



    function pagar(){
      sessionStorage.removeItem("carrito")
      alert("en un momento lo redireccionaremos al sitio de pago")
      recargarPagina()
    }



    function renderizarCarrito(){
      let contenedorRestaurantes = document.getElementById("contenedorProductos")
      let contenedorCarrito = document.getElementById("contenedorCarrito")
      let contenedorMenu = document.getElementById("contenedorMenus")
      let btnVolver = document.getElementById("btnVolver")
      let btnCarrito = document.getElementById("btnCarrito")
      
      contenedorCarrito.classList.toggle("oculta")
      btnCarrito.classList.toggle("oculta")
      btnVolver.addEventListener("click", recargarPagina)

      if(carritoLista.length>0){
      let btnEliminarItemCarrito = document.querySelectorAll(".btnEliminarItemCarrito")
      btnEliminarItemCarrito.forEach(btn=>{
        btn.addEventListener("click", (e) => eliminarItemCarrito(e))
      })
      }

      

      contenedorMenu.classList.toggle("oculta")
      contenedorRestaurantes.classList.toggle("oculta")
      btnVolver.classList.toggle("oculta")
    }



    function eliminarItemCarrito(e){
      nombreItemEliminar = e.target.id
      carritoListaNombreMap = carritoLista.map((item) => item.nombre)
      indexItemAEliminar = carritoListaNombreMap.indexOf(nombreItemEliminar)
      alert(carritoLista[indexItemAEliminar].nombre)
      carritoLista.splice(indexItemAEliminar,1)
      sessionStorage.removeItem("carrito")
      guardarEnStorage("carrito", carritoLista)
      eliminarItemsCarrito()
      recargarPagina()
    }

    function guardarEnStorage(clave, valor) {
      let valorJson = JSON.stringify(valor)
      sessionStorage.setItem(clave, valorJson)
    }

    function recuperarCarritoDelStorage(){
      return JSON.parse(sessionStorage.getItem("carrito")) ?? []
    }

/* EJECUCIÓN */

carritoStorage = recuperarCarritoDelStorage()

actualizarCarrito()
crearTarjetaRestaurant(listaRestaurantes)

        
// LoginRegistro();



