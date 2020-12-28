# Vue CLI, estructura del proyecto

No importa si has creado un proyecto con Vue con interfaz de línea de comandos (CLI) o con la interfaz visual (UI), al final tendrás acceso a una serie de archivos y directorios relacionados de forma especial. Vamos a recorrer la estructura de un proyecto tipo Vue CLI.

### Directorios

- node_modules -> dependencias, librerías, etc, ... gestionado por npm 
- public -> recursos estáticos que no queremos procesar vía webpack
- src -> fuentes del proyecto.
  - assets -> recursos como css, imgs, fuentes, ...
- components -> componentes Vue del proyecto.
- views -> páginas/vistas del proyecto.

### Ficheros 
- App.vue -> Componente inicial, padre del resto de componentes Vue del proyecto. Incluye los componentes de Vue-router: router-link y router-view.
- router.js -> Objeto Router con la lógica de rutas del proyecto.
- main.js -> Instancia el objeto Vue.
- store/index.js -> Instancia el objeto Vuex, que gestiona el estado de la aplicación.