<template>
    <div>
        <ul class="list-unstyled">
            <li>
                <strong>COD_PRODUCTO: </strong> {{ current.COD_PRODUCTO }}
            </li>
            <li>
                <strong>ARTICULO: </strong> {{ current.ARTICULO }}
            </li>
            <li>
                <strong>UNIDAD_MEDIDA: </strong> {{ current.UNIDAD_MEDIDA }}
            </li>
            <li>
                <strong>VALOR_VTA_F: </strong> {{ current.VALOR_VTA_F }}
            </li>
            <li>
                <strong>COSTO_FACT_1: </strong> {{ current.COSTO_FACT_1 }}
            </li>
            <li>
                <strong>Cantidad: </strong> {{ cantidad }}
            </li>
        </ul>

        <b-button @click="complete" variant="info">Continuar</b-button>
    </div>
</template>
<script>

export default {
    computed: {
    },
    props: {
        current: {
            type: Object,
            default: () => ({})
        },
        cantidad: {
            type: Number,
            default: () => 1,
        }
    },
    methods: {
        complete(){
            this.$emit('complete', []);
        },
        decrease(){
            this.cantidad = Math.min(1, this.cantidad - 1)
        },
        increase(){
            this.cantidad = this.cantidad + 1
        },
    },
    data: () => ({
        cantidad: 1
    })
}
</script>

