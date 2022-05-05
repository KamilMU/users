import React from 'react';
import Loader from '../../components/Loader';

import User from '../../components/User';
import { UserType } from '../../types';

interface Props {
  user: UserType;
}

export function UserContainer({ user }: Props) {
  return (
    <>
      {user ? <User user={user}/> : <Loader />}
    </>
  )
};
