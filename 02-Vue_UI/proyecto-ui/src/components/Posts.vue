<template>
    <div>
        <h1>Posts</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevoItem">
        <input type="button" value="Agregar item" @click="agregarItem"><br>
        <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems">
        <ul>
            <li 
                v-for="(item, $index) in itemsFiltrados" 
                :key="item.id" 
                @eliminarItem="eliminarItem($index)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import postService from '../services/postService.js';
    export default {
        name: 'PostsList',
        created() {
            postService.get().then(items => this.items = items.data);
        },
        data() {
            return {
                items: [],
                nuevoItem: '',
                filtroItems: '',
            }
        },
        methods: {
            agregarItem() {
                this.items.unshift({title: this.nuevoItem});
                this.nuevoItem = '';
            },
            eliminarItem(indice) {
                this.items.splice(indice, 1);
            }
        },
        computed: {
            itemsFiltrados() {
                return this.items.filter(item => {
                    return item.title.includes(this.filtroItems)
                })
            }
        },
    }
</script>