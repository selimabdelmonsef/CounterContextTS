import { createContext, useCallback, useContext, useReducer } from 'react';
import {
  CounterContextType,
  CounterProviderProps,
  REDUCER_ACTION_TYPE,
  ReducerActions,
} from './CounterContext.types';

export const initState: CounterContextType = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};
export const CounterContext = createContext(initState);

const reducer = (state: CounterContextType, action: ReducerActions) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const useCounterContext = (initState: CounterContextType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );
  return { state, increment, decrement };
};

export const CounterProvider = (props: CounterProviderProps) => {
  const { state, increment, decrement } = useCounterContext({
    ...props.initState,
  });

  const contextValue: CounterContextType = {
    count: state.count,
    increment: increment,
    decrement: decrement,
  };
  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
};
export const useCounter = () => useContext(CounterContext);
