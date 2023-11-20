import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Meals></Meals>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
