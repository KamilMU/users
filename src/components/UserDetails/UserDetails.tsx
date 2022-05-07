import React from 'react';
import InputContainer from '../../containers/InputContainer';
import { UserType } from '../../types';

import './styles.scss';

interface Props {
  user: UserType,
  setOnEdit: () => void,
  handleSubmit: (e: any) => void,
  isEditButtonClicked: boolean
}

export function UserDetails({ user, isEditButtonClicked, setOnEdit, handleSubmit }: Props) {
  console.log(isEditButtonClicked, 'isEditButtonClicked');

  return (
    <div className="user-profile">
      <form onSubmit={handleSubmit}>
        <div className="user-profile__row">
          <p>Профиль пользователя</p>
          <button
            className="user-profile__button"
            onClick={setOnEdit}>
            Редактировать
          </button>
        </div>
        <InputContainer
          label="Name"
          value={user.name}
          userFieldName={'name'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="User name"
          value={user.username}
          userFieldName={'username'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="Email"
          value={user.email}
          userFieldName={'email'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="Street"
          value={user.address.street}
          userFieldName={'address'}
          userFieldName2={'street'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="City"
          value={user.address.city}
          userFieldName={'address'}
          userFieldName2={'city'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="Zip code"
          value={user.address.zipcode}
          userFieldName={'address'}
          userFieldName2={'zipcode'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="Phone"
          value={user.phone}
          userFieldName={'phone'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <InputContainer
          label="Website"
          value={user.website}
          userFieldName={'website'}
          isEditButtonClicked={isEditButtonClicked}
        />
        <button
          type="submit"
          className="user-profile__button">
          Отправить
        </button>
      </form>
    </div>
  )
};
