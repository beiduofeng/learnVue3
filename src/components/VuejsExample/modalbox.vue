<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div>
                <div class="modal-header">
                    <slot name="header">default header</slot>
                </div>
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        default footer

                    </slot>

                </div>
                <button @click="$emit('close')">OK</button>
            </div>
        </div>
    </Transition>
</template>
<script setup>
const props = defineProps({
    show: Boolean
})
</script>
<style scoped>
.modal-mask:hover {
    opacity: 0.6;
    color: red;
    transition: opacity 0.3s ease;
}
</style>