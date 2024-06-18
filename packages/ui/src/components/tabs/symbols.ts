import type { InjectionKey, Ref } from "vue";

type TabKey = number | string;
type SetSelectedKey = (key: TabKey) => void;

type TabsProvide = {
  selectedKey: Ref<TabKey>;
  setSelectedKey: SetSelectedKey;
};

export const tabsKey: InjectionKey<TabsProvide> = Symbol("tabs-key");
