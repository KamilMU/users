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
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.name && <div className="error">{errors.name}</div>}
              <Input
                label="User name"
                value={values.username}
                name="username"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.username && <div className="error">{errors.username}</div>}
              <Input
                label="Email"
                value={values.email}
                name="email"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.email && <div className="error">{errors.email}</div>}
              <Input
                label="Street"
                value={values?.address?.street}
                name="address.street"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.street && <div className="error">{errors.address?.street}</div>}
              <Input
                label="City"
                value={values?.address?.city}
                name="address.city"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.city && <div className="error">{errors.address?.city}</div>}
              <Input
                label="Zip code"
                value={values?.address?.zipcode}
                name="address.zipcode"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.address?.zipcode && <div className="error">{errors.address?.zipcode}</div>}
              <Input
                label="Phone"
                value={values.phone}
                name="phone"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
              <Input
                label="Website"
                value={values.website}
                name="website"
                changeInputValue={handleChange}
                isEditButtonClicked={isEditButtonClicked}
              />
              {errors.website && <div className="error">{errors.website}</div>}
              <Comment
                label="comment"
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
