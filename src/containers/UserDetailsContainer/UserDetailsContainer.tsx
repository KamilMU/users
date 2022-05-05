import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import UserDetails from '../../components/UserDetails';
import { IRootState, ParamTypes } from '../../types';

export function UserDetailsContainer() {
  const { id } = useParams<ParamTypes>();
  const users = useSelector((state: IRootState) => state.users);
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div className={`h-screen flex justify-center 
    items-center w-full text-center`}>
      {user ? (
        <UserDetails
          user={user}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
};
