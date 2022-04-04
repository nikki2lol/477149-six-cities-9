import React, {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import ReviewsList from '../reviews-list/reviews-list';
import FormReviews from '../form-reviews/form-reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {AppRoute, AuthorizationStatus, OfferType} from '../../const';
import {useNavigate, useParams} from 'react-router-dom';
import {dispatchOfferData} from '../../utils';
import RoomGallery from '../room-gallery/room-gallery';
import clsx from 'clsx';
import {setFavoritesAction} from '../../store/api-action';
import {loadOffer} from '../../store/offer-process/offer-process';
import {setCurrentOffers} from '../../store/data-process/data-process';
import {store} from '../../store';
import {calcPercent} from '../../helpers';

function RoomMain () {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {offers} = useAppSelector(({DATA}) => DATA);
  const {authorizationStatus} = useAppSelector(({ USER }) => USER);
  const {room, reviews, offersNearby} = useAppSelector(({OFFER})=> OFFER);

  const { id, isPremium, isFavorite, price, rating,
    title, type, images, bedrooms, maxAdults,
    goods, host, description } = room;

  if (!offers.find((offer) => offer.id === Number(params.id))) {
    navigate(AppRoute.NotFound);
  } else if (room.id !== Number(params.id)) {
    dispatchOfferData(Number(params.id));
  }

  const onFavClick = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    store.dispatch(setFavoritesAction({ ...room, id, isFavorite: !isFavorite }));
    dispatch(setCurrentOffers());
    dispatch(loadOffer({ ...room, isFavorite: !isFavorite }));
  };

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <RoomGallery images={images}/>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <div className="property__mark"><span>Premium</span></div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button
                onClick={onFavClick}
                className={clsx('property__bookmark-button', 'button', isFavorite && 'property__bookmark-button--active')}
                type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: calcPercent(rating)}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good, index) => {
                  const keyValue = `${index}_${good}`;
                  return (
                    <li key={keyValue} className="property__inside-item">
                      {good}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={clsx('property__avatar-wrapper', host.isPro && 'property__avatar-wrapper--pro', 'user__avatar-wrapper')}>
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                <span className="property__user-status">
                  {host.isPro && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot;
                <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews} />
              {authorizationStatus === AuthorizationStatus.Auth && <FormReviews />}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={offers}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList offers={offersNearby} offerListType={OfferType.Nearest}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomMain;
