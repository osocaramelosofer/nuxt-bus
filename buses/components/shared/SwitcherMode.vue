<script setup>
import {Sunny, Moon, MoonOutline} from '@vicons/ionicons5'

import {NSwitch, NIcon} from "naive-ui";

const isDark = useDark()
const toggleDark = useToggle(isDark)


const railStyle = ({focused,checked}) => {
  const style = {};
  if (checked) {
    style.background = "rgba(77,77,77,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 2px #d0e3e3e3";
    }
  } else {
    style.background = "rgba(222,222,222,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 2px #696969CC";
    }
  }
  return style
}

</script>

<template>
  <n-switch @update:value="toggleDark" size="large" :rail-style="railStyle">
    <template #checked-icon>
      <n-icon :component="MoonOutline"/>
    </template>
    <template #unchecked-icon>
      <n-icon :component="Sunny"/>
    </template>
  </n-switch>
</template>