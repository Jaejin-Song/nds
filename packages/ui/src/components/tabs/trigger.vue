<script setup lang="ts">
import { tabsKey } from "./symbols";
import { injectStrict } from "../../utils/inject";

const { setSelectedKey } = injectStrict(tabsKey);

interface Props {
  text: string;
  tabKey: number | string;
}
const props = defineProps<Props>();

const onClick = () => {
  setSelectedKey(props.tabKey);
};

const onPressArrow = (e: KeyboardEvent) => {
  e.preventDefault();
  const currentTrigger = e.target as HTMLButtonElement;

  // key 정보와 현재 Trigger 전달
  const futureTrigger = findFutureTrigger(e.key, currentTrigger);
  if (!futureTrigger) return;

  const futureValue = futureTrigger.dataset["triggerValue"];

  if (futureValue === undefined) return;

  futureTrigger.focus();
  setSelectedKey(futureValue);
};

const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const findFutureTrigger = (key: string, currentTrigger: HTMLButtonElement) => {
  const getSiblingProp = (key: string) => {
    if (ARROW_LEFT.includes(key)) return "previousElementSibling";
    if (ARROW_RIGHT.includes(key)) return "nextElementSibling";
    return null;
  };

  const siblingProp = getSiblingProp(key);

  if (siblingProp === null) return;

  let futureTrigger = currentTrigger[siblingProp];

  while (futureTrigger && futureTrigger.hasAttribute("disabled")) {
    futureTrigger = futureTrigger[siblingProp];
  }

  if (futureTrigger) return futureTrigger as HTMLButtonElement;

  const triggerParent = currentTrigger.parentElement;

  if (triggerParent === null) return;

  futureTrigger =
    siblingProp === "nextElementSibling"
      ? triggerParent.firstElementChild
      : triggerParent.lastElementChild;

  while (futureTrigger.hasAttribute("disabled")) {
    futureTrigger = futureTrigger[siblingProp];
  }

  return futureTrigger;
};
</script>
<template>
  <button :data-trigger-value="tabKey" @click="onClick" @keydown="onPressArrow">
    {{ text }}
  </button>
</template>
