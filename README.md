TODO:

* Empaquetar?
* Settings para build (react, rollup...?)
* Documentación

# Getting Started

* Nos seguramos que estemos ejecutando una versión de node >= 8.1.1
* Hacemos un clon del repo `git clone https://github.com/startcat/spa-seed.git`
* Instalamos todas las dependecias `npm install`
* Instalamos VSCode (https://code.visualstudio.com/) con lo siguientes plugins:

    * Babel ES6/ES7 (dzanotti): Añade Syntax Higlighting
    * ESLint (Dir Baeumer): Muestra los errores del Linter
    * Prettier (Esben Petersen): Reformatea el código al guardar
    * Flow Language Support (flowtype): Muestra errores de Flow
    * Stylelint: Linter de SASS (Configurado para funcionar con BEM)

# Estructura de Carpetas

* /flow-typed: Contiene las definiciones de los módulos npm (para Flow)
* /node_modules: módulos de dev (babel, eslint, etc) y módulos de cliente (react, mobx, etc)
* /scripts: Scripts que invocamos mediante npm run <script>
* /.babelrc: Configuración de Babel que se usa en los scripts de build/watch y plugin de VS
* /.eslintrc: Configuración de ESLint que se usa en los scripts de build/watch y plugin de VS
* /.flowconfig: Configuración de Flow que se usa en los scripts de build/watch y plugin de VS
* /.stylelint: Configuración de Stylelint que se usa en los scripts de build/watch y plugin de VS
* /src: Código del site. javascript, estilos, etc. Todo está en src
    * /src/assets: Contenido estático del site. Se copian tal cual en /build


# FAQ

## ¿Como añado una imagen o cualquier otro recurso estático?

Créalo en la carpeta /src/assets. El script de watch/build se encargará de copiarlo en /build

## He instalado un nuevo paquete y flow lanza un error del tipo Required module not found

Seguramente te falta hacer un `flow-typed install` para que se descarguen sus definiciones.
Si falla, prueba a hacer una búsqueda en google del archivo de definición del módulo: por ejemplo, flow-typed falla al instalar mobx@3.1.1 pero si copio el contenido de definición que hay en el repo de mobx directamente en /flow-typed/npm/mobx_vx.x.x.js funciona OK.
En caso de no existia una definición para ese paquete siempre puedes crearo tu mismo.



# Vueling Seed Project

Proyecto seed para desarrollos internos de Vueling.

## Code Style

- Todo el Javascript sigue el formato [StandardJS](https://standardjs.com/) 
- El Sass tiene que seguir [BEM](http://getbem.com/)
- La estructura de componentes debe seguir [Atomic Design](http://atomicdesign.bradfrost.com/)

## Getting started

* Instalación:

    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Clona el repo del proyecto seed git: `git clone URL_REPO`
    * Desde dentro de la carpeta recien clonada: `npm install`, para instalar todas las dependencias

* Desarrollo / Despliegue:

    * `npm start` — Arranca servidor de desarrollo en http://localhost:8080
    * `npm run build` — Genera app minimizada y optimizada para uso en producción

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
