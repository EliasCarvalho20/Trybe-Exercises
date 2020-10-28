const INITIAL_STATE = {
  userLogin: {},
  userClient: [],
};

function cadastroReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INFO':
      const { user } = action;
      return {
        ...state,
        userLogin: user
      }
    case 'ADD_CLI':
      const { client } = action;
      return {
        ...state,
        userClient: state.userClient.concat(client)
      }
    default:
      return state;
  }
}

export default cadastroReducer;
