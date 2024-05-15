import React from 'react';
import './Lawncard.css';
import StarRating from '../StarRatingSystem';

const LawncardItem = ({ post }) => {
  return (
    <div>
      <div className="card_destination_rome">
        <div className="image">
        <img className="img" src={post.photos[0]} alt="VOLTA Arena" />
        </div>

        <div className="content">
          <div className="destination_title">
            <p>{post.name}</p>
            <p className="destination_title_2">{post.address}</p>
          </div>
          <div className="destination_text">
            <p>{post.price} т час</p>
            <p>
              <StarRating />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawncardItem;
