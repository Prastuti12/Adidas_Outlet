import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from './components/hello';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/hello" element={<Hello />} /> 
        </Routes>
      </Router>
    </>

  );
}

export default App;