const initalState = {
  alerts: [],
  fetching: false,
  error: ""
};

// export default is unnamed export
// const is named export

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
