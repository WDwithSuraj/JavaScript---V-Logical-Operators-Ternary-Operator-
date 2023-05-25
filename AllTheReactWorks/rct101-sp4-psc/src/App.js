import './App.css';
import { Container, } from '@chakra-ui/react'
import { Todos } from './components/Todo';
function App() {
  return (
    <Container maxW="container.lg">
      <Todos />
    </Container>
  );
}

export default App;
