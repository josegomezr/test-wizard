<template>
    <div>
        <b-table :fields="fields" :items="items">
            <template slot="actions" slot-scope="data">
                <b-button size="sm" variant="info" @click="trigger(data)">
                    Seleccionar
                </b-button>
            </template>
        </b-table>
    </div>
</template>
<script>

export default {
    name: 'tabla-articulos',
    computed: {
        fields: () => [
            {
                key: 'COD_PRODUCTO',
                label: 'Código',
                sortable: true,
            },
            {
                key: 'ARTICULO',
                label: 'Artículo',
                sortable: true,
            },
            {
                key: 'UNIDAD_MEDIDA',
                label: 'Unidad de Medita',
                sortable: true,
            },
            {
                key: 'VALOR_VTA_F',
                label: 'Valor de Venta',
                sortable: true,
            },
            {
                key: 'COSTO_FACT_1',
                label: 'Costo de Venta',
                sortable: true,
            },
            {
                key: 'actions',
            }
        ]
    },
    props: {
        items:{
            type: Array,
            default: () => []
        },
    },
    methods: {
        trigger({ item }){
            this.$emit('rowSelected', item);
        }
    }
}
</script>

