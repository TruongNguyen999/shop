import React from 'react';

const ProductRalatedItem = props => {

    const { e } = props

    const onShowRatting = ratting => {
        let result = []
        if (ratting > 0) {
            for (let i = 0; i < ratting; i++) {
                result.push(<i key={i} className='fa fa-star'></i>)
            }
            for (let j = 0; j < (5 - ratting); j++) {
                result.push(<i className='fa fa-star-o' key={j + 5}></i>)
            }
        }
        return result
    }

    return (
        <>
            <div className="col-md-3">
                <div className="card text-center">
                    <div className="card-img">
                        <a href>
                            <img
                                src={e.product.images}
                                alt={e.product.name}
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="card-body text-center">
                        <h6 className="card-title">{e.product.name}</h6>
                        <p>Giá: {e.product.price} $</p>
                        <ul className="rating">
                            <li>
                                {onShowRatting(e.product.ratting)}
                            </li>
                        </ul>
                        <a
                            href
                            // onClick={() => onAddToCart(product)}
                            className="btn btn-ounline-primary">
                            <i className="fa fa-shopping-cart"></i> Mua
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductRalatedItem;