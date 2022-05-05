import React from 'react';
import { FilterType } from '../../types';

import './styles.scss';

interface Props {
  filter: FilterType
}

export function FilterButton({ filter }: Props) {
  return (
    <div className="btn-container">
      <button
        className="filter-btn">
        {filter.name}
      </button>
    </div>
  )
}
