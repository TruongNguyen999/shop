import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fillter_Name_dispatch, search_Price_dispatch } from './../../actions/index';
import { seemore_dispatch } from './../../actions/index';

const MessageType = props => {

    const { search_Price, seemore, onShowProduct } = props

    const [name, setName] = useState('')

    useEffect(() => {
        onShowProduct(name)
    },[onShowProduct, name])

    const onShowPrice = number => {
        search_Price(number)
        seemore(4)
    }

    return (
        <div className="container-fluid padding">
            <div className="col-12 padding message-lable">
                <span className="label label-danger col-md-3">Danh Sách Các Sản Phẩm</span>
                <div className="input-group col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bạn tìm gì ...."
                        name="keywork"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <span className='col-md-3'>
                    <button className='btn btn-outline-success' onClick={() => onShowPrice(1)}>Giá: Từ 100 $ - Đến 500 $</button>
                </span>
                <span className='col-md-3'>
                    <button className='btn btn-outline-info' onClick={() => onShowPrice(2)}>Giá: Từ 500 $ - Đến Trên 1000 $</button>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        search_Price: number => {
            dispatch(search_Price_dispatch(number))
        },
        seemore: number => {
            dispatch(seemore_dispatch(number))
        },
        onShowProduct: name => {
            dispatch(fillter_Name_dispatch(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageType);