import React from 'react';

const Slies = () => {
    return (
        <div className="container-fluid">
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1" className=""></li>
                    <li data-target="#slides" data-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/216174/Slider/vi-vn-samsung-galaxy-a31.jpg"
                            alt="Samsung Galaxy" />
                        <div className="container">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://image.winudf.com/v2/image1/Y29tLmFwcHlidWlsZGVyLmx1cW1hbjI3Mzkub3Bwb2Ezc19zY3JlZW5fMF8xNTQxMjc2MDUxXzAyMA/screen-0.jpg?fakeurl=1&type=.jpg"
                            alt="Samsung Galaxy S10" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/2RC0OsX2td4/maxresdefault.jpg"
                            alt="OPPO A3s" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slies;