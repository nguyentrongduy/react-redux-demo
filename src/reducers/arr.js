import {ActionTypes} from '../constants/ActionTypes';
let defaultState = { arr: [], isAdding: false};

export default function(state = defaultState.arr, action) {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return [...state, action.value];
        case ActionTypes.REMOVE_ITEM:
            return state.filter((e, i) => i !== action.index);
        default:
            return state;
    }
};