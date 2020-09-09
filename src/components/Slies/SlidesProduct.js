import React from 'react';

const SlidesProduct = () => {
    return (
        <div className="container-fluid text-center">
            <div id="myCarousel" className="carousel slide carousel-product" data-ride="carousel">
                <ol className="carousel-indicators slides-product">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>

                </ol>
                <div className="carousel-inner carousel-inner-product" role="listbox">
                    <div className="carousel-item active">
                        {/* style="padding-left: 18px;" */}
                        <div className="span4">
                            <img src="https://didongviet.vn/pub/media/catalog/product//n/o/note-10-lite_1.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/183657/oppo-a3s-red-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="span4">
                            <img src="https://didongviet.vn/pub/media/catalog/product//n/o/note-10-lite_1.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://didongviet.vn/pub/media/catalog/product//n/o/note-10-lite_1.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/183657/oppo-a3s-red-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="span4">
                            <img src="https://didongviet.vn/pub/media/catalog/product//s/a/samsung-note-10-plus.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://dienmaycholon.vn/public/picture/product/product14018/product_14018_1.png" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://didongviet.vn/pub/media/catalog/product//s/a/samsung-note-10-plus.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://didongviet.vn/pub/media/catalog/product//s/a/samsung-note-10-plus.jpg" alt='' className="img-thumbnail img-fluid-product" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="span4">
                        <img src="https://didongviet.vn/pub/media/catalog/product//n/o/note-10-lite_1.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://didongviet.vn/pub/media/catalog/product//n/o/note-10-lite_1.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                            <img src="https://cdn.tgdd.vn/Products/Images/42/183657/oppo-a3s-red-600x600.jpg" alt='' className="img-thumbnail img-fluid-product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlidesProduct;