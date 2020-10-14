import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get_user_dispatch } from '../../actions';

const Login = props => {

    const [userName, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [checkUser, setCheckUser] = useState(false);
    const [checkPass, setCheckPass] = useState(false);
    const [login, setLogin] = useState(true);


    const { getUser, users, history } = props;

    useEffect(() => {
        getUser();
    }, [getUser])

    const onLogin = e => {
        e.preventDefault();
        if (checkUser && checkPass) {
            history.push({pathname: '/Admin', name: `${userName}`});
            sessionStorage.setItem('user',JSON.stringify(userName));
        }
        setLogin(false);
    }

    const checkuser = name => {
        return users.map(user => user.userName === name ? setCheckUser(true) : setCheckUser(false))
    }

    const checkpass = pass => {
        return users.map(user => user.passWord === pass ? setCheckPass(true) : setCheckPass(false))
    }
    return (
        <>
            <div className='login'>
                <img src="https://meowwoof.vn/pub/media/wysiwyg/MWPOSTPIC/ThuCung/cat.jpg" className="img-fluid" alt="" />
                <div>
                    <h2 className='text-center mt-2'>LOGIN</h2>
                    <hr className='my-2' />
                    <form onSubmit={(e) => onLogin(e)}>
                        <p className='ml-4'>Tên Đăng Nhập</p>
                        <input type="text" className="form-control mb-2" onChange={(e) => { checkuser(e.target.value); setUsername(e.target.value) }} />
                        {!userName ? <h6 className='text-danger ml-4'>Bạn không được bỏ trống!</h6> : ''}
                        <p className='ml-4'>Mật Khẩu</p>
                        <input type="password" className="form-control mb-2" onChange={(e) => { checkpass(e.target.value); setPassword(e.target.value) }} />
                        {!passWord ? <h6 className='text-danger ml-4'>Bạn không được bỏ trống!</h6> : ''}
                        <hr className='my-3' width='85%' />
                        <button type="submit" className="btn btn-outline-primary mb-4">Login</button>
                        {!login ? <h6 className='text-danger ml-4'>Đăng nhập không thành công!</h6> : ''}
                    </form>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        users: state.Users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getUser: () => {
            dispatch(get_user_dispatch());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);