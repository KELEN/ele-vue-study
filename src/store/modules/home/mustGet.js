import homeMustGetApi from '../../../api/homeMustGet'

const state = {
    mustGetList: []
}

const getters = {
    mustGetList: state => state.mustGetList
}

const actions = {
    GetMustGetList ({commit}) {
        homeMustGetApi.getList(list => {
            commit('MustGetList', { list });
        })
    }
}

const mutations = {
    ['MustGetList'] (state, { list }) {
        state.mustGetList = list;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}

