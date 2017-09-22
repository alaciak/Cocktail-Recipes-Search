const recipesListReducer = (state = {
    cocktailList: [],
    loading: true
}, action) => {
    switch (action.type) {
        case "CHANGE_QUERY_FULFILLED":
            state = {
                ...state,
              cocktailList: action.payload,
              loading: false
            };
            break;
    }
    return state;
};

module.exports = recipesListReducer;
