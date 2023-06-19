import { ReactNode } from "react";

export interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
  }
  
 export interface ReducerActions {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
  }
  export interface CounterProviderProps {
    initState: CounterContextType;
    children: ReactNode;
  }
  export const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
  }