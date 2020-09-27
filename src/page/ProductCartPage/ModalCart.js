import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add_customer_dispatch } from '../../actions';
import * as message from './../../contants/Message';
import { changeMessagePay_Dispatch } from '../../actions/mesage';
import { axios_API_clear_dispatch } from '../../actions';

const ModalCart = props => {

    const { add_customer, products, payProduct, clearCard } = props;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState('');

    const Save = () => {
        if (products.length > 0) {
            if (name && phone && mail) {
                const customer = {
                    name: name,
                    phone: parseInt(phone),
                    mail: mail
                }
                add_customer(customer);
                payProduct(message.MESSAGE_PAY);
                clearCard();
            }
        }
    }

    return (
        <>
            <div className="modal fade" id="modal-id">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Thông tin khách hàng</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Tên Khách Hàng: </label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="hãy nhập tên của bạn ..." />
                                {name ? '' : <label className='text-danger'>Bạn không được bỏ trống tên ...</label>}
                            </div>
                            <div className="form-group">
                                <label>Số Điện Thoại: </label>
                                <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="hãy nhập số điện thoại của bạn ..." />
                                {phone ? '' : <label className='text-danger'>Bạn không được bỏ trống số điện thoại ...</label>}
                            </div>
                            <div className="form-group">
                                <label>Gmail: </label>
                                <input type='text' className="form-control" onChange={(e) => setMail(e.target.value)} placeholder="hãy nhập mail của bạn ..." />
                                {mail ? '' : <label className='text-danger'>Bạn không được bỏ trống mail ...</label>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-primary" data-dismiss={(name && phone && mail) ? 'modal' : ''} onClick={() => Save()} >Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.CartProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        add_customer: customer => {
            dispatch(add_customer_dispatch(customer))
        },
        payProduct: message => {
            dispatch(changeMessagePay_Dispatch(message))
        },
        clearCard: () => {
            dispatch(axios_API_clear_dispatch())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);