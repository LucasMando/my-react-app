# E-Commerce CoderHouse Comision 45060

App desarrollada como proyecto final para el curso de Reactjs de CoderHouse, es un E-commerce de figuras coleccionables

![](/public/img/ScreenshotProyecto.png)

## Librerías que utilicé

- [react-router-dpm](https://reactrouter.com/en/main): Esta librería la utilicé para configurar las rutas de navegacion dentro del sitio.
- [Firebase](https://firebase.google.com/?hl=es&authuser=0): Esta otra librería la use para crear la base de datos de la app, con esto cree mi colección para los productos asi como otra para las ordenes de compra y generar el id del mismo.

## Funciones del sitio

- Se puede navegar al detalle del producto para ver el precio, una descripción breve del mismo y agregar la cantidad de ese producto que quieras agregar al carrito con maximo de 10 unidades por producto.
![](/public/img/Detalle.png)
- se puede ingresar al carrito una vez seleccionada la cantidad agregada o haciendo click en el icono en el navbar, ahi podras eliminar productos individualmente o bien vaciar el carrito entero ademas de hacer el check para generar la orden de compra y ver el precio individual de cada producto o bien el total de todo.
![](/public/img/Carrito.png)
- Tambien podes navegar por categorias para una mayor precisión a la hora de buscar productos.

## Pasos para iniciar el proyecto en local:

1. Clonar el repositorio:
```
git clone https://github.com/LucasMando/my-react-app.git
```
2. Instalar:
```
npm install
```
3. Iniciar proyecto:
```
npm start
```
### Bonus:
En el caso de actualizar al commit mas reciente usar
```
git pull
```
IMPORTANTE: Para que esto funcione es fundamental que usted no haya hecho ningun cambio en el repositorio clonado.

