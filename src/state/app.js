const initialState = {
  sectionRefs: {},
  theme: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SECTION_REFS':
      return {
        ...state,
        sectionRefs: {
          ...state.sectionRefs,
          [payload.id]: payload.ref,
        },
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return state;
  }
};
