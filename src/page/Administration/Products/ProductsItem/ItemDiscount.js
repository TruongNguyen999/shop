import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 90px;
    height: 100px
`;

const ItemDiscount = props => {

    const { product, index } = props;

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <Img src={product.product_discount.images} alt={product.product_discount.name} />
                </td>
                <td>{product.product_discount.price} $</td>
                <td>{product.quantity}</td>
                <td>
                    <button type="button" className="btn btn-primary mr-2">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        </>
    );
}

export default ItemDiscount;