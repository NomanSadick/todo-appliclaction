
import {ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED,} from "./actionTypes"
import initialState from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) =>Math.max(todo.id,maxId), -1)
    return maxId + 1;
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case TOGGLED:
            return [
                ...state,
                {
                    id:nextTodoId(state)
                }
            ]

        case TOGGLED:
            return state.map(todo => {
                if(todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })

            case COLORSELECTED:
                const {todoID, color} = action.payload;
                return state.map(todo => {
                    if(todo.id !== todoID) {
                        return todo;
                    }
                    return {
                        ...todo,
                        color: color
                    }
                })

                case DELETED:
                    return state.filter(todo => todo.id !== action.payload);

                case ALLCOMPLETED:
                    return state.map(todo => {
                        return {
                            ...todo,
                            completed: true
                        }
                    })

                case CLEARCOMPLETED:
                    return state.filter(todo => !todo.completed);
                         
        default:
            return state;
    }
} 

export default reducer;