const url = `https://dummyjson.com/`;
export async function getProducts(recurso, config) {

  try {
    const response = await fetch(url + recurso, config );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Producto no encontrado')
      } else if (response.status === 500) {
        throw new Error('Error del servidor')
      } else {
        throw new Error(`Error: ${response.status}`)
      }
    }
    const productos = await response.json();
    console.log('Respuesta:', response.statusText);
    return productos
  } catch (error) {
    console.log('Error');
  } finally {
    console.log("Proceso finalizado");
  }
}
