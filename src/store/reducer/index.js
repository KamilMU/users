import { FETCH_USERS } from "../actions";

const initialState = {
  users: [],
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...state.users, ...payload]
      }

    default:
      return state;
  }
}