import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { fetchUsers } from '../../store/actions';
import { IRootState } from '../../types';
import SkeletonList from '../SkeletonList/SkeletonList';
import UserContainer from '../UserContainer';

import './styles.scss';

export function Users() {
  const [fetching, setFetching] = useState(false);
  const users = useSelector((state: IRootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (fetching) {
      setTimeout(() => setFetching(false), 1000)
    } // eslint-disable-next-line
  }, [fetching])

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
      </div>
      {fetching && <Loader />}
    </>
  )
};
