import * as Types from './../contants/Types';

const initialState = [];

const Menus = (state = initialState, action) => {
    switch(action.type){
        case Types.AXIOS_API_MENUS:
            state = action.menus
            return [...state];
        default:
            return [...state];
    }
}

export default Menus;