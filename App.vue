<template>
    <div>
        <div v-if="step == 0">
            <tabla-articulos @rowSelected="rowSelected" 
                :items="items"></tabla-articulos>
        </div>
        <div v-if="step == 1">
            <vista-cantidad @complete="setCantidad" 
                :current="currProd"></vista-cantidad>
        </div>
        <div v-if="step == 2">
            <vista-promociones @complete="setPromociones" 
                :cantidad="cantidad" 
                :current="currProd"></vista-promociones>
        </div>
        <div>
            <b-button variant="secondary" @click="step = 0">Cancelar</b-button>
        </div>
    </div>
</template>
<script>
const items = require('./items.json');

import TablaArticulos from './TablaArticulos'
import VistaCantidad from './VistaCantidad'
import VistaPromociones from './VistaPromociones'

export default {
    name: 'app',
    components: {
        TablaArticulos,
        VistaCantidad,
        VistaPromociones,
    },
    methods:{
        rowSelected(prod){
            this.currProd = prod;
            this.step = 1;
        },
        setCantidad(c){
            this.cantidad = c;
            this.step = 2;
        },
        setPromociones(promos){
            console.log(promos);
        }
    },
    data: () => ({
        cantidad: 1,
        currProd: null,
        step: 0,
        items: items
    })
}
</script>

