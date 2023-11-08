import './App.css';
import { BrowserRouter } from 'react-router-dom';
import GastosApp from './components/GastosApp';

function App() {
  return (
    <BrowserRouter>
      <GastosApp/>
    </BrowserRouter>

  );
}

export default App;
