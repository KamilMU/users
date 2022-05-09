export interface Adress {
  city: string,
  street: string,
  zipcode: string,
}

export interface Company {
  name: string
}

export interface UserType {
  id: number,
  phone: string,
  website: string,
  username: string,
  email: string,
  name: string,
  address: Adress,
  company: Company,
  comment: string
}

export interface IRootState {
  users: UserType[],
}

export interface ParamTypes {
  id: string,
}

export interface FilterType {
  name: string;
  userFieldName1: string;
  userFieldName2: string;
}