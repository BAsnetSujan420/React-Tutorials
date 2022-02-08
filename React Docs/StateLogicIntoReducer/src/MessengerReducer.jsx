export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "CHANGED_SELECTION": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "EDITED_MESSAGE": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "SENT_MESSAGE": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
