import { createContext, useReducer } from "react";

export const PasteContext = createContext();
const initialState = {
  pastes: null,
};

export const pasteReducer = (state, action) => {
  switch (action.type) {
    case "SET_PASTES":
      return {
        pastes: action.payload,
      };

    case "CREATE_PASTE":
      return {
        pastes: [action.payload, ...state.pastes],
      };

    default:
      return state;
  }
};

export const PasteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pasteReducer, initialState);
  return (
    <PasteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PasteContext.Provider>
  );
};
