<script setup>
import bienvenida from '@/assets/bienvenida.mp3'
import {useLoadingBar, NMenu, NLayout, NLayoutSider, NSwitch} from 'naive-ui'
import { NIcon } from 'naive-ui'
import { h, defineComponent, ref } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

const loadingBar = useLoadingBar()
const isDark = useDark()
const menuItems = ['boletos', 'buses', 'conductores', 'destinos', 'viajes']
let audio
const inverted = ref(false)

onMounted(async () => {
  audio = new Audio(bienvenida)
  try {
    await loadingBar.start()
    await setTimeout(() => {
      loadingBar.finish()
    }, 3000)

  } catch (error) {
    console.error(error)
  }
})

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const onPlay = () => {
  if (audio.readyState >= 2) {
    audio.play()
  }
}
const menuOptions = [
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical>

    <n-layout has-sider class="">
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          show-trigger
          :inverted="isDark"
          class="h-screen"
      >

        <SharedSwitcherMode/>
        <n-menu
            :inverted="isDark"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <div
            :class="[ isDark ? 'bg-dark' : 'father-container' ]"
            class="h-full"
        >
          <nav class="flex py-4 justify-between px-4 items-center">
            <div class="flex items-center">
              <picture
                  @click="onPlay"
                  class="logo-container cursor-pointer"
              >
                <img class="logo" src="@/assets/logo.png" alt="logo">
              </picture>
              <picture class="img-container">
                <img class="goomba-ico" src="@/assets/goomba.png" alt="goomba"/>
              </picture>
            </div>
            <div class="flex xl:gap-5">
              <nuxt-link :to="`/`" class=" dark:bg-black dark:text-white menu-item-font">Home</nuxt-link>
              <template v-for="(item,index) in menuItems" :key="index">
                <nuxt-link :to="`/${item}`"
                           class=" dark:bg-black dark:text-white menu-item-font"
                >
                  {{ item }}
                </nuxt-link>
              </template>
            </div>
            <div>
              <SharedSwitcherMode/>
            </div>
          </nav>
          <main class="dark:bg-dark xl:pt-10">
            <slot/>
          </main>
        </div>
      </n-layout>
    </n-layout>
  </n-space>


</template>

<style>
.bg-dark {
  background: rgba(28, 28, 28, 0.94);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.6px);
  -webkit-backdrop-filter: blur(15.6px);
}

.father-container {
  background-image: url("@/assets/busesbros.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

nav {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.34);
  /*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);*/
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  -webkit-box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 15px 73px -17px rgba(0, 0, 0, 0.57);
}

.img-container {
  width: 60px;
  height: 60px;
  display: block;

}

.goomba-ico {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-container {
  width: 180px;
  height: 60px;
  display: block;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.menu-item-font {
  font-family: 'Paytone One', sans-serif;
  font-size: 1.2rem;
}
</style>