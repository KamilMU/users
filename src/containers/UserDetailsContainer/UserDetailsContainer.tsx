import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import UserDetails from '../../components/UserDetails';
import { IRootState, ParamTypes, UserType } from '../../types';

import './styles.scss';

interface IState {
  isEditButtonClicked: boolean
}

export function UserDetailsContainer<IState>() {
  const { id } = useParams<ParamTypes>();
  const users = useSelector((state: IRootState) => state.users);
  const user = users.find(user => user.id === parseInt(id));
  const [isEditButtonClicked, setIsEditButtonClicked] = React.useState(false);

  function setOnEdit() {
    setIsEditButtonClicked(true);
  }

  function handleSubmit(values: UserType) {
    setTimeout(() => console.log(JSON.stringify(values)), 0);
  }

  return (
    <div className="profile">
      {user ? (
        <UserDetails
          user={{ 
            ...user,
            comment: ''
          }}
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
