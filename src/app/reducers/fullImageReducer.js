const fullImageReducer = (state = {
    url: null,
}, action) => {
    switch (action.type) {
        case "SHOW_IMAGE":
            state = {
                ...state,
              url: action.payload,
            };
            break;
        case "HIDE_IMAGE":
            state = {
                ...state,
              url: null,
            };
            break;
    }
    return state;
};

module.exports = fullImageReducer;
