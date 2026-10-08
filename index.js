import { getProducts } from "./api/api.js";
const args = process.argv.slice(2);
let [metodo, ruta, ...datos] = args;
let [recurso, id] = ruta.split("/");
let config = {
    method: metodo,
}

switch (metodo) {
    case "GET":
        if (id) {
            recurso = ruta;
        }
        console.log(`EndPoint :  ${recurso}`);
        const data = await getProducts(recurso, config);
        if (!data) {
            console.log("Producto no encontrado");
        } else {
            console.log(data);
        }
        break;

    case "DELETE":
        if (!id) {
            console.log("Debe proporcionar un ID para eliminar un producto");
            break;
        }
        console.log(`EndPoint :  ${ruta}`);
        const borrarProducto = await getProducts(ruta, config);
        if (!borrarProducto) {
            console.log("Producto no encontrado");
        } else {
            console.log(`Producto eliminado correctamente: ${borrarProducto.deletedOn}`);
        }
        break;
    case "POST":

        if (datos.length === 0) {
            console.log("Datos no proporcionados para crear un producto");
            break;
        }
        ruta = `${recurso}/add`;
        console.log(`EndPoint :  ${ruta} Datos: ${datos}`);

        const nuevoProducto = { "title": datos[0], "category": datos[1], "price": parseFloat(datos[2]), };
        config = { ...config, body: JSON.stringify(nuevoProducto), headers: { 'Content-Type': 'application/json' } };

        const agregarProducto = await getProducts(ruta, config);
        if (!agregarProducto) {
            console.log("Error al agregar el producto");
        } else {
            console.log(`Producto agregado correctamente: ${agregarProducto}`);

        }
        break;
    default:
        console.log(`${metodo} no soportado. Use GET, POST o DELETE.`);
}


