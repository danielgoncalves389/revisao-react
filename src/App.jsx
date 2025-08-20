
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Contato from './pages/contato/contato';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route path='/pages/contato' element={<Contato />} />
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}


