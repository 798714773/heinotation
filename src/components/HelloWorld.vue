<template>
  <h1>{{ msg }}</h1>

  <n-button @click="count++">naive-ui</n-button>
  <n-button @click="asd">naive-ui</n-button>

  {{ count }}
  <!-- <MyIcon /> -->
</template>

<script lang="ts">
</script>
<script lang="ts" setup>
import { inject, defineProps, ref, computed, getCurrentInstance } from "vue"

// import type { PropType } from "vue";
import type { ComponentInternalInstance } from "vue";

import { NButton } from 'naive-ui'

// import MyIcon from '../svg-icon/flat.svg'


interface UserInfo {
  id: number
  age: number
}

const props = defineProps<{
  msg?: string
  userInfo: UserInfo
}>()



const count = ref(0)

type SCORE = {
  title: string,
  name: number
}

const score = inject('score') as SCORE[]


const asd = (): void => {
  score[0].name = 234566
}


type MsgInfo = {
  value: string
}

//indexeddb
// const indexedDB = window.indexedDB.open("score", 3)

// indexedDB.onupgradeneeded = ()=>{
//   console.log('执行了onupgradeneeded');
//   console.log(indexedDB.result);
// }

//使用插件
// const { globalProperties } = (getCurrentInstance() as ComponentInternalInstance).appContext.config
// globalProperties.$abc('123')


//使用插件
// import {useToast} from '../plug/pi'
// const Toast:any = useToast(); // 所有的子组件都要从useToast拿到toast方法
// Toast()


</script>

<style scoped>
</style>
