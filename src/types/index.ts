export interface Adress {
  city: string;
}

export interface Company {
  name: string;
}

export interface UserType {
  id: number,
  name: string,
  address: Adress,
  company: Company,
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