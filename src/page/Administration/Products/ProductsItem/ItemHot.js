import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 90px;
    height: 100px
`;

const ItemHot = props => {

    const { product, index } = props;

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <Img src={product.product_hot.images} alt={product.product_hot.name} />
                </td>
                <td>{product.product_hot.price} $</td>
                <td>{product.quantity}</td>
                <td>
                    <button type="button" className="btn btn-primary mr-2">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        </>
    );
}

export default ItemHot;