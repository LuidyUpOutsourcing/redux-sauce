// TYPES
export const Types = {
  ADD: "todos/ADD",
  REMOVE: "todos/REMOVE",
  TOGGLE: "todos/TOGGLE"
};

const INITIAL_STATE = {
  data: []
};

// REDUCERS
export default function documents(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD: {
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: new Date().toString(),
            text: action.payload,
            complete: false
          }
        ]
      };
    }
    case Types.TOGGLE: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    }
    case Types.REMOVE: {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload)
      };
    }
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  addTodo: (payload) => ({
    type: Types.ADD,
    payload
  }),
  toggleTodo: (payload) => ({
    type: Types.TOGGLE,
    payload
  }),
  removeTodo: (payload) => ({
    type: Types.REMOVE,
    payload
  })
};
