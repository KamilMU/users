import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { changeUserInfo } from '../../store/actions';

interface Props {
  value: string,
  label: string,
  userFieldName: string,
  userFieldName2?: string,
  isEditButtonClicked: boolean,
}

export function InputContainer({ label, value, isEditButtonClicked, userFieldName, userFieldName2 }: Props) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeUserInfo(userFieldName, userFieldName2, inputValue))
    console.log(inputValue, 'inputValue');
    
  }, [inputValue]);

  useEffect(() => {
    setInputValue(value)
  }, []);

  return <Input
    label={label}
    value={inputValue}
    isEditButtonClicked={isEditButtonClicked}
    changeInputValue={(e) => {
      setInputValue(e.target.value);
    }} />
};
