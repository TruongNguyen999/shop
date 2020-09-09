import * as Types from './../contants/Types';
import callApi from '../utils/apiCallers';

// featch products
export const axios_API = product => {
    return {
        type: Types.AXIOS_API,
        product
    }
}

export const axios_API_dispatch = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(axios_API(res.data))
        })
    }
}
// featch menus
export const axios_API_menus = menus => {
    return {
        type: Types.AXIOS_API_MENUS,
        menus
    }
}

export const axios_API_dispatch_menus = () => {
    return dispatch => {
        return callApi('menus', 'GET', null).then(res => {
            dispatch(axios_API_menus(res.data))
        })
    }
}

// add card product
export const Product_Cart = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const Product_Cart_dispatch = product => {
    return dispatch => {
        dispatch(Product_Cart(product))
    }
}

// featch footer
export const axios_API_footer = footer => {
    return {
        type: Types.AXIOS_API_FOOTER,
        footer
    }
}

export const axios_API_dispatch_footer = () => {
    return dispatch => {
        return callApi('footer', 'GET', null).then(res => {
            dispatch(axios_API_footer(res.data))
        })
    }
}

// fetch product hot
export const axios_API_product_hot = product => {
    return {
        type: Types.AXIOS_API_PRODUCT_HOT,
        product
    }
}

export const axios_API_dispatch_product_hot = () => {
    return dispatch => {
        return callApi('product_hot', 'GET', null).then(res => {
            dispatch(axios_API_product_hot(res.data))
        })
    }
}

// fetch product discount
export const axios_API_product_discount = product => {
    return {
        type: Types.AXIOS_API_PRODUCT_DISCOUNT,
        product
    }
}

export const axios_API_dispatch_product_discount = () => {
    return dispatch => {
        return callApi('product_discount', 'GET', null).then(res => {
            dispatch(axios_API_product_discount(res.data))
        })
    }
}

// delete product
export const axios_API_delete_product = id => {
    return {
        type: Types.AXIOS_API_DELETE_PRODUCT,
        id
    }
}

export const axios_API_dispatch_product_delete = product => {
    return dispatch => {
        dispatch(axios_API_delete_product(product.id))
    }
}

// update product
export const axios_API_update_product_card = (id, quantity) => {
    return {
        type: Types.AXIOS_API_UPDATE_PRODUCT_CARD,
        id,
        quantity
    }
}

export const axios_API_disptch_update_product_card = (product, quantity) => {
    return dispatch => {
        dispatch(axios_API_update_product_card(product.id, quantity))
    }
}