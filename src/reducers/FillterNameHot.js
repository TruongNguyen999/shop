import * as Types from './../contants/Types';

const initialState = {
    name: ''
}

const FillterNameHot = (state = initialState, action) => {
    switch(action.type){
        case Types.FILLTER_NAME_HOT:
            state = {
                name: action.name
            }
            return {...state}
        default:
            return {...state};
    }
}

export default FillterNameHot;