export function numberReducer(state, action) {
    switch (action.type) {
      case "add2ToNumber":
        return { ...state, number: state.number + 2 };
      case "multiplyBy7ToNumber":
        return { ...state, number: state.number * 7 };
      case "divideBy25Number":
        return { ...state, number: state.number / 2 };
      case "intNumber":
        return { ...state, number: parseInt(state.number) };
      case "custonNumber":
        return { ...state, number: state.number + action.payload };
      default:
        return state;
    }
  }

