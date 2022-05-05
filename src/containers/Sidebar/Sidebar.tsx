import * as React from 'react';
import Filters from '../../components/Filters';

import './styles.scss';

const filters = [
  { name: 'по городу' },
  { name: 'по компании' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Filters filters={filters} />
    </aside>
  )
}
