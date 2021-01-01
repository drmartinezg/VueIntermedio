# Manejo de estado en Vue

Cuando hablamos de estado nos referimos a la información que maneja una aplicación. Por ejemplo un componente puede estar mostrando un listado de tareas. En este caso las tareas son los datos, la información con la que trata ese componente.

Esta definición toma una nueva dimensión cuando hablamos de estado compartido. Ocurre cuando estas tareas deben ser manejadas en varios componentes de tus aplicaciones. **Pasamos de estado local a estado global de aplicación.**

Para entender este concepto con más profundidad, igual que hicimos con el [enrutamiento en Vue](https://escuelavue.es/series/aprender-vue-intermedio/vue-crear-router-personalizado/), vamos a aplicar varias técnicas para manejo de estado global, de más sencillas a más elaboradas, para que entiendas por qué necesitas algo como [Vuex](https://vuex.vuejs.org/) en tus aplicaciones Vue.