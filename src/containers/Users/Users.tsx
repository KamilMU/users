import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { fetchUsers } from '../../store/actions';
import { IRootState } from '../../types';
import SkeletonList from '../SkeletonList';
import UserContainer from '../UserContainer';

import './styles.scss';

export function Users() {
  const users = useSelector((state: IRootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="users">
        <p>Список пользователей</p>
        {users.length ? (
          users.map((user, index) => (
            <UserContainer
              user={user}
              key={index}
            />
          ))
        ) : (
          <SkeletonList />
        )}
        <p className="users__users-length">Найдено {users?.length} пользователей</p>
      </div>
    </>
  )
};
