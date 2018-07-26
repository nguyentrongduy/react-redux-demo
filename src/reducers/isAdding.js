import {ActionTypes} from '../constants/ActionTypes';

export default function(state = false, action) {
    switch (action.type){
        case ActionTypes.IS_ADDING:
            return !state;
        default:
            return state;
    }
};