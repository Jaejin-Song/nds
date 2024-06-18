<script setup lang="ts">
import { provide, ref, type VNode } from 'vue';
import type { InjectionKey } from 'vue'
import { tabsKey } from './symbols';
import Trigger from './trigger.vue';

type TabKey = number | string;

const selectedKey = ref<TabKey>(1);
const setSelectedKey = (key: TabKey) => {
    selectedKey.value = key;
}

provide(tabsKey, {
    selectedKey,
    setSelectedKey,
})
</script>
<template>
    <div class="n-tabs">
        <div class="n-tabs__list">
            <slot name="list" />
        </div>
        <slot />
    </div>
</template>