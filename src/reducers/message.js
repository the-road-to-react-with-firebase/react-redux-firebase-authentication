const INITIAL_STATE = {
  messages: null,
  limit: 5,
};

const applySetMessages = (state, action) => ({
  ...state,
  messages: action.messages,
});

const applySetMessagesLimit = (state, action) => ({
  ...state,
  limit: action.limit,
});

function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MESSAGES_SET': {
      return applySetMessages(state, action);
    }
    case 'MESSAGES_LIMIT_SET': {
      return applySetMessagesLimit(state, action);
    }
    default:
      return state;
  }
}

export default messageReducer;
