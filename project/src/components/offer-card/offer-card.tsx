import React from 'react';
import {Offer} from '../../types/types';
import {AppRoute, OfferType, RATING_STEP} from '../../const';
import {Link} from 'react-router-dom';

type OfferCardProps = Offer & {
  offerListType: string;
}

function OfferCard ({previewImage, isFavorite, isPremium, price, title, rating, type, offerListType, ...props}  : OfferCardProps): JSX.Element {

  const calcRating = rating * RATING_STEP;
  const favButtonClasses = isFavorite ?
    'place-card__bookmark-button place-card__bookmark-button--active button' :
    'place-card__bookmark-button button';
  const placeCardClasses = offerListType === OfferType.Main ?
    'cities__place-card place-card' :
    `${offerListType}__card place-card`;

  const imageWrapperClasses = offerListType === OfferType.Main ?
    'cities__image-wrapper place-card__image-wrapper' :
    `${offerListType}__image-wrapper place-card__image-wrapper`;

  const placeCardInfoClasses = offerListType === OfferType.Fav ?
    `${offerListType}__card-info place-card__info` :
    'place-card__info';


  return (
    <article className={placeCardClasses}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={imageWrapperClasses}>
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className={placeCardInfoClasses}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favButtonClasses} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calcRating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
