import * as Types from './../contants/Types';

const initialState = 0;

const SearchPrice = (state = initialState, action) => {
    switch(action.type){
        case Types.SEARCH_ONE:
            state = action.number
            return state
        default:
            return state
    }
}

export default SearchPrice;