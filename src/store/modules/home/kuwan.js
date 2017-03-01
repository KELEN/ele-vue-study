import kuwanService from '../../../api/kuwan'

const state = {
    kuwan: []
}

const getters = {
    kuwan: (state) => state.kuwan
}

const actions = {
    getKuwan ({commit}) {
        kuwanService.getList(list => {
            commit('KuwanList', list)
        })
    }
}

const mutations = {
    ['KuwanList'] (state, list) {
        state.kuwan = list;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}