import { Form, Formik } from 'formik';
import React from 'react';
import Comment from '../Comment';
import { UserType } from '../../types';
import { formSchema } from '../../yup';
import Input from '../Input';

import './styles.scss';

interface Props {
  user: UserType,
  setOnEdit: () => void,
  handleSubmit: (values: UserType) => void,
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
        {({ values, errors, handleChange }) => (
          <Form>
            <div className="form-fields">
              <Input
                label="Name"
                value={values.name}
                name="name"
                error={errors.name}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="User name"
                value={values.username}
                name="username"
                error={errors.username}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="Email"
                value={values.email}
                name="email"
                error={errors.email}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="Street"
                value={values?.address?.street}
                name="address.street"
                error={errors.address?.street}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="City"
                value={values?.address?.city}
                name="address.city"
                error={errors.address?.city}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="Zip code"
                value={values?.address?.zipcode}
                name="address.zipcode"
                error={errors.address?.zipcode}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="Phone"
                value={values.phone}
                name="phone"
                error={errors.phone}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Input
                label="Website"
                value={values.website}
                name="website"
                error={errors.website}
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              <Comment
                label="Comment"
                value={values.comment}
                name="comment"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
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
