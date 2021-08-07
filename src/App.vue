<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <!--  :theme="darkTheme" -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld :userInfo="qwe" />

    <!-- <pre style="overflow: auto;">{{themeVars}}</pre> -->
    <Svg></Svg>
    <Note></Note>
    <ElButton>asdfas</ElButton>

    <n-global-style />
  </n-config-provider>
</template>
<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
export default defineComponent({
  name: "App"
})
</script>
<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle, useThemeVars } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import HelloWorld from './components/HelloWorld.vue'

import { Svg, Note } from '../lib/index'
import { ElButton } from 'element-plus'

/**
   * @type import('naive-ui').GlobalThemeOverrides
   */
const themeOverrides = {
  // common: {
  //   primaryColor: '#FF0000'
  // },
  Button: {
    textColor: '#FF0000',
  },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: '#FF0000'
  //     }
  //   }
  // }
  // ...
}


const themeVars = useThemeVars()
themeVars.value.fontSize = '12px'

type SCORE = {
  title: string,
  name: number
}

const score = reactive([]) as SCORE[]

score.push({
  title: '123',
  name: 23
})

provide('score', score)

// import {provideToast} from './plug/pi'

// const pii = () => {

// }
// provideToast(pii);


const qwe = {
  id: 123,
  age: 345
}

</script>

<style>
</style>
