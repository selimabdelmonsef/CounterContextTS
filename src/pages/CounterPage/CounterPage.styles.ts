import { styled } from "styled-components";

export const StyledCountBtns = styled.button<{ background?: string }>(
    ({ background }) => ({
      marginInline: '20px',
      background: background === 'increment' ? 'green' : 'red',
      border: 'transparent',
      cursor: 'pointer',
      width: '2rem',
      height: '2rem',
    })
  );