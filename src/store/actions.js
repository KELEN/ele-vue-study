/**
 *   URL:
 *   说明:
 *   负责人: kelen
 *   日期:  2/28 0028.
 */
import {
    GET_USERINFO
} from './mutations-types'

export default {
    getUserInfo ({commit}) {
        commit(GET_USERINFO, {
            name: "kelen",
            age: 26
        })
    }
}