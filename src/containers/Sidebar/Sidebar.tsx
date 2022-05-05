import * as React from 'react';
import Filters from '../Filters';

import './styles.scss';

const filters = [
  { name: 'по городу', userFieldName1: 'address', userFieldName2: 'city' },
  { name: 'по компании', userFieldName1: 'company', userFieldName2: 'name'  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Filters filters={filters} />
    </aside>
  )
}
