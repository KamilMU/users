import React from 'react';
import { UserType } from '../../types';

interface Props {
  user: UserType
}

export function UserDetails({ user }: Props) {
  return (
    <div>
      <span>{user.name}</span>
    </div>
  )
};
