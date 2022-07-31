import { numberReducer } from "./number";
import { userReducer } from "./user";

export function allreducers(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
  }

