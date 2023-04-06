<script setup>
import {  Sunny, Moon } from '@vicons/ionicons5'

import {NSwitch, NIcon} from "naive-ui";
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <n-switch @update:value="toggleDark" size="large">
    <template #checked-icon>
      <n-icon :component="Moon" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="Sunny" />
    </template>
  </n-switch>
</template>