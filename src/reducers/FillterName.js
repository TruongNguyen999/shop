import * as Types from './../contants/Types';

const initialState = {
    name: ''
}

const FillterName = (state = initialState, action) => {
    switch(action.type){
        case Types.FILLTER_NAME:
            state = {
                name: action.name
            }
            return {...state}
        default:
            return {...state}
    }
}

export default FillterName;