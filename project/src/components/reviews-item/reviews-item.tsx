import React from 'react';
import {Review} from '../../types/types';
import {calcPercent} from '../../helpers';

function ReviewsItem ({comment, date, rating, user} : Review) {
  const month = new Date(date).toLocaleString('en-us', { month: 'short' });
  const year = new Date(date).getFullYear();

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
            <span style={{width: calcPercent(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{month} {year}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
