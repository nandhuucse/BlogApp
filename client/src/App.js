
import './App.css';
import Navbar from './Components/NavbarComponent/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateNote from './Components/createnote/CreateNote';
import ViewNote from './Components/viewnote/ViewNote';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<CreateNote/>}/>
        <Route path="/view" element={<ViewNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
