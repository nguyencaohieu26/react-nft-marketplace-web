import About from './pages/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import styled from 'styled-components';
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
