import React from 'react'
import './styles.scss';

interface Props {
  label: string;
  changeInputValue: (e: any) => void;
  value: string;
  name: string;
  isEditButtonClicked: boolean;
}

export function Comment({
  label, changeInputValue, value,
  name, isEditButtonClicked }: Props) {
  return (
    <div className="comment">
      <div>{label}</div>
      <textarea
        name={name}
        readOnly={!isEditButtonClicked}
        value={value}
        onChange={changeInputValue}
      />
    </div>
  )
};
