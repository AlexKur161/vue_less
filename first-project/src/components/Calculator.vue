<template>
<div>
<div class="display">
<input v-model="operand1"/>
<input v-model="operand2"/>
={{result}}
</div>
<div class="keyboard">
<button v-on:click="result = operand1 + operand2">+</button>
<button>-</button>
<button>/</button>
<button>*</button>
</div>
</div>

</template>
<script>
export default {
name: 'Calculator',
data(){
    return {
    operand1: 0,
    operand2: 0,
    result: 0
           }
    }
}
</script>
