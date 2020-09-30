import React from 'react';

const Login = props => {
    return (
        <>
            <div className='login'>
                <img src="https://meowwoof.vn/pub/media/wysiwyg/MWPOSTPIC/ThuCung/cat.jpg" class="img-fluid" alt="" />
                <div>
                    <h2 className='text-center mt-2'>LOGIN</h2>
                    <hr className='my-4' />
                    <form>
                        <label className='ml-4'>Tên Đăng Nhập</label>
                        <input type="text" className="form-control mb-4" />
                        <label className='ml-4'>Mật Khẩu</label>
                        <input type="text" className="form-control mb-4" />
                        <hr className='my-4' width='85%' />
                        <button type="submit" className="btn btn-outline-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;