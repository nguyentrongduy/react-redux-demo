const IsAddItemReducer = (state = false, action) => {
    switch (action.type){
        case 'IS_ADDING':
            return !state;
        default:
            return state;
    }
};

module.exports = IsAddItemReducer;