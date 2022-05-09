import { Field, FormikErrors } from 'formik';
import React from 'react';
import { UserType } from '../../types';

import './styles.scss';

interface Props {
  label: string;
  value: string;
  name: string;
  isEditButtonClicked: boolean;
  error: string;
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label, value, name, changeInputValue, isEditButtonClicked, error }: Props) {
  return (
    <div className="user-field">
      <div>{label}</div>
      <Field
        type="text"
        value={value}
        name={name}
        readOnly={!isEditButtonClicked}
        onChange={changeInputValue}
        style={{
          color: !isEditButtonClicked ? '#D5D5D5' : '#000000',
          borderColor: error ? 'red' : '#D8D8D8'
        }}
      />
      {error && <div className="user-field__error">{error}</div>}
    </div>
  )
};
