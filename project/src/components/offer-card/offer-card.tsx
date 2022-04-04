import React, {MouseEvent, useState} from 'react';
import {Offer} from '../../types/types';
import {AppRoute, AuthorizationStatus, OfferType} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {calcPercent} from '../../helpers';
import {store} from '../../store';
import {setFavoritesAction} from '../../store/api-action';
import {setCurrentOffers} from '../../store/data-process/data-process';
import {useAppDispatch, useAppSelector} from '../../hooks';

type OfferCardProps = Offer & {
  offerListType: string;
  onItemHover?: (value: number) => void;
}

function OfferCard ({id, previewImage, isFavorite, isPremium, price, title, rating, type, offerListType, onItemHover}  : OfferCardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {authorizationStatus} = useAppSelector(({ USER }) => USER);
  const {room} = useAppSelector(({OFFER})=> OFFER);
  const [isFavoriteCard, setIsFavoriteCard] = useState<boolean>(isFavorite);

  const imgSize = {
    width: offerListType === OfferType.Fav ? '150' : '260',
    height: offerListType === OfferType.Fav ? '110' : '200',
  };

  const handleMouseOver = (i: number) => () => {
    if (onItemHover) {
      onItemHover(i);
    }
  };

  const onFavClick = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    setIsFavoriteCard(!isFavoriteCard);
    store.dispatch(setFavoritesAction({ ...room, id, isFavorite: !isFavorite }));
    dispatch(setCurrentOffers());
  };

  const favButtonClasses = isFavoriteCard ?
    'place-card__bookmark-button place-card__bookmark-button--active button' :
    'place-card__bookmark-button button';
  const placeCardClasses = offerListType === OfferType.City ?
    'cities__place-card place-card' :
    `${offerListType}__card place-card`;
  const imageWrapperClasses = offerListType === OfferType.City ?
    'cities__image-wrapper place-card__image-wrapper' :
    `${offerListType}__image-wrapper place-card__image-wrapper`;
  const placeCardInfoClasses = offerListType === OfferType.Fav ?
    `${offerListType}__card-info place-card__info` :
    'place-card__info';


  return (
    <article className={placeCardClasses} onMouseOver={handleMouseOver(id)}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={imageWrapperClasses}>
        <Link to={`${AppRoute.Room}${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgSize.width}
            height={imgSize.height}
            alt={title}
          />
        </Link>
      </div>
      <div className={placeCardInfoClasses}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={onFavClick}
            className={favButtonClasses}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcPercent(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
