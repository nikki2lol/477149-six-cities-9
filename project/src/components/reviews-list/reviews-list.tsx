import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Reviews} from '../../types/types';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList ({reviews} : ReviewsListProps) {

  return (
    <ul className="reviews__list">
      {reviews.map((review, index)=><ReviewsItem key={`review-${index+1}`} {...review}/>)}
    </ul>
  );
}

export default ReviewsList;
