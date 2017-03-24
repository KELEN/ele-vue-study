/**
 * Created by Administrator on 2017/3/24.
 */
import {
    GET_USERINFO
} from './mutations-types'

export default {
    // 第二个参数必须跟commit的一样
    [GET_USERINFO] (state, info) {
        state.userInfo = info
    }
}