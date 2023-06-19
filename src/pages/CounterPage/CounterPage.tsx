import { styled } from 'styled-components';
import { useCounter } from '../../context/CounterContext/CounterContext';
import { StyledCountBtns } from './CounterPage.styles';

export const Counter = () => {
  const { count, increment, decrement } = useCounter();

  const onDecrement = () => {
    if (count !== 0 || count > 0) {
      decrement();
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <StyledCountBtns background="increment" onClick={() => increment()}>
          +
        </StyledCountBtns>
        <StyledCountBtns onClick={onDecrement}>-</StyledCountBtns>
      </div>
    </>
  );
};
