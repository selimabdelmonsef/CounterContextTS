import { styled } from 'styled-components';
import { useCounter } from '../../context/CounterContext/CounterContext';
import { StyledCountBtns } from './CounterPage.styles';

export const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <StyledCountBtns background="increment" onClick={increment}>
          +
        </StyledCountBtns>
        <StyledCountBtns onClick={decrement}>-</StyledCountBtns>
      </div>
    </>
  );
};
