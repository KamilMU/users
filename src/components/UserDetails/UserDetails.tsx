import React from 'react';
import { UserType } from '../../types';
import Input from '../Input';

import './styles.scss';

interface Props {
  user: UserType
}

export function UserDetails({ user }: Props) {
  return (
    <div className="user-profile">
      <form onSubmit={e => e.preventDefault()}>
        <p>Профиль пользователя</p>
        <Input label="Name" value={user.name} isEditButtonClicked={false} />
      </form>
    </div>
  )
};
