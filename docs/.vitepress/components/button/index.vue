<template>
  <a-button v-bind="props" :loading="internalLoading" danger @click="onClick">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import buttonProps from 'ant-design-vue/es/button/buttonTypes'

const props = defineProps(buttonProps())

const internalLoading = ref(false)

const onClick = () => {
  internalLoading.value = true
  setTimeout(() => {
    internalLoading.value = false
  }, 1000)
}
</script>
