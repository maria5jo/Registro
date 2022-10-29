import { 
  BrowserRouter, 
  Routes,
   Route 
} from 'react-router-dom';
import Layout from './layout/layout';
import AcercaDe from './pages/AcercaDe';
import Contactos from './pages/contactos';
import Login from './pages/Login';
import Olvideclave from './pages/Olvideclave';
import Registro from './pages/Registro';
import '../src/assets/Css/index.css';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path='acerca-de'element={<AcercaDe/>}/>
        <Route path='contactos'element={<Contactos/>}/>
        <Route path='olvide-clave'element={<Olvideclave/>}/>
        <Route path='registro'element={<Registro/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
