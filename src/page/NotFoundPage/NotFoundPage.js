import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="container-fluid padding">
            <div className="row text-center">
                <div class="col-md-12 col-lg-12">
                    <h1 className='title text-center text-danger'> Rất tiết! không tìm thấy trang </h1>
                <hr className='my-2' width='85%' />
                </div>
                {/* #efe4ef */}
                <span className='col-2'></span>
                <div className="alert alert-warning col-md-8 col-lg-8">
                    <strong>Bạn có thể nhập từ khóa tìm kiếm ở đây ...</strong>
                </div>
                <span className='col-2'></span>
                <span className='col-3'></span>
                <div className="form-group col-md-6 col-lg-6 d-flex">
                    <input type="text" className="form-control" id="" placeholder="nhập từ khóa tìm kiếm ..." />
                    <button className='btn btn-primary'>Tìm kiếm</button>
                </div>
                <span className='col-3'></span>
                <h6 className='col-md-12 text-primary'>Nếu các bạn cần hổ trợ liên hệ số điện thoại: 0965423015. Chân thành cảm ơn!</h6>
                <hr />
            </div>
        </div>
    );
}

export default NotFoundPage;