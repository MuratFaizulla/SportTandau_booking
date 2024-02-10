import React from 'react';
import './../assets/Lawncard.css';
import StarRating from './StarRatingSystem';

const LawncardItem = ({ post }) => {
  return (
    <div>
      <div className="card_destination_rome">
        <div className="image">
        <img className="img" src={post.imageUrl} alt="VOLTA Arena" />
        </div>

        <div className="content">
          <div className="destination_title">
            <p>VOLTA Arena (Универcальный спортзал)</p>
            <p className="destination_title_2">Казахстан,Астана,Пр.Кошкарбаева 56/2а</p>
          </div>
          <div className="destination_text">
            <p>18 000 т - 27 000 т час</p>
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
