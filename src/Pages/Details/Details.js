import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {

    const { id } = useParams();

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Sharif33/simple-e-commerce/main/public/pharmacare.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const findFoods = foods.find(food => food.id == id)



    return (
        <div>

            <div className='container py-5 my-5'>
                <div className="row shadow">
                    <div className="col-md-6 border border-warning shadow text-center">
                        <h2 className='mt-5'>{findFoods?.title}</h2>
                        <img className='img-fluid' src={findFoods?.image} alt="" />
                    </div>
                    <div className="col-md-6 border p-4">
                        <div className="">
                            <h5 className='text-secondary'><small className="fw-bold text-secondary"><span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span>
                            </small>  <span> ({findFoods?.rating} customer review this)</span></h5>


                        </div>
                        <h2 className="text-info fw-bold py-3">${findFoods?.price}</h2>
                        <p>{findFoods?.title} {findFoods?.description}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success p-3 fs-5" title="Add to cart"><i className="fas fa-cart-plus"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;