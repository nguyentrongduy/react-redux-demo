import {ActionTypes} from '../constants/ActionTypes';

export function ToggleIsAdding() {
    return {
        type: ActionTypes.IS_ADDING
    }
}

export function AddItemToList(value) {
    return {
        type: ActionTypes.ADD_ITEM,
        value
    }
}

export function RemoveItemInList(index) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        index
    }
}