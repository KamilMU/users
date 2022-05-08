import { ErrorMessage, Field } from 'formik';
import React from 'react';

import './styles.scss';

interface Props {
  label: string;
  value: string;
  isEditButtonClicked: boolean;
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userFieldName: string;
  userFieldName2?: string;
}

export function Input({
  label, value,
  userFieldName, userFieldName2,
  changeInputValue, isEditButtonClicked }: Props) {
  return (
    <div className="user-field">
      <div>{label}</div>
      <Field
        type="text"
        value={value}
        name={userFieldName2 ? userFieldName2 : userFieldName}
        readOnly={!isEditButtonClicked}
        onChange={changeInputValue}
        style={{ color: !isEditButtonClicked ? '#D5D5D5' : '#8C8C8C' }}
      />
      <ErrorMessage
        name={userFieldName2 ? userFieldName2 : userFieldName}
        component={'div'}
        className="user-field__error"
      />
    </div>
  )
};
