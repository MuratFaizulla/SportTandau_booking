import React from 'react';
import './FieldCard.css';
import StarRating from '../StarRatingSystem';
import { Link } from 'react-router-dom';
import { RESERVATION_PAGE_ROUTE } from '../../utils/consts';

const FieldItem = ({ post }) => {
    if (!post) {
        return null;
    }

    return (
        <div className="FieldCard">
            <div className="Field_img">
                <img className='Field-img' src={post.photos[0]} alt="VOLTA Arena" />
            </div>
            <div className="Field_body">
                <h3 className="Field_title" key={post._id}>{post.name}</h3>
                <p className="Field_address">{post.address}</p>
                <div className='Field_service'>
                    <p> Возможна частичная предоплата </p>
                    <p>{post.type}</p>
                </div>
                <p className="Field_price">{post.price} т час</p>
                <Link to={RESERVATION_PAGE_ROUTE.substring(0, RESERVATION_PAGE_ROUTE.length - 3) + post._id}>
                    <button className="Field_button">Забронировать</button>
                </Link>
                <div className="Field_rating"><StarRating /></div>
            </div>
        </div>
    );
};

export default FieldItem;
