/**
 * Created by Administrator on 2017/3/24.
 */
import {
    GET_USERINFO,
    SET_USERINFO,
    LOGOUT
} from './mutations-types'

export default {
    // 第二个参数必须跟commit的一样
    [GET_USERINFO] (state, info) {
        state.userInfo = info
    },
    [SET_USERINFO] (state, userInfo) {
        state.userInfo = userInfo
    },
    [LOGOUT] (state) {
        state.userInfo = {}
    }
}