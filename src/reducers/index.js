import { combineReducers } from "redux"

export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USERS_LIST': {
            return { ...state, list: action.payload }
        }
        case 'INTERESTS_LIST':{
            return {...state,userInterests:action.payload}
        }
        default: {
            return state
        }
    }
}

const rootReducer = combineReducers({
    users: usersReducer
})
export default rootReducer