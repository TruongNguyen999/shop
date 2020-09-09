import * as Types from './../contants/Types';

const initialState = [];

const Products = (state = initialState, action) => {
    switch(action.type){
        case Types.AXIOS_API:
            state = action.product;
            return [...state];
        default:
            return [...state];
    }
}

export default Products;