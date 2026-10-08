import { products } from "./api/api.js";
const args = process.argv.slice(2);
let [metodo, recurso, id] = args;


switch (metodo) {
    case "GET":
        if (id) {
            recurso = `${recurso}/${id}`
        }
        console.log(`EndPoint :  /${recurso}`);
        const data = await products(recurso);
        if (!data) {
            console.log("Producto no encontrado");
        } else {
            console.log(data);
        }
        break;
}


