import React from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../../types';

import './styles.scss';

interface Props {
  user: UserType
}

export function User({ user }: Props) {
  return (
    <div
      className="user-container">
      <p><span>ФИО:</span> {user?.name}</p>
      <p><span>город:</span> {user?.address.city}</p>
      <p><span>компания:</span> {user?.company.name}</p>
      <Link
        to={`/user/${user?.id}`}
        className="user-container__link">
        Подробнее
      </Link>
    </div>
  )
};
