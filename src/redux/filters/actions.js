import {STATUSCHANGED, COLORCHANGED} from "./actionTypes"

export const statusChanged = (color, changeType) => {
     return {
         type: STATUSCHANGED,
         payload: {
             color,
             changeType
         }
     }
}

export const colorChanged = (status) => {
    return {
        type: COLORCHANGED,
        payload: status,
    }
}