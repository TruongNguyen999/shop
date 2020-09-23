import * as Types from './../contants/Types';

const initialState = 4;

const SeeMore = (state = initialState, action) => {
    switch(action.type){
        case Types.SEEMORE:
            state += action.number  
            return state
        default:
            return state
    }
}

export default SeeMore;