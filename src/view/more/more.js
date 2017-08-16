

import Vue from 'vue'
import More from './more.vue'

import '@/assets/sprites/sprite.css'

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    template: '<More/>',
    components: { More }
})
