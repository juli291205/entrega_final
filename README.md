

## Project Ecommerce


### Este proyecto de ecommerce es elaborado en React Js. conectado a Firebase / Firestore y tiene las siguientes funcionalidades:

1. Es navegable en home y muestra todos los productos disponibles con imagen y nombre.
2. También se puede navegar por cada categorias : audios, smartphones, laptops y smartwatches.
3. Al navegar por cada producto muestra el detalle: descripción, precio y stock.
4. Al seleccionar los productos en comprar se cargará la cantidades de productos en cart.
5. Cuando navegamos en cart veremos el detalle de todos los productos seleccionados con el detalle de costo total y cuenta con el botón "checkout" para continuar con la compra. En caso cart no tenga productos, mostrará un mensaje de que no se tiene productos seleccionados.
6. Al clickear checkout nos pedirá completar datos : Nombre y Apellido, Email, confirmacion de Email y Número de contacto; y si los datos son correctos según la validación, se activará el botón "finalizar compra".
7. Al clickear botón "finalizar compra" nos dará un mensaje con el cógido de orden de compra.
8. El stock es manejado por firestore y se actualiza por cada orden de compra realizado.

### Las colecciones creadas en firestore son de items, categories y órdenes.

### La librería extra que usé es Material UI : https://material-ui.com/







