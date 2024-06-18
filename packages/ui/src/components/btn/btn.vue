<script setup lang="ts">
export interface Emits {
  (e: "click", event: MouseEvent): void;
}
const emit = defineEmits<Emits>();

const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
<template>
  <button class="n-btn" @click="onClick">
    <span>text</span>
  </button>
</template>
<style lang="scss" scoped>
.n-btn {
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;

  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);

  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  // background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5714285714285714;
  // color: rgba(0, 0, 0, 0.88);

  &:hover {
    color: #fff;
    background-color: #4096ff;
  }

  &:active {
    color: #fff;
    background-color: #0958d9;
  }
}
</style>
