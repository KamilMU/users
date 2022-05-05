import React from 'react';
import { FilterType } from '../../types';
import FilterButton from '../FilterButton';

import './styles.scss';

interface Props {
  filters: FilterType[]
}

export function Filters({ filters }: Props) {
  return (
    <div className="filters">
      <p>Сортировка: </p>
      {filters.map((filter, index) => (
        <FilterButton filter={filter} key={index} />
      ))}
    </div>
  )
}
