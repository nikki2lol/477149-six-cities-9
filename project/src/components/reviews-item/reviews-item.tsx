import React from 'react';
import {Review} from '../../types/types';
import {RATING_STEP} from '../../const';

function ReviewsItem ({comment, date, id, rating, user, ...props} : Review) {
  const calcRating = rating * RATING_STEP;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name}/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calcRating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building
          is green and from 18th century.
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
