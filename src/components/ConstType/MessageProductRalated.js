import React from 'react';

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
                <span className='col-md-3'>
                    <button className='btn btn-outline-success'>Giá: Từ 100 $ - Đến 500 $</button>   
                </span>
                <span className='col-md-3'>
                    <button className='btn btn-outline-info'>Giá: Từ 500 $ - Đến Trên 1000 $</button>   
                </span>
            </div>
        </div>
    );
}

export default MessageProductRalated;