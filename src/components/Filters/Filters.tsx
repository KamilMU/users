import React from 'react';
import { FilterType } from '../../types';

import './styles.scss';

interface Props {
  filters: FilterType[]
}

export function Filters({ filters }: Props) {
  return (
    <div className="filters">
      <p>Сортировка: </p>
      {filters.map((filter, index) => (
        <div className="btn-container">
          <button
            className="filter-btn"
            key={index}>
            {filter.name}
          </button>
        </div>
      ))}
    </div>
  )
}
