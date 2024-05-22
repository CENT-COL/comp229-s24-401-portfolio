import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './main-router.jsx';



function App() {

  return (
    <Router>
      <MainRouter />
    </Router>
  )
}

export default App
