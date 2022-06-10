# Prueba técnica - Mercado Libre

## Documentación Frontend - Proyecto testFrontend

El frontend de la prueba está desarrollado en React, la instalación y configuración se hace sobre la herramienta de compilación [Vite](https://vitejs.dev/guide/#trying-vite-online)

Se integra para el CSS el preprocesador [SASS](https://vitejs.dev/guide/features.html#css-pre-processors)

El proyecto se encuentra en un repositorio de Github publicado con el nombre [prueba-Frontend](https://github.com/AlejandraMariaVari/prueba-Frontend)

## Proceso de instalación:

1. Ingresar al proyecto [prueba-Frontend](https://github.com/AlejandraMariaVari/prueba-Frontend)
2. Realizar la clonación del repositorio.
3. Después de clonar el proyecto, se instalan las dependencias con `yarn install` o `npm install`
4. Se ejecuta el proyecto con el comando `npm run dev` (por defecto el proyecto se ejecutará en el puerto 3000)
5. Debido al tiempo disponible, no me fue posible finalizar el proyecto, dado ello el diseño de cada vista se encuentra en las siguientes rutas para su visualización:
   Rutas:
   5.1 Vista Caja de búsqueda -> http://localhost:3000/
   5.2 Resultado de la búsqueda -> http://localhost:3000/items
   5.3 Detalle del producto -> http://localhost:3000/items/:id

## Documentación Backend - Proyecto apisExpress

La creación de los endpoints y el formato de los datos obtenidos se desarrollaron en [Express](https://expressjs.com/).
Se instalan las dependencias Morgan para poder ver en consola las peticiones http y Nodemon para mantener la ejecución de los scripts.

## Proceso de instalación:

1. Ingresar al proyecto [apisExpress](https://github.com/AlejandraMariaVari/apisExpress)
2. Realizar la clonación del repositorio.
3. Después de clonar el proyecto, se instalan las dependencias con `yarn install` o `npm install`
4. Se ejecuta el proyecto con el comando npm run dev (por defecto el proyecto se ejecutará en el puerto 4000).
5. Debido al tiempo disponible, no me fue posible finalizar el proyecto, dado ello los endpoints de cada servicio se encuentra en las siguientes rutas para su visualización:
   Rutas:
   5.1 Api Buscar productos: -> http://localhost:4000/api/items/?search=locion
   5.2 Api Detalle del producto: -> http://localhost:4000/api/items/MLA1133793364
