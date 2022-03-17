import { useState } from 'react';
import { SortingType } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSorting} from '../../store/action';
import clsx from 'clsx';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector((state) => state.sortingType);
  const types = Object.values(SortingType);

  const [ visible, setVisible ] = useState(false);
  const toggle = () => setVisible(!visible);
  const changeSortingType = (sortingType: string) => dispatch(changeSorting(sortingType));

  const typeClickHandler = (currentSortType : string) => {
    changeSortingType(currentSortType);
    toggle();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={toggle}
        className="places__sorting-type" tabIndex={0}
      >
        {currentType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={clsx('places__options', 'places__options--custom', visible && 'places__options--opened')}>
        {types.map((type) => <li key={type} onClick={()=>typeClickHandler(type)} className={clsx('places__option', currentType === type && 'places__option--active')} tabIndex={0}>{type}</li>,
        )}
      </ul>
    </form>
  );}

export default Sorting;

