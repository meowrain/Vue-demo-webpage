<template lang="">
<div class="col-lg-9 shadow-sm">
<CardUse>
<slot></slot>
</CardUse>
</div>
</template>
<script>
import CardUse from './CardUse.vue';
export default {
    components: {CardUse}
}
</script>
<style lang="" scoped>
    
</style>