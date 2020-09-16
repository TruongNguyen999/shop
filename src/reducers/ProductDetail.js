import * as Types from './../contants/Types';

const initialState = {}

const ProductDetail = (state = initialState, action) => {
    switch(action.type){
        case Types.AXIOS_API_SET_PRODUCT_DETAIL:
            state = action.product
            return {...state}
        default:
            return {...state}
    }
}
export default ProductDetail