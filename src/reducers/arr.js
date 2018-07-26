let defaultState = { arr: [], isAdding: false};

const arrReducer = (state = defaultState.arr, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return [...state, action.value];
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i !== action.index);
        default:
            return state;
    }
};

module.exports = arrReducer;