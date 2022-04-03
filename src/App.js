import About from './pages/AboutPage/About';
import Home from './pages/HomePage/Home';
import Contact from './pages/ContactPage/Contact';
import {Routes,Route} from 'react-router-dom';
import MasterLayout from './layouts/master.layout';

function App() {
  return (
    <div className="App">
        <MasterLayout>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </MasterLayout>
    </div>
  );
}

export default App;
