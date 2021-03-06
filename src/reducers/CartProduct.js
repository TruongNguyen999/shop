import * as Types from './../contants/Types';

const card = JSON.parse(localStorage.getItem('card'));
const initialState = card ? card : [];

const findIndex = (state, id) => {
    let result
    state.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result;
}

const CartProduct = (state = initialState, action) => {
    let index
    switch (action.type) {
        case Types.ADD_PRODUCT:
            const { id } = action.product
            const result = state.find(cart => {
                return cart.id === id
            });
            if (result) {
                index = findIndex(state, id);
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity + 1
                }
            } else {
                state.push(action.product);
            }
            localStorage.setItem('card', JSON.stringify(state));
            return [...state]
        case Types.AXIOS_API_DELETE_PRODUCT:
            index = findIndex(state, action.id)
            state.splice(index, 1)
            localStorage.setItem('card', JSON.stringify(state));
            return [...state]
        case Types.AXIOS_API_UPDATE_PRODUCT_CARD:
            index = findIndex(state, action.id)
            state[index] = {
                ...state[index],
                quantity: action.quantity
            }
            localStorage.setItem('card', JSON.stringify(state));
            return [...state]
        case Types.AXIOS_API_CLEAR_CARD:
            state = []
            localStorage.setItem('card', JSON.stringify(state));
            return [...state]
        default:
            return [...state]
    }
}

export default CartProduct;