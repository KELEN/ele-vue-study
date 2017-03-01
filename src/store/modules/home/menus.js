/**
 * Created by kelen on 2017/2/28.
 */
import menu from '../../../api/homeMenu'

const state = {
    menus: []
}

const getters = {
    menus: state => state.menus
}

const actions = {
    getMenus ({commit}) {
        menu.getMenus(m => {
            commit("GetHomeMenu", { m })
        })
    }
}

const mutations = {
    // 第二个参数必须跟commit的一样
    ["GetHomeMenu"] (state, { m }) {
        state.menus = m
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}