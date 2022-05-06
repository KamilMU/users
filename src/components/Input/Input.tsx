import React from 'react';

import './styles.scss';

interface Props {
  label: string;
  value: string;
  isEditButtonClicked: boolean;
}

export function Input({ label, value, isEditButtonClicked }: Props) {
  return (
    <div className="user-field">
      <div>{label}</div>
      <input type="text" value={value} readOnly={!isEditButtonClicked} />
    </div>
  )
};
