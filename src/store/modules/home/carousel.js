/**
 * Created by kelen on 2017/2/28.
 */
import menu from '../../../api/homeCarousel'

const state = {
    carousels: []
}

const getters = {
    carousels: state => state.carousels
}

const actions = {
    getCarousel ({commit}) {
        menu.getCarousels( carousels => {
            commit("getCarousel", { carousels })
        })
    }
}

const mutations = {
    ["getCarousel"] (state, { carousels }) {
        state.carousels = carousels
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}