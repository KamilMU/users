import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import UserDetails from '../../components/UserDetails';
import { changeUserInfo } from '../../store/actions';
import { IRootState, ParamTypes } from '../../types';

import './styles.scss';

interface IState {
  isEditButtonClicked: boolean
}

export function UserDetailsContainer<IState>() {
  const [isEditButtonClicked, setIsEditButtonClicked] = React.useState(false);
  const { id } = useParams<ParamTypes>();
  const users = useSelector((state: IRootState) => state.users);
  const user = users.find(user => user.id === parseInt(id));
  console.log(users, 'ussssssssss');

  function setOnEdit() {
    setIsEditButtonClicked(true);
  }

  function handleSubmit() {
    console.log(JSON.stringify(user));
  }

  return (
    <div className="profile">
      {user ? (
        <UserDetails
          user={user}
          setOnEdit={setOnEdit}
          isEditButtonClicked={isEditButtonClicked}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Redirect to={'/'} />
      )}
    </div>
  )
};
