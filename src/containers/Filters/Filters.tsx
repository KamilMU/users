import React from 'react';
import { useDispatch } from 'react-redux';
import FilterButton from '../../components/FilterButton';
import { filterUsersByField } from '../../store/actions';
import { FilterType } from '../../types';

import './styles.scss';

interface Props {
  filters: FilterType[]
}

export function Filters({ filters }: Props) {
  const dispatch = useDispatch();

  function sortUsersByField(userFieldName1: string, userFieldName2: string) {
    dispatch(filterUsersByField(userFieldName1, userFieldName2));
  }

  return (
    <div className="filters">
      <p>Сортировка: </p>
      {filters.map((filter, index) => (
        <FilterButton
          sortUsersByField={sortUsersByField}
          filter={filter}
          key={index}
        />
      ))}
    </div>
  )
}
