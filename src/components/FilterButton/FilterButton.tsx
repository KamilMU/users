import React from 'react';
import { FilterType } from '../../types';

import './styles.scss';

interface Props {
  filter: FilterType
  sortUsersByField: (userFieldName1: string, userFieldName2: string) => void;
}

export function FilterButton({ filter, sortUsersByField }: Props) {
  return (
    <div className="btn-container">
      <button
        onClick={() => sortUsersByField(filter.userFieldName1, filter.userFieldName2)}
        className="filter-btn">
        {filter.name}
      </button>
    </div>
  )
}
