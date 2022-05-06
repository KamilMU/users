import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import UserDetails from '../../components/UserDetails';
import { IRootState, ParamTypes } from '../../types';

import './styles.scss';

export function UserDetailsContainer() {
  const { id } = useParams<ParamTypes>();
  const users = useSelector((state: IRootState) => state.users);
  const user = users.find(user => user.id === parseInt(id));
  
  return (
    <div className="profile">
      {user ? (
        <UserDetails
          user={user}
        />
      ) : (
        <Redirect to={'/'} />
      )}
    </div>
  )
};
