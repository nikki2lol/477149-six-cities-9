import React, {FormEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NewReview} from '../../types/types';
import {addReviewAction} from '../../store/api-action';

function FormReviews () {
  const dispatch = useAppDispatch();
  const {room} = useAppSelector(({OFFER})=> OFFER);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const [formData, setFormData] = useState<NewReview>({
    roomId: room.id,
    comment: '',
    rating: 0,
  });

  const onChangeHandler = (evt : {target :  { name: string, value: string }}) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value,
    });
    setIsButtonDisabled(!(formData.comment.length >= 50 && formData.rating !== 0));
  };

  const onSubmit = (newReview: NewReview) => {
    dispatch(addReviewAction(newReview));
  };

  const handleSubmitClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const { roomId, comment, rating } = formData;

    if (rating !== 0 && comment !== '' && roomId !== null) {
      onSubmit({
        roomId: room.id,
        comment,
        rating,
      });
    }
    setFormData({ roomId: null,  comment: '', rating: 0 });
  };

  useEffect(()=>{
    formData.rating === 0 || formData.comment.length <= 50 || formData.roomId === null ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [formData]);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={onChangeHandler}
          checked={formData.rating === 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={onChangeHandler}
          checked={formData.rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={onChangeHandler}
          checked={formData.rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={onChangeHandler}
          checked={formData.rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={onChangeHandler}
          checked={formData.rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onChangeHandler}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          onClick={handleSubmitClick}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormReviews;
