const initialState = {
  sectionRefs: {},
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
    default:
      return state;
  }
};
