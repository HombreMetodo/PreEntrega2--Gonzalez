alert("Bienvenido a GatoGamer");
//USUARIO Y CONTRASEÑA
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese la contraseña");

while (usuario == "") {
  alert("El usuario no puede ser vacío");
  usuario = prompt("Ingrese su usuario");
}

while (contrasenia == "") {
  alert("La contraseña no puede ser vacía");
  contrasenia = prompt("Ingrese la contraseña");
}

// PRODUCTOS:

const catalogoCompleto = [
  { id: 1, nombre: "Playstation 5", precio: 550 },
  { id: 2, nombre: "Playstation 4", precio: 330 },
  { id: 3, nombre: "Xbox One", precio: 350 },
  { id: 4, nombre: "Nintendo Switch", precio: 400 },
  { id: 5, nombre: "Sega", precio: 120 },
];

alert("Catalogo Completo:");
for (const mostrarCatalogo of catalogoCompleto) {
  alert(mostrarCatalogo.nombre);
}

const montoFiltro = parseInt(
  prompt("Si lo desea, ingrese el valor a filtrar o de lo contrario, 0(cero) para continuar sin filtrar")
);

if (montoFiltro != 0) {
  const filtro = catalogoCompleto.filter(
    (producto) => producto.precio > montoFiltro
  );
  for (const productosFiltrados of filtro) {
    alert(productosFiltrados.nombre);
    alert(productosFiltrados.precio);
  }
} else {
  alert("No se filtrara por monto");
}

//CARRITO
const carrito = [];

do {
  elegirproducto();
  const productoSeleccionado = catalogoCompleto.find((p) => p.id == producto1);
  carrito.push(productoSeleccionado);
} while (producto1 != 0);


carrito.pop();

//MOSTRAR EL CARRITO:
alert("Carrito Seleccionado:");
for (const mostrarCarrito of carrito) {
  alert(mostrarCarrito.nombre);
}

//PRECIO TOTAL
const subTotal = carrito.reduce((accum, prod) => {
  return accum + prod.precio;
}, 0);

alert("Subtotal:");
alert(String(subTotal));

montoTotal(subTotal);

alert("Monto en ARS:");
alert(String(montoTotalcarrito));

// ELECCION DEL PRODUCTO
function elegirproducto() {
  producto1 =
    prompt(`Ingrese el número del producto deseado, (uno a la vez), cuando termine ingrese 0(cero): 
1 - Playstation 5;
2 - Playstation 4;
3 - Xbox One;
4 - Nintendo Switch;
5 - Sega; 
`);
  return producto1;
}

function montoTotal(monto) {
  montoTotalcarrito = monto * 610;
  return montoTotalcarrito;
}