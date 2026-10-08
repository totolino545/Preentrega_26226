# Preentrega_26226

Proyecto de práctica en Node.js para interactuar con la API de DummyJSON desde la terminal.

## Descripción

Esta aplicación permite consumir recursos de productos mediante comandos de consola usando `GET`, `POST` y `DELETE`. La lógica de la interfaz de usuario es mínima y está centrada en la ejecución por línea de comandos.

## Objetivo

Practicar:

- uso de `fetch` en Node.js
- manejo de argumentos desde `process.argv`
- consumo de APIs REST
- creación, consulta y eliminación de recursos

## Estructura del proyecto

```bash
.
├── api/
│   └── api.js
├── index.js
├── package.json
├── README.md
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Uso

El proyecto se ejecuta con:

```bash
npm start -- <METODO> <RUTA> [DATOS...]
```

### Ejemplos

#### Obtener un producto

```bash
npm run start GET products/5
```

#### Listar productos

```bash
npm run start GET products
```

#### Crear un producto

```bash
npm run start POST products "Laptop" "Electrónica" 999.99
```

#### Eliminar un producto

```bash
npm run start DELETE products/5
```

## API utilizada

La aplicación consulta la siguiente base URL:

```text
https://dummyjson.com/
```

## Funcionalidad principal

- `index.js`: interpreta los argumentos y decide qué operación ejecutar.
- `api/api.js`: encapsula las llamadas a la API con `fetch`.

## Notas

- La app está diseñada para ejecutarse desde la consola.
- No incluye pruebas automatizadas en este momento.
- La respuesta de la API se imprime en consola.

## Autor

### Juan Adolfo Herrera

Proyecto educativo de la comisión #26226 - del curso deNode.JS.
