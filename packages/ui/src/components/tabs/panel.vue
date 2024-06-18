<script setup lang="ts">
import { tabsKey } from "./symbols";
import { injectStrict } from "../../utils/inject";

const { selectedKey } = injectStrict(tabsKey);

interface Props {
  tabKey: number | string;
}
defineProps<Props>();
</script>
<template>
  <div v-if="selectedKey === tabKey">
    <slot />
  </div>
</template>
