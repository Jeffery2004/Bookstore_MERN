import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createbook from './Createbook';
import Showbook from './Showbook';
import Editbook from './Editbook';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Createbook' element={<Createbook />}></Route>
        <Route path='/Showbook/:id' element={<Showbook />}></Route>
        <Route path='/Editbook/:id' element={<Editbook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
