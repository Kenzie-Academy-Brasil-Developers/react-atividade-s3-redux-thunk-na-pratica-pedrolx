import { ADD_COMMENT } from "./actionTypes";

const inicitalState = { name: "Kenzie", comments: [] };

const userReducer = (state = inicitalState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;

    default:
      return state;
  }
};

export default userReducer;
