import './App.css';
import {
  CounterProvider,
  initState,
} from './context/CounterContext/CounterContext';
import { Counter } from './pages/CounterPage/CounterPage';
import { StyledAppContainer } from './App.styles';

function App() {
  return (
    <StyledAppContainer>
      <CounterProvider initState={initState}>
        <Counter />
      </CounterProvider>
    </StyledAppContainer>
  );
}

export default App;
