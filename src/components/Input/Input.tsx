import { Field } from 'formik';
import React from 'react';

import './styles.scss';

interface Props {
  label: string;
  value: string;
  name: string;
  isEditButtonClicked: boolean;
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label, value, name, changeInputValue, isEditButtonClicked }: Props) {
  return (
    <div className="user-field">
      <div>{label}</div>
      <Field
        type="text"
        value={value}
        name={name}
        readOnly={!isEditButtonClicked}
        onChange={changeInputValue}
        style={{ color: !isEditButtonClicked ? '#D5D5D5' : '#8C8C8C' }}
      />
    </div>
  )
};
