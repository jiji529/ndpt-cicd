import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import NdptKR from '../components/NdptKR.vue'
import NdptEN from '../components/NdptEN.vue'

// 라우터 설계
const routes = [
    { path: '/', component:NdptKR},
    { path: '/en', component:NdptEN},
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}