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
      <p className="">ФИО: {user?.name}</p>
      <p className="">город: {user?.address.city}</p>
      <p className="">компания: {user?.company.name}</p>
      <Link
        to={`/user/${user?.id}`}
        className="user-container__link">
        Подробнее
      </Link>
    </div>
  )
};
