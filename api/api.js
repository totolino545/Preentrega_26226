
export async function products(recurso) {


  const url = `https://dummyjson.com/${recurso}`;
  console.log(url);

  try {
    const response = await fetch(url);

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
