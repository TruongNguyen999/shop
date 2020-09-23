import * as Types from './../contants/Types';

const initialState = {
    name: ''
}

const FillterNameDiscount = (state = initialState, action) => {
    switch(action.type){
        case Types.FILLTER_NAME_DISCOUNT:
            state = {
                name: action.name
            }
            return {...state};
        default:
            return {...state};
    }
}

export default FillterNameDiscount;