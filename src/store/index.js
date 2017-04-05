/**
 *   URL:
 *   说明:
 *   负责人: kelen
 *   日期:  2/28 0028.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/home/menus'
import carousel from './modules/home/carousel'
import mustGet from './modules/home/mustGet'
import kuwan from './modules/home/kuwan'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    userInfo: {}
}

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        menus,
        carousel,
        mustGet,
        kuwan
    },
})
