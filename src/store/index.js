/**
 *   URL:
 *   说明:
 *   负责人: kelen
 *   日期:  2/28 0028.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/menus'
import carousel from './modules/carousel'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menus,
        carousel
    },
})
