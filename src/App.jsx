import NavBar from "./Components/NavBar";
import Foot from "./Components/Foot";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/pages/Home";
import AcercaDeNosotros from "./Components/pages/AcercaDeNosotros";
import Administracion  from "./Components/pages/Administracion";
function App() {
 
  return (
    <>
    <BrowserRouter>
    <header>
      <NavBar/>
    </header>
    <main>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AcercaDeNosotros" element={<AcercaDeNosotros/>} />
        <Route path="/Administracion" element={<Administracion/>} />
      </Routes>
      
    </main>
    <footer>
      <Foot/>
    </footer>
    </BrowserRouter>
    </>
  )
}

export default App
