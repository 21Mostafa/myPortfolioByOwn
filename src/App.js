import './App.css';
import FirstHeader from './Components/Header/FirstHeader/FirstHeader';
import FirstPage from './Components/FirstPage/FirstPage';
import SecondPage from './Components/SecondPage/SecondPage';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 
import Work from './Components/Work/Work';
import Footer from './Components/Ending/Footer/Footer';
 


function App() {
  return (
    <div className=" ">
  <FirstHeader/>
<BrowserRouter>
      <Routes>
      
        <Route path="/" element={ <FirstPage />} />
        <Route path="/about/contact" element={<SecondPage />} />
        <Route path="/Work" element={<Work/>} />
        <Route path= "/footer" element={<Footer/>} />
       
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
