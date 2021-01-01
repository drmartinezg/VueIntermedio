<template>
    <div>
        <h3>
            {{ titulo }} 
            <!-- <button @click="$emit('eliminarItem')">Eliminar</button> -->
            <button @click="mostrarDetalles(titulo)">Detalles</button>
        </h3>
    </div>
</template>

<script>
    import EventBus from '../EventBus.js';
    export default {
        name: 'Tarea',
        props: ['titulo'],
        methods: {
            // Acción
            mostrarDetalles(titulo) {
                EventBus.$emit('detalles', titulo);
            }
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        color: $corporativo;
    }

    button {
        background-color: $alternativo;
        color: white;
    }
</style>