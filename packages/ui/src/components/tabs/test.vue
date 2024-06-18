<script setup lang="ts">
import Tabs from './tabs.vue';
import TabsTrigger from './trigger.vue';
import TabsPanel from './panel.vue';
</script>
<template>
    <tabs>
        <template #list>
            <tabs-trigger tab-key="1" text="tab1" />
            <tabs-trigger tab-key="2" text="tab2" />
            <tabs-trigger tab-key="3" text="tab3" />
        </template>
        <tabs-panel tab-key="1">
            tab1 content
        </tabs-panel>
        <tabs-panel tab-key="2">
            tab2 content
        </tabs-panel>
        <tabs-panel tab-key="3">
            tab3 content
        </tabs-panel>
    </tabs>
</template>