import logo from './logo.svg';
import './App.css';
import Number from './components/Input'
import PlusBtn from './components/PlusBtn'
import MinusBtn from './components/MinusBtn'

function App() {
  
  return (
    <div className="App">
     <MinusBtn></MinusBtn>
     <Number></Number>
     <PlusBtn></PlusBtn>
    </div>
    
  );
}

export default App;
