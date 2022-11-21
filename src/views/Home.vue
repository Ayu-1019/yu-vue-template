<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useCountStore from '@/store/count'

const { count } = storeToRefs(useCountStore())
</script>
<template>
  <div class="">{{ count }}</div>
  <div @click="">count + 1</div>
</template>
<style scoped lang="less"></style>
