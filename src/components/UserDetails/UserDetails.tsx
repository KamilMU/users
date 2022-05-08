import { Form, Formik } from 'formik';
import React from 'react';
import InputContainer from '../../containers/InputContainer';
import { UserType } from '../../types';
import { formSchema } from '../../yup';

import './styles.scss';

interface Props {
  user: UserType,
  setOnEdit: () => void,
  handleSubmit: () => void,
  isEditButtonClicked: boolean
}

export function UserDetails({
  user, isEditButtonClicked, setOnEdit, handleSubmit }: Props) {
  return (
    <div className="user-profile">
      <div className="user-profile__row">
        <p>Профиль пользователя</p>
        <button
          type="button"
          className="user-profile__button"
          onClick={setOnEdit}>
          Редактировать
        </button>
      </div>
      <Formik
        enableReinitialize
        initialValues={user}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <div className="form-fields">
              <InputContainer
                label="Name"
                value={values.name}
                userFieldName="name"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.name && <div className="error">{errors.name}</div>}
              <InputContainer
                label="User name"
                value={values.username}
                userFieldName="username"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.username && <div className="error">{errors.username}</div>}
              <InputContainer
                label="Email"
                value={values.email}
                userFieldName="email"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.email && <div className="error">{errors.email}</div>}
              <InputContainer
                label="Street"
                value={values?.address?.street}
                userFieldName="address"
                userFieldName2="street"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.street && <div className="error">{errors.address?.street}</div>}
              <InputContainer
                label="City"
                value={values?.address?.city}
                userFieldName="address"
                userFieldName2="city"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.city && <div className="error">{errors.address?.city}</div>}
              <InputContainer
                label="Zip code"
                value={values?.address?.zipcode}
                userFieldName="address"
                userFieldName2="zipcode"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.zipcode && <div className="error">{errors.address?.zipcode}</div>}
              <InputContainer
                label="Phone"
                value={values.phone}
                userFieldName="phone"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
              <InputContainer
                label="Website"
                value={values.website}
                userFieldName="website"
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.website && <div className="error">{errors.website}</div>}
              <div>
                <div>Comment</div>
                <textarea />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isEditButtonClicked}
              className={!isEditButtonClicked ? "disabled-btn" : "user-profile__button"}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};
