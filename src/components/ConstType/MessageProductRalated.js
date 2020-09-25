import React from 'react';
import { Link } from 'react-router-dom';

const MessageProductRalated = props => {
    return (
        <div className="container-fluid padding">
            <div className="col-12 padding message-lable">
                <span className="label label-danger col-md-3">Danh Sách Sản Phẩm Liên Quan</span>
                <div className="input-group col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bạn tìm gì ...."
                        name="keywork"
                    />
                </div>
                <span className='col-md-2'>
                    <Link to='/product-cart' className='btn btn-outline-dark mb-5-meg line-height-10 text-white h-75'><i className="fa fa-shopping-cart mr-2 text-white" aria-hidden="true"></i>Giỏ hàng</Link>
                </span>
                <span className='col-md-2'>
                    <button className='btn btn-outline-success'>Giá: {'<='} 500 $</button>   
                </span>
                <span className='col-md-2'>
                    <button className='btn btn-outline-info'>Giá: {'>='} 500 $</button>   
                </span>
            </div>
        </div>
    );
}

export default MessageProductRalated;